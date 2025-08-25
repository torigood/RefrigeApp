# RefrigeApp

작업 시 backend node server.js 용 cmd refrigeApp npx expo strat 용 cmd 하나씩 띄우고 시작하기

# 필수 설치 사항들

1. npm install -g react-native-cli

2. npm install -g react-native

3. npm install -g @expo/cli

4. npm install express

5. npm install body-parser

6. npm install axios (API 프론트엔드용)

expo 실행이 안될 시 해결방법들

# 1: 의존성 재설치 (권장)

cmd# 1. node_modules와 lock 파일 삭제
rmdir /s /q node_modules
del package-lock.json
del yarn.lock

# 2. npm 캐시 클리어

npm cache clean --force

# 3. 의존성 재설치

npm install

해결 방법 2: Metro 버전 업데이트
cmd# Metro 관련 패키지 업데이트
npm install metro@latest @expo/metro-config@latest

# Expo CLI 업데이트

npm install -g @expo/cli@latest
해결 방법 3: package.json 확인 및 수정
package.json을 열어서 다음을 확인하세요:
json{
"dependencies": {
"expo": "~49.0.0",
"react": "18.2.0",
"react-native": "0.72.4"
},
"devDependencies": {
"@babel/core": "^7.20.0"
}
}
버전이 다르다면 업데이트:
npx expo install --fix

# 서버 실행시

cd backend -> node server.js

# 디비 뭐 테스트?

cd backend -> node db.js

# EXPO 실행법

npx expo start

# POSTMAN API

인증 관련:

POST /api/auth/register - 회원가입
POST /api/auth/login - 로그인

식재료 관리:

POST /api/foods - 식재료 추가
GET /api/foods/:userId - 사용자별 식재료 조회
DELETE /api/foods/:id - 식재료 삭제
