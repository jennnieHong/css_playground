import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import CollapsibleSection from '../components/CollapsibleSection';
import LiveCodeEditor from '../components/LiveCodeEditor';

function AttributesAndJSStudy() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="page-container">
      <PageHeader 
        title="Attributes & JS Interaction" 
        subtitle="HTML 속성이 CSS 스타일링을 넘어 JS와 소통하는 방법"
      />

      <CollapsibleSection title="1. 클래스(class)의 두 얼굴: 스타일 vs 기능">
        <div className="section-description">
          <p>클래스는 보통 디자인을 위해 사용되지만, JavaScript에서 특정 그룹의 요소들을 한꺼번에 조작할 때도 아주 유용합니다.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ padding: '1.2rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ marginTop: 0, color: '#0f172a' }}>🎨 Presentational Class</h4>
              <p style={{ fontSize: '0.9rem', color: '#475569' }}>
                <code>.btn</code>, <code>.card</code> 처럼 외형을 정의합니다.<br />
                디자인이 바뀌면 클래스 이름도 바뀔 수 있습니다.
              </p>
            </div>
            <div style={{ padding: '1.2rem', background: '#ecfeff', borderRadius: '12px', border: '1px solid #06b6d4' }}>
              <h4 style={{ marginTop: 0, color: '#0891b2' }}>⚙️ Functional Class</h4>
              <p style={{ fontSize: '0.9rem', color: '#0e7490' }}>
                <code>.js-tracker</code> 처럼 JS의 타겟이 됩니다.<br />
                디자인이 바뀌어도 기능 유지를 위해 이름이 보존됩니다.
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="2. 데이터 속성(data-*)의 힘">
        <div className="section-description">
          <p>
            HTML5에서 도입된 <code>data-*</code> 속성은 "사용자 정의 데이터"를 저장하는 가장 표준적인 방법입니다.
            현재 우리 앱의 <strong>PageProgressDots(우측 점 네비)</strong>가 바로 이 방식을 사용합니다.
          </p>

          <div className="info-box" style={{ background: '#f8fafc', borderLeft: '4px solid #3b82f6', marginTop: '1.5rem', padding: '1.5rem' }}>
            <h4 style={{ marginTop: 0, color: '#1e40af' }}>🔍 시스템 심층 분석: PageProgressDots의 원리</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <div>
                <strong>1) 동적 섹션 탐색 (Dynamic Discovery)</strong><br />
                네비게이션은 페이지 내에 섹션이 몇 개인지 미리 알지 못합니다. 대신 JS가 실행될 때 
                <code>document.querySelectorAll('section[data-section]')</code>를 실행하여 
                <code>data-section</code> 속성을 가진 모든 요소를 실시간으로 찾아내어 리스트를 만듭니다.
              </div>
              
              <div>
                <strong>2) 위치 추적 (Intersection Observer)</strong><br />
                스크롤 위치를 계산하는 대신, 브라우저의 <strong>IntersectionObserver API</strong>를 사용합니다. 
                특정 섹션이 화면의 특정 영역(상단 10% ~ 하단 20% 사이)에 들어오면 "활성화" 신호를 보냅니다. 
                이는 매번 위치를 계산하는 방식보다 성능이 훨씬 압도적입니다.
              </div>

              <div>
                <strong>3) 고유 ID와 active 연동</strong><br />
                각 섹션은 <code>useId()</code> 훅과 제목을 조합하여 <code>#introduction-asdf123</code> 같은 고유 ID를 가집니다. 
                JS가 현재 보고 있는 섹션의 ID를 <b>상태(State)</b>로 저장하면, React는 그 ID와 똑같은 점(Dot)에만 
                <code>.active</code> 클래스를 붙여 불을 켭니다.
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#eef2ff', padding: '1.2rem', borderRadius: '12px', border: '1px solid #c7d2fe' }}>
              <h5 style={{ marginTop: 0, color: '#4338ca' }}>🛠️ 실제 구현 코드 맛보기</h5>
              <pre style={{ margin: 0, fontSize: '0.8rem', color: '#3730a3', overflow: 'auto' }}>
{`// 1. 모든 섹션 찾기
const nodes = document.querySelectorAll('section[data-section]');

// 2. 스크롤 감시 (상단 10% 지점 통과 시 활성화)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActiveId(entry.target.id);
  });
}, { rootMargin: '-10% 0px -80% 0px' });`}
              </pre>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#475569' }}>
              이처럼 <b>data 속성</b>은 JS가 HTML 구조를 파악하는 "이정표"가 되고, 
              <b>ID</b>는 정확한 위치를 집어내는 "주소"가 됩니다.
            </p>
          </div>
        </div>

        <LiveCodeEditor
          scopeId="attributes-demo"
          previewHeight="300px"
          codeHeight="400px"
          initialCss={`.box {
  padding: 1rem;
  margin: 10px;
  background: #eee;
  border-radius: 8px;
  cursor: pointer;
}

/* data 속성을 CSS에서도 선택자로 쓸 수 있습니다! */
.box[data-status="active"] {
  background: #3b82f6;
  color: white;
}

.box[data-status="warning"] {
  background: #ef4444;
  color: white;
}`}
          initialHtml={`<div class="box" data-status="active" data-info="중요한 항목">
  클릭하면 data-info를 읽어옵니다.
</div>

<div class="box" data-status="warning" data-info="경고 항목">
  경고 상태 박스
</div>

<script>
  // JS에서 data 속성 사용법: element.dataset.info
  // pickAll() 헬퍼를 사용하면 내 영역의 요소들만 안전하게 선택할 수 있습니다.
  const boxes = pickAll('.box');
  boxes.forEach(el => {
    el.onclick = () => {
      alert('데이터 정보: ' + el.dataset.info);
    };
  });
</script>`}
        />
      </CollapsibleSection>

      <CollapsibleSection title="3. ID: 유일무이한 앵커(Anchor)">
        <div className="section-description">
          <p>
            ID는 페이지 내에서 단 하나만 존재해야 하므로, 특정 위치로 <strong>'점프'</strong>하거나 
            JS에서 <strong>'단 하나의 핵심 요소'</strong>를 찾을 때 사용합니다.
          </p>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>네비게이션 점프</strong>: 버튼 클릭 시 특정 <code>id</code>를 가진 위치로 이동.</li>
            <li><strong>JS 식별</strong>: <code>document.getElementById('unique-id')</code>로 정밀 타격.</li>
            <li><strong>중복 주의</strong>: 똑같은 ID가 여러 개 있으면 JS는 첫 번째 것만 인식하는 등의 버그가 발생할 수 있습니다.</li>
          </ul>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="4. 상태(State)와 클래스(Class)의 공조: Deep Dive 🤿">
        <div className="section-description">
          <p>
            아직 이 개념이 낯설게 느껴지시나요? 조금 더 깊이 있게, 우리 몸의 <strong>'신경계(JS)'</strong>와 <strong>'근육(CSS)'</strong>에 비유해 보겠습니다.
          </p>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>🔄 데이터의 여정 (Lifecycle)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                <div><strong>사용자의 행동 (Trigger):</strong> 사용자가 화면을 스크롤합니다.</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                <div><strong>JS의 감지 (Logic):</strong> IntersectionObserver가 "오! 지금 2번 섹션이 화면 정중앙에 왔네?"라고 판단합니다.</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                <div><strong>상태 업데이트 (State):</strong> React의 <code>activeId</code>가 <code>'section-2'</code>로 바뀝니다.</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', border: '2px solid #3b82f6', padding: '10px', borderRadius: '8px', background: '#eff6ff' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e40af', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                <div><strong>전달 (Class Mapping):</strong> "ID가 section-2인 놈은 <code>'active'</code>라는 별명을 붙여서 렌더링해!" (통역 단계)</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>5</div>
                <div><strong>최종 결과 (CSS):</strong> 브라우저가 HTML을 보다가 <code>active</code> 클래스를 발견하면, 미리 정의된 화려한 스타일을 적용합니다.</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
            <div>
              <h5 style={{ color: '#64748b' }}>🔻 실제 HTML의 변화 (Before)</h5>
              <pre style={{ background: '#1e293b', color: '#f8fafc', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
{`<div class="dot-wrapper">
  <button class="dot-button"></button>
</div>`}
              </pre>
            </div>
            <div>
              <h5 style={{ color: '#3b82f6' }}>🔹 상태가 변한 후 (After)</h5>
              <pre style={{ background: '#1e293b', color: '#f8fafc', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', border: '1px solid #3b82f6' }}>
{`<div class="dot-wrapper active">
  <button class="dot-button"></button>
</div>`}
              </pre>
            </div>
          </div>

          <div className="info-box" style={{ marginTop: '2rem', background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46' }}>
            <strong>💡 왜 이렇게 복잡하게 하나요?</strong><br />
            1. <strong>성능:</strong> CSS 엔진은 매우 빠릅니다. 클래스 이름 하나만 툭 바꿔주면 애니메이션(Transition) 처리는 브라우저가 알아서 최적화합니다.<br />
            2. <strong>재사용성:</strong> 동일한 <code>.active</code> 스타일을 점 네비게이션뿐만 아니라 탭 메뉴, 사이드바 메뉴 등 어디든 갖다 쓸 수 있습니다.<br />
            3. <strong>가독성:</strong> JS 파일에는 복잡한 디자인 코드가 섞이지 않고, CSS 파일에는 어려운 논리 코드가 섞이지 않습니다.
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="5. 시각적 샌드박스: 스위치 작동 원리 비교 💡">
        <div className="section-description">
          <p>
            동일한 기능을 <strong>프레임워크(React)</strong>로 구현했을 때와 
            <strong>직접 DOM을 조작(JS)</strong>했을 때의 차이를 비교해 보세요. 
            두 방식 모두 <b>"클래스를 스위치 삼아 CSS 스타일을 켜고 끄는 것"</b>이 핵심입니다.
          </p>
          
          {/* --- 예시 1: React 방식 --- */}
          <div style={{ 
            marginTop: '2rem', padding: '2rem', background: '#1e293b', borderRadius: '20px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',
            border: '2px solid #3b82f6'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ background: '#3b82f6', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                TYPE A: React State 방식 (자동)
              </span>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                리액트가 변수를 감시하다가 HTML 클래스를 자동으로 갈아끼웁니다.
              </p>
            </div>

            <div 
              className={`bulb ${isLightOn ? 'on' : ''}`}
              style={{
                width: '120px', height: '120px', borderRadius: '50%',
                background: isLightOn ? '#fde047' : '#334155', 
                boxShadow: isLightOn ? '0 0 60px #fde047' : '0 0 20px rgba(0,0,0,0.3)',
                transform: isLightOn ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem',
                border: '4px solid rgba(255,255,255,0.1)'
              }}
            >
              {isLightOn ? '💡' : '🌑'}
            </div>

            <button 
              className={`btn ${isLightOn ? 'btn-secondary' : 'btn-primary'}`}
              onClick={() => setIsLightOn(!isLightOn)}
              style={{ 
                fontWeight: 'bold', minWidth: '200px', padding: '14px 28px',
                boxShadow: isLightOn ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
              }}
            >
              {isLightOn ? '꺼짐 (OFF) 🌑' : '켜짐 (ON) 💡'}
            </button>
          </div>

          <div style={{ margin: '2rem 0', textAlign: 'center', color: '#94a3b8' }}>
            <div style={{ height: '2px', background: '#e2e8f0', width: '100px', margin: '0 auto 10px' }}></div>
            VS
          </div>

          {/* --- 예시 2: JS 샌드박스 --- */}
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ background: '#10b981', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
              TYPE B: Pure JS Sandbox (수동)
            </span>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              아래 코드를 직접 수정해 보세요! <strong>pick()</strong> 헬퍼를 사용해 요소를 직접 잡고 클래스를 넣었다 뺐다 하는 과정을 실습합니다.
            </p>
          </div>

          <LiveCodeEditor
            scopeId="js-css-bridge"
            previewHeight="400px"
            codeHeight="450px"
            initialCss={`.bulb {
  width: 100px; height: 100px; border-radius: 50%;
  background: #334155; /* 꺼진 상태 */
  display: flex; align-items: center; justify-content: center;
  font-size: 3rem; transition: all 0.3s ease;
  margin: 0 auto 20px;
}

/* 🔌 'on' 클래스가 붙었을 때만 작동하는 CSS */
.bulb.on {
  background: #fde047;
  box-shadow: 0 0 50px #fde047;
  transform: scale(1.1);
}

.status-text { text-align: center; color: #64748b; }
.status-text b { color: #3b82f6; }`}
            initialHtml={`<div data-ref="bulb" class="bulb">🌑</div>

<div style="text-align: center; margin-bottom: 20px;">
  <p class="status-text">상태: <b data-ref="stateDisplay">false</b></p>
  <p class="status-text">클래스: <b data-ref="classDisplay">bulb</b></p>
</div>

<div style="display:flex; flex-direction:column; gap: 10px; max-width: 300px; margin: 0 auto 20px;">
  <button data-ref="toggleBtn" style="padding: 12px; cursor:pointer; background: #667eea; color: white; border: none; border-radius: 8px; font-weight: bold; transition: all 0.2s;">
    스위치 조작 (JS)
  </button>
  <button data-ref="testBtn" style="padding: 8px; cursor:pointer; background: transparent; color: #64748b; border: 1px dashed #cbd5e1; border-radius: 6px; font-size: 0.8rem;">
    ⚙️ 시스템 자가 진단
  </button>
</div>

<!-- 🕵️ 진단 도구 (에디터 엔진이 제어) -->
<div style="background: #0f172a; color: #4ade80; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.85rem; border: 1px solid #334155;">
  <span data-ref="diagnosticLed" style="display:inline-block; width: 8px; height: 8px; border-radius: 50%; background: #22c55e; margin-right: 8px;"></span>
  <span data-ref="logContent">> 시스템 준비 완료 (READY)</span>
</div>

<script>
  let isOn = false;

  const refs = {
    bulb: pick('[data-ref="bulb"]'),
    state: pick('[data-ref="stateDisplay"]'),
    cls: pick('[data-ref="classDisplay"]'),
    toggle: pick('[data-ref="toggleBtn"]'),
    test: pick('[data-ref="testBtn"]')
  };

  function refreshUI() {
    if (!refs.bulb || !refs.state || !refs.cls) return;

    if (isOn) {
      refs.bulb.classList.add('on');
      refs.bulb.innerHTML = '💡';
      refs.state.innerText = 'true';
      refs.cls.innerText = 'bulb on';
      log("상태: ON (클래스 추가됨)");
    } else {
      refs.bulb.classList.remove('on');
      refs.bulb.innerHTML = '🌑';
      refs.state.innerText = 'false';
      refs.cls.innerText = 'bulb';
      log("상태: OFF (클래스 제거됨)");
    }
  }

  if (refs.toggle) {
    refs.toggle.onclick = () => {
      isOn = !isOn;
      refreshUI();
      refs.toggle.style.transform = 'scale(0.95)';
      setTimeout(() => refs.toggle.style.transform = 'scale(1)', 100);
    };
  }

  if (refs.test) {
    refs.test.onclick = () => {
      const missing = Object.entries(refs).filter(([k, v]) => !v).map(([k]) => k);
      if (missing.length > 0) {
        log("진단 실패: " + missing.join(', ') + "을(를) 찾을 수 없습니다.", true);
      } else {
        log("진단 성공: 모든 시스템 정상 작동 중 ✨");
        refs.test.innerText = "✅ 진단 완료 (정상)";
        setTimeout(() => refs.test.innerText = "⚙️ 시스템 자가 진단", 2000);
      }
    };
  }

  refreshUI();
</script>`}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="6. 최종 정리: 왜 이렇게 하나요? (식당 비유) 🍽️">
        <div className="section-description">
          <p>마치 주방(CSS)과 홀(JS)이 분리된 레스토랑과 같습니다.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem', textAlign: 'center' }}>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>🆔</h3>
              <p><strong>주문서 (State)</strong><br /><small>"2번 테이블,<br />스테이크 주문!"</small></p>
            </div>
            <div style={{ padding: '1rem', background: '#3b82f6', color: 'white', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>🏷️</h3>
              <p><strong>번호표 (Class)</strong><br /><small>테이블에<br />"VIP" 푯말을 놓음</small></p>
            </div>
            <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '2rem', margin: 0 }}>👨‍🍳</h3>
              <p><strong>요리사 (CSS)</strong><br /><small>"VIP"표가 붙은 곳에<br />최고급 서비스 제공</small></p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: '#0f172a' }}>🙅‍♂️ 만약 클래스(번호표)를 안 쓴다면?</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              요리사(CSS)가 요리하다 말고 직접 홀로 뛰어나와서 2번 테이블 무늬를 바꾸고 의자 높이를 조절해야 합니다. (비효율적!) <br />
              하지만 **클래스**라는 신호만 있으면, 요리사는 주방에서 **"난 VIP 클래스가 붙은 곳은 무조건 화려하게 만든다"**는 규칙만 지키면 됩니다.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ opacity: 0.7 }}>
              <h5 style={{ color: '#ef4444' }}>❌ JS로 직접 스타일을 바꿀 때 (나쁜 예)</h5>
              <pre style={{ background: '#1e293b', color: '#fca5a5', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem' }}>
{`// JS가 디자인에 간섭함
el.style.backgroundColor = 'blue';
el.style.transform = 'scale(1.2)';
el.style.boxShadow = '0 0 10px gold';
// 디자인 하나 바꿀 때마다 JS를 다 고쳐야 함...`}
              </pre>
            </div>
            <div>
              <h5 style={{ color: '#3b82f6' }}>✅ 클래스만 갈아 끼울 때 (좋은 예)</h5>
              <pre style={{ background: '#1e293b', color: '#93c5fd', padding: '1rem', borderRadius: '8px', fontSize: '0.8rem' }}>
{`// JS는 "너 활성화야"라고 신호만 줌
el.className = 'active';

/* 디자인은 CSS에서 고침 */
.active {
  background: blue;
  transform: scale(1.2);
  box-shadow: 0 0 10px gold;
}`}
              </pre>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="7. 기술적 관점: 코드가 실행되는 0.1초의 순간 ⚡">
        <div className="section-description">
          <p>질문하신 <code>{'className={`dot-wrapper ${activeId === section.id ? \'active\' : \'\'}`}'}</code> 코드가 실행될 때, 브라우저 내부에서 일어나는 일을 아주 구체적으로 뜯어보겠습니다.</p>
          
          <div style={{ marginTop: '1.5rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ color: '#0f172a' }}>1단계: React의 렌더링 (JS 영역)</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              리액트가 화면을 그릴 때, 여러분이 작성한 <strong>테너리 연산자(? :)</strong>를 계산합니다.<br />
              - 만약 <code>activeId</code>가 1이고 현재 섹션 ID도 1이라면? → <code>'dot-wrapper active'</code>라는 문장을 만듭니다.<br />
              - 만약 다르다면? → <code>'dot-wrapper '</code>라는 문장을 만듭니다.
            </p>
          </div>

          <div style={{ marginTop: '1rem', background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h4 style={{ color: '#0f172a' }}>2단계: DOM 업데이트 (브라우저 영역)</h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
              리액트가 계산한 문장을 실제 HTML의 <code>class</code> 속성에 집어넣습니다.<br />
              브라우저의 요소 검사(Inspect) 창을 열어보면 클래스 이름이 순식간에 추가되었다가 삭제되는 것을 볼 수 있는 이유입니다.
            </p>
          </div>

          <div style={{ marginTop: '1rem', background: '#f0f9ff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #0ea5e9' }}>
            <h4 style={{ color: '#1e40af' }}>3단계: CSS 매칭 (CSS 엔진 영역)</h4>
            <p style={{ fontSize: '0.9rem', color: '#1e3a8a', lineHeight: '1.6' }}>
              이제 CSS 엔진이 활약할 차례입니다. CSS는 HTML 요소를 훑어보다가 <strong>"오! 여기 <code>active</code> 클래스가 생겼네?"</strong>라고 인식합니다.<br />
              그 즉시 <code>.active {'{ ... }'}</code> 블록 안에 있는 스타일 규칙을 화면의 픽셀에 적용합니다.
            </p>
          </div>

          <div className="info-box" style={{ marginTop: '2rem', background: '#f1f5f9', padding: '1.5rem' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>🌟 결론: 클래스는 '신호기'입니다.</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: '#444' }}>
              JS는 <b>"무엇을 해야 하는지(What)"</b> 결정하고,<br />
              클래스는 그 결정을 <b>"전달(Signal)"</b>하며,<br />
              CSS는 그 전달을 받아 <b>"그림을 그립니다(How)."</b>
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#666', fontStyle: 'italic' }}>
              만약 클래스를 쓰지 않는다면? JS가 CSS의 영역인 '색상값', '크기값' 등을 일일이 알아내서 직접 그려야 합니다. 
              마치 사장님이 주방에 들어가서 소금 몇 그램 넣으라고 지시하는 것과 같죠. 대신 "우리 1번 요리(active 스타일) 내보내!"라고 말하는 편이 훨씬 효율적입니다.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      <div style={{ 
        marginTop: '2rem', padding: '1.5rem', background: '#fef3c7', 
        borderRadius: '12px', border: '1px solid #f59e0b'
      }}>
        <strong style={{ color: '#92400e' }}>💡 최종 요약: 이 패턴을 쓰는 이유</strong>
        <ul style={{ marginTop: '0.5rem', color: '#78350f', fontSize: '0.95rem', lineHeight: '1.7' }}>
          <li><strong>JS (두뇌)</strong>: 논리적 상태 관리 <code>activeId = 1</code></li>
          <li><strong>Class (스위치)</strong>: JS의 명령을 CSS 신호로 변환 <code>class="active"</code></li>
          <li><strong>CSS (디스플레이)</strong>: 신호를 보고 스타일 적용 <code>.active {'{ opacity: 1 }'}</code></li>
        </ul>
        <p style={{ marginTop: '0.5rem', color: '#92400e', fontWeight: 600 }}>이렇게 하면 데이터(JS)와 디자인(CSS)이 서로의 영역을 침범하지 않고 깔끔하게 협업할 수 있습니다.</p>
      </div>
    </div>
  );
}

export default AttributesAndJSStudy;
