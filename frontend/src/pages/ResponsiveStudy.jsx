import LiveCodeEditor from '../components/LiveCodeEditor';

function ResponsiveStudy() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Responsive Study</h1>
        <p className="page-subtitle">다양한 화면 크기에 대응하는 반응형 디자인</p>
      </div>

      <section className="study-section">
        <h2 className="section-title">반응형 디자인이란?</h2>
        <p className="section-description">
          반응형 디자인은 다양한 디바이스와 화면 크기에 맞춰 레이아웃이 자동으로 조정되는 디자인 기법입니다.
        </p>
      </section>

      <section className="study-section">
        <h2 className="section-title">Media Queries</h2>
        <LiveCodeEditor
          scopeId="responsive-media"
          initialCss={`/* Mobile First */
.responsive-box {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
  border-radius: 0.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .responsive-box {
    width: 750px;
    margin: 0 auto;
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .responsive-box {
    width: 1000px;
    padding: 3rem;
  }
}`}
          preview={
            <div className="responsive-demo">
              <div className="responsive-box">
                창 크기를 조절해보세요!
              </div>
            </div>
          }
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Flexible Grid</h2>
        <LiveCodeEditor
          scopeId="responsive-grid"
          initialCss={`.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`}
          preview={
            <div className="responsive-grid">
              <div className="grid-item">1</div>
              <div className="grid-item">2</div>
              <div className="grid-item">3</div>
              <div className="grid-item">4</div>
            </div>
          }
        />
      </section>

      <section className="study-section">
        <h2 className="section-title">Viewport Units</h2>
        <LiveCodeEditor
          scopeId="responsive-viewport"
          initialCss={`.viewport-box {
  width: 100%;  /* full width */
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 0.5rem;
}

/* Try changing to viewport units:
   width: 100vw;
   height: 50vh;
   font-size: 5vw;
*/`}
          preview={
            <div className="viewport-demo">
              <div className="viewport-box">
                Try viewport units!
              </div>
            </div>
          }
        />
      </section>
    </div>
  );
}

export default ResponsiveStudy;
