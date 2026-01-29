import LiveCodeEditor from '../components/LiveCodeEditor';
import PageHeader from '../components/PageHeader';
import CollapsibleSection from '../components/CollapsibleSection';
import RelatedLinks from '../components/RelatedLinks';

const JsCssDomStudy = () => {
    const consoleHtml = `
<div class="console-box">
  <div class="console-header">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <span class="console-title">Styling Lab</span>
  </div>
  <div class="console-body">
    <div data-ref="logContent" class="log-content">> 요소를 선택하고 스타일을 변경해보세요.</div>
  </div>
</div>`;

    return (
        <div className="page-container">
            <PageHeader
                title="1. Styling & ClassList (JS로 CSS 제어하기)"
                subtitle="인라인 스타일 직접 조작과 클래스 기반 제어의 차이점을 배우고 상황에 맞는 최선의 전략을 선택합니다."
            />

            <CollapsibleSection title="1. element.style (인라인 스타일 조작)" initiallyOpen={true}>
                <div className="concepts">
                  <p>객체의 <code>style</code> 속성을 통해 CSS를 직접 수정합니다. 이는 HTML 요소의 <code>style="..."</code> 속성에 직접 쓰여지는 <strong>인라인 스타일</strong>로 동작합니다.</p>
                  <div className="info-box warning">
                    <strong>⚠️ 주의점: 카멜 케이스(CamelCase) 사용</strong>
                    <p>CSS의 <code>background-color</code>는 JS에서 <code>backgroundColor</code>로 작성해야 합니다.</p>
                  </div>
                </div>
                <LiveCodeEditor
                    scopeId="js-css-inline"
                    initialHtml={`<div id="box" style="width: 100px; height: 100px; background: #3b82f6; transition: all 0.3s; margin-bottom: 10px;"></div>` + consoleHtml}
                    initialJs={`const box = document.getElementById('box');

log("스타일 직접 변경 시작...");
box.style.width = "200px";
box.style.backgroundColor = "#ef4444";
box.style.borderRadius = "50%";

log("현재 너비: " + box.style.width);`}
                />
            </CollapsibleSection>

            <CollapsibleSection title="2. element.classList (클래스 중심 제어)">
                <div className="concepts">
                  <p>인라인 스타일을 일일이 고치는 대신, 미리 정의된 CSS 클래스를 더하거나 빼는 방식입니다. <strong>관심사 분리(Separation of Concerns)</strong> 측면에서 훨씬 권장되는 방법입니다.</p>
                  <ul>
                    <li><code>add(className)</code>: 클래스 추가</li>
                    <li><code>remove(className)</code>: 클래스 제거</li>
                    <li><code>toggle(className)</code>: 있으면 제거, 없으면 추가</li>
                    <li><code>contains(className)</code>: 클래스 보유 여부 확인</li>
                  </ul>
                </div>
                <LiveCodeEditor
                    scopeId="js-css-classlist"
                    initialHtml={`
<style>
  .card { padding: 20px; border: 1px solid #ddd; border-radius: 8px; transition: 0.3s; }
  .card.active { border-color: #3b82f6; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); transform: translateY(-5px); }
  .card.dark { background: #1e293b; color: white; }
</style>
<div id="card" class="card">이 카드를 변신시켜보세요.</div>
<br/>` + consoleHtml}
                    initialJs={`const card = document.getElementById('card');

log("1. 'active' 클래스 토글");
card.classList.toggle('active');

log("2. 'dark' 클래스 추가");
card.classList.add('dark');

log("카드 상태: " + card.className);`}
                />
            </CollapsibleSection>

            <CollapsibleSection title="3. 무엇을 사용해야 할까요? (Best Practices)">
              <div className="concepts">
                <div className="info-table-wrapper">
                  <table className="info-table">
                    <thead>
                      <tr>
                        <th>방법</th>
                        <th>언제 쓰나요?</th>
                        <th>장점</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>element.style</strong></td>
                        <td>계산된 수치가 필요할 때 (예: 마우스 좌표에 따른 위치 이동)</td>
                        <td>즉각적이고 세밀한 수치 제어 가능</td>
                      </tr>
                      <tr>
                        <td><strong>element.classList</strong></td>
                        <td>대부분의 상태 변경 (UI 테마, 레이아웃 전환 등)</td>
                        <td>CSS와 JS의 역할 분리, 유지보수 용이</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CollapsibleSection>

            <style>{`
              .info-table-wrapper { margin: 15px 0; overflow-x: auto; }
              .info-table { width: 100%; border-collapse: collapse; background: var(--bg-secondary); border-radius: 8px; font-size: 0.9rem; }
              .info-table th, .info-table td { padding: 12px; border: 1px solid var(--border-color); text-align: left; }
              .info-table th { background: var(--bg-tertiary); color: var(--text-primary); }
              .info-table td { color: var(--text-secondary); line-height: 1.5; }
            `}</style>

            <RelatedLinks
                links={[
                    {
                        path: "/js-css/variables",
                        title: "2. CSS Variables (JS)",
                        description: "JS로 CSS 변수를 조작하여 더 강력한 동적 스타일링을 구현합니다.",
                        icon: "🧪"
                    }
                ]}
            />
        </div>
    );
};

export default JsCssDomStudy;
