import LiveCodeEditor from '../components/LiveCodeEditor';

function PerformanceStudy() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Performance & Rendering</h1>
        <p className="page-subtitle">Optimizing CSS for smooth 60FPS experiences</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">브라우저 렌더링 파이프라인</h2>
        <div className="section-description">
          <p>
            CSS 속성이 변경될 때 브라우저는 세 가지 단계를 거칩니다. 각 단계가 무거울수록 성능이 저하됩니다:
          </p>
          <ol style={{ marginTop: '0.5rem', lineHeight: '1.8' }}>
            <li><strong>Layout (Reflow)</strong>: 요소의 크기나 위치 계산 (가장 무거움!)</li>
            <li><strong>Paint (Repaint)</strong>: 색상, 그림자 등 픽셀을 채우는 과정</li>
            <li><strong>Composite</strong>: 레이어를 합쳐 화면에 표시 (가장 빠름 - GPU 가속)</li>
          </ol>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Layout vs Composite 애니메이션</h2>
        <p className="section-description">
          <code>left/top</code> 대신 <code>transform</code>을 사용해야 하는 이유를 확인하세요.
        </p>

        <LiveCodeEditor
          scopeId="rendering-pipeline"
          height="450px"
          initialCss={`/* Layout 유발 속성 (비권장 애니메이션) */
.box-layout {
  position: relative;
  left: 0;
  animation: move-layout 2s infinite alternate;
  background: #ef4444;
}

@keyframes move-layout {
  from { left: 0; }
  to { left: 100px; }
}

/* Composite 만 사용 (권장 애니메이션) */
.box-composite {
  transform: translateX(0);
  animation: move-composite 2s infinite alternate;
  background: #10b981;
}

@keyframes move-composite {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

.box {
  width: 80px;
  height: 80px;
  margin: 1rem 0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <div class="box box-layout">Layout</div>
  <div class="box box-composite">Composite</div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Layout</strong>: Left 값 변경 시 브라우저는 전체 레이아웃을 다시 계산합니다.<br/>
  <strong>Composite</strong>: Transform은 레이아웃 계산 없이 GPU가 위치만 옮깁니다. (부드러움)
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">content-visibility (렌더링 스킵)</h2>
        <p className="section-description">
          화면 밖에 있는 무거운 요소의 렌더링을 완전히 생략하여 초기 로딩 속도를 혁명적으로 개선합니다.
        </p>

        <LiveCodeEditor
          scopeId="content-visibility"
          height="400px"
          initialCss={`.heavy-item {
  /* 화면 밖에 있을 때 렌더링 비용을 거의 0으로 만듬 */
  content-visibility: auto;
  contain-intrinsic-size: 0 500px; /* 렌더링 전 Placeholder 크기 */
  
  margin-bottom: 2rem;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.item-header {
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.item-body {
  padding: 1.5rem;
  color: #1e293b;
}`}
          initialHtml={`<div style="max-height: 400px; overflow-y: auto; background: #f8fafc; padding: 1rem; border-radius: 8px;">
  <div class="heavy-item">
    <div class="item-header"></div>
    <div class="item-body">
      <h3>Item 1</h3>
      <p>Scroll down to see more heavy items...</p>
    </div>
  </div>
  
  <div class="heavy-item">
    <div class="item-header"></div>
    <div class="item-body">
      <h3>Item 100 (Deeply Nested)</h3>
      <p>This item is rendered only when needed.</p>
    </div>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>현대 웹의 필수 기술:</strong> 수천 개의 상품 목록이 있는 쇼핑몰 등에서 
  <code>content-visibility: auto</code>는 브라우저 부하를 획기적으로 줄여줍니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">will-change (GPU 힌트)</h2>
        <p className="section-description">
          애니메이션이 일어날 요소를 브라우저에게 미리 알려 최적화합니다. (주의: 남용 금지!)
        </p>

        <LiveCodeEditor
          scopeId="will-change"
          height="350px"
          initialCss={`.accelerated-box {
  width: 100px;
  height: 100px;
  background: #3b82f6;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.5s ease;
  
  /* 브라우저가 미리 GPU 메모리에 레이어를 준비함 */
  will-change: transform;
}

.accelerated-box:hover {
  transform: scale(1.5) rotate(45deg);
}`}
          initialHtml={`<div style="background: white; padding: 3rem; border-radius: 8px; display: flex; justify-content: center;">
  <div class="accelerated-box"></div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>골든 룰 (Gold Rule):</strong><br/>
  1. 평소에는 쓰지 마세요. 브라우저는 이미 똑똑합니다.<br/>
  2. 성능 문제가 확실히 발생할 때 최후의 수단으로 쓰세요.<br/>
  3. 애니메이션이 끝나면 제거해주는 것이 좋습니다.
</div>`}
        />
      </section>
    </div>
  );
}

export default PerformanceStudy;
