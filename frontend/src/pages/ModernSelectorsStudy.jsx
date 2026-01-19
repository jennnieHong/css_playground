import LiveCodeEditor from '../components/LiveCodeEditor';

function ModernSelectorsStudy() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Modern Selectors</h1>
        <p className="page-subtitle">Writing cleaner, more descriptive selectors with :is(), :where(), and :not()</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">가독성과 유지보수</h2>
        <div className="section-description">
          <p>
            현대 CSS는 중복되는 선택자를 줄이고, 선택자의 우선순위(Specificity)를 더 정교하게 제어할 수 있는 새로운 도구들을 제공합니다.
          </p>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">:is() - 선택자 그룹화</h2>
        <p className="section-description">
          공통 스타일을 가진 여러 선택자를 하나로 묶어 가독성을 높입니다.
        </p>

        <LiveCodeEditor
          scopeId="selector-is"
          height="450px"
          initialCss={`/* 기존 방식 */
section h1, 
section h2, 
section h3 {
  color: #3b82f6;
  margin-top: 2rem;
}

/* 현대적 방식: :is() */
.modern-container :is(h1, h2, h3) {
  color: #10b981;
  text-decoration: underline;
}

/* 호버 시 스타일 그룹화 */
.list-item:is(:hover, :focus, :active) {
  background: #dcfce7;
  color: #166534;
}

.list-item {
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}`}
          initialHtml={`<div class="modern-container">
  <h1>Title with :is()</h1>
  <h2>Sub-title</h2>
  <h3>Small Title</h3>
  
  <div style="margin-top: 2rem;">
    <div class="list-item">Hover or Focus me!</div>
    <div class="list-item">Interact with me too!</div>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <code>:is()</code>의 우선순위는 **목록 내에서 가장 높은 것**을 따릅니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">:where() - 제로 명시도 (Zero Specificity)</h2>
        <p className="section-description">
          <code>:is()</code>와 같지만, 우선순위가 **항상 0**입니다. 라이브러리 제작 시 오버라이딩을 쉽게 하기 위해 필수적입니다.
        </p>

        <LiveCodeEditor
          scopeId="selector-where"
          height="400px"
          initialCss={`/* 우선순위 0: 누구나 쉽게 이길 수 있음 */
:where(.header, .footer) p {
  color: #94a3b8;
  font-style: italic;
}

/* 쉽게 덮어쓰기 가능 */
.footer p {
  color: #ef4444; /* 이 선택자가 명시도에서 무조건 이깁니다 */
  font-style: normal;
}

.card {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  background: white;
}`}
          initialHtml={`<div class="header card">
  <p>Header text (Matches :where but can be easily overridden)</p>
</div>

<br/>

<div class="footer card">
  <p>Footer text (Overridden by .footer p)</p>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>:where()</strong>는 기본 스타일을 제공하되, 사용자가 쉽게 변경할 수 있게 하고 싶을 때 완벽합니다.
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">:not() - 부정 선택자</h2>
        <p className="section-description">
          특정 조건을 제외한 모든 요소를 선택합니다.
        </p>

        <LiveCodeEditor
          scopeId="selector-not"
          height="400px"
          initialCss={`.tag {
  display: inline-block;
  padding: 4px 12px;
  background: #f1f5f9;
  border-radius: 20px;
  margin: 4px;
  font-size: 0.9rem;
}

/* 'active' 클래스가 없는 모든 tag 선택 */
.tag:not(.active) {
  opacity: 0.5;
  filter: grayscale(1);
}

.tag.active {
  background: #3b82f6;
  color: white;
  font-weight: bold;
}

.input-field:not(:placeholder-shown) {
  border-color: #10b981;
  background: #f0fdf4;
}`}
          initialHtml={`<div style="background: white; padding: 1.5rem; border-radius: 8px;">
  <span class="tag active">React</span>
  <span class="tag">Vue</span>
  <span class="tag">Angular</span>
  <span class="tag">Svelte</span>
  
  <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #e2e8f0;"/>
  
  <input type="text" class="input-field" placeholder="Type something..." 
    style="padding: 0.5rem; border: 2px solid #cbd5e1; border-radius: 4px; outline: none;"/>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>실무 팁:</strong> <code>.box:not(:last-child)</code> 를 사용하여 마지막 요소를 제외한 구분선을 넣을 때 자주 쓰입니다.
</div>`}
        />
      </section>
    </div>
  );
}

export default ModernSelectorsStudy;
