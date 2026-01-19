import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function BoxModelStudy() {
  const [boxSizing, setBoxSizing] = useState('content-box');
  const [padding, setPadding] = useState('20px');
  const [border, setBorder] = useState('5px');
  const [margin, setMargin] = useState('10px');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Box Model Study</h1>
        <p className="page-subtitle">Understanding the CSS Box Model - the foundation of layout</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Box Model이란?</h2>
        <div className="section-description">
          <p>
            모든 HTML 요소는 <strong>사각형 박스</strong>로 렌더링됩니다. 이 박스는 4개의 영역으로 구성됩니다:
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><strong>Content</strong>: 실제 콘텐츠(텍스트, 이미지 등)가 들어가는 영역</li>
            <li><strong>Padding</strong>: Content와 Border 사이의 안쪽 여백</li>
            <li><strong>Border</strong>: 요소의 테두리</li>
            <li><strong>Margin</strong>: 요소와 다른 요소 사이의 바깥쪽 여백</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <strong>중요:</strong> <code>width</code>와 <code>height</code>가 어디까지 포함되는지는 <code>box-sizing</code> 속성에 따라 달라집니다!
          </p>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Box Model 시각화</h2>
        <p className="section-description">
          각 영역이 어떻게 구성되는지 확인해보세요. 브라우저 개발자 도구의 Box Model 뷰와 동일한 구조입니다.
        </p>

        <LiveCodeEditor
          scopeId="box-model-visual"
          height="450px"
          initialCss={`.box-model-demo {
  /* Content 영역 */
  width: 200px;
  height: 100px;
  background-color: #bfdbfe;
  
  /* Padding (안쪽 여백) */
  padding: 20px;
  
  /* Border (테두리) */
  border: 5px solid #3b82f6;
  
  /* Margin (바깥쪽 여백) */
  margin: 30px;
  
  /* 내부 텍스트 스타일 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #1e40af;
}

.container {
  background-color: #fef3c7;
  padding: 10px;
  border: 2px dashed #f59e0b;
}`}
          initialHtml={`<div class="container">
  <div class="box-model-demo">
    Content Area
  </div>
</div>

<div style="margin-top: 2rem; padding: 1rem; background: #f8fafc; border-radius: 8px;">
  <h4 style="margin-top: 0;">크기 계산:</h4>
  <p style="margin: 0.5rem 0; font-family: monospace; font-size: 0.9rem;">
    <strong>총 너비</strong> = margin(30) + border(5) + padding(20) + width(200) + padding(20) + border(5) + margin(30)<br/>
    = <strong>310px</strong> (margin 제외 시 250px)
  </p>
  <p style="margin: 0.5rem 0; font-family: monospace; font-size: 0.9rem;">
    <strong>총 높이</strong> = margin(30) + border(5) + padding(20) + height(100) + padding(20) + border(5) + margin(30)<br/>
    = <strong>210px</strong> (margin 제외 시 150px)
  </p>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Box-Sizing: Content-Box vs Border-Box</h2>
        <div className="section-description">
          <p>
            <strong>가장 중요한 개념!</strong> <code>box-sizing</code>은 width/height가 <strong>어느 영역까지 포함하는지</strong>를 결정합니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>content-box</code> (기본값): width/height는 <strong>Content만</strong> 포함. Padding과 Border는 추가됨.</li>
            <li><code>border-box</code> (권장): width/height는 <strong>Content + Padding + Border</strong> 모두 포함. 크기 예측이 쉬움!</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'box-sizing',
              type: 'radio',
              value: boxSizing,
              onChange: setBoxSizing,
              options: ['content-box', 'border-box']
            },
            {
              name: 'padding',
              type: 'radio',
              value: padding,
              onChange: setPadding,
              options: ['0px', '20px', '40px']
            },
            {
              name: 'border',
              type: 'radio',
              value: border,
              onChange: setBorder,
              options: ['0px', '5px', '10px', '20px']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="box-sizing"
          height="400px"
          initialCss={`.sized-box {
  box-sizing: ${boxSizing};
  
  /* 모든 박스에 동일한 width 지정 */
  width: 200px;
  height: 100px;
  
  padding: ${padding};
  border: ${border} solid #8b5cf6;
  margin: 10px;
  
  background-color: #ddd6fe;
  color: #5b21b6;
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`}
          currentCss={`.sized-box {
  box-sizing: ${boxSizing};
  width: 200px;
  height: 100px;
  padding: ${padding};
  border: ${border} solid #8b5cf6;
  margin: 10px;
  background-color: #ddd6fe;
  color: #3b0764;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`}
          initialHtml={`<div style="display: flex; gap: 20px;">
  <div class="sized-box">Box A</div>
  <div class="sized-box">Box B</div>
</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: #fef3c7; border-radius: 8px;">
  <p style="margin: 0; font-size: 0.9rem; color: #78350f;">
    <strong>현재: box-sizing: ${boxSizing}</strong><br/><br/>
    
    ${boxSizing === 'content-box'
              ? `<strong>content-box</strong>: Content 영역만 200px.<br/>
         실제 총 너비 = 200 + padding(${padding}×2) + border(${border}×2) = ${200 + parseInt(padding) * 2 + parseInt(border) * 2}px`
              : `<strong>border-box</strong>: Content + Padding + Border 합쳐서 200px.<br/>
         실제 총 너비 = 200px (항상 일정!)`
            }
  </p>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Margin Collapse (마진 상쇄)</h2>
        <div className="section-description">
          <p>
            수직 방향의 margin은 <strong>겹쳐질 때 큰 쪽 하나만 적용</strong>되는 특이한 동작을 합니다. (수평 margin은 항상 합쳐짐)
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li>인접한 형제 요소의 margin-bottom과 margin-top이 만나면 둘 중 큰 값만 적용</li>
            <li>부모와 첫 번째/마지막 자식의 margin도 상쇄될 수 있음</li>
            <li>빈 블록의 margin-top과 margin-bottom도 상쇄됨</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'Box 1 margin-bottom',
              type: 'radio',
              value: margin,
              onChange: setMargin,
              options: ['10px', '30px', '50px']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="margin-collapse"
          height="400px"
          initialCss={`.collapse-box {
  width: 100%;
  padding: 1rem;
  background-color: #a5f3fc;
  border: 2px solid #0891b2;
  color: #164e63;
  font-weight: bold;
}

.box-1 {
  margin-bottom: ${margin}; /* 이 값을 변경해보세요 */
}

.box-2 {
  margin-top: 30px; /* 고정값 */
  background-color: #fcd34d;
  border-color: #f59e0b;
  color: #78350f;
}`}
          currentCss={`.collapse-box {
  width: 100%;
  padding: 1rem;
  background-color: #a5f3fc;
  border: 2px solid #0891b2;
  color: #164e63;
  font-weight: bold;
}

.box-1 {
  margin-bottom: ${margin};
}

.box-2 {
  margin-top: 30px;
  background-color: #fcd34d;
  border-color: #f59e0b;
  color: #78350f;
}`}
          initialHtml={`<div class="collapse-box box-1">
  Box 1 (margin-bottom: ${margin})
</div>

<div class="collapse-box box-2">
  Box 2 (margin-top: 30px)
</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: #f1f5f9; border-radius: 8px;">
  <p style="margin: 0; font-size: 0.9rem; color: #1e293b;">
    <strong>실제 간격:</strong> ${Math.max(parseInt(margin), 30)}px<br/>
    (${margin}과 30px 중 큰 값)<br/><br/>
    
    <strong>Margin Collapse를 방지하려면:</strong><br/>
    • 부모에 padding/border 추가<br/>
    • Flexbox/Grid 컨테이너 사용<br/>
    • display: flow-root 사용
  </p>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Outline vs Border</h2>
        <p className="section-description">
          <code>outline</code>은 <code>border</code>와 달리 공간을 차지하지 않으며, 요소의 외곽에 그려집니다. 포커스 표시 등에 주로 사용됩니다.
        </p>
        <LiveCodeEditor
          scopeId="outline-vs-border"
          height="400px"
          initialCss={`.box-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.base-box {
  width: 100px;
  height: 100px;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #1e293b;
}

.has-border {
  border: 10px solid #3b82f6;
}

.has-outline {
  outline: 10px solid #ef4444;
  outline-offset: 5px; /* 외곽선과의 간격 조절 가능 */
}
`}
          initialHtml={`<div class="box-container">
  <div class="base-box has-border">Border</div>
  <div class="base-box has-outline">Outline</div>
  <div class="base-box">Normal</div>
</div>

<div style="margin-top: 1.5rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>차이점:</strong><br/>
  • <strong>Border</strong>: 박스 모델의 크기에 포함됨 (레이아웃에 영향)<br/>
  • <strong>Outline</strong>: 크기에 포함되지 않음 (다른 요소 위에 겹쳐 그려짐)
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Shadow Comparison</h2>
        <p className="section-description">
          <code>box-shadow</code>는 사각형 박스에, <code>filter: drop-shadow</code>는 투명도가 포함된 실제 이미지 모양에 그림자를 생성합니다.
        </p>
        <LiveCodeEditor
          scopeId="shadow-comparison"
          height="400px"
          initialCss={`.shadow-demo-grid {
  display: flex;
  gap: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  justify-content: center;
}

.shape {
  font-size: 4rem;
  padding: 1rem;
  border: 4px dashed #cbd5e1;
}

.use-box-shadow {
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}

.use-drop-shadow {
  filter: drop-shadow(10px 10px 15px rgba(0,0,0,0.3));
}
`}
          initialHtml={`<div class="shadow-demo-grid">
  <div class="shape use-box-shadow">
    ⭐
  </div>
  
  <div class="shape use-drop-shadow">
    ⭐
  </div>
</div>

<div style="margin-top: 1.5rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>왼쪽 (box-shadow)</strong>: 별 모양이 아닌 사각형 박스 전체에 그림자가 생김<br/>
  <strong>오른쪽 (drop-shadow)</strong>: 실제 별 모양 자취를 따라 그림자가 생김 (PNG, SVG에 적합!)
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전 Tip: 전역 Box-Sizing 설정</h2>
        <p className="section-description">
          거의 모든 프로젝트에서 사용하는 Best Practice: 모든 요소에 <code>border-box</code>를 적용합니다.
        </p>

        <LiveCodeEditor
          scopeId="global-box-sizing"
          height="250px"
          initialCss={`/* 전역 설정 (프로젝트 시작 시 추가) */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 이제 모든 요소에서 크기 계산이 직관적! */
.example {
  width: 300px;
  padding: 20px;
  border: 5px solid #000;
  /* 총 너비는 여전히 300px! */
}`}
          initialHtml={`<div class="example" style="background: #e0e7ff; color: #312e81; padding: 1rem; font-weight: 600;">
  <strong>width: 300px</strong><br/>
  padding: 20px, border: 5px<br/>
  하지만 총 너비는 여전히 300px!
</div>

<p style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  이 설정을 사용하면 레이아웃 계산이 훨씬 쉬워집니다.<br/>
  거의 모든 CSS 프레임워크(Bootstrap, Tailwind 등)가 이 방식을 사용합니다.
</p>`}
        />
      </section>
      <section className="study-section">
        <h2 className="section-title">aspect-ratio (비율 제어)</h2>
        <div className="section-description">
          <p>
            <code>aspect-ratio</code>는 요소의 <strong>가로 세로 비율</strong>을 고정합니다.
            이미지나 카드 UI의 크기가 변해도 비율을 유지해야 할 때 혁명적으로 편리합니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="aspect-ratio-demo"
          height="450px"
          initialCss={`.ratio-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
}

.video-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.thumbnail {
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: 100%;
  
  /* 16:9 비율 고정 */
  aspect-ratio: 16 / 9;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.square-box {
  background: #10b981;
  width: 100px;
  
  /* 1:1 정사각형 고정 */
  aspect-ratio: 1 / 1;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}`}
          initialHtml={`<div class="ratio-container">
  <div class="video-card">
    <div class="thumbnail">16:9 Thumbnail</div>
    <div style="padding: 1rem;">
      <h4 style="margin: 0; color: #1e293b;">Video Title</h4>
      <p style="margin: 0.5rem 0 0; font-size: 0.8rem; color: #64748b;">항상 16:9 비율을 유지합니다.</p>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center;">
    <div class="square-box">1:1</div>
    <p style="color: #64748b; font-size: 0.8rem;">가로 너비만 정해도<br/>높이가 자동 계산됩니다.</p>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>과거 방식</strong>: <code>padding-top: 56.25%</code> 같은 복잡한 해킹이 필요했습니다.<br/>
  <strong>현재 방식</strong>: <code>aspect-ratio: 16 / 9</code> 한 줄이면 끝!
</div>`}
        />
      </section>
    </div>
  );
}

export default BoxModelStudy;
