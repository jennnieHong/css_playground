import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function PositionStudy() {
  const [position, setPosition] = useState('static');
  const [top, setTop] = useState('auto');
  const [left, setLeft] = useState('auto');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Position Study</h1>
        <p className="page-subtitle">요소의 위치를 결정하는 Position 속성 정복하기</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Position 속성 이해하기</h2>
        <div className="section-description">
          <p><code>position</code> 속성은 문서 상에서 요소가 배치되는 방식을 결정합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>static</code>: 기본값. 일반적인 문서 흐름을 따릅니다. top/left 등이 적용되지 않습니다.</li>
            <li><code>relative</code>: 일반적인 흐름을 따르되, <strong>자기 자신의 원래 위치</strong>를 기준으로 이동합니다.</li>
            <li><code>absolute</code>: <strong>가장 가까운 포지셔닝 된 조상(static이 아닌 부모)</strong>을 기준으로 절대적인 위치에 배치됩니다. 조상이 없으면 문서(body) 기준입니다.</li>
            <li><code>fixed</code>: <strong>뷰포트(브라우저 창)</strong>를 기준으로 고정됩니다. 스크롤해도 따라다닙니다.</li>
            <li><code>sticky</code>: 스크롤에 따라 static과 fixed를 오갑니다.</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Parent-Child 관계 (Relative vs Absolute)</h2>
        <p className="section-description">
          가장 많이 사용하는 패턴입니다. 부모에게 <code>relative</code>를 주고, 자식에게 <code>absolute</code>를 주면
          자식은 <strong>부모 안에서</strong> 자유롭게 위치를 잡을 수 있습니다.
        </p>

        <LiveCodeEditor
          scopeId="pos-parent-child"
          initialCss={`.parent {
  position: relative; /* 기준점 역할 */
  width: 300px;
  height: 200px;
  background-color: #e2e8f0;
  border: 2px dashed #94a3b8;
  margin: 20px 0;
}

.child {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 80px;
  height: 80px;
  background-color: #3b82f6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}
          initialHtml={`<div class="parent">
  Parent (relative)
  <div class="child">Child (absolute)</div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Fixed Position (고정 위치)</h2>
        <p className="section-description">
          스크롤을 해도 화면의 특정 위치에 고정되어 있는 요소입니다. (예: 네비게이션 바, '맨 위로' 버튼, 모달 등)
          <br/>
          아래 예제에서 <strong>Position</strong>을 <code>fixed</code>로 바꾸고 화면을 스크롤해보세요!
        </p>
        
        <CssPropertyControls
          properties={[
            {
              name: 'position',
              type: 'radio',
              value: position,
              onChange: setPosition,
              options: ['static', 'absolute', 'fixed']
            },
            {
              name: 'top',
              type: 'radio',
              value: top,
              onChange: setTop,
              options: ['auto', '10px', '50%', '100px']
            },
            {
              name: 'left',
              type: 'radio',
              value: left,
              onChange: setLeft,
              options: ['auto', '10px', '50%', '100px']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="pos-fixed"
          initialCss={`.fixed-demo-box {
  position: ${position};
  top: ${top};
  left: ${left};
  width: 120px;
  height: 60px;
  background-color: #ef4444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
}`}
          currentCss={`.fixed-demo-box {
  position: ${position};
  top: ${top};
  left: ${left};
  width: 120px;
  height: 60px;
  background-color: #ef4444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
}`}
          initialHtml={`<div style="min-height: 300px; padding: 20px; border: 1px solid #ddd; position: relative;">
  <p>이 영역 내부 또는 뷰포트를 기준으로 배치됩니다.</p>
  <p>스크롤을 하기 위해 내용을 길게 늘립니다...</p>
  <div style="height: 500px; background: linear-gradient(to bottom, #f0f9ff, #e0f2fe);"></div>
  <div class="fixed-demo-box">
    Fixed Box
  </div>
</div>`}
        />
      </section>
    </div>
  );
}

export default PositionStudy;
