import { useState } from 'react';

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 0);

  const handleKeyDown = (e, tabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(tabId);
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`panel-${tab.id}`}
            className={`tab-panel ${activeTab === tab.id ? 'active' : ''}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            {activeTab === tab.id && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
