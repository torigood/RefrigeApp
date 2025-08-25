const express = require('express');
const cors = require('cors');
const { db } = require('./db');
const authRoutes = require('./routes/auth');
const foodsRoutes = require('./routes/foods');
const recipeRoutes = require('./routes/recipes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// 라우트 설정
app.use('/api/auth', authRoutes);
app.use('/api/foods', foodsRoutes);
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'RefrigeApp Backend Server Running!',
    firebase: 'Connected',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
