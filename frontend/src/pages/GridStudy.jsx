import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function GridStudy() {
  const [gridTemplateColumns, setGridTemplateColumns] = useState('repeat(3, 1fr)');
  const [gap, setGap] = useState('1rem');
  const [justifyItems, setJustifyItems] = useState('stretch');
  const [alignItems, setAlignItems] = useState('stretch');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Grid Study</h1>
        <p className="page-subtitle">강력한 2차원 레이아웃 시스템</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">CSS Grid란?</h2>
        <p className="section-description">
          CSS Grid는 2차원 레이아웃 시스템으로, 행과 열을 동시에 제어할 수 있습니다.
        </p>
      </section>

      <section className="study-section">
        <h2 className="section-title">기본 그리드</h2>
        <div className="section-description">
          <p><code>grid-template-columns</code>로 열(Column)의 크기와 개수를 정의합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>repeat(3, 1fr)</code>: 1fr(fraction) 크기의 열을 3개 반복합니다. 균등 분할됩니다.</li>
            <li><code>200px 1fr 1fr</code>: 첫 열은 200px 고정, 나머지는 남은 공간을 균등하게 나눕니다.</li>
            <li><code>1fr 2fr 1fr</code>: 두 번째 열이 첫 번째, 세 번째 열보다 2배 더 넓어집니다.</li>
            <li><code>repeat(auto-fit, minmax(100px, 1fr))</code>: 반응형 패턴입니다. 최소 100px을 보장하되 남는 공간은 늘어납니다.</li>
          </ul>
        </div>
        
        <CssPropertyControls
          properties={[
            {
              name: 'grid-template-columns',
              type: 'select',
              value: gridTemplateColumns,
              onChange: setGridTemplateColumns,
              options: [
                { value: 'repeat(3, 1fr)', label: '3 Columns (Equal)' },
                { value: '200px 1fr 1fr', label: 'Fixed 200px + 2 Flexible' },
                { value: '1fr 2fr 1fr', label: '1:2:1 Ratio' },
                { value: 'repeat(auto-fit, minmax(100px, 1fr))', label: 'Responsive Auto Fit' }
              ]
            },
            {
              name: 'gap',
              type: 'radio',
              value: gap,
              onChange: setGap,
              options: ['0', '0.5rem', '1rem', '2rem']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="grid-basic"
          initialCss={`.grid-demo {
  display: grid;
  grid-template-columns: ${gridTemplateColumns};
  gap: ${gap};
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}`}
          currentCss={`.grid-demo {
  display: grid;
  grid-template-columns: ${gridTemplateColumns};
  gap: ${gap};
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
}`}
          initialHtml={`<div class="grid-demo">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Alignment</h2>
        <div className="section-description">
          <p>그리드 셀 내부에서 아이템의 정렬 방식을 지정합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>justify-items</code>: 가로(행 축) 방향 정렬 (start, end, center, stretch)</li>
            <li><code>align-items</code>: 세로(열 축) 방향 정렬 (start, end, center, stretch)</li>
            <li><code>stretch</code>는 아이템이 셀 가득 채워지도록 늘립니다.</li>
            <li><code>center</code>는 셀의 정중앙에 위치시킵니다.</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'justify-items',
              label: 'justify-items (Horizontal)',
              type: 'radio',
              value: justifyItems,
              onChange: setJustifyItems,
              options: ['stretch', 'start', 'end', 'center']
            },
            {
              name: 'align-items',
              label: 'align-items (Vertical)',
              type: 'radio',
              value: alignItems,
              onChange: setAlignItems,
              options: ['stretch', 'start', 'end', 'center']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="grid-alignment"
          initialCss={`.grid-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  gap: 1rem;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          currentCss={`.grid-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  gap: 1rem;
  justify-items: ${justifyItems};
  align-items: ${alignItems};
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          initialHtml={`<div class="grid-demo">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Grid Template Areas</h2>
        <LiveCodeEditor
          scopeId="grid-areas"
          initialCss={`.grid-demo {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 300px;
}

.header { grid-area: header; background-color: #ff9999; }
.sidebar { grid-area: sidebar; background-color: #99ff99; }
.main { grid-area: main; background-color: #9999ff; }
.footer { grid-area: footer; background-color: #ffff99; }`}
          initialHtml={`<div class="grid-demo">
  <div class="grid-item header">Header</div>
  <div class="grid-item sidebar">Sidebar</div>
  <div class="grid-item main">Main Content</div>
  <div class="grid-item footer">Footer</div>
</div>`}
        />
      </section>
    </div>
  );
}

export default GridStudy;
