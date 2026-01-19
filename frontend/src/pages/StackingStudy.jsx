import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function StackingStudy() {
  const [zIndex1, setZIndex1] = useState('1');
  const [zIndex2, setZIndex2] = useState('2');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Stacking & Layers</h1>
        <p className="page-subtitle">Understanding z-index and stacking contexts</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Z-Index란?</h2>
        <div className="section-description">
          <p>
            <code>z-index</code>는 요소의 <strong>쌓임 순서</strong>를 제어합니다.
            하지만 항상 예상대로 작동하지 않는데, 이는 <strong>Stacking Context</strong> 때문입니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li>숫자가 클수록 위로 올라옴</li>
            <li>음수 값도 가능 (뒤로 보냄)</li>
            <li><strong>position이 static이 아닐 때만</strong> 작동</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Z-Index 기본 동작</h2>
        <p className="section-description">
          position과 함께 사용하여 요소의 쌓임 순서를 제어합니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Box 1 z-index',
              type: 'radio',
              value: zIndex1,
              onChange: setZIndex1,
              options: ['1', '5', '10', '999']
            },
            {
              name: 'Box 2 z-index',
              type: 'radio',
              value: zIndex2,
              onChange: setZIndex2,
              options: ['1', '2', '5', '10']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="z-index-basic"
          height="350px"
          initialCss={`.box {
  position: relative;
  width: 200px;
  height: 150px;
  padding: 1rem;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
}

.box1 {
  background: #3b82f6;
  z-index: ${zIndex1};
  margin-left: 0;
}

.box2 {
  background: #ef4444;
  z-index: ${zIndex2};
  margin-left: 100px;
  margin-top: -100px;
}`}
          currentCss={`.box {
  position: relative;
  width: 200px;
  height: 150px;
  padding: 1rem;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
}

.box1 {
  background: #3b82f6;
  z-index: ${zIndex1};
  margin-left: 0;
}

.box2 {
  background: #ef4444;
  z-index: ${zIndex2};
  margin-left: 100px;
  margin-top: -100px;
}`}
          initialHtml={`<div>
  <div class="box box1">Box 1 (z: ${zIndex1})</div>
  <div class="box box2">Box 2 (z: ${zIndex2})</div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  z-index가 높은 박스가 위로 올라옵니다!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Stacking Context (쌓임 맥락)</h2>
        <div className="section-description">
          <p>
            <strong>Stacking Context</strong>는 z-index의 "범위"를 만듭니다.
            새로운 Stacking Context가 생성되면, 내부의 z-index는 외부와 독립적입니다.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <strong>Stacking Context를 만드는 조건:</strong>
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li>position: fixed/sticky</li>
            <li>position: absolute/relative + z-index (auto 아님)</li>
            <li>opacity &lt; 1</li>
            <li>transform, filter 등</li>
          </ul>
        </div>

        <LiveCodeEditor
          scopeId="stacking-context"
          height="450px"
          initialCss={`/* 부모 A: 새로운 Stacking Context 생성 */
.parent-a {
  position: relative;
  z-index: 1;
  background: #dbeafe;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.parent-a .child {
  position: relative;
  z-index: 9999; /* 아무리 높아도 부모 A 안에 갇힘! */
  background: #3b82f6;
  color: #ffffff;
  padding: 1rem;
  margin-top: -50px;
  border-radius: 6px;
  font-weight: 600;
}

/* 부모 B: z-index 2 (부모 A보다 위) */
.parent-b {
  position: relative;
  z-index: 2;
  background: #fecaca;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: -80px;
}

.parent-b .child {
  background: #ef4444;
  color: #ffffff;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
}`}
          initialHtml={`<div>
  <div class="parent-a">
    <strong style="color: #1e3a8a;">Parent A (z: 1)</strong>
    <div class="child">
      Child (z: 9999)<br/>
      <small>하지만 Parent B 아래에 있음!</small>
    </div>
  </div>
  
  <div class="parent-b">
    <strong style="color: #7f1d1d;">Parent B (z: 2)</strong>
    <div class="child">Child</div>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>핵심:</strong> Parent A의 자식이 z-index: 9999여도,<br/>
  Parent A 자체가 z-index: 1이므for Parent B(z: 2) 아래에 갇힙니다!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전: Modal Layering</h2>
        <p className="section-description">
          모달, 드롭다운, 툴팁 등에서 적절한 z-index 값을 사용하는 시스템
        </p>

        <LiveCodeEditor
          scopeId="modal-layering"
          height="400px"
          initialCss={`:root {
  --z-base: 1;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

.layer-demo {
  position: relative;
  height: 250px;
  background: #f8fafc;
  border-radius: 8px;
}

.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: var(--z-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  z-index: var(--z-modal);
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  color: #1e293b;
}

.tooltip {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: var(--z-tooltip);
  background: #1e293b;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
}`}
          initialHtml={`<div class="layer-demo">
  <div class="modal-backdrop">
    <div class="modal">
      <h3 style="margin: 0 0 0.5rem 0;">Modal (z: 1050)</h3>
      <p style="margin: 0;">Always on top of backdrop</p>
    </div>
  </div>
  
  <div class="tooltip">
    Tooltip (z: 1070)
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Best Practice:</strong> CSS 변수로 z-index 시스템을 정의하여<br/>
  일관성과 유지보수성을 확보하세요!
</div>`}
        />
      </section>
    </div>
  );
}

export default StackingStudy;
