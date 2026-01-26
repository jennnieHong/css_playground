/**
 * ColorBackgroundStudy 페이지 컴포넌트
 * CSS 색상 표현 방식(Hex, RGB, HSL)과 배경(Gradient, Image) 및 그림자 효과를 학습하는 페이지입니다.
 * 주요 개념: 색상 포맷, Opacity vs Alpha, 그라데이션 종류, Glassmorphism, Box Shadow 갤러리
 */
import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';
import PageHeader from '../components/PageHeader';
import CollapsibleSection from '../components/CollapsibleSection';

function ColorBackgroundStudy() {
  // --- 상태 관리 (State Management) ---
  // 색상 포맷, 투명도, 그라데이션 타입의 실시간 변화를 제어합니다.
  const [colorFormat, setColorFormat] = useState('hex');
  const [opacity, setOpacity] = useState('1');
  const [gradientType, setGradientType] = useState('linear-gradient');

  const colorExamples = {
    hex: '#3b82f6',
    rgb: 'rgb(59, 130, 246)',
    rgba: 'rgba(59, 130, 246, 0.8)',
    hsl: 'hsl(217, 91%, 60%)',
    hsla: 'hsla(217, 91%, 60%, 0.8)'
  };

  return (
    <div className="page-container">
      {/* 페이지 헤더 영역 */}
      <PageHeader
        title="Colors & Backgrounds"
        subtitle="Mastering color formats, gradients, and visual styling"
      />

      {/* 색상 포맷 기초 섹션 */}

      <CollapsibleSection title="색상 표현 방법">
        <div className="section-description">
          <p>CSS에서 색상을 표현하는 다양한 방법을 이해하고 상황에 맞게 사용할 수 있어야 합니다.</p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>Hex</code>: #RRGGBB 형식, 가장 많이 사용됨 (예: #3b82f6)</li>
            <li><code>RGB</code>: rgb(red, green, blue), 각 값은 0-255</li>
            <li><code>RGBA</code>: RGB + Alpha(투명도), alpha는 0-1</li>
            <li><code>HSL</code>: hsl(hue, saturation, lightness), 직관적인 색상 조정</li>
            <li><code>HSLA</code>: HSL + Alpha, 투명도 포함</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'Color Format',
              type: 'radio',
              value: colorFormat,
              onChange: setColorFormat,
              options: [
                { value: 'hex', label: 'Hex' },
                { value: 'rgb', label: 'RGB' },
                { value: 'rgba', label: 'RGBA' },
                { value: 'hsl', label: 'HSL' },
                { value: 'hsla', label: 'HSLA' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="color-formats"
          previewHeight="200px"
          codeHeight="250px"
          initialCss={`.color-box {
  background-color: ${colorExamples[colorFormat]};
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}
          currentCss={`.color-box {
  background-color: ${colorExamples[colorFormat]};
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}
          initialHtml={`<div class="color-box">
  ${colorExamples[colorFormat]}
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>현재 형식: ${colorFormat.toUpperCase()}</strong><br/>
  ${colorFormat === 'hex' ? '• 가장 간결하고 널리 사용됨<br/>• 디자인 도구에서 주로 사용' : ''}
  ${colorFormat === 'rgb' ? '• 빨강, 초록, 파랑 값으로 직관적<br/>• JavaScript로 계산하기 쉬움' : ''}
  ${colorFormat === 'rgba' ? '• RGB + 투명도<br/>• Alpha 값으로 반투명 효과' : ''}
  ${colorFormat === 'hsl' ? '• 색상(Hue), 채도(Saturation), 명도(Lightness)<br/>• 색상 변형이 쉬움 (Hue만 변경)' : ''}
  ${colorFormat === 'hsla' ? '• HSL + 투명도<br/>• 가장 직관적인 색상 조정 방법' : ''}
</div>`}
        />
      </CollapsibleSection>
      {/* 실습 섹션: Opacity vs Alpha 투명도 제어 */}
      <CollapsibleSection title="Opacity (투명도)">
        <p className="section-description">
          투명도를 조정하는 두 가지 방법: <code>opacity</code> 속성과 <code>rgba/hsla</code>의 alpha 채널.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'opacity',
              type: 'radio',
              value: opacity,
              onChange: setOpacity,
              options: ['0.2', '0.5', '0.8', '1']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="opacity-demo"
          previewHeight="250px"
          codeHeight="300px"
          initialCss={`.bg-layer {
  position: relative;
  width: 100%;
  height: 200px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ddd" width="50" height="50"/><rect fill="%23ddd" x="50" y="50" width="50" height="50"/></svg>') repeat;
  background-size: 20px 20px;
  border-radius: 8px;
  overflow: hidden;
}

.opacity-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 2rem;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: 8px;
  opacity: ${opacity};
}`}
          currentCss={`.bg-layer {
  position: relative;
  width: 100%;
  height: 200px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23ddd" width="50" height="50"/><rect fill="%23ddd" x="50" y="50" width="50" height="50"/></svg>') repeat;
  background-size: 20px 20px;
  border-radius: 8px;
  overflow: hidden;
}

.opacity-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 2rem;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-radius: 8px;
  opacity: ${opacity};
}`}
          initialHtml={`<div class="bg-layer">
  <div class="opacity-box">
    opacity: ${opacity}
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>opacity vs alpha 채널:</strong><br/>
  • <code>opacity</code>: 요소 전체(내용 포함)가 투명해짐<br/>
  • <code>rgba/hsla</code>: 배경색만 투명, 텍스트는 선명
</div>`}
        />
      </CollapsibleSection>
      {/* 실습 섹션: Gradients (선형, 원형, 원뿔형 그라데이션) */}
      <CollapsibleSection title="Gradients (그라데이션)">
        <p className="section-description">
          Linear, Radial, Conic 그라데이션으로 부드러운 색상 전환을 만들 수 있습니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'Gradient Type',
              type: 'radio',
              value: gradientType,
              onChange: setGradientType,
              options: [
                { value: 'linear-gradient', label: 'Linear' },
                { value: 'radial-gradient', label: 'Radial' },
                { value: 'conic-gradient', label: 'Conic' }
              ]
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="gradients"
          previewHeight="250px"
          codeHeight="350px"
          initialCss={`.gradient-box {
  width: 100%;
  height: 200px;
  background: ${gradientType === 'linear-gradient'
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : gradientType === 'radial-gradient'
                ? 'radial-gradient(circle, #667eea 0%, #764ba2 100%)'
                : 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea)'
            };
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}`}
          currentCss={`.gradient-box {
  width: 100%;
  height: 200px;
  background: ${gradientType === 'linear-gradient'
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : gradientType === 'radial-gradient'
                ? 'radial-gradient(circle, #667eea 0%, #764ba2 100%)'
                : 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #667eea)'
            };
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}`}
          initialHtml={`<div class="gradient-box">
  ${gradientType.replace('-', ' ').toUpperCase()}
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Gradient 종류:</strong><br/>
  • <strong>Linear</strong>: 직선 방향 (to right, 135deg 등)<br/>
  • <strong>Radial</strong>: 원형/타원형 (circle, ellipse)<br/>
  • <strong>Conic</strong>: 원뿔형, 색상환 효과
</div>`}
        />
      </CollapsibleSection>
      {/* 실습 섹션: Background 세부 속성 (size, position, repeat) */}
      <CollapsibleSection title="Background 속성들">
        <p className="section-description">
          배경 이미지의 크기, 위치, 반복 등을 세밀하게 제어할 수 있습니다.
        </p>

        <LiveCodeEditor
          scopeId="background-props"
          previewHeight="350px"
          codeHeight="400px"
          initialCss={`.bg-demo {
  width: 100%;
  height: 300px;
  
  /* 그라데이션을 이미지처럼 사용 */
  background-image: 
    linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
  
  background-size: 40px 40px;
  background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
  background-color: #3b82f6;
  
  /* 추가 스타일 */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}
          initialHtml={`<div class="bg-demo">
  Patterned Background
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>주요 background 속성:</strong><br/>
  • <code>background-size</code>: cover, contain, 50% 등<br/>
  • <code>background-position</code>: center, top right 등<br/>
  • <code>background-repeat</code>: repeat, no-repeat<br/>
  • <code>background-attachment</code>: scroll, fixed
</div>`}
        />
      </CollapsibleSection>
      {/* 디자인 트렌드 섹션: Glassmorphism (유리 효과 구현) */}
      <CollapsibleSection title="실전: Glass Morphism">
        <p className="section-description">
          반투명 배경 + 블러 효과로 유리 같은 세련된 UI를 만들 수 있습니다.
        </p>

        <LiveCodeEditor
          scopeId="glassmorphism"
          previewHeight="350px"
          codeHeight="350px"
          initialCss={`.glass-container {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 2rem;
  overflow: hidden;
}

.glass-card {
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  color: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.glass-card p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.6;
}`}
          initialHtml={`<div class="glass-container">
  <div class="glass-card">
    <h3>Glass Morphism</h3>
    <p>
      반투명 배경(rgba)과 backdrop-filter: blur()를 
      조합하여 만든 유리 질감 효과입니다.
    </p>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>핵심 속성:</strong><br/>
  • <code>background: rgba(255,255,255,0.15)</code><br/>
  • <code>backdrop-filter: blur(10px)</code><br/>
  • <code>border: 1px solid rgba(255,255,255,0.3)</code>
</div>`}
        />
      </CollapsibleSection>
      {/* 갤러리 섹션: 인기 그라데이션 조합 모음 */}
      <CollapsibleSection title="🎨 그라데이션 갤러리">
        <p className="section-description">
          인기있는 그라데이션 스타일들을 한눈에 비교해보세요. 클릭하면 CSS 코드를 확인할 수 있습니다.
        </p>
        <LiveCodeEditor
          scopeId="gradient-gallery"
          previewHeight="400px"
          codeHeight="450px"
          initialCss={`.gradient-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
  background: #1e293b;
  border-radius: 16px;
}

.gradient-card {
  height: 120px;
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  padding: 0.75rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.gradient-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.gradient-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
}

.gradient-name {
  position: relative;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

/* Popular Gradients */
.sunset { background: linear-gradient(135deg, #ff6b6b, #feca57); }
.ocean { background: linear-gradient(135deg, #667eea, #764ba2); }
.mint { background: linear-gradient(135deg, #11998e, #38ef7d); }
.peach { background: linear-gradient(135deg, #ff9a9e, #fecfef); }
.night { background: linear-gradient(135deg, #0f0c29, #302b63, #24243e); }
.aurora { background: linear-gradient(135deg, #4facfe, #00f2fe); }
.fire { background: linear-gradient(135deg, #f12711, #f5af19); }
.lavender { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
.forest { background: linear-gradient(135deg, #134e5e, #71b280); }
.candy { background: linear-gradient(135deg, #ff6a88, #ff99ac); }
.royal { background: linear-gradient(135deg, #141e30, #243b55); }
.sunrise { background: linear-gradient(135deg, #f093fb, #f5576c); }`}
          initialHtml={`<div class="gradient-gallery">
  <div class="gradient-card sunset"><span class="gradient-name">Sunset</span></div>
  <div class="gradient-card ocean"><span class="gradient-name">Ocean</span></div>
  <div class="gradient-card mint"><span class="gradient-name">Mint</span></div>
  <div class="gradient-card peach"><span class="gradient-name">Peach</span></div>
  <div class="gradient-card night"><span class="gradient-name">Night Sky</span></div>
  <div class="gradient-card aurora"><span class="gradient-name">Aurora</span></div>
  <div class="gradient-card fire"><span class="gradient-name">Fire</span></div>
  <div class="gradient-card lavender"><span class="gradient-name">Lavender</span></div>
  <div class="gradient-card forest"><span class="gradient-name">Forest</span></div>
  <div class="gradient-card candy"><span class="gradient-name">Candy</span></div>
  <div class="gradient-card royal"><span class="gradient-name">Royal</span></div>
  <div class="gradient-card sunrise"><span class="gradient-name">Sunrise</span></div>
</div>`}
        />
      </CollapsibleSection>
      {/* 갤러리 섹션: 다양한 Box Shadow 스타일 비교 */}
      <CollapsibleSection title="Box Shadow 비교">
        <p className="section-description">
          다양한 그림자 스타일이 요소에 주는 느낌을 비교해보세요.
        </p>
        <LiveCodeEditor
          scopeId="box-shadow-gallery"
          previewHeight="350px"
          codeHeight="450px"
          initialCss={`.shadow-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background: #f1f5f9;
  border-radius: 16px;
}

.shadow-box {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;
  color: #1e293b;
}

.shadow-box:hover {
  transform: translateY(-2px);
}

.shadow-name {
  font-size: 0.8rem;
  font-weight: 600;
  color: #64748b;
  margin-top: 1rem;
}

/* Shadow Types */
.subtle { box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.soft { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.medium { box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
.large { box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); }
.sharp { box-shadow: 5px 5px 0 #1e293b; }
.glow { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5); }
.inset { box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); }
.layered { 
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.08),
    0 4px 8px rgba(0,0,0,0.08),
    0 16px 32px rgba(0,0,0,0.08);
}`}
          initialHtml={`<div class="shadow-gallery">
  <div class="shadow-box subtle">
    <div style="font-size: 1.5rem;">☁️</div>
    <div class="shadow-name">Subtle</div>
  </div>
  <div class="shadow-box soft">
    <div style="font-size: 1.5rem;">🌤️</div>
    <div class="shadow-name">Soft</div>
  </div>
  <div class="shadow-box medium">
    <div style="font-size: 1.5rem;">⛅</div>
    <div class="shadow-name">Medium</div>
  </div>
  <div class="shadow-box large">
    <div style="font-size: 1.5rem;">🌥️</div>
    <div class="shadow-name">Large</div>
  </div>
  <div class="shadow-box sharp">
    <div style="font-size: 1.5rem;">📐</div>
    <div class="shadow-name">Sharp</div>
  </div>
  <div class="shadow-box glow">
    <div style="font-size: 1.5rem;">✨</div>
    <div class="shadow-name">Glow</div>
  </div>
  <div class="shadow-box inset">
    <div style="font-size: 1.5rem;">🕳️</div>
    <div class="shadow-name">Inset</div>
  </div>
  <div class="shadow-box layered">
    <div style="font-size: 1.5rem;">📚</div>
    <div class="shadow-name">Layered</div>
  </div>
</div>`}
        />
      </CollapsibleSection>
      {/* 비교 섹션: 여러 디자인 트렌드별 카드 스타일 (Flat, Neumorphism 등) */}
      <CollapsibleSection title="카드 스타일 비교">
        <p className="section-description">
          다양한 디자인 스타일의 카드들을 비교해보세요.
        </p>
        <LiveCodeEditor
          scopeId="card-styles"
          previewHeight="450px"
          codeHeight="550px"
          initialCss={`.card-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
}

.style-card {
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
}

.style-card h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.style-card p {
  font-size: 0.85rem;
  opacity: 0.8;
  line-height: 1.4;
}

/* Flat Style */
.flat-style {
  background: white;
  color: #1e293b;
}

/* Elevated Style */
.elevated-style {
  background: white;
  color: #1e293b;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

/* Glass Style */
.glass-style {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
}

/* Gradient Border */
.gradient-border {
  background: white;
  color: #1e293b;
  position: relative;
}
.gradient-border::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 15px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  z-index: -1;
}

/* Dark Style */
.dark-style {
  background: #0f172a;
  color: white;
  border: 1px solid rgba(255,255,255,0.1);
}

/* Neumorphism */
.neumorphism {
  background: #e0e5ec;
  color: #1e293b;
  box-shadow: 
    8px 8px 16px #b8bec7,
    -8px -8px 16px #ffffff;
}`}
          initialHtml={`<div class="card-comparison">
  <div class="style-card flat-style">
    <h4>Flat</h4>
    <p>깔끔하고 미니멀한 스타일</p>
  </div>
  <div class="style-card elevated-style">
    <h4>Elevated</h4>
    <p>그림자로 깊이감 표현</p>
  </div>
  <div class="style-card glass-style">
    <h4>Glass</h4>
    <p>투명하고 모던한 느낌</p>
  </div>
  <div class="style-card gradient-border">
    <h4>Gradient Border</h4>
    <p>그라데이션 테두리 효과</p>
  </div>
  <div class="style-card dark-style">
    <h4>Dark</h4>
    <p>다크모드 스타일</p>
  </div>
  <div class="style-card neumorphism">
    <h4>Neumorphism</h4>
    <p>부드러운 입체 효과</p>
  </div>
</div>`}
        />
      </CollapsibleSection>
      {/* 실무 응용 섹션: 영감을 주는 히어로 섹션 디자인 */}
      <CollapsibleSection title="실전 예제: 모바일 앱 히어로 섹션">
        <p className="section-description">
          그라데이션, 글래스모피즘, 복합 배경 이미지를 활용한 트렌디한 히어로 섹션입니다.
        </p>
        <LiveCodeEditor
          scopeId="color-practical-hero"
          previewHeight="450px"
          codeHeight="500px"
          initialCss={`.hero-container {
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background: 
    radial-gradient(circle at top right, rgba(99, 102, 241, 0.5), transparent 400px),
    radial-gradient(circle at bottom left, rgba(244, 63, 94, 0.4), transparent 400px),
    #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.15)"/></svg>');
}

.hero-content {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.hero-logo {
  font-size: 3rem;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.8));
}

h2 {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 12px;
}

p {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
}

.cta-button {
  margin-top: 24px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}
`}
          initialHtml={`<div class="hero-container">
  <div class="hero-content">
    <div class="hero-logo">🚀</div>
    <h2>Design Future</h2>
    <p>배경 그라데이션과 글래스모피즘 효과가 결합된 현대적인 UI 기법을 확인해보세요.</p>
    <button class="cta-button">Get Started</button>
  </div>
</div>

<p style="margin-top: 1.5rem; color: #1e293b; background: #f1f5f9; padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
  • <strong>복합 레이어</strong>: 여러 개의 radial-gradient를 겹쳐 깊이감 있는 배경 연출<br/>
  • <strong>Glassmorphism</strong>: <code>backdrop-filter</code>와 미세한 <code>border</code>로 유리 질감 완성<br/>
  • <strong>drop-shadow</strong>: 로고 아이콘에 네온 효과 부여
</p>`}
        />
      </CollapsibleSection>
    </div>
  );
}

export default ColorBackgroundStudy;
