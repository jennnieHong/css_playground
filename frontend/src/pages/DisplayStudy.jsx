import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function DisplayStudy() {
  const [displayValue, setDisplayValue] = useState('block');
  const [inlineDisplayValue, setInlineDisplayValue] = useState('inline');
  const [visibilityValue, setVisibilityValue] = useState('block');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Display Study</h1>
        <p className="page-subtitle">Understanding how elements are displayed and laid out</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Display 속성이란?</h2>
        <div className="section-description">
          <p>
            <code>display</code> 속성은 요소가 <strong>화면에 어떻게 렌더링되는지</strong>를 결정합니다.<br />
            레이아웃의 가장 기본이 되는 속성으로, 모든 HTML 요소는 기본 display 값을 가집니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>block</code>: 새 줄에서 시작하며 전체 너비를 차지 (div, p, h1 등)</li>
            <li><code>inline</code>: 줄 안에 배치되며 콘텐츠 크기만큼만 차지 (span, a, strong 등)</li>
            <li><code>inline-block</code>: inline처럼 배치되지만 block처럼 크기 조정 가능</li>
            <li><code>none</code>: 요소를 완전히 숨김 (공간도 차지하지 않음)</li>
            <li><code>contents</code>: 요소 자체는 사라지고 자식만 렌더링</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Block vs Inline</h2>
        <p className="section-description">
          가장 기본적이고 중요한 두 가지 display 값입니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'display',
              type: 'radio',
              value: displayValue,
              onChange: setDisplayValue,
              options: ['block', 'inline', 'inline-block']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="display-basic"
          previewHeight="200px"
          codeHeight="300px"
          initialCss={`.demo-box {
  display: ${displayValue};
  width: 200px;
  height: 80px;
  padding: 1rem;
  margin: 0.5rem;
  background-color: #667eea;
  color: #ffffff;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}`}
          currentCss={`.demo-box {
  display: ${displayValue};
  width: 200px;
  height: 80px;
  padding: 1rem;
  margin: 0.5rem;
  background-color: #667eea;
  color: white;
  border-radius: 8px;
  text-align: center;
}`}
          initialHtml={`<div style="border: 2px dashed #ccc; padding: 10px;">
  <div class="demo-box">Box 1</div>
  <div class="demo-box">Box 2</div>
  <div class="demo-box">Box 3</div>
</div>

<p style="margin-top: 1rem; color: #1e293b; font-size: 0.9rem; background: #f1f5f9; padding: 0.75rem; border-radius: 6px;">
  <strong>관찰 포인트:</strong><br/>
  • <strong>block</strong>: 각 박스가 새 줄에 배치됨<br/>
  • <strong>inline</strong>: width/height가 무시되고 한 줄에 배치됨<br/>
  • <strong>inline-block</strong>: 한 줄에 배치되지만 크기 조정 가능
</p>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Inline 요소의 특성</h2>
        <p className="section-description">
          <code>inline</code> 요소는 텍스트처럼 동작합니다. width/height를 무시하고, 위아래 margin도 적용되지 않습니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'display',
              type: 'radio',
              value: inlineDisplayValue,
              onChange: setInlineDisplayValue,
              options: ['inline', 'inline-block', 'block']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="display-inline"
          previewHeight="200px"
          codeHeight="250px"
          initialCss={`.inline-demo {
  display: ${inlineDisplayValue};
  width: 150px;
  height: 50px;
  padding: 10px 20px;
  margin: 20px; /* inline일 때 위아래 margin 무시됨 */
  background-color: #f59e0b;
  color: #ffffff;
  font-weight: 600;
  border: 2px solid #d97706;
}`}
          currentCss={`.inline-demo {
  display: ${inlineDisplayValue};
  width: 150px;
  height: 50px;
  padding: 10px 20px;
  margin: 20px;
  background-color: #f59e0b;
  color: white;
  border: 2px solid #d97706;
}`}
          initialHtml={`<p>This is a paragraph with 
  <span class="inline-demo">inline element</span> 
  inside the text flow.
</p>

<p style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>inline</strong>일 때: width/height 무시, 위아래 margin 무시<br/>
  <strong>inline-block</strong>일 때: 모든 박스 모델 속성 적용 가능
</p>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Display: None vs Visibility: Hidden</h2>
        <p className="section-description">
          요소를 숨기는 두 가지 방법의 차이점을 확인하세요.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Box 2 상태',
              type: 'radio',
              value: visibilityValue,
              onChange: setVisibilityValue,
              options: [
                { value: 'block', label: 'Visible (block)' },
                { value: 'none', label: 'display: none' },
                { value: 'hidden', label: 'visibility: hidden' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="display-none"
          previewHeight="200px"
          codeHeight="250px"
          initialCss={`.box {
  width: 150px;
  height: 100px;
  margin: 10px;
  background-color: #10b981;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.box-2 {
  ${visibilityValue === 'none' ? 'display: none;' : visibilityValue === 'hidden' ? 'visibility: hidden;' : 'display: block;'}
  background-color: #ef4444;
}`}
          currentCss={`.box {
  width: 150px;
  height: 100px;
  margin: 10px;
  background-color: #10b981;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.box-2 {
  ${visibilityValue === 'none' ? 'display: none;' : visibilityValue === 'hidden' ? 'visibility: hidden;' : 'display: block;'}
  background-color: #ef4444;
}`}
          initialHtml={`<div style="display: flex; gap: 10px;">
  <div class="box">Box 1</div>
  <div class="box box-2">Box 2</div>
  <div class="box">Box 3</div>
</div>

<p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
  <strong>display: none</strong>: 요소가 완전히 사라지고 공간도 차지하지 않음<br/>
  <strong>visibility: hidden</strong>: 요소는 안보이지만 공간은 유지됨
</p>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Hiding Methods (요즘 숨기기 방식)</h2>
        <p className="section-description">
          요소를 숨기는 방식에는 여러 가지가 있으며, 각각 레이아웃과 접근성에 미치는 영향이 다릅니다.
        </p>
        <LiveCodeEditor
          scopeId="hiding-methods-comparison"
          previewHeight="300px"
          codeHeight="450px"
          initialCss={`.grid-hiding {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.item-box {
  padding: 1.5rem;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  text-align: center;
  border-radius: 8px;
  color: #1e293b;
}

/* 1. opacity: 0 - 투명해질 뿐 공간은 차지, 클릭 가능 */
.hide-opacity {
  opacity: 0;
}

/* 2. visibility: hidden - 공간은 차지하지만 클릭 불가 (접근성 트리에서 제외되기도 함) */
.hide-visibility {
  visibility: hidden;
}

/* 3. display: none - 아예 없는 것처럼 취급 (공간 X, 클릭 X) */
.hide-display {
  display: none;
}

/* 4. Screen Reader Only (접근성 표준) - 눈에는 안 보이지만 스크린 리더는 읽음 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
`}
          initialHtml={`<div class="grid-hiding">
  <div class="item-box hide-opacity">Opacity: 0</div>
  <div class="item-box hide-visibility">Visibility: Hidden</div>
  <div class="item-box hide-display">Display: None</div>
  
  <div class="item-box">Visible 1</div>
  <div class="item-box">Visible 2</div>
  <div class="item-box">
    SR Only
    <span class="sr-only">이 텍스트는 보이지 않지만 스크린 리더가 읽습니다.</span>
  </div>
</div>

<div style="margin-top: 1.5rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>차이점 요약:</strong><br/>
  • <strong>Opacity</strong>: 공간 OK, 탭 순서/클릭 OK<br/>
  • <strong>Visibility</strong>: 공간 OK, 탭 순서/클릭 NO<br/>
  • <strong>Display</strong>: 공간 NO, 탭 순서/클릭 NO<br/>
  • <strong>SR-Only</strong>: 접근성을 위해 매우 중요한 기법 (버튼 라벨 등)
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Display: Contents</h2>
        <p className="section-description">
          요소 자체는 레이아웃에서 사라지고, 자식 요소만 남습니다. (Grid Study에서도 다룬 개념입니다)
        </p>

        <LiveCodeEditor
          scopeId="display-contents"
          previewHeight="250px"
          codeHeight="300px"
          initialCss={`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background-color: #f1f3f5;
  padding: 1rem;
}

.item {
  background-color: #fff;
  border: 1px solid #dee2e6;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
  color: #1e293b;
}

/* wrapper를 주석 처리/해제 해보세요 */
.wrapper {
  /* display: contents; */
  border: 3px dashed #fa5252;
  background-color: rgba(255, 0, 0, 0.1);
}`}
          initialHtml={`<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  
  <!-- Wrapper with display: contents -->
  <div class="wrapper">
    <div class="item">3 (in wrapper)</div>
    <div class="item">4 (in wrapper)</div>
  </div>
  
  <div class="item">5</div>
</div>

<p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
  <strong>Try</strong>: CSS 에디터에서 <code>display: contents;</code> 주석을 해제해보세요!<br/>
  wrapper의 빨간 테두리와 배경이 사라지고, 자식들이 직접 그리드에 참여합니다.
</p>`}
        />
      </section>
    </div>
  );
}

export default DisplayStudy;
