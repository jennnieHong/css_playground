import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function FlexboxStudy() {
  // State for properties
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [flexDirection, setFlexDirection] = useState('row');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Flexbox Study</h1>
        <p className="page-subtitle">유연한 레이아웃을 만드는 Flexbox</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Flexbox란?</h2>
        <p className="section-description">
          Flexbox는 1차원 레이아웃 시스템으로, 요소들을 행 또는 열로 배치할 수 있습니다.
        </p>
      </section>

      <section className="study-section">
        <h2 className="section-title">기본 예제</h2>
        <LiveCodeEditor
          scopeId="flexbox-basic"
          initialCss={`.flex-demo {
  display: flex;
  gap: 1rem;
}`}
          initialHtml={`<div class="flex-demo flex-row">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Justify Content</h2>
        <div className="section-description">
          <p><strong>주축(Main Axis)</strong>을 따라 아이템을 어떻게 배치할지 결정합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>flex-start</code>: 아이템을 시작점(왼쪽/위)으로 정렬합니다. (기본값)</li>
            <li><code>flex-end</code>: 아이템을 끝점(오른쪽/아래)으로 정렬합니다.</li>
            <li><code>center</code>: 아이템을 가운데로 정렬합니다.</li>
            <li><code>space-between</code>: 첫 아이템은 시작점에, 마지막 아이템은 끝점에 두고 나머지는 균등 분배합니다.</li>
            <li><code>space-around</code>: 모든 아이템 주위에 균등한 여백을 줍니다.</li>
            <li><code>space-evenly</code>: 아이템 사이와 양 끝의 여백이 모두 완전히 똑같게 배분됩니다.</li>
          </ul>
        </div>
        
        <CssPropertyControls
          properties={[
            {
              name: 'justify-content',
              type: 'radio',
              value: justifyContent,
              onChange: setJustifyContent,
              options: [
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly'
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="flexbox-justify"
          initialCss={`.flex-demo {
  display: flex;
  justify-content: ${justifyContent};
  gap: 1rem;
  min-height: 100px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          currentCss={`.flex-demo {
  display: flex;
  justify-content: ${justifyContent};
  gap: 1rem;
  min-height: 100px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          initialHtml={`<div class="flex-demo">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>`}
          height="300px" />
      </section>

      <section className="study-section">
        <h2 className="section-title">Align Items</h2>
        <div className="section-description">
          <p><strong>교차축(Cross Axis)</strong>을 따라 아이템을 어떻게 배치할지 결정합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>stretch</code>: 아이템을 컨테이너 높이만큼 늘립니다. (기본값, height가 auto일 때)</li>
            <li><code>flex-start</code>: 교차축의 시작점으로 정렬합니다.</li>
            <li><code>flex-end</code>: 교차축의 끝점으로 정렬합니다.</li>
            <li><code>center</code>: 교차축의 가운데로 정렬합니다.</li>
            <li><code>baseline</code>: 아이템 내 텍스트의 기준선(baseline)에 맞춰 정렬합니다.</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'align-items',
              type: 'radio',
              value: alignItems,
              onChange: setAlignItems,
              options: [
                'stretch',
                'flex-start',
                'flex-end',
                'center',
                'baseline'
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="flexbox-align"
          initialCss={`.flex-demo {
  display: flex;
  align-items: ${alignItems};
  min-height: 200px;
  gap: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          currentCss={`.flex-demo {
  display: flex;
  align-items: ${alignItems};
  min-height: 200px;
  gap: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          initialHtml={`<div class="flex-demo">
  <div class="flex-item" style="height: auto">Auto</div>
  <div class="flex-item" style="height: 80px">80px</div>
  <div class="flex-item" style="height: 40px">40px</div>
</div>`}
          height="300px"
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Flex Direction</h2>
        <div className="section-description">
           <p>아이템이 배치되는 <strong>축의 방향</strong>을 결정합니다.</p>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'flex-direction',
              type: 'radio',
              value: flexDirection,
              onChange: setFlexDirection,
              options: [
                'row',
                'row-reverse',
                'column',
                'column-reverse'
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="flexbox-direction"
          initialCss={`.flex-demo {
  display: flex;
  flex-direction: ${flexDirection};
  gap: 1rem;
  min-height: 200px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          currentCss={`.flex-demo {
  display: flex;
  flex-direction: ${flexDirection};
  gap: 1rem;
  min-height: 200px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          initialHtml={`<div class="flex-demo">
  <div class="flex-item">One</div>
  <div class="flex-item">Two</div>
  <div class="flex-item">Three</div>
</div>`}
        />
      </section>
    </div>
  );
}

export default FlexboxStudy;
