import React from 'react';

function CssArchitectureStudy() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">CSS Architecture</h1>
        <p className="page-subtitle">대규모 프로젝트를 위한 CSS 구조화 방법론</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">왜 CSS 아키텍처가 필요한가요?</h2>
        <p className="section-description">
          프로젝트의 규모가 커질수록 CSS는 복잡해지고 유지보수가 어려워집니다. 
          클래스 명명 규칙 충돌, 불필요한 스타일 중복, 의도치 않은 상속 등을 방지하기 위해 
          체계적인 방법론이 필요합니다.
        </p>
      </section>

      <section className="study-section">
        <h2 className="section-title">BEM (Block Element Modifier)</h2>
        <p className="section-description">
          가장 널리 사용되는 방법론 중 하나로, 클래스 이름을 <strong>Block</strong>, <strong>Element</strong>, <strong>Modifier</strong>로 구분하여 작성합니다.
        </p>
        
        <div className="concept-box" style={{ 
          background: 'var(--bg-secondary)', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          marginTop: '1rem',
          border: '1px solid var(--border-color)'
        }}>
          <h3>Naming Convention</h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
            <li><strong>Block</strong>: 독립적인 의미를 가지는 컴포넌트 (예: <code>.card</code>, <code>.menu</code>)</li>
            <li><strong>Element</strong>: 블록의 일부이자 블록에 의존적인 요소 (예: <code>.card__title</code>, <code>.menu__item</code>)</li>
            <li><strong>Modifier</strong>: 블록이나 엘리먼트의 상태나 모양 변경 (예: <code>.card--featured</code>, <code>.menu__item--active</code>)</li>
          </ul>

          <h4 style={{ marginTop: '1.5rem' }}>Example</h4>
          <pre style={{ 
            background: 'var(--bg-primary)', 
            padding: '1rem', 
            borderRadius: '4px',
            overflowX: 'auto'
          }}>
{`<div class="card card--featured">
  <div class="card__header">
    <h2 class="card__title">Title</h2>
  </div>
  <div class="card__body">
    <p class="card__text">Content...</p>
    <button class="card__button card__button--primary">Click</button>
  </div>
</div>`}
          </pre>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">OOCSS (Object Oriented CSS)</h2>
        <p className="section-description">
          구조와 스킨을 분리하고, 컨테이너와 컨텐츠를 분리하여 재사용성을 높이는 방법론입니다.
        </p>
        <div className="concept-box" style={{ 
          background: 'var(--bg-secondary)', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          marginTop: '1rem', 
          border: '1px solid var(--border-color)'
        }}>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.6' }}>
            <li><strong>Structure</strong>: <code>.btn</code> (크기, 패딩, 정렬 등)</li>
            <li><strong>Skin</strong>: <code>.btn-primary</code>, <code>.btn-danger</code> (색상, 테두리 등)</li>
          </ul>
        </div>
      </section>
      
      <section className="study-section">
        <h2 className="section-title">Atomic CSS (Utility-First)</h2>
        <p className="section-description">
          단일 목적을 가진 매우 작은 클래스들을 조합하여 스타일링하는 방식입니다. (예: Tailwind CSS)
        </p>
        <div className="concept-box" style={{ 
          background: 'var(--bg-secondary)', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          marginTop: '1rem', 
          border: '1px solid var(--border-color)'
        }}>
          <p>예: <code>p-4 flex items-center justify-between bg-white shadow-md</code></p>
        </div>
      </section>
    </div>
  );
}

export default CssArchitectureStudy;
