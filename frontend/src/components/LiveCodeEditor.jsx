import { useState, useEffect, useRef } from 'react';

/**
 * LiveCodeEditor - Interactive CSS editor component
 * Allows users to edit CSS code and apply changes manually
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.preview - HTML preview content
 * @param {string} props.initialCss - Initial CSS code
 * @param {string} props.scopeId - Unique ID to scope the styles
 */
function LiveCodeEditor({ preview, initialCss, initialHtml, currentCss, scopeId }) {
  const [draftCss, setDraftCss] = useState(initialCss);
  const [appliedCss, setAppliedCss] = useState(initialCss);
  const [draftHtml, setDraftHtml] = useState(initialHtml || '');
  const [appliedHtml, setAppliedHtml] = useState(initialHtml || '');
  const [activeTab, setActiveTab] = useState('css'); // 'css' or 'html'
  const styleRef = useRef(null);

  // Sync with external updates (e.g., from UI controls)
  useEffect(() => {
    if (currentCss) {
      setDraftCss(currentCss);
      setAppliedCss(currentCss);
    }
  }, [currentCss]);

  // Apply CSS to the preview area
  useEffect(() => {
    if (styleRef.current) {
      const scopedCss = appliedCss.replace(/(^|\s|,)(\.[a-zA-Z][\w-]*)/g, `$1#${scopeId} $2`);
      styleRef.current.textContent = scopedCss;
    }
  }, [appliedCss, scopeId]);

  const handleReset = () => {
    setDraftCss(initialCss);
    setAppliedCss(initialCss);
    if (initialHtml) {
      setDraftHtml(initialHtml);
      setAppliedHtml(initialHtml);
    }
  };

  const handleApply = () => {
    setAppliedCss(draftCss);
    if (initialHtml) {
      setAppliedHtml(draftHtml);
    }
  };

  const hasChanges = draftCss !== appliedCss || (initialHtml && draftHtml !== appliedHtml);

  return (
    <div className="live-editor-container">
      <div className="live-editor-header">
        {initialHtml && (
          <div className="live-editor-tabs">
            <button 
              className={`tab-btn ${activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
          </div>
        )}
        <div className="live-editor-actions">
          <button 
            className="btn btn-primary live-editor-apply" 
            onClick={handleApply}
            disabled={!hasChanges}
          >
            Apply
          </button>
          <button className="btn btn-secondary live-editor-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="live-editor-content">
        <div className="live-editor-preview" id={scopeId}>
          <style ref={styleRef}></style>
          {initialHtml ? (
            <div dangerouslySetInnerHTML={{ __html: appliedHtml }} />
          ) : (
            preview
          )}
        </div>
        <div className="live-editor-code">
          {(!initialHtml || activeTab === 'css') && (
            <textarea
              className="code-textarea"
              value={draftCss}
              onChange={(e) => setDraftCss(e.target.value)}
              spellCheck="false"
              placeholder="/* Enter your CSS here */"
            />
          )}
          {initialHtml && activeTab === 'html' && (
            <textarea
              className="code-textarea"
              value={draftHtml}
              onChange={(e) => setDraftHtml(e.target.value)}
              spellCheck="false"
              placeholder="<!-- Enter your HTML here -->"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveCodeEditor;
