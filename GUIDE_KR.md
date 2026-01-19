# CSS Study 사용자 가이드

이 문서는 CSS Study 애플리케이션의 상세 사용법을 설명합니다.

## 🎯 학습 목표
CSS의 핵심 레이아웃 및 스타일링 개념을 "직접 만져보며" 이해하는 것입니다.

## 🖥️ 주요 인터페이스

### 1. 네비게이션 (Navigation)
왼쪽 사이드바 메뉴를 통해 학습 주제를 선택할 수 있습니다.
- **Home**: 메인 소개 페이지
- **CSS Basics**: Flexbox, Grid, Animation, Responsive, Position 등의 핵심 모듈
- **Advanced Topics**: CSS 변수(Custom Properties), 아키텍처(BEM 등)

### 2. Live Code Editor (라이브 코드 에디터)
각 학습 페이지의 핵심 컴포넌트입니다.

- **CSS 탭**: 스타일 코드를 직접 수정할 수 있습니다.
- **HTML 탭**: 예제의 HTML 구조(태그, 클래스)를 수정할 수 있습니다. (새 기능!)
- **Apply 버튼**: 코드를 수정한 후 적용하려면 클릭합니다. (수정 사항이 있을 때만 활성화)
- **Reset 버튼**: 초기 상태로 되돌립니다.
- **옵션 컨트롤 (Interactive Controls)**: 에디터 위의 버튼/셀렉트를 조작하면, 해당 CSS 속성이 에디터 코드에 자동으로 반영되고 결과가 업데이트됩니다.

## 📚 학습 모듈 상세

### Flexbox Study
- `justify-content`: 주축 정렬 (flex-start, center, space-between 등)
- `align-items`: 교차축 정렬 (stretch, center 등)
- `flex-direction`: 배치 방향 (row vs column)

### Grid Study
- `grid-template-columns`: 열(Column) 정의 (repeat, fr 단위 등)
- `gap`: 그리드 셀 간격
- `Alignment`: justify-items, align-items 정렬
- `Grid Areas`: 이름(Area Name)을 이용한 레이아웃 배치 예제

### Animation Study
- `transition`: duration(지속시간)과 timing-function(속도곡선) 실험
- `keyframes`: @keyframes를 이용한 바운스, 회전(Rotate), 페이드(Fade) 효과

### Position Study (New!)
- **Parent-Child**: `relative` 부모와 `absolute` 자식의 위치 관계 학습 (가장 중요한 패턴)
- **Fixed**: 스크롤해도 화면에 고정되는 요소 만들기

### Advanced Topics
- **Custom Properties**: CSS 변수(`--var-name`) 사용법 및 스코프
- **Architecture**: 대규모 프로젝트를 위한 CSS 방법론 소개

## ❓ 문제 해결 (Troubleshooting)

- **메뉴가 보이지 않아요**: 
  - 백엔드 서버가 켜져 있는지 확인하세요 (`npm run dev` in backend).
  - 데이터베이스 스크립트(`initDb.js`)를 실행했는지 확인하세요.
- **코드를 수정했는데 반영이 안 돼요**: 
  - `Apply` 버튼을 클릭했는지 확인하세요.
  - 문법 오류가 없는지 확인하세요.

---
CSS Study와 함께 즐거운 스타일링 여행 되세요! 🎨
