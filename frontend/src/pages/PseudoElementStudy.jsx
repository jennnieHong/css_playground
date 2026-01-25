/**
 * PseudoElementStudy 페이지 컴포넌트
 * CSS 가상 요소(::before, ::after, ::selection 등)를 활용한 장식 및 기능 구현을 학습하는 페이지입니다.
 * 주요 개념: content 속성, 가상 요소를 활용한 아이콘/리본/불렛 제작, 선택 영역 스타일링
 */
import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import PageHeader from '../components/PageHeader';
import CollapsibleSection from '../components/CollapsibleSection';
import CssPropertyControls from '../components/CssPropertyControls';

function PseudoElementStudy() {
  const [modelType, setModelType] = useState('tree');
  const [isNew, setIsNew] = useState(true);
  const [dynamicLabel, setDynamicLabel] = useState('HOT');

  return (
    <div className="page-container">
      {/* 페이지 헤더 영역 */}
      <PageHeader
        title="Pseudo Elements"
        subtitle="HTML 수정 없이 CSS만으로 요소를 창조하는 마법"
      />

      {/* 기초 섹션: 멘탈 모델 (중요!) */}
      <CollapsibleSection title="1. 가상 요소의 멘탈 모델 (Mental Model)">
        <div className="section-description">
          <p>
            가상 요소를 이해하는 가장 중요한 열쇠는 <strong>"이것들이 요소의 어디에 생기는가?"</strong>입니다.<br />
            많은 분들이 요소의 '바깥'에 생기는 것으로 착각하지만, 사실은 요소의 <strong>내부 콘텐츠의 맨 앞과 맨 뒤</strong>에 생깁니다.
          </p>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ marginTop: 0, color: '#334155' }}>📍 구조 시각화: ::before와 ::after는 어디에 있나요?</h4>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setModelType('tree')}
                style={{
                  padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                  background: modelType === 'tree' ? '#3b82f6' : '#e2e8f0',
                  color: modelType === 'tree' ? 'white' : '#64748b',
                  fontWeight: '600', transition: 'all 0.2s'
                }}
              >Tree 구조</button>
              <button
                onClick={() => setModelType('visual')}
                style={{
                  padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                  background: modelType === 'visual' ? '#3b82f6' : '#e2e8f0',
                  color: modelType === 'visual' ? 'white' : '#64748b',
                  fontWeight: '600', transition: 'all 0.2s'
                }}
              >시각적 배치</button>
            </div>

            {modelType === 'tree' ? (
              <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', color: '#94a3b8', fontFamily: 'monospace', lineHeight: '1.8' }}>
                <div>&lt;<span style={{ color: '#f43f5e' }}>div</span> <span style={{ color: '#fbbf24' }}>class</span>="<span style={{ color: '#34d399' }}>element</span>"&gt;</div>
                <div style={{ paddingLeft: '2rem', color: '#3b82f6', fontWeight: 'bold' }}>::before</div>
                <div style={{ paddingLeft: '2rem', color: '#f1f5f9' }}>실제 HTML 콘텐츠 (텍스트/이미지 등)</div>
                <div style={{ paddingLeft: '2rem', color: '#3b82f6', fontWeight: 'bold' }}>::after</div>
                <div>&lt;/<span style={{ color: '#f43f5e' }}>div</span>&gt;</div>
              </div>
            ) : (
              <div style={{
                height: '150px', background: '#fff', border: '2px solid #3b82f6', borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '20px'
              }}>
                <div style={{
                  padding: '10px', background: '#dbeafe', border: '2px dashed #3b82f6', color: '#1e40af',
                  fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '4px'
                }}>::before</div>
                <div style={{ flex: 1, padding: '20px', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center', color: '#334155' }}>Element Content</div>
                <div style={{
                  padding: '10px', background: '#dbeafe', border: '2px dashed #3b82f6', color: '#1e40af',
                  fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '4px'
                }}>::after</div>
              </div>
            )}

            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
              💡 <strong>핵심 포인트:</strong> <code>::before</code>와 <code>::after</code>는 마치 부모 요소 안에 첫 번째, 마지막 자식으로 <strong>새로운 태그를 하나씩 더 넣는 것</strong>과 똑같은 효과를 냅니다. 단지 HTML 소스에는 존재하지 않을 뿐이죠!
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 실습 섹션: 인터랙티브 마법 (Hover Effects) */}
      <CollapsibleSection title="2. 실전 마법: 인터랙티브 호버 효과 (Hover Magic)">
        <div className="section-description">
          <p>
            가상 요소의 가장 강력한 무기는 <strong>자바스크립트 없이 만드는 애니메이션</strong>입니다.<br />
            배경을 슬라이드하거나, 화려한 밑줄을 긋는 등의 효과를 HTML 수정 없이 순수 CSS로 구현해보세요.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="pseudo-hover-magic"
          previewHeight="400px"
          codeHeight="450px"
          initialCss={`.magic-button {
  position: relative;
  padding: 1rem 2.5rem;
  background: #1e293b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden; /* 가상 요소가 밖으로 나가지 않게 */
  transition: color 0.3s;
  z-index: 1;
}

/* 배경 슬라이드 레이어 */
.magic-button::before {
  content: "";
  position: absolute;
  top: 0; left: -100%; /* 왼쪽 밖에 대기 */
  width: 100%; height: 100%;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  transition: left 0.4s cubic-bezier(0.7, 0, 0.3, 1);
  z-index: -1; /* 글자 뒤로 배치 */
}

.magic-button:hover {
  color: white;
}

.magic-button:hover::before {
  left: 0; /* 호버 시 안으로 슬라이드 */
}

.fancy-link {
  display: inline-block;
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #334155;
  text-decoration: none;
  position: relative;
}

/* 화려한 밑줄 */
.fancy-link::after {
  content: "";
  position: absolute;
  bottom: -5px; left: 0;
  width: 0; height: 4px;
  background: #f43f5e;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.fancy-link:hover::after {
  width: 100%;
}
`}
          initialHtml={`<div style="display: flex; flex-direction: column; align-items: center; padding: 2rem; background: white; border-radius: 12px;">
  <button class="magic-button">Slide Hover Effect</button>
  
  <a href="#" class="fancy-link">Underline Animation</a>
</div>

<div style="margin-top: 1.5rem; padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
  <p style="margin: 0; font-size: 0.9rem; color: #475569; lineHeight: '1.6'">
    💡 <strong>어떻게 작동하나요?</strong><br/>
    1. <code>::before</code>로 배경 레이어를 미리 만듭니다.<br/>
    2. 처음엔 <code>left: -100%</code>로 숨겨둡니다.<br/>
    3. <code>:hover</code> 상태일 때 <code>::before</code>의 위치를 <code>left: 0</code>으로 옮깁니다.
  </p>
</div>`}
        />
      </CollapsibleSection>

      {/* 실전 비교 섹션: Pro의 방식 vs 초보의 방식 */}
      <CollapsibleSection title="3. 왜 가상 요소를 쓰나요? (Clean Code 비교)">
        <div className="section-description">
          <p>
            HTML에 불필요한 장식용 태그(<code>&lt;span&gt;</code> 등)를 넣지 않아도 됩니다. 코드가 훨씬 깨끗해지고 유지보수가 쉬워집니다.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            {/* 초보의 방식 */}
            <div style={{ padding: '1.5rem', background: '#fee2e2', borderRadius: '12px', border: '1px solid #fecaca' }}>
              <h5 style={{ margin: '0 0 1rem 0', color: '#b91c1c' }}>❌ 불필요한 태그 남발</h5>
              <pre style={{ fontSize: '0.85rem', color: '#991b1b', background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '6px' }}>
                {`<button class="btn">
  <img src="check.png" />
  저장하기
  <span class="bg"></span>
</button>`}
              </pre>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#991b1b' }}>
                단순한 아이콘과 배경 효과를 위해 실제 HTML 태그를 3개나 더 쓰고 있습니다.
              </p>
            </div>

            {/* Pro의 방식 */}
            <div style={{ padding: '1.5rem', background: '#dcfce7', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              <h5 style={{ margin: '0 0 1rem 0', color: '#166534' }}>✅ 가상 요소 활용 (Pro)</h5>
              <pre style={{ fontSize: '0.85rem', color: '#166534', background: 'rgba(255,255,255,0.5)', padding: '1rem', borderRadius: '6px' }}>
                {`<button class="btn">
  저장하기
</button>`}
              </pre>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#166534' }}>
                HTML은 깨끗하게 유지하고, 아이콘(::before)과 배경(::after)은 모두 CSS에서 처리합니다.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 실무 심화 섹션: 데이터와 연동하기 (Dynamic Class & attr) */}
      <CollapsibleSection title="4. 실무 필수: 데이터와 연동 (Dynamic Data)">
        <div className="section-description">
          <p>
            "NEW" 플래그 같은 실제 데이터를 가상 요소와 어떻게 연결할까요?<br />
            자바스크립트로 HTML을 직접 수정하는 대신, <strong>클래스를 토글(Toggle)</strong>하거나 <strong>Data Attribute</strong>를 사용하는 것이 가장 깔끔한 정석입니다.
          </p>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              onClick={() => setIsNew(!isNew)}
              style={{
                padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                background: isNew ? '#ef4444' : '#10b981', color: 'white', fontWeight: 'bold'
              }}
            >
              {isNew ? '신제품 해제 (isNew: false)' : '신제품 설정 (isNew: true)'}
            </button>
            <input
              type="text"
              value={dynamicLabel}
              onChange={(e) => setDynamicLabel(e.target.value)}
              placeholder="라벨 입력..."
              style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }}
            />
          </div>
        </div>

        <LiveCodeEditor
          scopeId="pseudo-dynamic-data"
          previewHeight="300px"
          codeHeight="350px"
          currentCss={`.product-card {
  position: relative;
  width: 100%; height: 120px;
  background: white; border: 2px solid #e2e8f0;
  border-radius: 12px; display: flex;
  align-items: center; justify-content: center;
  font-size: 1.2rem; font-weight: 600;
  transition: all 0.3s;
}

/* 1. 클래스 기반 토글: is-new 클래스가 있을 때만 리본 생성 */
.product-card.is-new::before {
  content: "NEW";
  position: absolute; top: 10px; right: 10px;
  background: #ef4444; color: white;
  padding: 2px 8px; border-radius: 4px;
  font-size: 0.7rem; font-weight: 800;
}

/* 2. 속성(attr) 기반 연동: data-label의 값을 그대로 가져옴 */
.product-card::after {
  content: attr(data-label); /* HTML의 data-label 속성값을 읽음 */
  position: absolute; bottom: 10px; left: 10px;
  background: #3b82f6; color: white;
  padding: 2px 8px; border-radius: 4px;
  font-size: 0.7rem; font-weight: 800;
}

/* 클래스 유무에 따른 시각적 차이 */
.product-card.is-new { border-color: #fca5a5; background: #fff1f1; }
`}
          currentHtml={`
<div class="product-card ${isNew ? 'is-new' : ''}" data-label="${dynamicLabel}">
  Product Item
</div>

<div style="margin-top: 2rem; padding: 1.2rem; background: #f0f9ff; border-radius: 10px; border: 1px solid #bae6fd;">
  <h5 style="margin: 0 0 0.5rem 0; color: #0369a1;">어떻게 된 건가요?</h5>
  <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.9rem; color: #0c4a6e; line-height: 1.6;">
    <li><strong>Class Toggle</strong>: 리액트 상태(<code>isNew</code>)에 따라 <code>.is-new</code> 클래스가 붙었다 떼어집니다.</li>
    <li><strong>CSS attr()</strong>: 가상 요소가 HTML의 <code>data-label</code> 속성값을 실시간으로 읽어와서 화면에 출력합니다.</li>
  </ul>
</div>`}
          initialHtml=""
          initialCss=""
        />
      </CollapsibleSection>

      {/* 실습 섹션: ::selection (사용자 선택 영역 스타일링) */}
      <CollapsibleSection title="5. 사용자 인터랙션: ::selection (선택 영역)">
        <div className="section-description">
          <p>
            사용자가 마우스로 텍스트를 드래그할 때 생기는 <strong>하이라이트 색상</strong>을 바꿀 수 있습니다. 브랜드 컬러를 적용할 때 유용한 디테일입니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="selection"
          previewHeight="250px"
          codeHeight="250px"
          initialCss={`/* 모든 요소의 선택 스타일 변경 */
::selection {
  background-color: #3b82f6;
  color: #ffffff;
}

/* 특정 클래스만 다른 스타일 적용 */
.custom-selection::selection {
  background-color: #f59e0b;
  color: #1e293b;
}

.text-demo {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #1e293b;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}`}
          initialHtml={`<div class="text-demo">
  <p>이 문장을 마우스로 드래그해보세요! 파란색 하이라이트가 나타납니다.</p>
  <p class="custom-selection">
    여기는 클래스를 별도로 주어 주황색 하이라이트가 나타나게 했습니다.
  </p>
</div>`}
        />
      </CollapsibleSection>

      {/* 실습 섹션: 실무 디자인 패턴 - 리본 효과 구현 */}
      <CollapsibleSection title="5. 장식 마법: 리본 효과 (Ribbon)">
        <div className="section-description">
          <p>
            카드 구석에 붙은 <strong>'NEW' 리본</strong> 같은 요소는 가상 요소로 구현할 때 가장 깔끔합니다. <code>overflow: hidden</code>과 조합해보세요.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="ribbon-demo"
          previewHeight="300px"
          codeHeight="400px"
          initialCss={`.card-with-ribbon {
  position: relative;
  background: white;
  padding: 2.5rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* 리본이 카드 밖으로 나가는 것을 잘라줌 */
  border: 1px solid #e2e8f0;
}

/* 빨간색 리본 막대기 */
.card-with-ribbon::before {
  content: "NEW";
  position: absolute;
  top: 15px;
  right: -35px;
  background: #ef4444;
  color: white;
  padding: 0.5rem 3rem;
  font-weight: 800;
  font-size: 0.8rem;
  transform: rotate(45deg); /* 비스듬히 눕히기 */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  letter-spacing: 1px;
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
  <h3>프리미엄 과정</h3>
  <p>
    이 리본은 별도의 HTML 태그 없이 CSS 가상 요소 하나로 만들어졌습니다.
    실제 HTML 코드는 매우 단순하게 유지됩니다.
  </p>
</div>`}
        />
      </CollapsibleSection>

      {/* 실무 응용 섹션: 커스텀 리스트 불렛 (::before & ::after 조합) */}
      <CollapsibleSection title="6. 실무 꽃: 커스텀 리스트 (List Bullets)">
        <div className="section-description">
          <p>
            기본 불렛(●)은 지루합니다. 가상 요소 두 개(<code>::before</code>, <code>::after</code>)를 겹쳐서 멋진 체크 리스트를 만들어보세요.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="pseudo-practical-list"
          previewHeight="400px"
          codeHeight="450px"
          initialCss={`.custom-list {
  list-style: none; /* 기본 불렛 제거 */
  padding: 0;
}

.custom-list li {
  position: relative;
  padding-left: 45px;
  margin-bottom: 25px;
  line-height: 1.6;
}

/* 불렛 배경 (원형) */
.custom-list li::before {
  content: "";
  position: absolute;
  left: 0; top: 0;
  width: 30px; height: 30px;
  background: linear-gradient(135deg, #34d399, #10b981);
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
}

/* 체크 표시 */
.custom-list li::after {
  content: "L"; /* L을 뒤집고 눕혀서 체크처럼 보이기 */
  position: absolute;
  left: 9px; top: 1px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  transform: scaleX(-1) rotate(-35deg);
}

.custom-list li strong {
  display: block;
  color: #1e293b;
  font-size: 1.2rem;
  margin-bottom: 2px;
}

.custom-list li p {
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
}`}
          initialHtml={`<ul class="custom-list">
  <li>
    <strong>HTML 유지보수성</strong>
    <p>아이콘을 바꿀 때 모든 HTML을 고칠 필요 없이 CSS 한 곳만 고치면 됩니다.</p>
  </li>
  <li>
    <strong>일관된 디자인</strong>
    <p>브라우저마다 다른 기본 불렛 대신 우리가 디자인한 완벽한 불렛을 보여줍니다.</p>
  </li>
</ul>`}
        />
      </CollapsibleSection>
    </div>
  );
}

export default PseudoElementStudy;
