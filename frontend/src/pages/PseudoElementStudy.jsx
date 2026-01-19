import LiveCodeEditor from '../components/LiveCodeEditor';

function PseudoElementStudy() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Pseudo Elements</h1>
        <p className="page-subtitle">::before, ::after, and decorative magic</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">Pseudo Elements란?</h2>
        <div className="section-description">
          <p>
            <strong>가상 요소(Pseudo Element)</strong>는 HTML을 추가하지 않고 CSS만으로 요소를 생성합니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>::before</code>: 요소 내용 앞에 삽입</li>
            <li><code>::after</code>: 요소 내용 뒤에 삽입</li>
            <li><code>::selection</code>: 텍스트 선택 스타일</li>
            <li><code>::first-letter</code>, <code>::first-line</code>: 텍스트 장식</li>
          </ul>
        </div>
      </section>

      <section className="study-section">
        <h2 className="section-title">::before와 ::after 기본</h2>
        <p className="section-description">
          <code>content</code> 속성은 필수입니다. 빈 문자열("")도 가능합니다.
        </p>

        <LiveCodeEditor
          scopeId="pseudo-basic"
          height="350px"
          initialCss={`.quote {
  position: relative;
  padding: 1.5rem 2rem;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  color: #1e293b;
  font-size: 1.1rem;
  line-height: 1.8;
}

.quote::before {
  content: """;
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 4rem;
  color: #3b82f6;
  opacity: 0.3;
}

.quote::after {
  content: """;
  position: absolute;
  bottom: -30px;
  right: 10px;
  font-size: 4rem;
  color: #3b82f6;
  opacity: 0.3;
}`}
          initialHtml={`<div class="quote">
  The best way to predict the future is to invent it.
</div>

<div style="margin-top: 3rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  큰 따옴표는 HTML이 아닌 CSS로 추가되었습니다!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">아이콘 & 장식</h2>
        <p className="section-description">
          ::before를 사용하여 아이콘이나 장식 요소를 추가할 수 있습니다.
        </p>

        <LiveCodeEditor
          scopeId="pseudo-icons"
          height="400px"
          initialCss={`.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #dbeafe;
  color: #1e3a8a;
  font-weight: 600;
  border-radius: 6px;
  margin: 0.5rem;
}

.badge.success::before {
  content: "✓";
  margin-right: 0.5rem;
  color: #10b981;
  font-size: 1.2rem;
}

.badge.warning::before {
  content: "⚠";
  margin-right: 0.5rem;
  color: #f59e0b;
  font-size: 1.2rem;
}

.badge.error::before {
  content: "✕";
  margin-right: 0.5rem;
  color: #ef4444;
  font-size: 1.2rem;
}

.link-external {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
}

.link-external::after {
  content: " ↗";
  font-size: 0.9rem;
  opacity: 0.7;
}`}
          initialHtml={`<div style="background: #ffffff; padding: 2rem; border-radius: 8px;">
  <div>
    <span class="badge success">Success</span>
    <span class="badge warning">Warning</span>
    <span class="badge error">Error</span>
  </div>
  
  <br/>
  
  <a href="#" class="link-external">External Link</a>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  아이콘을 HTML에 넣지 않고 CSS로 자동 추가!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">::selection - 텍스트 선택 스타일</h2>
        <p className="section-description">
          사용자가 텍스트를 드래그할 때의 하이라이트 색상을 커스터마이징합니다.
        </p>

        <LiveCodeEditor
          scopeId="selection"
          height="300px"
          initialCss={`::selection {
  background-color: #3b82f6;
  color: #ffffff;
}

.custom-selection::selection {
  background-color: #f59e0b;
  color: #1e293b;
}

.text-demo {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #1e293b;
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
}`}
          initialHtml={`<div class="text-demo">
  <p>Select this text to see the custom selection color!</p>
  <p class="custom-selection">
    This paragraph has a different selection style.
  </p>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  텍스트를 드래그하여 선택해보세요!
</div>`}
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">실전: Ribbon & 장식</h2>
        <p className="section-description">
          ::before/::after를 사용한 창의적인 디자인 패턴
        </p>

        <LiveCodeEditor
          scopeId="ribbon-demo"
          height="400px"
          initialCss={`.card-with-ribbon {
  position: relative;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
}

/* 리본 */
.card-with-ribbon::before {
  content: "NEW";
  position: absolute;
  top: 20px;
  right: -30px;
  background: #ef4444;
  color: #ffffff;
  padding: 0.5rem 2.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  transform: rotate(45deg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.card-with-ribbon h3 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
}

.card-with-ribbon p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
}`}
          initialHtml={`<div class="card-with-ribbon">
  <h3>Product Title</h3>
  <p>
    Check out our latest product with this stylish ribbon effect 
    created entirely with CSS pseudo elements!
  </p>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #fef3c7; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>리본은 HTML 없이</strong> ::before로만 만들어졌습니다!
</div>`}
        />
      </section>
    </div>
  );
}

export default PseudoElementStudy;
