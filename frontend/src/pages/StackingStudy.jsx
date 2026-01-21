import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function StackingStudy() {
  const [zIndex1, setZIndex1] = useState('1');
  const [zIndex2, setZIndex2] = useState('2');
  const [isolationMode, setIsolationMode] = useState('auto');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Stacking & Layers</h1>
        <p className="page-subtitle">층층이 쌓이는 CSS의 우선순위와 계층 구조 정복</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Z-Index와 쌓임 맥락 (Stacking Context)</h2>
        <div className="section-description">
          <p>
            단순히 <code>z-index</code> 숫자만 높인다고 해결되지 않는 이유, 바로 <strong>쌓임 맥락</strong> 때문입니다.
            모든 요소는 자신만의 계층(Layer)에 갇혀 있으며, 부모의 계층을 뛰어넘을 수 없습니다.
          </p>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'Parent Isolation',
              type: 'radio',
              value: isolationMode,
              onChange: setIsolationMode,
              options: [
                { value: 'auto', label: 'Default (Mixed)' },
                { value: 'isolate', label: 'isolation: isolate' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="stacking-context-deep"
          previewHeight="450px"
          codeHeight="600px"
          initialCss={`.parent {
  position: relative;
  background: #f1f5f9;
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 20px;
  /* isolation 속성은 새로운 쌓임 맥락을 생성하는 가장 깨끗한 방법입니다 */
  isolation: ${isolationMode}; 
}

.child-999 {
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 999;
  background: #ef4444;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.outside-10 {
  position: relative;
  z-index: 10;
  background: #3b82f6;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: -40px;
}

.label { font-weight: bold; margin-bottom: 5px; }`}
          initialHtml={`<div class="parent">
  <div class="label">Parent Section</div>
  <div class="child-999">I am z-index: 999!</div>
  <p>내부 자식은 999라는 큰 숫자를 가졌습니다.</p>
</div>

<div class="outside-10">
  <div class="label">Outside Box (z-index: 10)</div>
  <p>나는 고작 10이지만, 상황에 따라 999 위에 올라갈 수도 있습니다.</p>
</div>

<div class="info-box" style="margin-top: 2rem;">
  <strong>실습 가이드:</strong><br/>
  1. <strong>Default</strong> 상태: 부모가 맥락을 만들지 않아, 내부의 999가 외부의 10보다 위로 올라옵니다.<br/>
  2. <strong>isolation: isolate</strong> 선택: 부모가 새로운 층을 형성합니다. 이제 내부 999는 "부모 층" 안에서만 의미가 있고, 밖의 10보다 아래로 내려갑니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Cascading Layers (@layer)</h2>
        <div className="section-description">
          <p>
            <code>@layer</code>는 명시도(Specificity) 전쟁을 끝내기 위해 등장한 최신 기능입니다.
            코드의 위치나 선택자의 복잡도와 상관없이, <strong>레이어 선언 순서</strong>에 따라 우선순위가 결정됩니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="cascade-layers"
          previewHeight="400px"
          codeHeight="600px"
          initialCss={`/* 1. 레이어 순서 정의 (뒤에 선언된 레이어가 무조건 이김) */
@layer base, theme, custom;

/* 2. 각 레이어에 스타일 작성 */
@layer theme {
  .btn-layer {
    background: #10b981; /* 초록색 */
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
  }
}

@layer base {
  /* 명시도가 훨씬 높지만(ID 사용), base 레이어이므로 theme 레이어에게 집니다! */
  #main-button.btn-layer {
    background: #ef4444; /* 빨간색 */
    padding: 50px; /* 적용 안 됨 */
  }
}

@layer custom {
  /* 가장 마지막 레이어가 최종 승자 */
  .btn-layer:hover {
    background: #3b82f6;
    transform: translateY(-2px);
  }
}

.btn-layer { transition: 0.3s; cursor: pointer; font-weight: bold; }`}
          initialHtml={`<div style="background: white; padding: 3rem; border-radius: 12px; text-align: center;">
  <button id="main-button" class="btn-layer">
    @layer 버튼
  </button>
  
  <p style="margin-top: 1.5rem; color: #64748b; font-size: 0.9rem;">
    ID 선택자(#main-button)로 빨간색을 입혔음에도 불구하고,<br/>
    나중에 선언된 <code>theme</code> 레이어의 초록색이 적용되었습니다!
  </p>
</div>

<div class="info-box">
  이제 <code>!important</code>를 남발할 필요가 없습니다. <br/>
  서드파티 라이브러리 스타일은 <code>base</code>에, 우리 스타일은 <code>theme</code>에 넣으면 깔끔하게 관리됩니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Z-index를 대하는 올바른 자세</h2>
        <div className="section-description">
          <p>숫자를 무작정 키우는 대신, 시스템으로 관리하세요.</p>
          <div className="concept-box" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>✅ <strong>의미 있는 상수 사용</strong>: <code>z-index: 9999</code> 대신 <code>var(--z-modal)</code> 사용</li>
              <li>✅ <strong>낮은 숫자 유지</strong>: 1, 10, 20 정도로도 충분합니다.</li>
              <li>✅ <strong>isolation 사용</strong>: 컴포넌트 단위로 맥락을 끊어주어 외부 영향을 차단하세요.</li>
              <li>✅ <strong>컴포넌트 바깥으로 빼기</strong>: 모달처럼 무조건 위에 있어야 하면 DOM 구조상 <code>body</code> 바로 아래에 위치시키는 것이 가장 안전합니다.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">실전 예제: 모달 & 드롭다운 계층 관리</h2>
        <p className="section-description">
          시스템화된 Z-index와 <code>isolation</code>을 활용하여 복잡한 레이어 간의 충돌을 방지하는 구조입니다.
        </p>

        <LiveCodeEditor
          scopeId="stacking-practical-system"
          previewHeight="500px"
          codeHeight="550px"
          initialCss={`:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 500;
  --z-toast: 1000;
}

.app-shell {
  height: 300px;
  background: white;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.sticky-header {
  height: 60px;
  background: #f8fafc;
  border-bottom: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.dropdown-container {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 150px;
  background: white;
  border: 1px solid #cbd5e1;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 10px;
  z-index: var(--z-dropdown);
  display: block; /* 실습을 위해 항상 노출 */
}

/* 모달 레이어 */
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 80%;
}
`}
          initialHtml={`<div class="app-shell">
  <header class="sticky-header">
    <div class="dropdown-container">
      <strong>Navigation</strong>
      <div class="dropdown-menu">
        Menu Items...
      </div>
    </div>
  </header>
  
  <div style="padding: 20px;">
    Main content area with lots of text...
  </div>

  <div class="modal-overlay">
    <div class="modal-content">
      <h3>Modal Title</h3>
      <p>모달은 헤더(200)와 드롭다운(100)보다 높은 z-index(500)를 가져야 합니다.</p>
    </div>
  </div>
</div>

<div style="margin-top: 1.5rem; color: #1e293b; background: #f1f5f9; padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
  <strong>💡 시스템 관리 전략:</strong><br/>
  • <strong>z-index 상수화</strong>: 숫자를 직접 쓰지 말고 <code>--z-sticky</code>처럼 변수로 관리하세요.<br/>
  • <strong>간격 유지</strong>: 1, 2, 3 대신 100, 200, 500처럼 간격을 두면 나중에 사이에 새로운 레이어를 넣기 좋습니다.
</div>`}
        />
      </section>
    </div>
  );
}

export default StackingStudy;
