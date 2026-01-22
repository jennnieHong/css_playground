/**
 * ContainerQueriesStudy.jsx
 * 뷰포트가 아닌 부모 요소의 크기에 반응하는 컨테이너 쿼리(Container Queries) 실습 페이지
 */
import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function ContainerQueriesStudy() {
  // 상태 관리: 컨테이너 박스의 너비 전환 (column, row)
  const [cardLayout, setCardLayout] = useState('column');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Container Queries</h1>
        <p className="page-subtitle">뷰포트를 넘어 요소 중심의 반응형 디자인으로</p>
      </div>

      {/* 섹션 1: 컨테이너 쿼리의 등장 배경과 필요성 */}
      <section className="study-section">
        <h2 className="section-title">미디어 쿼리의 한계를 극복하다</h2>
        <div className="section-description">
          <p>
            과거에는 라우저 창(Viewport) 크기만 알 수 있었지만, 이제는 <strong>특정 부모 요소의 크기</strong>를 기준으로 스타일을 바꿀 수 있습니다.
            이것이 가능한 이유는 <code>@container</code> 덕분입니다.
          </p>
          <ul className="description-list">
            <li><strong>독립성</strong>: 컴포넌트가 어디에 위치하든 자기 자신의 너비에 맞춰 레이아웃 변경</li>
            <li><strong>재사용성</strong>: 사이드바든 메인 영역이든 하나의 컴포넌트 코드로 대응</li>
            <li><strong>정교함</strong>: 뷰포트와 상관없이 실제 공간에 최적화된 스타일 적용</li>
          </ul>
        </div>
      </section>

      {/* 섹션 2: 컨테이너 기준점 선언 및 탐색 메커니즘 */}
      <section className="study-section">
        <h2 className="section-title">기본 메커니즘: Containment</h2>
        <div className="section-description">
          <p>컨테이너 쿼리를 쓰려면 부모를 <strong>기준점(Container)</strong>으로 정의해야 하며, 브라우저는 다음과 같은 규칙으로 기준을 찾습니다.</p>
          <div className="info-box" style={{ background: '#f8fafc', borderLeft: '4px solid #3b82f6', marginTop: '1rem' }}>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              <li><strong>기준점 선언</strong>: 조상 요소에 <code>container-type: inline-size</code>를 설정해야 합니다.</li>
              <li><strong>가장 가까운 조상 탐색</strong>: <code>@container</code>는 DOM 트리를 타고 상승하며 <strong>가장 가까운 컨테이너 요소</strong>를 자동으로 찾아 크기를 측정합니다.</li>
              <li><strong>이름 기반 탐색</strong>: <code>@container이름 (min-width: 450px)</code>처럼 이름을 지정하면, 여러 컨테이너가 겹쳐 있어도 정확히 해당 이름을 가진 조상을 찾아갑니다.</li>
            </ul>
          </div>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'Container Width',
              type: 'radio',
              value: cardLayout,
              onChange: setCardLayout,
              options: [
                { value: 'column', label: 'Narrow (300px)' },
                { value: 'row', label: 'Wide (650px)' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="cq-basic-demo"
          previewHeight="450px"
          codeHeight="600px"
          initialCss={`.parent-box {
  /* 1. 컨테이너 타입을 정의합니다 (주로 inline-size) */
  container-type: inline-size;
  container-name: card-wrapper;
  
  width: ${cardLayout === 'column' ? '300px' : '650px'};
  background: #f1f5f9;
  padding: 20px;
  border-radius: 12px;
  transition: 0.4s ease;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.image {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 6px;
}

/* 2. 컨테이너 크기에 따른 쿼리 작성 */
@container card-wrapper (min-width: 450px) {
  .card {
    flex-direction: row; /* 넓어지면 가로로 배치 */
    align-items: center;
  }
  .image {
    width: 200px;
    aspect-ratio: 1;
  }
  .desc { font-size: 1.1rem; }
}

.title { margin: 0; color: #1e293b; }
.desc { margin: 0.5rem 0 0; color: #64748b; font-size: 0.9rem; }`}
          currentCss={`.parent-box {
  /* 1. 컨테이너 타입을 정의합니다 (주로 inline-size) */
  container-type: inline-size;
  container-name: card-wrapper;
  
  width: ${cardLayout === 'column' ? '300px' : '650px'};
  background: #f1f5f9;
  padding: 20px;
  border-radius: 12px;
  transition: 0.4s ease;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.image {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 6px;
}

/* 2. 컨테이너 크기에 따른 쿼리 작성 */
@container card-wrapper (min-width: 450px) {
  .card {
    flex-direction: row; /* 넓어지면 가로로 배치 */
    align-items: center;
  }
  .image {
    width: 200px;
    aspect-ratio: 1;
  }
  .desc { font-size: 1.1rem; }
}

.title { margin: 0; color: #1e293b; }
.desc { margin: 0.5rem 0 0; color: #64748b; font-size: 0.9rem; }`}
          initialHtml={`<div class="parent-box">
  <div class="card">
    <div class="image"></div>
    <div class="info">
      <h3 class="title">스마트 컴포넌트</h3>
      <p class="desc">부모의 너비가 450px을 넘어가면 자동으로 가로 레이아웃으로 변신합니다!</p>
    </div>
  </div>
</div>

<div class="info-box">
  위의 라디오 버튼으로 부모 박스의 크기를 조절해보세요. <br/>
  브라우저 전체 창을 줄이지 않아도 <strong>요소 내부적으로</strong> 반응형이 작동합니다.
</div>`}
        />
      </section>

      {/* 섹션 3: 컨테이너 크기에 비례하는 상대 단위 (CQ Units) */}
      <section className="study-section">
        <h2 className="section-title">CQ Units: 컨테이너 전용 단위</h2>
        <div className="section-description">
          <p>뷰포트 단위(vw) 대신 컨테이너 너비에 비례하는 <code>cqw</code> 단위를 쓰면 폰트 크기까지 완벽하게 스케일링됩니다.</p>
        </div>

        <LiveCodeEditor
          scopeId="cq-units-demo"
          previewHeight="400px"
          codeHeight="500px"
          initialCss={`.responsive-container {
  container-type: inline-size;
  border: 4px dashed #cbd5e1;
  padding: 2rem;
  resize: horizontal; /* 직접 조절해보세요! */
  overflow: hidden;
  min-width: 200px;
  max-width: 100%;
}

.cq-text {
  /* 컨테이너 너비의 8%로 폰트 크기 설정 */
  font-size: 8cqw; 
  font-weight: 800;
  text-align: center;
  background: linear-gradient(to right, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}

.cq-info {
  font-size: 3cqw;
  color: #64748b;
  text-align: center;
}`}
          initialHtml={`<div class="responsive-container">
  <h1 class="cq-text">SCALING TEXT</h1>
  <p class="cq-info">Container Query Units (cqw)</p>
</div>

<div class="info-box">
  오른쪽 하단 모서리를 잡고 박스 너비를 조절해보세요. <br/>
  (일부 브라우저에서는 Resize 핸들이 보이지 않을 수 있습니다. 뷰포트 크기를 조절해도 컨테이너가 가변적이라면 변화를 확인할 수 있습니다.)
</div>`}
        />
      </section>

      {/* 섹션 4: 그리드 시스템 내에서의 컴포넌트 독립성 확보 */}
      <section className="study-section">
        <h2 className="section-title">실전 활용: 그리드와의 시너지</h2>
        <div className="section-description">
          <p>
            동일한 카드가 그리드의 너비에 따라 각기 다른 스타일로 보여야 할 때
            컨테이너 쿼리는 최고의 선택입니다.
          </p>
        </div>
        <LiveCodeEditor
          scopeId="cq-grid-synergy"
          previewHeight="450px"
          codeHeight="550px"
          initialCss={`.grid-layout {
  display: grid;
  grid-template-columns: 200px 1fr; /* 사이드바와 메인 */
  gap: 1rem;
}

/* 모든 그리드 아이템을 컨테이너로 설정 */
.grid-item {
  container-type: inline-size;
}

.mini-card {
  padding: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

/* 컨테이너 너비가 좁을 때 (사이드바) */
@container (max-width: 250px) {
  .mini-card .content { display: none; }
  .mini-card h4 { font-size: 0.8rem; margin: 0; text-align: center; }
}

/* 컨테이너 너비가 넓을 때 (메인 영역) */
@container (min-width: 251px) {
  .mini-card { display: flex; gap: 1rem; align-items: center; }
  .mini-card .icon { font-size: 2rem; }
}
`}
          initialHtml={`<div class="grid-layout">
  <div class="grid-item">
    <div class="mini-card">
      <div class="icon">📁</div>
      <div class="content">
        <h4>사이드바 파일</h4>
        <p>좁아서 간략히 보임</p>
      </div>
    </div>
  </div>
  
  <div class="grid-item">
    <div class="mini-card">
      <div class="icon">📄</div>
      <div class="content">
        <h4>메인 뉴스레터 리포트</h4>
        <p>충분한 공간이 있어 내용을 모두 표시합니다.</p>
      </div>
    </div>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}

export default ContainerQueriesStudy;
