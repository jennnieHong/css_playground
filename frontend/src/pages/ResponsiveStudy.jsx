import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function ResponsiveStudy() {
  const [fluidUnit, setFluidUnit] = useState('rem');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Responsive Design</h1>
        <p className="page-subtitle">Modern techniques: Media Queries, clamp(), fluid units, Container Queries</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">반응형 디자인 진화</h2>
        <div className="section-description">
          <p>
            반응형 디자인은 단순히 Media Query를 넘어 더 정교한 기술로 진화했습니다:
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><strong>Media Queries</strong>: 뷰포트 크기 기반 (전통적)</li>
            <li><strong>Fluid Units</strong>: %, vw, vh로 유연한 크기</li>
            <li><strong>clamp()</strong>: 최소/최대 값을 가진 유동적 크기</li>
            <li><strong>Container Queries</strong>: 컨테이너 크기 기반 (현대적)</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">Media Queries 기본</h2>
        <p className="section-description">
          뷰포트 크기에 따라 스타일을 변경하는 가장 기본적인 방법입니다.
        </p>

        <LiveCodeEditor
          scopeId="media-queries"
          height="400px"
          initialCss={`/* Mobile First 접근 */
.responsive-box {
  width: 100%;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
}

/* Tablet (768px 이상) */
@media (min-width: 768px) {
  .responsive-box {
    padding: 2rem;
    font-size: 1.2rem;
  }
}

/* Desktop (1024px 이상) */
@media (min-width: 1024px) {
  .responsive-box {
    padding: 3rem;
    font-size: 1.5rem;
  }
}`}
          initialHtml={`<div class="responsive-box">
  Resize your browser window!
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Breakpoints:</strong><br/>
  • Mobile: ~ 767px<br/>
  • Tablet: 768px ~ 1023px<br/>
  • Desktop: 1024px+
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">clamp() - 반응형의 게임 체인저</h2>
        <div className="section-description">
          <p>
            <code>clamp(최소값, 선호값, 최대값)</code>은 반응형 타이포그래피의 혁명입니다.<br />
            Media Query 없이 유동적인 크기를 만들 수 있습니다!
          </p>
        </div>

        <LiveCodeEditor
          scopeId="clamp-demo"
          initialCss={`.clamp-demo {
  /* 최소 16px, 뷰포트 기준 유동, 최대 32px */
  font-size: clamp(1rem, 2vw + 1rem, 2rem);
  
  /* 최소 300px, 뷰포트의 80%, 최대 800px */
  width: clamp(300px, 80vw, 800px);
  
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  color: #1e293b;
  line-height: 1.6;
}

.clamp-demo h3 {
  margin: 0 0 1rem 0;
  /* 제목도 clamp로 반응형 */
  font-size: clamp(1.5rem, 3vw + 1rem, 3rem);
}`}
          initialHtml={`<div class="clamp-demo">
  <h3>Responsive Typography</h3>
  <p>
    이 텍스트는 clamp()를 사용하여 브라우저 크기에 맞춰 
    자동으로 크기가 조정됩니다. Media Query가 전혀 필요 없습니다!
  </p>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>브라우저 크기를 바꿔보세요!</strong><br/>
  폰트 크기와 너비가 부드럽게 변경됩니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">min() & max()</h2>
        <p className="section-description">
          여러 값 중 최소/최대값을 선택합니다. 반응형 레이아웃에 매우 유용합니다.
        </p>

        <LiveCodeEditor
          scopeId="min-max"
          previewHeight="700px" codeHeight="500px"
          initialCss={`.min-max-demo {
  /* 뷰포트의 90% 또는 600px 중 작은 값 */
  width: min(90vw, 600px);
  
  /* 최소 높이: 300px 또는 뷰포트 높이의 50% 중 큰 값 */
  min-height: max(300px, 50vh);
  
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}`}
          initialHtml={`<div class="min-max-demo">
  width: min(90vw, 600px)<br/>
  min-height: max(300px, 50vh)
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>min():</strong> 작은 화면에서는 90vw, 큰 화면에서는 600px로 제한<br/>
  <strong>max():</strong> 최소한 300px는 유지
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Fluid Units (%, vw, vh)</h2>
        <p className="section-description">
          뷰포트 단위로 진정한 유동적 레이아웃을 만듭니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Unit',
              type: 'radio',
              value: fluidUnit,
              onChange: setFluidUnit,
              options: [
                { value: 'rem', label: 'Fixed (rem)' },
                { value: 'vw', label: 'Viewport Width (vw)' },
                { value: 'vh', label: 'Viewport Height (vh)' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="fluid-units" codeHeight="350px"
          initialCss={`.fluid-demo {
  ${fluidUnit === 'rem' ? 'width: 20rem; height: 10rem;' :
              fluidUnit === 'vw' ? 'width: 50vw; height: 20vw;' :
                'width: 50vw; height: 30vh;'}
  
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 8px;
  margin: 0 auto;
}`}
          currentCss={`.fluid-demo {
  ${fluidUnit === 'rem' ? 'width: 20rem; height: 10rem;' :
              fluidUnit === 'vw' ? 'width: 50vw; height: 20vw;' :
                'width: 50vw; height: 30vh;'}
  
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 8px;
  margin: 0 auto;
}`}
          initialHtml={`<div class="fluid-demo">
  ${fluidUnit === 'rem' ? 'Fixed Size (rem)' :
              fluidUnit === 'vw' ? 'Viewport Width (vw)' :
                'Viewport Height (vh)'}
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  브라우저 크기를 변경하면서 차이를 확인하세요!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전: 반응형 카드 그리드</h2>
        <p className="section-description">
          최신 기법들을 조합한 실용적인 예제입니다.
        </p>

        <LiveCodeEditor
          scopeId="responsive-grid"
          codeHeight="550px"
          initialCss={`.responsive-grid {
  display: grid;
  /* auto-fit: 자동으로 열 개수 조정 */
  /* minmax: 최소 250px, 최대 1fr */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: clamp(1rem, 2vw, 2rem);
  width: min(100%, 1200px);
  margin: 0 auto;
}

.grid-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.grid-card h4 {
  margin: 0 0 0.5rem 0;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #1e293b;
}

.grid-card p {
  margin: 0;
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
}`}
          initialHtml={`<div class="responsive-grid">
  <div class="grid-card">
    <h4>Card 1</h4>
    <p>Automatically responsive with auto-fit and minmax!</p>
  </div>
  <div class="grid-card">
    <h4>Card 2</h4>
    <p>No media queries needed for this grid.</p>
  </div>
  <div class="grid-card">
    <h4>Card 3</h4>
    <p>Resize the window to see magic happen.</p>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Production-ready!</strong> 이 패턴을 실제 프로젝트에 바로 사용하세요.
</div>`}
        />
      </section>
    </div>
  );
}

export default ResponsiveStudy;
