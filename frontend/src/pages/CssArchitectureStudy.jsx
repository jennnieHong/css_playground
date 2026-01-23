/**
 * CssArchitectureStudy.jsx
 * 대규모 프로젝트를 위한 CSS 아키텍처 및 설계 전략 실습 페이지
 */
import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import PageHeader from '../components/PageHeader';

function CssArchitectureStudy() {
  return (
    <div className="page-container">
      <PageHeader
        title="CSS Architecture"
        subtitle="대규모 프로젝트를 위한 체계적인 스타일 관리 전략"
      />

      {/* 섹션 1: CSS 아키텍처의 필요성과 유지보수성 */}
      <section className="study-section">
        <h2 className="section-title">왜 아키텍처가 중요한가요?</h2>
        <div className="section-description">
          <p>
            혼자 만드는 작은 프로젝트에서는 CSS가 500줄을 넘지 않지만, 카카오나 네이버 같은 대형 서비스는 수만 줄의 CSS를 관리합니다.
            아키텍처가 없으면 다음과 같은 <strong>"CSS의 지옥"</strong>에 빠지게 됩니다.
          </p>
          <ul className="description-list">
            <li><strong>명시도 전쟁</strong>: <code>!important</code>가 남발되어 유지보수 불가능</li>
            <li><strong>클래스 이름 충돌</strong>: <code>.button</code>이 여기저기서 다른 모양으로 정의됨</li>
            <li><strong>코드 비대화</strong>: 사용하지 않는 코드를 무서워서 지우지 못하고 계속 쌓임</li>
          </ul>
        </div>
      </section>

      {/* 섹션 2: BEM (Block, Element, Modifier) 방법론 */}
      <section className="study-section">
        <h2 className="section-title">BEM: 직관적인 명명 규칙</h2>
        <div className="section-description">
          <p>
            BEM(Block, Element, Modifier)은 클래스 이름만 보고도 <strong>구조와 역할</strong>을 알 수 있게 해줍니다.
          </p>
          <p className="highlight-box">
            • <code>__</code> (언더바 두 개): 하위 요소 (Element)<br />
            • <code>--</code> (하이픈 두 개): 상태나 변형 (Modifier)
          </p>
        </div>

        <LiveCodeEditor
          scopeId="bem-example"
          previewHeight="400px"
          codeHeight="600px"
          initialCss={`.card {
  /* Block: 독립적인 컴포넌트 */
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card__header {
  /* Element: 블록의 일부 */
  padding: 1.5rem;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.card__title {
  /* Element */
  margin: 0;
  font-size: 1.25rem;
  color: #1e293b;
}

.card__body {
  /* Element */
  padding: 1.5rem;
}

/* Modifier: 스타일 변형 */
.card--featured {
  border: 2px solid #667eea;
}

.card--featured .card__title {
  color: #667eea;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background: #667eea;
  color: white;
}`}
          initialHtml={`<div class="card card--featured">
  <div class="card__header">
    <h3 class="card__title">추천 코스 (Featured Card)</h3>
  </div>
  <div class="card__body">
    <p>BEM을 사용하면 클래스 이름이 길어지지만, 중복 위험이 거의 없습니다.</p>
    <button class="btn btn--primary">자세히 보기</button>
  </div>
</div>`}
        />
      </section>

      {/* 섹션 3: SMACSS (Scalable and Modular Architecture for CSS) */}
      <section className="study-section">
        <h2 className="section-title">SMACSS: 스타일의 5가지 범주</h2>
        <div className="section-description">
          <p>스타일을 역할에 따라 5개의 레이어로 나누어 관리합니다.</p>
          <div className="table-container" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '0.75rem' }}>범주</th>
                  <th style={{ padding: '0.75rem' }}>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '0.75rem' }}><strong>Base</strong></td>
                  <td>브라우저 초기화, 기본 태그 스타일 (<code>html</code>, <code>body</code>, <code>a</code>)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '0.75rem' }}><strong>Layout</strong></td>
                  <td>큰 격자 구조 (<code>.header</code>, <code>.footer</code>, <code>.grid-3-col</code>)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '0.75rem' }}><strong>Module</strong></td>
                  <td>재사용 가능한 컴포넌트 단위 (BEM의 Block)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '0.75rem' }}><strong>State</strong></td>
                  <td>확장된 상태 (<code>.is-hidden</code>, <code>.is-active</code>, <code>.is-collapsed</code>)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                  <td style={{ padding: '0.75rem' }}><strong>Theme</strong></td>
                  <td>다크 모드 등 시각적 테마 오버라이드</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 섹션 4: ITCSS (Inverted Triangle CSS)와 명시도 관리 */}
      <section className="study-section">
        <h2 className="section-title">ITCSS: 명시도 관리의 끝판왕</h2>
        <div className="section-description">
          <p>
            ITCSS(Inverted Triangle CSS)는 <strong>명시도(Specificity)</strong>가 낮은 스타일부터 높은 스타일 순서로 배치하여 충돌을 막습니다.
            위에서 아래로 갈수록 구제적이고 명시도가 높아집니다.
          </p>
          <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#e2e8f0', width: '90%', marginInline: 'auto' }}>Settings (변수)</div>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#cbd5e1', width: '80%', marginInline: 'auto' }}>Tools (Mixins)</div>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#94a3b8', width: '70%', marginInline: 'auto' }}>Generic (Reset)</div>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#64748b', width: '60%', marginInline: 'auto' }}>Elements (Tags)</div>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#475569', width: '50%', marginInline: 'auto', color: 'white' }}>Objects (Layout)</div>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#334155', width: '40%', marginInline: 'auto', color: 'white' }}>Components (UI)</div>
            <div style={{ margin: '0.5rem', padding: '0.5rem', background: '#1e293b', width: '30%', marginInline: 'auto', color: 'white' }}>Trumps (!important)</div>
          </div>
        </div>
      </section>

      {/* 섹션 5: 유틸리티 우선(Utility-First) 접근 방식 */}
      <section className="study-section">
        <h2 className="section-title">현대적인 구조: Utility-First</h2>
        <div className="section-description">
          <p>
            BEM처럼 이름을 짓는 대신, 미리 정의된 유틸리티 클래스만 조합하여 스타일링합니다. (Tailwind CSS 방식)
          </p>
        </div>
        <LiveCodeEditor
          scopeId="utility-first"
          previewHeight="300px"
          codeHeight="400px"
          initialCss={`.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.p-8 { padding: 2rem; }
.bg-blue-600 { background: #2563eb; }
.text-white { color: white; }
.rounded-xl { border-radius: 0.75rem; }
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
.font-bold { font-weight: 700; }`}
          initialHtml={`<div class="flex flex-col items-center p-8 bg-blue-600 text-white rounded-xl shadow-lg">
  <h4 class="font-bold">Utility-First Style</h4>
  <p>이름을 지을 고민이 없습니다!</p>
</div>`}
        />
      </section>

      {/* 섹션 6: Sass 7-1 패턴을 활용한 폴더 구조화 */}
      <section className="study-section">
        <h2 className="section-title">실전 관리: 7-1 폴더 패턴</h2>
        <div className="section-description">
          <p>
            Sass나 규모가 큰 CSS 프로젝트에서 가장 많이 쓰이는 폴더 구조화 표준입니다.
            모든 스타일을 한 파일에 넣지 않고, 역할별로 7개의 폴더에 나누어 담습니다.
          </p>
          <div className="concept-box" style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>📂 <strong>base/</strong>: 초기화, 타이포그래피 태그</li>
              <li>📂 <strong>components/</strong>: 독립적인 컴포넌트(button, card)</li>
              <li>📂 <strong>layout/</strong>: 헤더, 푸터, 그리드</li>
              <li>📂 <strong>pages/</strong>: 특정 페이지 전용 스타일</li>
              <li>📂 <strong>themes/</strong>: 테마별 설정</li>
              <li>📂 <strong>abstracts/</strong>: 변수, 믹스인 (실제 코드는 생성 안 함)</li>
              <li>📂 <strong>vendors/</strong>: 외부 라이브러리 (Bootstrap 등)</li>
              <li style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)' }}>
                📄 <strong>main.css</strong>: 위 파일들을 하나로 합치는 메인 파일
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 섹션 7: 종합 실습 - BEM 기반 사이드바 컴포넌트 설계 */}
      <section className="study-section">
        <h2 className="section-title">실전 예제: BEM 기반 네비게이션 대시보드</h2>
        <p className="section-description">
          BEM 명명 규칙을 철저히 따라 구조와 기능이 명확히 분리된 컴포넌트 설계 방식입니다.
        </p>

        <LiveCodeEditor
          scopeId="architecture-practical-bem"
          previewHeight="450px"
          codeHeight="550px"
          initialCss={`.sidebar {
  /* Block */
  width: 250px;
  background: #1e293b;
  color: white;
  border-radius: 12px;
  padding: 1.5rem;
}

.sidebar__item {
  /* Element */
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.sidebar__item:hover {
  background: rgba(255,255,255,0.1);
}

.sidebar__item--active {
  /* Modifier */
  background: #3b82f6;
  font-weight: bold;
}

.sidebar__icon {
  /* Element */
  margin-right: 12px;
  font-size: 1.2rem;
}

.sidebar__status {
  /* Element */
  margin-left: auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #94a3b8;
}

.sidebar__status--online {
  /* Modifier */
  background: #10b981;
  box-shadow: 0 0 10px rgba(16,185,129,0.5);
}
`}
          initialHtml={`<div class="sidebar">
  <div class="sidebar__item sidebar__item--active">
    <span class="sidebar__icon">📊</span>
    <span class="sidebar__text">Dashboard</span>
    <span class="sidebar__status sidebar__status--online"></span>
  </div>
  
  <div class="sidebar__item">
    <span class="sidebar__icon">📁</span>
    <span class="sidebar__text">Projects</span>
    <span class="sidebar__status"></span>
  </div>

  <div class="sidebar__item">
    <span class="sidebar__icon">⚙️</span>
    <span class="sidebar__text">Settings</span>
    <span class="sidebar__status"></span>
  </div>
</div>

<div class="info-box" style="margin-top: 1.5rem;">
  <strong>💡 BEM 구조 분석:</strong><br/>
  • <strong>Block</strong>: <code>.sidebar</code> (전체 틀)<br/>
  • <strong>Element</strong>: <code>.sidebar__item</code>, <code>.sidebar__icon</code><br/>
  • <strong>Modifier</strong>: <code>.sidebar__item--active</code>, <code>.sidebar__status--online</code>
</div>`}
        />
      </section>
    </div>
  );
}

export default CssArchitectureStudy;
