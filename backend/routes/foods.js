const express = require("express");
const router = express.Router();
const { db } = require("../db");

// 식재료 추가
router.post("/", async (req, res) => {
  try {
    const { name, category, expiryDate, quantity, userId } = req.body;

    const foodData = {
      name,
      category,
      expiryDate,
      quantity: parseInt(quantity),
      userId,
      createdAt: new Date(),
    };

    const docRef = await db.collection("foods").add(foodData);

    res.status(201).json({
      message: "Food added successfully",
      id: docRef.id,
      data: foodData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 식재료 목록 조회
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const snapshot = await db
      .collection("foods")
      .where("userId", "==", userId)
      .get();

    const foods = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 식재료 수정 (이 부분이 추가되어야 함)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, expiryDate, quantity } = req.body;

    const updateData = {
      name,
      category,
      expiryDate,
      quantity: parseInt(quantity),
      updatedAt: new Date(),
    };

    await db.collection("foods").doc(id).update(updateData);

    res.json({
      message: "Food updated successfully",
      id,
      data: updateData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 식재료 삭제
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await db.collection("foods").doc(id).delete();

    res.json({ message: "Food deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
