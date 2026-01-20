import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function AccessibilityStudy() {
  const [focusStyle, setFocusStyle] = useState('browser');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Accessibility (A11y)</h1>
        <p className="page-subtitle">모든 사용자를 위한 포용적인 웹 인터페이스 설계</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">CSS와 웹 접근성</h2>
        <div className="section-description">
          <p>
            웹 접근성은 장애 여부와 상관없이 <strong>모든 사용자가 동등하게</strong> 웹에 접근할 수 있게 하는 것입니다.
            CSS는 시각적 대비, 포커스 상태 제어 등을 통해 접근성을 개선하는 데 핵심적인 역할을 합니다.
          </p>
          <ul className="description-list">
            <li><strong>시각적 대비</strong>: 텍스트와 배경의 충분한 대비 (WCAG AA 이상 권장)</li>
            <li><strong>포커스 표시</strong>: 키보드 사용자가 현재 위치를 알 수 있는 명확한 인디케이터</li>
            <li><strong>사용자 선호도</strong>: 다크모드, 애니메이션 감소 유무 등 시스템 설정 대응</li>
            <li><strong>의미론적 마크업</strong>: 적절한 태그와 ARIA 속성 사용</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Semantic HTML vs Div Soup</h2>
        <div className="section-description">
          <p>
            올바른 태그(예: <code>&lt;button&gt;</code>)를 쓰는 것만으로도 수많은 접근성 문제를 자동으로 해결할 수 있습니다.
          </p>
        </div>
        <LiveCodeEditor
          scopeId="a11y-semantic-vs-div"
          previewHeight="350px"
          codeHeight="500px"
          initialCss={`.btn-base {
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-block;
  margin: 5px;
  font-weight: bold;
}

.real-button {
  background: #667eea;
  color: white;
  border: none;
}

.fake-button {
  background: #cbd5e1;
  color: #1e293b;
}

/* 포커스 스타일 */
.real-button:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 2px;
}
`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <button class="btn-base real-button" onclick="alert('Real Button!')">
    진짜 버튼 (button 태그)
  </button>
  
  <div class="btn-base fake-button" onclick="alert('Fake Button!')">
    가짜 버튼 (div 태그)
  </div>
</div>

<div class="info-box" style="margin-top: 2rem;">
  <strong>실습해보세요:</strong><br/>
  1. <strong>Tab 키</strong>를 눌러보세요. 진짜 버튼만 포커스가 잡힙니다.<br/>
  2. 진짜 버튼에 포커스 후 <strong>Enter</strong>를 쳐보세요. 클릭 이벤트가 발생합니다.<br/>
  3. 가짜 버튼은 키보드로 접근 자체가 불가능하며, <code>tabindex</code>와 <code>keydown</code> 핸들러를 일일이 직접 구현해야 합니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">:focus-visible (키보드 배려)</h2>
        <div className="section-description">
          <p>마우스 클릭 시에는 포커스 링을 숨기고, <strong>Tab 이동 시에만</strong> 인디케이터를 보여주어 디자인과 접근성을 모두 잡습니다.</p>
        </div>
        <CssPropertyControls
          properties={[
            {
              name: 'Focus Style',
              type: 'radio',
              value: focusStyle,
              onChange: setFocusStyle,
              options: [
                { value: 'browser', label: 'Default Browser' },
                { value: 'custom', label: 'Custom A11y Style' }
              ]
            }
          ]}
        />
        <LiveCodeEditor
          scopeId="focus-visible-demo"
          previewHeight="300px"
          codeHeight="400px"
          initialCss={`.a11y-btn {
  padding: 0.8rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

${focusStyle === 'custom' ? `
/* 키보드 접근 시에만 작동 */
.a11y-btn:focus-visible {
  outline: 4px solid #f59e0b;
  outline-offset: 4px;
}
` : ''}`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <button class="a11y-btn">Tab으로 이동해보세요</button>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">ARIA States (aria-expanded)</h2>
        <div className="section-description">
          <p>보조 공학 기기(스크린 리더)에게 요소의 <strong>현재 상태(열림/닫힘 등)</strong>를 명확히 전달합니다.</p>
        </div>
        <LiveCodeEditor
          scopeId="a11y-aria-states"
          previewHeight="350px"
          codeHeight="500px"
          initialCss={`.accordion-btn {
  width: 100%;
  padding: 1rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  text-align: left;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.content {
  padding: 1rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-top: none;
}

/* 상태에 따른 시각적 표시 */
.accordion-btn[aria-expanded="true"] span::after { content: '▲'; }
.accordion-btn[aria-expanded="false"] span::after { content: '▼'; }

.hidden { display: none; }`}
          initialHtml={`<div class="accordion">
  <button class="accordion-btn" aria-expanded="false" onclick="
    const isOpen = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isOpen);
    document.getElementById('acc-content').classList.toggle('hidden');
  ">
    <span>질문: 접근성이란 무엇인가요?</span>
    <span></span>
  </button>
  <div id="acc-content" class="content hidden">
    차별 없이 누구나 정보를 이용할 수 있는 상태를 말합니다.
  </div>
</div>

<div class="info-box">
  <code>aria-expanded</code> 값은 시각적인 변화뿐만 아니라, 스크린 리더가 "버튼, 축소됨" 또는 "버튼, 확장됨"이라고 읽어주게 하여 사용자에게 구조를 알려줍니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">User Preference (미디어 쿼리)</h2>
        <div className="section-description">
          <p>사용자의 시스템 설정을 존중하여 배려심 깊은 UI를 만듭니다.</p>
        </div>
        <LiveCodeEditor
          scopeId="a11y-user-pref"
          previewHeight="350px"
          codeHeight="500px"
          initialCss={`/* 1. 애니메이션 줄이기 설정 대응 */
@media (prefers-reduced-motion: reduce) {
  .motion-box {
    animation: none !important;
  }
}

.motion-box {
  width: 100px;
  height: 100px;
  background: #667eea;
  border-radius: 12px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <div class="motion-box"></div>
  <p style="margin-top: 1rem; color: #64748b;">
    OS 설정에서 '애니메이션 감소'를 켜면 이 상자는 멈춥니다.<br/>
    (어지럼증 예방)
  </p>
</div>`}
        />
      </section>
    </div>
  );
}

export default AccessibilityStudy;
