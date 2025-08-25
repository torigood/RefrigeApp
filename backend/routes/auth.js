const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { db } = require("../db");

// 회원가입
router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const hashedPw = await bcrypt.hash(password, 10);

    await db.collection("users").doc(username).set({
      username,
      password: hashedPw,
      email,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 로그인
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const userDoc = await db.collection("users").doc(username).get();

    if (!userDoc.exists) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = userDoc.data();

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: username }, "your-secret-key", {
      expiresIn: "24h",
    });

    res.json({
      message: "Login successful",
      token,
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
