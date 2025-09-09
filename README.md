# RefrigeApp
A mobile application to recommend recipes based on refrigerator inventory, built with React Native and Firebase (Work in Progress).

## Overview
Started in 2019–2020 and resumed in July 2025, RefrigeApp aims to simplify meal planning by suggesting recipes based on available ingredients, with plans for AI-powered image analysis to automate inventory tracking.

## Features
- **Current**:
  - Tab-based navigation for user-friendly interface
  - Real-time data storage and retrieval using Firebase Firestore and Express.js
  - API communication via axios, tested with Postman
- **Planned**:
  - Recipe recommendations based on difficulty, time, and user ratings
  - AI-powered image analysis for ingredient detection

## Tech Stack
- **Frontend**: React Native (Expo), JavaScript, axios
- **Backend**: Express.js (Node.js, Port: 8080), Firebase Firestore
- **Tools**: Metro Bundler, Postman, Git

## API Endpoints
- **Authentication**:
  - `POST /api/auth/register`: User registration
  - `POST /api/auth/login`: User login
- **Food Management**:
  - `POST /api/foods`: Add food item
  - `GET /api/foods/:userId`: Retrieve user's food inventory
  - `DELETE /api/foods/:id`: Delete food item

## Setup
1. Clone the repository: `git clone https://github.com/torigood/refrigeapp`
2. Install dependencies: `npm install`
3. Set up Firebase configuration (see `.env.example`)
4. Run backend: `cd backend && node server.js`
5. Run frontend: `npx expo start`

## Troubleshooting
- **Expo issues**: Run `npm install --force` or `npx expo install --fix` to resolve dependency conflicts.
- **Metro issues**: Update Metro with `npm install metro@latest @expo/metro-config@latest`.
- **More details**: Check [Expo documentation](https://docs.expo.dev).

## Screenshots
[Insert screenshots: Tab navigation UI, Postman API test results, Firebase Firestore data]

## Future Plans
- Implement recipe recommendation system with filters (difficulty, time, ratings).
- Integrate AI for image-based ingredient detection.
- Enhance UI with inventory tracking and user feedback features.

## Contact
- GitHub: https://github.com/torigood
- Email: kwansik.kim2004@gmail.com
