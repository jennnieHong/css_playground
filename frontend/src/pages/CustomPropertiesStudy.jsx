import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function CustomPropertiesStudy() {
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [borderRadius, setBorderRadius] = useState('8px');
  const [fontSize, setFontSize] = useState('16px');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">CSS Custom Properties (Variables)</h1>
        <p className="page-subtitle">재사용 가능한 값을 정의하여 스타일 관리를 효율적으로</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">CSS 변수란?</h2>
        <p className="section-description">
          CSS Custom Properties(일명 CSS 변수)는 문서 전체에서 재사용할 수 있는 속성을 정의하는 기능입니다.
          `--` 접두사로 시작하며, `var()` 함수를 사용하여 값을 읽어옵니다.
        </p>
      </section>

      <section className="study-section">
        <h2 className="section-title">동적 테마링 예제</h2>
        <p className="section-description">
          CSS 변수를 사용하면 JavaScript와 연동하여 동적으로 스타일을 변경하기 매우 쉽습니다.
          아래 컨트롤을 사용하여 값을 변경해보세요.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Primary Color',
              type: 'select',
              value: primaryColor,
              onChange: setPrimaryColor,
              options: [
                { value: '#3b82f6', label: 'Blue' },
                { value: '#ef4444', label: 'Red' },
                { value: '#10b981', label: 'Green' },
                { value: '#8b5cf6', label: 'Purple' }
              ]
            },
            {
              name: 'Border Radius',
              type: 'radio',
              value: borderRadius,
              onChange: setBorderRadius,
              options: ['0px', '8px', '20px', '50%']
            },
            {
              name: 'Font Size',
              type: 'radio',
              value: fontSize,
              onChange: setFontSize,
              options: ['12px', '16px', '20px', '24px']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="css-variables"
          initialCss={`.variable-demo {
  --primary-color: ${primaryColor};
  --border-radius: ${borderRadius};
  --font-size: ${fontSize};
  padding: 2rem;
  background-color: #f3f4f6;
}

.card {
  background-color: white;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  color: var(--primary-color);
  font-size: var(--font-size);
  text-align: center;
  transition: all 0.3s ease;
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: var(--border-radius);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}`}
          currentCss={`.variable-demo {
  --primary-color: ${primaryColor};
  --border-radius: ${borderRadius};
  --font-size: ${fontSize};
  padding: 2rem;
  background-color: #f3f4f6;
}

.card {
  background-color: white;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  color: var(--primary-color);
  font-size: var(--font-size);
  text-align: center;
  transition: all 0.3s ease;
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5em 1em;
  border-radius: var(--border-radius);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}`}
          initialHtml={`<div class="variable-demo">
  <div class="card">
    <h3>Hello, Variables!</h3>
    <p>This component uses CSS variables.</p>
    <button class="btn">Click Me</button>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}

export default CustomPropertiesStudy;
