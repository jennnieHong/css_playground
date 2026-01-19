import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function AnimationStudy() {
  const [duration, setDuration] = useState('0.3s');
  const [timingFunction, setTimingFunction] = useState('ease');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Animation Study</h1>
        <p className="page-subtitle">CSS로 생동감 있는 애니메이션 만들기</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">CSS 애니메이션이란?</h2>
        <p className="section-description">
          CSS 애니메이션을 사용하면 JavaScript 없이도 요소에 움직임을 부여할 수 있습니다.
        </p>
      </section>

      <section className="study-section">
        <h2 className="section-title">Transition</h2>
        <div className="section-description">
          <p>상태 변화(예: Hover)를 부드럽게 연결해줍니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>duration</code>: 애니메이션이 완료되는 데 걸리는 시간 (예: 0.3s)</li>
            <li><code>timing-function</code>: 변화의 속도 곡선</li>
            <li><code>ease</code>: 천천히 시작했다가 빨라지고 다시 느려짐 (기본값)</li>
            <li><code>linear</code>: 처음부터 끝까지 일정한 속도</li>
            <li><code>cubic-bezier</code>: 사용자가 정의한 베지에 곡선으로 속도 제어</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'transition-duration',
              type: 'radio',
              value: duration,
              onChange: setDuration,
              options: ['0.1s', '0.3s', '1s', '2s']
            },
            {
              name: 'transition-timing-function',
              type: 'select',
              value: timingFunction,
              onChange: setTimingFunction,
              options: [
                'ease',
                'linear',
                'ease-in',
                'ease-out',
                'ease-in-out',
                { value: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', label: 'bounce (cubic-bezier)' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="anim-transition"
          initialCss={`.anim-item {
  transition: all ${duration} ${timingFunction};
}

.anim-item:hover {
  transform: scale(1.1) translateX(20px);
  background: linear-gradient(135deg, #764ba2, #f093fb);
}`}
          currentCss={`.anim-item {
  transition: all ${duration} ${timingFunction};
}

.anim-item:hover {
  transform: scale(1.1) translateX(20px);
  background: linear-gradient(135deg, #764ba2, #f093fb);
}`}
          initialHtml={`<div class="animation-demo">
  <div class="anim-item transition-demo">
    Hover Me!
  </div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Keyframe Animation</h2>
        <LiveCodeEditor
          scopeId="anim-bounce"
          initialCss={`@keyframes bounce {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-20px); 
  }
}

.anim-item {
  animation: bounce 1s infinite;
}`}
          initialHtml={`<div class="animation-demo">
  <div class="anim-item bounce-demo">
    Bouncing!
  </div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Rotate Animation</h2>
        <LiveCodeEditor
          scopeId="anim-rotate"
          initialCss={`@keyframes rotate {
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
}

.anim-item {
  animation: rotate 2s linear infinite;
  font-size: 3rem;
}`}
          initialHtml={`<div class="animation-demo">
  <div class="anim-item rotate-demo">
    🎨
  </div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Fade Animation</h2>
        <LiveCodeEditor
          scopeId="anim-fade"
          initialCss={`@keyframes fadeInOut {
  0%, 100% { 
    opacity: 0.3; 
  }
  50% { 
    opacity: 1; 
  }
}

.anim-item {
  animation: fadeInOut 2s ease-in-out infinite;
}`}
          initialHtml={`<div class="animation-demo">
  <div class="anim-item fade-demo">
    Fading In & Out
  </div>
</div>`}
        />
      </section>
    </div>
  );
}

export default AnimationStudy;
