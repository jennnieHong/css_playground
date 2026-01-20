import LiveCodeEditor from '../components/LiveCodeEditor';

function AnimationsStudy() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">CSS Animations Study</h1>
        <p className="page-subtitle">@keyframes와 animation으로 생동감 있는 UI 만들기</p>
      </div>
      <section className="study-section">
        <h2 className="section-title">CSS 애니메이션이란?</h2>
        <div className="section-description">
          <p>
            CSS 애니메이션은 요소의 스타일을 시간에 따라 변화시켜 움직임을 만듭니다.
          </p>
          <p className="highlight-box">
            💡 <strong>Transition vs Animation</strong><br />
            • <code>transition</code>: A ↔ B 자동 왕복 (호버 해제 시에도 부드럽게 복귀)<br />
            • <code>animation</code>: A → B 복잡한 단계 (끝나면 원래대로 스냅되거나 멈춤)
          </p>
        </div>

        <LiveCodeEditor
          scopeId="transition-vs-animation"
          previewHeight="350px"
          codeHeight="550px"
          initialCss={`.compare-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.box {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
}

/* 1. Transition: 상태 변화를 부드럽게 왕복 */
.transition-box {
  background: #667eea;
  transition: transform 0.4s ease;
}
.transition-box:hover {
  transform: rotate(45deg) scale(1.1);
}

/* 2. Animation: 정의된 흐름대로 실행 */
@keyframes rotateAnim {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(45deg) scale(1.1); }
}
.animation-box {
  background: #f5576c;
}
.animation-box:hover {
  animation: rotateAnim 0.4s ease forwards;
}

.label {
  text-align: center;
  margin-top: 10px;
  font-size: 0.8rem;
  color: #64748b;
}`}
          initialHtml={`<div class="compare-container">
  <div>
    <div class="box transition-box">Transition</div>
    <div class="label">부드러운 왕복</div>
  </div>
  <div>
    <div class="box animation-box">Animation</div>
    <div class="label">딱딱한 복귀</div>
  </div>
</div>

<div class="info-box">
  <strong>직접 비교해보세요:</strong><br/>
  1. 두 박스에 마우스를 올렸다 <strong>순식간에 떼어보세요.</strong><br/>
  2. <strong>Transition(파랑)</strong>: 돌아올 때도 부드럽게 제자리로 수렴합니다.<br/>
  3. <strong>Animation(빨강)</strong>: 마우스를 떼는 순간 동작이 중단되고 원래대로 "탁!" 하고 스냅됩니다.<br/>
  <br/>
  💡 그래서 hover 효과는 대개 <strong>Transition</strong>을 선호합니다!
</div>`}
        />
      </section >

      <section className="study-section">
        <h2 className="section-title">애니메이션은 언제 작동할까?</h2>
        <div className="section-description">
          <p>
            CSS 애니메이션이 실제로 **실행되는 시점**을 이해하는 것이 중요합니다.
          </p>
          <ul className="description-list">
            <li>
              <strong>1. 페이지 로드 시 (자동 실행)</strong>
              <br />
              <span className="example-text">
                → 요소에 `animation` 속성이 있으면 DOM에 추가될 때 즉시 실행<br />
                → 예: 페이지 열자마자 슬라이드 인, 스피너 회전
              </span>
            </li>
            <li>
              <strong>2. 클래스 추가/제거 시 (JavaScript 제어)</strong>
              <br />
              <span className="example-text">
                → `element.classList.add('animate')`로 클래스 추가 시 실행<br />
                → 예: 버튼 클릭 시 모달 페이드 인
              </span>
            </li>
            <li>
              <strong>3. :hover, :focus 등 상태 변화 시</strong>
              <br />
              <span className="example-text">
                → 마우스 올리거나 포커스 받을 때 실행<br />
                → 예: 버튼 호버 시 shake, pulse 효과
              </span>
            </li>
            <li>
              <strong>4. 미디어 쿼리 조건 만족 시</strong>
              <br />
              <span className="example-text">
                → 화면 크기 변화 등으로 조건 만족 시 실행<br />
                → 예: 모바일에서만 특정 애니메이션 실행
              </span>
            </li>
          </ul>
          <p className="highlight-box">
            💡 <strong>핵심</strong>: `animation` 속성이 요소에 **적용되는 순간** 애니메이션이 시작됩니다!<br />
            • CSS에 직접 작성 → 페이지 로드 시 즉시<br />
            • :hover에 작성 → 마우스 올릴 때<br />
            • JS로 클래스 추가 → 클래스 추가 시점
          </p>
        </div>

        <LiveCodeEditor
          scopeId="animation-triggers"
          previewHeight="500px"
          codeHeight="650px"
          initialCss={`/* 1. 페이지 로드 시 자동 실행 */
@keyframes autoSlide {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.auto-box {
  width: 150px;
  height: 80px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  
  /* 페이지 로드 시 즉시 실행! */
  animation: autoSlide 1s ease-out;
}

/* 2. 호버 시 실행 - transition 사용 */
.hover-box {
  width: 150px;
  height: 80px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  /* transition으로 부드러운 변화 */
  transition: transform 0.3s ease-in-out;
}

.hover-box:hover {
  /* 마우스 올릴 때 위로 이동! */
  transform: translateY(-10px);
}

.container {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}`}
          initialHtml={`<div class="container">
  <div class="auto-box">
    자동 실행<br/>(로드 시)
  </div>
  
  <div class="hover-box">
    마우스 올려보세요!<br/>(호버 시)
  </div>
</div>

<div class="info-box">
  <strong>실행 시점 확인:</strong><br/>
  • 위 박스: 페이지 열자마자 슬라이드 인 (자동)<br/>
  • 아래 박스: 마우스 올릴 때만 바운스 (호버)<br/><br/>
  <strong>Apply 버튼을 눌러 다시 실행해보세요!</strong>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">@keyframes: 애니메이션 정의하기</h2>
        <div className="section-description">
          <p>
            <code>@keyframes</code>는 애니메이션의 각 단계를 정의합니다.
          </p>
          <ul className="description-list">
            <li>
              <strong>0% (from)</strong>: 시작 상태
            </li>
            <li>
              <strong>100% (to)</strong>: 끝 상태
            </li>
            <li>
              <strong>중간 단계</strong>: 50%, 75% 등 원하는 시점 추가 가능
            </li>
          </ul>
        </div>

        <LiveCodeEditor
          scopeId="keyframes-basic"
          previewHeight="300px"
          codeHeight="400px"
          initialCss={`/* @keyframes로 애니메이션 정의 */
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.box {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  
  /* 애니메이션 적용 */
  animation: slideIn 1s ease-out;
}`}
          initialHtml={`<div class="box">
  슬라이드 인!
</div>

<div class="info-box">
  <strong>작동 방식:</strong><br/>
  1. @keyframes로 "slideIn" 애니메이션 정의<br/>
  2. animation 속성으로 적용<br/>
  3. 1초 동안 왼쪽에서 슬라이드 인
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">스피너 만들기 (실전 예제)</h2>
        <div className="section-description">
          <p>
            회전하는 로딩 스피너를 만들어봅시다. 실제 네비게이션에서 사용하는 것과 동일합니다!
          </p>
          <p className="highlight-box">
            💡 <strong>핵심</strong>: <code>animation: spin 0.8s linear infinite</code><br />
            • 0.8초 동안 회전<br />
            • linear: 일정한 속도<br />
            • infinite: 무한 반복
          </p>
        </div>

        <LiveCodeEditor
          scopeId="spinner-animation"
          previewHeight="350px"
          codeHeight="500px"
          initialCss={`/* 회전 애니메이션 정의 */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.spinner {
  border: 4px solid rgba(102, 126, 234, 0.2);
  border-top: 4px solid #667eea;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
}

.loading-text {
  color: #64748b;
  font-weight: 500;
}`}
          initialHtml={`<div class="spinner-container">
  <div class="spinner"></div>
  <div class="loading-text">Loading...</div>
</div>

<div class="info-box">
  <strong>스피너 만드는 법:</strong><br/>
  1. 원형 요소 (border-radius: 50%)<br/>
  2. 상단만 색상 다르게<br/>
  3. rotate(360deg) 애니메이션<br/>
  4. infinite로 무한 반복
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">animation 속성들</h2>
        <div className="section-description">
          <p>
            <code>animation</code>은 여러 속성을 축약한 것입니다.
          </p>
          <ul className="description-list">
            <li>
              <strong>animation-name</strong>: @keyframes 이름
            </li>
            <li>
              <strong>animation-duration</strong>: 지속 시간 (1s, 500ms)
            </li>
            <li>
              <strong>animation-timing-function</strong>: 속도 곡선 (linear, ease, ease-in-out)
            </li>
            <li>
              <strong>animation-delay</strong>: 시작 지연 시간
            </li>
            <li>
              <strong>animation-iteration-count</strong>: 반복 횟수 (1, 3, infinite)
            </li>
            <li>
              <strong>animation-direction</strong>: 방향 (normal, reverse, alternate)
            </li>
          </ul>
        </div>

        <LiveCodeEditor
          scopeId="animation-properties"
          previewHeight="400px"
          codeHeight="550px"
          initialCss={`@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
}

.bounce-box {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  border-radius: 12px;
  margin: 2rem;
  
  /* 축약형 */
  animation: bounce 1s ease-in-out infinite;
  
  /* 풀어쓰면: */
  /* animation-name: bounce; */
  /* animation-duration: 1s; */
  /* animation-timing-function: ease-in-out; */
  /* animation-iteration-count: infinite; */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: #f8f9fa;
  border-radius: 12px;
}`}
          initialHtml={`<div class="container">
  <div class="bounce-box"></div>
</div>

<div class="info-box">
  <strong>bounce 애니메이션:</strong><br/>
  • 0%: 원래 위치<br/>
  • 50%: 30px 위로<br/>
  • 100%: 다시 원래 위치<br/>
  • infinite로 계속 반복
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">페이드 인/아웃</h2>
        <div className="section-description">
          <p>
            투명도를 조절하여 부드럽게 나타나고 사라지는 효과를 만듭니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="fade-animation"
          previewHeight="400px"
          codeHeight="550px"
          initialCss={`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-container {
  display: flex;
  gap: 1rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  justify-content: center;
}

.fade-in-box {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  animation: fadeIn 2s ease-in;
}

.fade-out-box {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #fa709a, #fee140);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  animation: fadeOut 2s ease-out forwards;
}`}
          initialHtml={`<div class="fade-container">
  <div class="fade-in-box">Fade In</div>
  <div class="fade-out-box">Fade Out</div>
</div>

<div class="info-box">
  <strong>페이드 효과:</strong><br/>
  • fadeIn: opacity 0 → 1<br/>
  • fadeOut: opacity 1 → 0<br/>
  • forwards: 애니메이션 끝 상태 유지
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">호버 애니메이션</h2>
        <div className="section-description">
          <p>
            마우스를 올렸을 때 애니메이션을 실행할 수 있습니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="hover-animation"
          previewHeight="400px"
          codeHeight="600px"
          initialCss={`@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.hover-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.shake-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.shake-btn:hover {
  animation: shake 0.5s ease-in-out;
}

.pulse-btn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.pulse-btn:hover {
  animation: pulse 0.6s ease-in-out infinite;
}`}
          initialHtml={`<div class="hover-container">
  <button class="shake-btn">Hover me (Shake)</button>
  <button class="pulse-btn">Hover me (Pulse)</button>
</div>

<div class="info-box">
  <strong>호버 애니메이션:</strong><br/>
  • :hover 상태에서 animation 실행<br/>
  • shake: 좌우로 흔들기<br/>
  • pulse: 크기 변화 (무한 반복)
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전 예제: 카드 플립</h2>
        <div className="section-description">
          <p>
            3D 회전 효과로 카드를 뒤집는 애니메이션입니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="card-flip-pro"
          previewHeight="450px"
          codeHeight="700px"
          initialCss={`.card-container {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  padding: 3rem;
  background: #f1f5f9;
  border-radius: 12px;
}

/* 카드 전체 */
.flip-card {
  width: 200px;
  height: 280px;
  cursor: pointer;
}

/* 회전하는 내부 판 */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d; /* 자식 요소들의 3D 위치 보존 */
}

/* 마우스 올리면 판 전체 회전 */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* 앞면과 뒷면 공통 스타일 */
.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari 지원 */
  backface-visibility: hidden; /* 뒤집혔을 때 안보이게 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 앞면 */
.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 뒷면 (미리 뒤집어둠) */
.card-back {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  transform: rotateY(180deg); /* 뒤집힌 상태로 대기 */
}`}
          initialHtml={`<div class="card-container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <!-- 앞면 -->
      <div class="card-front">
        카드 앞면 🃏
      </div>
      <!-- 뒷면 -->
      <div class="card-back">
        짜잔! 뒷면 🎁
      </div>
    </div>
  </div>
</div>

<div class="info-box">
  <strong>양면 카드 구현 전략:</strong><br/>
  1. <strong>Backface-visibility</strong>를 양면에 모두 적용<br/>
  2. <strong>뒷면(Back)</strong>은 미리 180도 뒤집어 두기<br/>
  3. <strong>Inner</strong> 판을 한꺼번에 뒤집어버리기!
</div>`}
        />
      </section>
    </div >
  );
}

export default AnimationsStudy;
