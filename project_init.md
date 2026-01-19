# CSS Study 프로젝트 생성 가이드 (A to Z)

이 문서는 빈 폴더에서 시작하여 현재의 CSS Study 프로젝트 구조를 완성하기까지의 과정을 단계별로 설명합니다.

## 1. 사전 준비 (Prerequisites)

- Node.js 설치 확인
  ```bash
  node -v
  npm -v
  ```

## 2. 프로젝트 루트 폴더 생성

```bash
mkdir cssStudy
cd cssStudy
```
이후 VS Code 등으로 해당 폴더를 엽니다.

## 3. Frontend 생성 (Vite + React)

Vite를 사용하여 빠르고 가벼운 React 환경을 구축합니다.

```bash
# cssStudy 루트에서 실행
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

### 추가 라이브러리 설치
라우팅을 위해 `react-router-dom`을 설치합니다.
```bash
npm install react-router-dom
```

## 4. Backend 생성 (Node.js + Express)

백엔드 폴더를 수동으로 생성하고 초기화합니다.

```bash
# cssStudy 루트로 돌아가서
mkdir backend
cd backend
npm init -y
```

### 의존성 라이브러리 설치
- `express`: 웹 서버 프레임워크
- `sqlite3`: 경량 데이터베이스
- `cors`: 프론트엔드(5173포트)와 백엔드(3000포트) 간 통신 허용
- `nodemon`: (개발용) 코드 변경 시 서버 자동 재시작

```bash
npm install express sqlite3 cors
npm install -D nodemon
```

### package.json 설정
`backend/package.json`에 `type: module`과 `scripts`를 추가하여 ES Module(import/export)을 사용하고 쉽게 실행하도록 합니다.

```json
{
  "type": "module",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  },
  ...
}
```

## 5. 프로젝트 구조 설계

일반적인 모던 웹 앱 구조로 파일을 배치합니다.

```
cssStudy/
├── frontend/
│   ├── src/
│   │   ├── components/  # 재사용 가능한 UI (LiveCodeEditor 등)
│   │   ├── pages/       # 각 라우트별 페이지 (FlexboxStudy 등)
│   │   ├── styles/      # CSS 파일
│   │   ├── App.jsx      # 라우팅 설정
│   │   └── main.jsx     # 진입점
├── backend/
│   ├── src/
│   │   ├── db/          # DB 연결 모듈
│   │   └── server.js    # 서버 메인 파일
│   ├── scripts/         # DB 초기화 스크립트 (initDb.js)
│   └── database/        # .db 파일 저장소
└── .gitignore           # node_modules 등 제외 설정
```

## 6. 데이터베이스 구성 (SQLite)

### 초기화 스크립트 작성 (`backend/scripts/initDb.js`)
SQL 쿼리를 작성하여 `menus` 테이블을 만들고 초기 데이터를 넣는 스크립트를 작성합니다.
실행: `node scripts/initDb.js`

## 7. 핵심 기능 구현 단계

### A. 백엔드 API (server.js)
`/api/menus` 엔드포인트를 만들어 DB에서 메뉴 목록을 조회해 JSON으로 반환하도록 구현합니다.

### B. 프론트엔드 라우팅 (App.jsx)
`react-router-dom`의 `<Routes>`와 `<Route>`를 사용하여 URL별(예: `/flexbox`)로 다른 컴포넌트를 보여주도록 설정합니다.

### C. Live Code Editor 구현
사용자가 코드를 직접 수정해볼 수 있는 핵심 기능입니다.
1. `textarea`로 코드 입력을 받음 (`state`로 관리)
2. `<style>` 태그에 CSS textContent를 주입하거나, 인라인 스타일로 Preview 영역에 적용
3. `useEffect`를 사용해 상위 컴포넌트(컨트롤러)의 변경사항을 에디터에 반영

## 8. 실행 및 테스트

두 개의 터미널을 열어 각각 실행합니다.

1. **Terminal 1**: `cd backend && npm run dev`
2. **Terminal 2**: `cd frontend && npm run dev`

이제 브라우저에서 화면을 보며 CSS 학습을 진행할 수 있습니다!
