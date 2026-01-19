import { useState } from 'react';
import Tabs from '../components/Tabs';
import Alert from '../components/Alert';
import Confirm from '../components/Confirm';
import SearchPopup from '../components/SearchPopup';

function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowAlert(true);
  };

  const tabs = [
    {
      id: 1,
      label: '소개',
      content: (
        <div className="content-section">
          <h2>CSS Study에 오신 것을 환영합니다!</h2>
          <p>이 웹사이트는 CSS를 체계적으로 학습할 수 있도록 설계되었습니다.</p>
          <ul className="feature-list">
            <li>✨ 인터랙티브한 예제</li>
            <li>📚 체계적인 학습 구조</li>
            <li>🎯 실전 중심의 내용</li>
            <li>💡 최신 CSS 기술</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      label: '학습 가이드',
      content: (
        <div className="content-section">
          <h2>학습 가이드</h2>
          <ol className="guide-list">
            <li>
              <strong>CSS Basics</strong>
              <p>Flexbox, Grid, Animation 등 기본 개념을 학습합니다.</p>
            </li>
            <li>
              <strong>Advanced Topics</strong>
              <p>Custom Properties, CSS Architecture 등 고급 주제를 다룹니다.</p>
            </li>
            <li>
              <strong>실습</strong>
              <p>각 섹션의 예제를 직접 실습해보세요.</p>
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 3,
      label: '컴포넌트 데모',
      content: (
        <div className="content-section">
          <h2>재사용 가능한 컴포넌트</h2>
          <p>이 페이지에서 사용된 컴포넌트들을 테스트해보세요:</p>
          <div className="demo-buttons">
            <button className="btn btn-primary" onClick={() => setShowAlert(true)}>
              Alert 열기
            </button>
            <button className="btn btn-secondary" onClick={() => setShowConfirm(true)}>
              Confirm 열기
            </button>
            <button className="btn btn-accent" onClick={() => setShowSearch(true)}>
              Search 열기
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">CSS Study</h1>
        <p className="page-subtitle">모던 CSS를 마스터하세요</p>
      </div>

      <Tabs tabs={tabs} />

      {showAlert && (
        <Alert 
          message="Alert 컴포넌트가 정상적으로 작동합니다!" 
          onClose={() => setShowAlert(false)} 
        />
      )}

      {showConfirm && (
        <Confirm
          message="이 작업을 계속하시겠습니까?"
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {showSearch && (
        <SearchPopup
          onClose={() => setShowSearch(false)}
          onSearch={(result) => console.log('Selected:', result)}
        />
      )}
    </div>
  );
}

export default Home;
