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
          previewHeight="250px"
          codeHeight="400px"
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
          previewHeight="250px"
          codeHeight="300px"
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
          previewHeight="250px"
          codeHeight="350px"
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

      <section className="study-section">
        <h2 className="section-title">:has() - 부모 선택자의 혁명</h2>
        <div className="section-description">
          <p>
            <code>:has()</code>는 오랫동안 기다려온 <strong>부모 선택자</strong>입니다.
            특정 자식이나 요소를 포함하고 있는 부모를 선택할 수 있게 해줍니다.
          </p>
          <div className="info-box">
            💡 <strong>주요 활용 처:</strong><br />
            • 이미지 캡션이 있는 피드 아이템만 스타일 변경<br />
            • 체크박스가 체크된 폼 그룹의 배경색 변경<br />
            • 특정 버튼이 포함된 내비게이션 바 높이 조절
          </div>
        </div>

        <LiveCodeEditor
          scopeId="selector-has"
          previewHeight="450px"
          codeHeight="600px"
          initialCss={`/* 1. 이미지가 포함된 카드만 보더 추가 */
.card:has(img) {
  border: 2px solid #667eea;
}

/* 2. 체크된 체크박스가 있는 필드셋 배경 변경 */
.form-group:has(input:checked) {
  background: #eef2ff;
  border-color: #667eea;
}

/* 3. 특정 요소가 호버될 때 인접 요소 스타일 (Relational) */
.nav-item:has(+ .nav-item:hover) {
  transform: translateX(-10px);
}

.card {
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
}

.form-group {
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s;
}

.nav-list { display: flex; gap: 1rem; margin-top: 1rem; }
.nav-item {
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;
}
.nav-item:hover { background: #667eea; color: white; }`}
          initialHtml={`<div class="card">
  <h4>카드 1 (이미지 없음)</h4>
  <p>이 카드는 이미지가 없어 강조되지 않습니다.</p>
</div>

<div class="card">
  <img src="https://via.placeholder.com/50" style="border-radius: 4px;"/>
  <h4>카드 2 (이미지 있음)</h4>
  <p>이미지가 포함되어 <code>:has(img)</code> 선택자가 작동합니다!</p>
</div>

<div class="form-group">
  <label style="cursor: pointer;">
    <input type="checkbox"> 이 옵션을 선택하면 부모의 배경이 바뀝니다.
  </label>
</div>

<div class="nav-list">
  <div class="nav-item">Menu A</div>
  <div class="nav-item">Menu B</div>
  <div class="nav-item">Menu C</div>
</div>
<p style="font-size: 0.8rem; margin-top: 10px;">↑ Menu B에 마우스를 올려보세요. 앞의 Menu A가 반응합니다!</p>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">:nth-child() of S - 정교한 필터링</h2>
        <div className="section-description">
          <p>
            기존 <code>:nth-child</code>는 모든 형제 중 순서를 찾았지만,
            최신 문법인 <code>of selector</code>를 사용하면 특정 선택자에 해당하는 요소들 중에서만 순서를 찾습니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="selector-nth-of"
          previewHeight="350px"
          codeHeight="450px"
          initialCss={`/* 'active' 클래스를 가진 요소들 중에서 2번째 것만 선택 */
.item:nth-child(2 of .active) {
  background: #f5576c;
  color: white;
  transform: scale(1.1);
}

.item {
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.active {
  background: #eef2ff;
  border-color: #667eea;
  font-weight: bold;
}

.hidden {
  display: none;
}`}
          initialHtml={`<div class="list">
  <div class="item active">1. Active A</div>
  <div class="item">2. Normal</div>
  <div class="item active">3. Active B (이게 2번째 Active)</div>
  <div class="item">4. Normal</div>
  <div class="item active">5. Active C</div>
</div>

<div class="info-box">
  기존 방식이라면 3번 요소는 전체 중 '3번째'라 선택되지 않았겠지만, 
  <code>2 of .active</code> 구문을 쓰면 활성화된 것들 중 순서를 정확히 찾아냅니다.
</div>`}
        />
      </section>
    </div>
  );
}

export default ModernSelectorsStudy;
