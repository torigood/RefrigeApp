const express = require('express');
const router = express.Router();
const { db } = require('../db');

// 레시피 추가 (POST)
router.post('/', async (req, res) => {
  try {
    const {
      name,
      description,
      imageUrl,
      cookingTime,
      difficulty,
      category,
      isPopular,
      recommendedWeather,
      ingredients,
      rating,
    } = req.body;

    const recipeData = {
      name,
      description,
      imageUrl,
      cookingTime,
      difficulty,
      category,
      isPopular: Boolean(isPopular),
      recommendedWeather,
      ingredients,
      rating: parseFloat(rating),
      createdAt: new Date(),
    };

    const docRef = await db.collection('recipes').add(recipeData);

    res.status(201).json({
      message: 'Recipe added successfully',
      id: docRef.id,
      data: recipeData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 인기 레시피 조회
router.get('/popular', async (req, res) => {
  try {
    const snapshot = await db
      .collection('recipes')
      .where('isPopular', '==', true)
      .limit(6)
      .get();

    const recipes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 간편 요리 조회
router.get('/simple', async (req, res) => {
  try {
    const snapshot = await db
      .collection('recipes')
      .where('category', '==', '간편식')
      .limit(4)
      .get();

    const recipes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 날씨별 추천 레시피
router.get('/weather/:weatherType', async (req, res) => {
  try {
    const { weatherType } = req.params;

    const snapshot = await db
      .collection('recipes')
      .where('recommendedWeather', '==', weatherType)
      .limit(3)
      .get();

    const recipes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
