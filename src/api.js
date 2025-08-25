import axios from 'axios';

// 기본 API 설정 (프론트 엔드를 위한 API URL)
const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인증 관련 API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// 식재료 관련 API
export const foodsAPI = {
  getFoods: (userId) => api.get(`/foods/${userId}`),
  addFood: (foodData) => api.post('/foods', foodData),
  updateFood: (id, foodData) => api.put(`/foods/${id}`, foodData),
  deleteFood: (id) => api.delete(`/foods/${id}`),
};

// 레시피 관련 API
export const recipesAPI = {
  getPopularRecipes: () => api.get('/recipes/popular'),
  getSimpleRecipes: () => api.get('/recipes/simple'),
  getWeatherRecipes: (weatherType) =>
    api.get(`/recipes/weather/${weatherType}`),
};

export default api;
