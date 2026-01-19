import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function FlexboxStudy() {
  // State for properties
  const [justifyContent, setJustifyContent] = useState('flex-start');
  const [alignItems, setAlignItems] = useState('stretch');
  const [flexDirection, setFlexDirection] = useState('row');
  const [flexWrap, setFlexWrap] = useState('nowrap');
  const [gap, setGap] = useState('1rem');
  const [alignContent, setAlignContent] = useState('stretch');

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

      <section className="study-section">
        <h2 className="section-title">Flex Wrap</h2>
        <div className="section-description">
          <p>아이템이 컨테이너를 넘어갈 때 <strong>줄바꿈 여부</strong>를 결정합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>nowrap</code>: 줄바꿈 없이 한 줄에 모두 배치 (기본값, 넘치면 축소)</li>
            <li><code>wrap</code>: 넘치면 다음 줄로 이동</li>
            <li><code>wrap-reverse</code>: 넘치면 위쪽으로 줄바꿈</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'flex-wrap',
              type: 'radio',
              value: flexWrap,
              onChange: setFlexWrap,
              options: ['nowrap', 'wrap', 'wrap-reverse']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="flexbox-wrap"
          initialCss={`.flex-demo {
  display: flex;
  flex-wrap: ${flexWrap};
  gap: 1rem;
  min-height: 150px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.flex-item {
  min-width: 120px;
}`}
          currentCss={`.flex-demo {
  display: flex;
  flex-wrap: ${flexWrap};
  gap: 1rem;
  min-height: 150px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.flex-item {
  min-width: 120px;
}`}
          initialHtml={`<div class="flex-demo">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
  <div class="flex-item">Item 4</div>
  <div class="flex-item">Item 5</div>
  <div class="flex-item">Item 6</div>
</div>`}
          height="350px"
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Gap (간격)</h2>
        <div className="section-description">
          <p>아이템들 사이의 <strong>간격</strong>을 설정합니다. <code>margin</code> 보다 간결하고 직관적입니다.</p>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'gap',
              type: 'radio',
              value: gap,
              onChange: setGap,
              options: ['0', '0.5rem', '1rem', '2rem', '3rem']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="flexbox-gap"
          initialCss={`.flex-demo {
  display: flex;
  flex-wrap: wrap;
  gap: ${gap};
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          currentCss={`.flex-demo {
  display: flex;
  flex-wrap: wrap;
  gap: ${gap};
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}`}
          initialHtml={`<div class="flex-demo">
  <div class="flex-item">A</div>
  <div class="flex-item">B</div>
  <div class="flex-item">C</div>
  <div class="flex-item">D</div>
</div>`}
          height="250px"
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Align Content</h2>
        <div className="section-description">
          <p><strong>여러 줄</strong>이 있을 때 줄 사이의 간격을 조정합니다. <code>flex-wrap: wrap</code>이 필요합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>stretch</code>: 줄들이 컨테이너를 채우도록 늘어남 (기본값)</li>
            <li><code>flex-start</code>: 시작점에 모음</li>
            <li><code>flex-end</code>: 끝점에 모음</li>
            <li><code>center</code>: 가운데에 모음</li>
            <li><code>space-between</code>: 줄 사이 균등 배치</li>
            <li><code>space-around</code>: 줄 주위 균등 여백</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'align-content',
              type: 'radio',
              value: alignContent,
              onChange: setAlignContent,
              options: ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="flexbox-align-content"
          initialCss={`.flex-demo {
  display: flex;
  flex-wrap: wrap;
  align-content: ${alignContent};
  gap: 0.5rem;
  min-height: 250px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.flex-item {
  min-width: 80px;
  height: 50px;
}`}
          currentCss={`.flex-demo {
  display: flex;
  flex-wrap: wrap;
  align-content: ${alignContent};
  gap: 0.5rem;
  min-height: 250px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
}

.flex-item {
  min-width: 80px;
  height: 50px;
}`}
          initialHtml={`<div class="flex-demo">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
  <div class="flex-item">6</div>
  <div class="flex-item">7</div>
  <div class="flex-item">8</div>
</div>`}
          height="400px"
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전 예제: 네비게이션 바</h2>
        <p className="section-description">
          Flexbox를 사용한 실제 네비게이션 바 레이아웃입니다. 로고는 왼쪽, 메뉴는 오른쪽에 배치합니다.
        </p>

        <LiveCodeEditor
          scopeId="flexbox-navbar"
          height="300px"
          initialCss={`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: white;
}`}
          initialHtml={`<nav class="navbar">
  <div class="logo">🚀 MyApp</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전 예제: 카드 레이아웃</h2>
        <p className="section-description">
          Flexbox로 반응형 카드 그리드를 만듭니다. <code>flex-wrap: wrap</code>과 <code>flex-basis</code>를 활용합니다.
        </p>

        <LiveCodeEditor
          scopeId="flexbox-cards"
          height="450px"
          initialCss={`.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f1f5f9;
  border-radius: 12px;
}

.card {
  flex: 1 1 200px;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.07);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
}`}
          initialHtml={`<div class="card-container">
  <div class="card">
    <div class="card-icon">⚡</div>
    <div class="card-title">빠른 속도</div>
    <div class="card-desc">최적화된 성능으로 빠른 로딩</div>
  </div>
  <div class="card">
    <div class="card-icon">🔒</div>
    <div class="card-title">보안</div>
    <div class="card-desc">안전한 데이터 보호</div>
  </div>
  <div class="card">
    <div class="card-icon">🎨</div>
    <div class="card-title">디자인</div>
    <div class="card-desc">모던한 UI/UX</div>
  </div>
  <div class="card">
    <div class="card-icon">📱</div>
    <div class="card-title">반응형</div>
    <div class="card-desc">모든 기기에서 완벽하게</div>
  </div>
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전 예제: 센터링 마스터</h2>
        <p className="section-description">
          Flexbox로 요소를 완벽하게 가운데 정렬하는 가장 쉬운 방법입니다.
        </p>

        <LiveCodeEditor
          scopeId="flexbox-center"
          height="350px"
          initialCss={`.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  border-radius: 12px;
}

.centered-box {
  background: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  text-align: center;
}

.centered-box h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
}

.centered-box p {
  margin: 0;
  color: #64748b;
}`}
          initialHtml={`<div class="center-container">
  <div class="centered-box">
    <h3>완벽한 센터링!</h3>
    <p>justify-content + align-items = ❤️</p>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}

export default FlexboxStudy;
