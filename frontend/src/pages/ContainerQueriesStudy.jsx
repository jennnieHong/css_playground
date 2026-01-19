import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function ContainerQueriesStudy() {
  const [cardLayout, setCardLayout] = useState('column');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Container Queries</h1>
        <p className="page-subtitle">Modern responsive design based on container size, not viewport</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Container Queries란?</h2>
        <div className="section-description">
          <p>
            <code>@container</code>는 <strong>요소의 크기</strong>에 따라 스타일을 변경합니다. 
            Media Query가 뷰포트 크기를 보는 반면, Container Query는 부모 컨테이너 크기를 봅니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><strong>컴포넌트 단위</strong> 반응형 디자인</li>
            <li>재사용 가능한 컴포넌트 작성</li>
            <li>사이드바, 그리드 아이템 등에 완벽</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">기본 사용법</h2>
        <p className="section-description">
          1. 컨테이너 정의: <code>container-type: inline-size</code><br/>
          2. 쿼리 작성: <code>@container (min-width: 400px)</code>
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Card Container',
              type: 'radio',
              value: cardLayout,
              onChange: setCardLayout,
              options: [
                { value: 'column', label: 'Narrow (Column)' },
                { value: 'row', label: 'Wide (Row)' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="container-query-basic"
          height="450px"
          initialCss={`/* 컨테이너 정의 */
.card-container {
  container-type: inline-size;
  container-name: card;
  width: ${cardLayout === 'column' ? '300px' : '600px'};
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  transition: width 0.3s;
}

.card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
}

.card p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

.card-content {
  display: grid;
  gap: 1rem;
}

/* Container Query: 컨테이너가 400px 이상일 때 */
@container card (min-width: 400px) {
  .card-content {
    grid-template-columns: 150px 1fr;
    align-items: center;
  }
  
  .card-image {
    height: 100px;
  }
}

.card-image {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 6px;
  height: 150px;
  transition: height 0.3s;
}`}
          currentCss={`/* 컨테이너 정의 */
.card-container {
  container-type: inline-size;
  container-name: card;
  width: ${cardLayout === 'column' ? '300px' : '600px'};
  background: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  transition: width 0.3s;
}

.card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
}

.card p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}

.card-content {
  display: grid;
  gap: 1rem;
}

@container card (min-width: 400px) {
  .card-content {
    grid-template-columns: 150px 1fr;
    align-items: center;
  }
  
  .card-image {
    height: 100px;
  }
}

.card-image {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 6px;
  height: 150px;
  transition: height 0.3s;
}`}
          initialHtml={`<div class="card-container">
  <div class="card">
    <div class="card-content">
      <div class="card-image"></div>
      <div>
        <h3>Responsive Card</h3>
        <p>컨테이너가 좁으면 세로로, 넓으면 가로로 배치됩니다!</p>
      </div>
    </div>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Magic!</strong> 위 토글로 컨테이너 너비를 바꿔보세요.<br/>
  컨테이너 크기에 따라 레이아웃이 자동으로 변경됩니다!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Why Container Queries?</h2>
        <p className="section-description">
          Media Query vs Container Query 비교
        </p>

        <LiveCodeEditor
          scopeId="why-container-queries"
          height="400px"
          initialCss={`/* 두 개의 동일한 컴포넌트 */
.sidebar {
  container-type: inline-size;
  width: 250px;
  background: #dbeafe;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.main {
  container-type: inline-size;
  width: 100%;
  background: #fef3c7;
  padding: 1rem;
  border-radius: 8px;
}

/* 동일한 컴포넌트, 다른 컨테이너 크기 */
.widget {
  background: #ffffff;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.widget h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #1e293b;
}

.widget p {
  margin: 0;
  font-size: 0.8rem;
  color: #64748b;
}

/* Container Query: 300px 이상일 때만 큰 스타일 */
@container (min-width: 300px) {
  .widget h4 {
    font-size: 1.2rem;
  }
  
  .widget p {
    font-size: 1rem;
  }
}`}
          initialHtml={`<div style="display: flex; gap: 1rem;">
  <div class="sidebar">
    <div class="widget">
      <h4>Widget</h4>
      <p>Sidebar (250px)</p>
    </div>
  </div>
  
  <div class="main">
    <div class="widget">
      <h4>Widget</h4>
      <p>Main Area (넓음)</p>
    </div>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>동일한 .widget 컴포넌트</strong>지만 컨테이너 크기에 따라 다르게 보입니다!<br/>
  이것이 Container Queries의 힘입니다.
</div>`}
        />
      </section>
    </div>
  );
}

export default ContainerQueriesStudy;
