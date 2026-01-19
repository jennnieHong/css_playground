import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function FormStudy() {
  const [inputStyle, setInputStyle] = useState('modern');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Form Styling</h1>
        <p className="page-subtitle">Creating beautiful and accessible form controls</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">폼 스타일링의 중요성</h2>
        <div className="section-description">
          <p>
            폼은 사용자와 직접 상호작용하는 핵심 UI입니다. 좋은 폼 디자인은:
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><strong>가독성</strong>: 명확한 라벨과 플레이스홀더</li>
            <li><strong>접근성</strong>: 키보드 네비게이션과 포커스 스타일</li>
            <li><strong>피드백</strong>: 유효성 검사와 에러 메시지</li>
            <li><strong>일관성</strong>: 통일된 스타일 시스템</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Input 기본 스타일링</h2>
        <p className="section-description">
          브라우저 기본 스타일을 재정의하여 일관된 디자인을 만듭니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Style',
              type: 'radio',
              value: inputStyle,
              onChange: setInputStyle,
              options: [
                { value: 'default', label: 'Default (Browser)' },
                { value: 'modern', label: 'Modern' },
                { value: 'minimal', label: 'Minimal' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          key="input-styling"
          scopeId="input-styling"
          height="400px"
          initialCss={`${inputStyle === 'default' ? `
.input-demo {
  /* 브라우저 기본 스타일 */
}
` : inputStyle === 'modern' ? `
.input-demo {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  color: #1e293b;
  transition: all 0.2s;
  outline: none;
}

.input-demo:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input-demo::placeholder {
  color: #9ca3af;
}
` : `
.input-demo {
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #cbd5e1;
  background: transparent;
  color: #1e293b;
  transition: border-color 0.2s;
  outline: none;
}

.input-demo:focus {
  border-bottom-color: #3b82f6;
}

.input-demo::placeholder {
  color: #94a3b8;
}
`}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}`}
          currentCss={`${inputStyle === 'default' ? `
.input-demo {
  /* 브라우저 기본 스타일 */
}
` : inputStyle === 'modern' ? `
.input-demo {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  color: #1e293b;
  transition: all 0.2s;
  outline: none;
}

.input-demo:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input-demo::placeholder {
  color: #9ca3af;
}
` : `
.input-demo {
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #cbd5e1;
  background: transparent;
  color: #1e293b;
  transition: border-color 0.2s;
  outline: none;
}

.input-demo:focus {
  border-bottom-color: #3b82f6;
}

.input-demo::placeholder {
  color: #94a3b8;
}
`}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}`}
          initialHtml={`<div style="background: #f8fafc; padding: 2rem; border-radius: 8px;">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" class="input-demo" placeholder="Enter your name" />
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" class="input-demo" placeholder="you@example.com" />
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Tip:</strong> 항상 <code>:focus</code> 스타일을 정의하세요 (접근성!)
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Custom Checkbox</h2>
        <p className="section-description">
          브라우저 기본 체크박스를 숨기고 CSS로 완전히 커스터마이징합니다.
        </p>

        <LiveCodeEditor
          key="custom-checkbox"
          scopeId="custom-checkbox"
          height="450px"
          initialCss={`/* 기본 체크박스 숨기기 */
.custom-checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin: 0.75rem 0;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* 커스텀 체크박스 */
.custom-checkbox .checkmark {
  width: 24px;
  height: 24px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  background: #ffffff;
  margin-right: 0.75rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hover 효과 */
.custom-checkbox:hover .checkmark {
  border-color: #3b82f6;
}

/* 체크된 상태 */
.custom-checkbox input:checked ~ .checkmark {
  background: #3b82f6;
  border-color: #3b82f6;
}

/* 체크 아이콘 */
.custom-checkbox input:checked ~ .checkmark::after {
  content: "✓";
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
}

.custom-checkbox .label-text {
  color: #1e293b;
  font-weight: 500;
}`}
          initialHtml={`<div style="background: #ffffff; padding: 2rem; border-radius: 8px;">
  <h3 style="margin: 0 0 1rem 0; color: #1e293b;">Select your preferences:</h3>
  
  <label class="custom-checkbox">
    <input type="checkbox" checked />
    <span class="checkmark"></span>
    <span class="label-text">Subscribe to newsletter</span>
  </label>
  
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
    <span class="label-text">Enable notifications</span>
  </label>
  
  <label class="custom-checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
    <span class="label-text">Accept terms and conditions</span>
  </label>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>핵심:</strong> 실제 input을 숨기고(opacity: 0), 가상 요소로 스타일링
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Custom Radio Buttons</h2>
        <p className="section-description">
          라디오 버튼도 체크박스와 유사한 방식으로 커스터마이징합니다.
        </p>

        <LiveCodeEditor
          key="custom-radio"
          scopeId="custom-radio"
          height="450px"
          initialCss={`.custom-radio {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin: 0.75rem 1rem 0.75rem 0;
}

.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
}

/* 커스텀 라디오 (원형) */
.custom-radio .radio-mark {
  width: 22px;
  height: 22px;
  border: 2px solid #cbd5e1;
  border-radius: 50%;
  background: #ffffff;
  margin-right: 0.5rem;
  transition: all 0.2s;
  position: relative;
}

.custom-radio:hover .radio-mark {
  border-color: #3b82f6;
}

/* 선택된 상태 */
.custom-radio input:checked ~ .radio-mark {
  border-color: #3b82f6;
}

/* 내부 점 */
.custom-radio input:checked ~ .radio-mark::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3b82f6;
}

.custom-radio .label-text {
  color: #1e293b;
  font-weight: 500;
}`}
          initialHtml={`<div style="background: #ffffff; padding: 2rem; border-radius: 8px;">
  <h3 style="margin: 0 0 1rem 0; color: #1e293b;">Choose a plan:</h3>
  
  <label class="custom-radio">
    <input type="radio" name="plan" value="free" checked />
    <span class="radio-mark"></span>
    <span class="label-text">Free</span>
  </label>
  
  <label class="custom-radio">
    <input type="radio" name="plan" value="pro" />
    <span class="radio-mark"></span>
    <span class="label-text">Pro</span>
  </label>
  
  <label class="custom-radio">
    <input type="radio" name="plan" value="enterprise" />
    <span class="radio-mark"></span>
    <span class="label-text">Enterprise</span>
  </label>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Tip:</strong> border-radius: 50%로 완벽한 원 만들기
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Form Validation States</h2>
        <p className="section-description">
          <code>:valid</code>, <code>:invalid</code>, <code>:required</code> 의사 클래스로 실시간 유효성 피드백을 제공합니다.
        </p>

        <LiveCodeEditor
          key="validation-states"
          scopeId="validation-states"
          height="450px"
          initialCss={`.validated-input {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  color: #1e293b;
  transition: all 0.2s;
  outline: none;
}

.validated-input:focus {
  border-color: #3b82f6;
}

/* Valid 상태 (값이 입력되고 유효할 때) */
.validated-input:valid:not(:placeholder-shown) {
  border-color: #10b981;
  background-color: #f0fdf4;
}

/* Invalid 상태 */
.validated-input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.form-field {
  margin-bottom: 1.5rem;
}

.form-field label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

.required::after {
  content: " *";
  color: #ef4444;
}`}
          initialHtml={`<div style="background: #f8fafc; padding: 2rem; border-radius: 8px;">
  <div class="form-field">
    <label for="email2" class="required">Email</label>
    <input 
      type="email" 
      id="email2" 
      class="validated-input" 
      placeholder="you@example.com"
      required 
    />
  </div>
  
  <div class="form-field">
    <label for="phone">Phone (10 digits)</label>
    <input 
      type="tel" 
      id="phone" 
      class="validated-input" 
      placeholder="1234567890"
      pattern="[0-9]{10}"
    />
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Try it:</strong> 이메일을 입력하고 @를 빼먹으면 빨간색으로 변합니다!<br/>
  <code>:not(:placeholder-shown)</code>으로 빈 입력시 스타일 방지
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Floating Labels</h2>
        <p className="section-description">
          사용자가 입력을 시작하면 라벨이 위로 올라가는 현대적인 디자인 패턴입니다. <code>:placeholder-shown</code> 의사 클래스를 활용합니다.
        </p>
        <LiveCodeEditor
          key="floating-labels"
          scopeId="floating-labels"
          height="400px"
          initialCss={`.floating-group {
  position: relative;
  margin-top: 1.5rem;
}

.floating-input {
  width: 100%;
  padding: 0.75rem 0.25rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #e2e8f0;
  background: transparent;
  outline: none;
  transition: all 0.2s;
}

.floating-label {
  position: absolute;
  top: 0.75rem;
  left: 0.25rem;
  color: #94a3b8;
  pointer-events: none;
  transition: all 0.2s ease;
}

/* 포커스되거나 플레이스홀더가 보이지 않을 때(즉, 입력값이 있을 때) 라벨 이동 */
.floating-input:focus ~ .floating-label,
.floating-input:not(:placeholder-shown) ~ .floating-label {
  top: -1rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #3b82f6;
}

.floating-input:focus {
  border-bottom-color: #3b82f6;
}
`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <div class="floating-group">
    <input type="text" id="floating-email" class="floating-input" placeholder=" " />
    <label for="floating-email" class="floating-label">Email Address</label>
  </div>
  
  <div class="floating-group">
    <input type="password" id="floating-pass" class="floating-input" placeholder=" " />
    <label for="floating-pass" class="floating-label">Password</label>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Note:</strong> <code>placeholder=" "</code> (공백 하나)를 넣어야 <code>:placeholder-shown</code>이 정상 동작합니다!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Custom Select & Range</h2>
        <p className="section-description">
          기본 브라우저 스타일링이 어려운 드롭다운과 슬라이더를 커스터마이징합니다.
        </p>
        <LiveCodeEditor
          key="field-customization"
          scopeId="field-customization"
          height="450px"
          initialCss={`.custom-select {
  appearance: none; /* 브라우저 기본 화살표 제거 */
  width: 100%;
  padding: 0.75rem 1rem;
  background: #ffffff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 1rem center;
  background-size: 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
}

.custom-range {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 5px;
  appearance: none;
  outline: none;
}

.custom-range::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #3b82f6;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.custom-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}`}
          initialHtml={`<div style="background: white; padding: 2rem; border-radius: 8px;">
  <div style="margin-bottom: 2rem;">
    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #1e293b;">Custom Select</label>
    <select class="custom-select">
      <option>Basic Plan</option>
      <option>Business Plan</option>
      <option>Enterprise Plan</option>
    </select>
  </div>
  
  <div>
    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #1e293b;">Custom Range (Slider)</label>
    <input type="range" class="custom-range" min="0" max="100" value="50" />
  </div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전: 현대적인 로그인 폼</h2>
        <p className="section-description">
          지금까지 배운 모든 기술을 종합한 완성도 높은 폼 예제입니다.
        </p>

        <LiveCodeEditor
          key="login-form"
          scopeId="login-form"
          height="500px"
          initialCss={`.login-form {
  max-width: 400px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.login-form h2 {
  margin: 0 0 1.5rem 0;
  color: #1e293b;
  text-align: center;
}

.form-control {
  margin-bottom: 1.25rem;
}

.form-control label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #475569;
  font-size: 0.9rem;
}

.form-control input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  outline: none;
}

.form-control input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}`}
          initialHtml={`<form class="login-form">
  <h2>Welcome Back</h2>
  
  <div class="form-control">
    <label for="login-email">Email</label>
    <input 
      type="email" 
      id="login-email" 
      placeholder="Enter your email"
      required
    />
  </div>
  
  <div class="form-control">
    <label for="password">Password</label>
    <input 
      type="password" 
      id="password" 
      placeholder="Enter your password"
      required
    />
  </div>
  
  <button type="submit" class="submit-btn">
    Sign In
  </button>
</form>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Production-ready!</strong> 이 패턴을 실제 프로젝트에 바로 사용할 수 있습니다.
</div>`}
        />
      </section>
    </div>
  );
}

export default FormStudy;
