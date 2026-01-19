import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function AccessibilityStudy() {
  const [focusStyle, setFocusStyle] = useState('browser');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Accessibility (A11y)</h1>
        <p className="page-subtitle">Ensuring your web content is usable by everyone</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">CSS와 웹 접근성</h2>
        <div className="section-description">
          <p>
            웹 접근성은 장애 여부와 상관없이 <strong>모든 사용자가 동등하게</strong> 웹에 접근할 수 있게 하는 것입니다. 
            CSS는 시각적 대비, 포커스 상태 제어 등을 통해 접근성을 개선하는 데 핵심적인 역할을 합니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><strong>시각적 대비</strong>: 텍스트와 배경의 충분한 대비 (WCAG 기준)</li>
            <li><strong>포커스 표시</strong>: 키보드 사용자를 위한 명확한 인디케이터</li>
            <li><strong>상태 표시</strong>: 시각적 장식만이 아닌 상태 정보 전달</li>
            <li><strong>사용자 선호도</strong>: 다크모드, 애니메이션 감소 유무 대응</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">:focus-visible (키보드 사용자 배려)</h2>
        <p className="section-description">
          마우스 클릭 시에는 포커스 링을 숨기고, <strong>키보드 Tab 이동 시에만</strong> 명확한 포커스 스타일을 보여줍니다.
        </p>

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
          scopeId="focus-visible-a11y"
          height="350px"
          initialCss={`.a11y-btn {
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  margin: 0.5rem;
}

${focusStyle === 'custom' ? `
/* 키보드로 접근할 때만 강력한 포커스 표시 */
.a11y-btn:focus-visible {
  outline: 4px solid #f59e0b;
  outline-offset: 4px;
}

/* 마우스 클릭 시에는 포커스 링 제거 */
.a11y-btn:focus:not(:focus-visible) {
  outline: none;
}
` : ''}`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <button class="a11y-btn">Try Tab Navigation</button>
  <button class="a11y-btn">Another Button</button>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>테스트 방법:</strong><br/>
  1. 마우스로 버튼을 클릭해보세요.<br/>
  2. <strong>Tab 키</strong>를 눌러 버튼 사이를 이동해보세요.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Color Contrast (명도 대비)</h2>
        <p className="section-description">
          텍스트와 배경 사이의 명도 대비는 최소 <strong>4.5:1</strong> (AA 등급) 이상이어야 합니다.
        </p>

        <LiveCodeEditor
          scopeId="contrast-a11y"
          height="350px"
          initialCss={`.contrast-box {
  padding: 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.bad-contrast {
  background: #f1f5f9;
  color: #94a3b8; /* 대비 2.1:1 (탈락) */
}

.good-contrast {
  background: #f1f5f9;
  color: #1e293b; /* 대비 13:1 (통과) */
}

.wcag-marker {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
}

.fail { background: #fee2e2; color: #ef4444; }
.pass { background: #dcfce7; color: #10b981; }`}
          initialHtml={`<div style="background: white; padding: 1.5rem; border-radius: 8px;">
  <div class="contrast-box bad-contrast">
    Low Contrast Text <span class="wcag-marker fail">FAIL (WCAG AA)</span>
  </div>
  
  <div class="contrast-box good-contrast">
    High Contrast Text <span class="wcag-marker pass">PASS (WCAG AAA)</span>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  저시력자나 고령자를 위해 명확한 색상 대비를 사용하는 것은 필수입니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Screen Reader Only (텍스트 숨기기)</h2>
        <p className="section-description">
          시각적으로는 숨기되, <strong>스크린 리더(음성 읽기 도구)</strong> 사용자에게는 정보를 제공해야 할 때 사용합니다.
        </p>

        <LiveCodeEditor
          scopeId="sr-only-a11y"
          height="400px"
          initialCss={`.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.icon-button {
  width: 48px;
  height: 48px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
}

.icon-button:hover { background: #e2e8f0; }`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px; display: flex; gap: 1rem; align-items: center;">
  <button class="icon-button" title="Close">
    ✕
    <span class="sr-only">닫기 (Close Context)</span>
  </button>
  
  <p style="color: #64748b; margin: 0;">
    버튼 내부의 텍스트가 눈에는 보이지 않지만,<br/> 
    스크린 리더는 "닫기"라고 읽어줍니다.
  </p>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <code>display: none</code>을 사용하면 스크린 리더도 읽지 못하므로 주의하세요!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">User Preference (사용자 선호도)</h2>
        <p className="section-description">
          다크모드 선호나 애니메이션 감소 요청 등 시스템 설정을 존중합니다.
        </p>

        <LiveCodeEditor
          scopeId="media-features-a11y"
          height="400px"
          initialCss={`/* 1. 다크 모드 대응 */
@media (prefers-color-scheme: dark) {
  .theme-box {
    background: #1e293b !important;
    color: #f1f5f9 !important;
  }
}

/* 2. 애니메이션 감소 선호 대응 */
@media (prefers-reduced-motion: reduce) {
  .motion-box {
    animation: none !important;
    transition: none !important;
  }
}

.theme-box {
  padding: 1.5rem;
  background: #ffffff;
  color: #1e293b;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
}

.motion-box {
  width: 80px;
  height: 80px;
  background: #3b82f6;
  border-radius: 12px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`}
          initialHtml={`<div style="background: #f8fafc; padding: 2rem; border-radius: 8px;">
  <div class="theme-box">
    🖥️ 시스템 설정에 따라 테마가 바뀝니다 (Light/Dark)
  </div>
  
  <div class="motion-box"></div>
  <p style="margin-top: 1rem; color: #64748b;">
    OS의 '애니메이션 줄이기' 설정이 켜져있으면 위 박스가 멈춥니다.
  </p>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>prefers-color-scheme</strong>: 테마 설정 감지<br/>
  <strong>prefers-reduced-motion</strong>: 어지럼증을 느끼는 사용자를 위한 애니메이션 제어
</div>`}
        />
      </section>
    </div>
  );
}

export default AccessibilityStudy;
