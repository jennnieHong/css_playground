/**
 * FloatStudy.jsx
 * 고전적인 레이아웃 기법인 Float 및 해제(Clear) 실습 페이지
 */
import { useState } from 'react';
import LiveCodeEditor from '../components/LiveCodeEditor';
import CssPropertyControls from '../components/CssPropertyControls';

function FloatStudy() {
  // 상태 관리: float 방향 및 clear 설정
  const [floatValue, setFloatValue] = useState('none');
  const [clearValue, setClearValue] = useState('none');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Float & Clear Study</h1>
        <p className="page-subtitle">Classic layout technique - still useful for wrapping text around elements</p>
      </div>

      {/* 섹션 1: Float 속성의 개념과 역사적 배경 */}
      <section className="study-section">
        <h2 className="section-title">Float이란?</h2>
        <div className="section-description">
          <p>
            <code>float</code>는 원래 <strong>잡지 레이아웃처럼 텍스트가 이미지를 감싸도록</strong> 하기 위해 만들어졌습니다.<br />
            Flexbox와 Grid가 등장하기 전에는 레이아웃의 주요 도구였지만, 현재는 주로 텍스트 래핑(wrapping)에 사용됩니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>float: left</code>: 요소를 왼쪽에 띄우고, 텍스트가 오른쪽을 감쌈</li>
            <li><code>float: right</code>: 요소를 오른쪽에 띄우고, 텍스트가 왼쪽을 감쌈</li>
            <li><code>float: none</code>: 기본값, float 해제</li>
          </ul>
        </div>
      </section>

      {/* 섹션 2: Float의 기본 동작 및 텍스트 래핑 피드백 */}
      <section className="study-section">
        <h2 className="section-title">Float 기본 동작</h2>
        <p className="section-description">
          Float된 요소는 일반 흐름에서 벗어나 떠 있게 되고, 주변 콘텐츠가 그것을 감쌉니다.
        </p>

        <CssPropertyControls
          properties={[
            {
              name: 'float',
              type: 'radio',
              value: floatValue,
              onChange: setFloatValue,
              options: ['none', 'left', 'right']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="float-basic"
          previewHeight="300px"
          codeHeight="300px"
          initialCss={`.float-box {
  float: ${floatValue};
  width: 150px;
  height: 150px;
  margin: 0 15px 15px 0; /* 오른쪽과 아래 여백 */
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}
          currentCss={`.float-box {
  float: ${floatValue};
  width: 150px;
  height: 150px;
  margin: 0 15px 15px 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}
          initialHtml={`<div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
  <div class="float-box">Float Box</div>
  
  <p style="color: #1e293b; line-height: 1.6; margin: 0;">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
  </p>
</div>

<p style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>none</strong>: 일반 흐름대로 배치<br/>
  <strong>left</strong>: 왼쪽에 떠 있고, 텍스트가 오른쪽을 감쌈<br/>
  <strong>right</strong>: 오른쪽에 떠 있고, 텍스트가 왼쪽을 감쌈
</p>`}
        />
      </section>

      {/* 섹션 3: 흐름을 제어하는 Clear 속성 */}
      <section className="study-section">
        <h2 className="section-title">Clear 속성</h2>
        <div className="section-description">
          <p>
            Float 요소 다음에 오는 요소가 Float의 영향을 받지 않고 <strong>아래에 위치</strong>하도록 합니다.
          </p>
          <ul style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li><code>clear: left</code>: 왼쪽 float를 지나서 배치</li>
            <li><code>clear: right</code>: 오른쪽 float를 지나서 배치</li>
            <li><code>clear: both</code>: 양쪽 float 모두 지나서 배치 (가장 많이 사용!)</li>
          </ul>
        </div>

        <CssPropertyControls
          properties={[
            {
              name: 'clear',
              type: 'radio',
              value: clearValue,
              onChange: setClearValue,
              options: ['none', 'left', 'right', 'both']
            }
          ]}
        />

        <LiveCodeEditor
          scopeId="clear-demo"
          previewHeight="300px"
          codeHeight="400px"
          initialCss={`.float-left {
  float: left;
  width: 120px;
  height: 120px;
  margin: 0 15px 10px 0;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.float-right {
  float: right;
  width: 120px;
  height: 120px;
  margin: 0 0 10px 15px;
  background-color: #10b981;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.clear-box {
  clear: ${clearValue};
  margin-top: 10px;
  padding: 1rem;
  background-color: #fcd34d;
  color: #78350f;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #f59e0b;
}`}
          currentCss={`.float-left {
  float: left;
  width: 120px;
  height: 120px;
  margin: 0 15px 10px 0;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.float-right {
  float: right;
  width: 120px;
  height: 120px;
  margin: 0 0 10px 15px;
  background-color: #10b981;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.clear-box {
  clear: ${clearValue};
  margin-top: 10px;
  padding: 1rem;
  background-color: #fcd34d;
  color: #78350f;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #f59e0b;
}`}
          initialHtml={`<div style="background: #f8fafc; padding: 1rem; border-radius: 8px;">
  <div class="float-left">Left</div>
  <div class="float-right">Right</div>
  
  <div class="clear-box">
    Clear: ${clearValue}
  </div>
</div>

<p style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>clear: both</strong>를 사용하면 노란 박스가 Float된 요소들 아래로 내려갑니다.
</p>`}
        />
      </section>

      {/* 섹션 4: 부모 요소의 높이 붕괴 방지 기법 (Clearfix) */}
      <section className="study-section">
        <h2 className="section-title">Clearfix - 부모 높이 문제 해결</h2>
        <div className="section-description">
          <p>
            Float된 자식 요소는 부모의 높이에 포함되지 않습니다. 이를 <strong>Clearfix</strong>로 해결할 수 있습니다.
          </p>
        </div>

        <LiveCodeEditor
          scopeId="clearfix"
          previewHeight="350px"
          codeHeight="450px"
          initialCss={`/* 문제: Float된 자식의 높이가 무시됨 */
.parent-problem {
  background-color: #fee2e2;
  border: 3px solid #ef4444;
  padding: 10px;
  margin-bottom: 2rem;
}

/* 해결: Clearfix 적용 */
.parent-fixed {
  background-color: #d1fae5;
  border: 3px solid #10b981;
  padding: 10px;
}

.parent-fixed::after {
  content: "";
  display: table;
  clear: both;
}

.float-child {
  float: left;
  width: 120px;
  height: 80px;
  margin: 5px;
  background-color: #60a5fa;
  color: #ffffff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}`}
          initialHtml={`<div>
  <h4 style="color: #1e293b; margin-top: 0;">❌ 문제: 부모 높이 붕괴</h4>
  <div class="parent-problem">
    <div class="float-child">Float 1</div>
    <div class="float-child">Float 2</div>
  </div>
  
  <h4 style="color: #1e293b;">✅ 해결: Clearfix 적용</h4>
  <div class="parent-fixed">
    <div class="float-child">Float 1</div>
    <div class="float-child">Float 2</div>
  </div>
</div>

<div style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  <strong>Clearfix 방법:</strong><br/>
  <code style="background: #e2e8f0; padding: 2px 6px; border-radius: 3px;">
    .parent::after { content: ""; display: table; clear: both; }
  </code>
</div>`}
        />
      </section>

      {/* 섹션 5: 실무 활용 - 이미지와 텍스트의 조화로운 배치 */}
      <section className="study-section">
        <h2 className="section-title">실전 사용: 이미지 + 텍스트 래핑</h2>
        <p className="section-description">
          Float의 가장 적절한 사용 사례입니다. 블로그 포스트나 기사에서 흔히 볼 수 있는 패턴입니다.
        </p>

        <LiveCodeEditor
          scopeId="float-practical"
          previewHeight="350px"
          codeHeight="400px"
          initialCss={`.article {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  color: #1e293b;
}

.article-image {
  float: left;
  width: 200px;
  height: 150px;
  margin: 0 1.5rem 1rem 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
}

.article h3 {
  margin-top: 0;
  color: #0f172a;
}

.article p {
  line-height: 1.8;
  margin: 0.5rem 0;
}`}
          initialHtml={`<div class="article">
  <div class="article-image">Image</div>
  
  <h3>Article Title</h3>
  
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
  </p>
  
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>

<p style="margin-top: 1rem; color: #1e293b; background: #f1f5f9; padding: 0.75rem; border-radius: 6px; font-size: 0.9rem;">
  이것이 Float의 <strong>가장 적절한 사용 사례</strong>입니다.<br/>
  레이아웃에는 Flexbox/Grid를 사용하세요!
</p>`}
        />
      </section>
    </div>
  );
}

export default FloatStudy;
