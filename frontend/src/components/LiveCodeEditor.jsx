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
function LiveCodeEditor({ preview, initialCss, initialHtml, currentCss, currentHtml, scopeId, height, previewHeight, codeHeight }) {
  const [draftCss, setDraftCss] = useState(initialCss || '');
  const [appliedCss, setAppliedCss] = useState(initialCss || '');
  const [draftHtml, setDraftHtml] = useState(initialHtml || '');
  const [appliedHtml, setAppliedHtml] = useState(initialHtml || '');
  const [activeTab, setActiveTab] = useState('css'); // 'css' or 'html'
  const [renderKey, setRenderKey] = useState(0); // For forcing re-renders without using long strings
  const styleRef = useRef(null);
  const lastSyncedCss = useRef(currentCss);
  const lastSyncedHtml = useRef(currentHtml);

  // Sync with external CSS updates
  useEffect(() => {
    if (currentCss !== undefined && currentCss !== lastSyncedCss.current) {
      // If user is currently typing (draft != applied), we don't touch the draft
      // to avoid jumping or losing cursor position.
      if (draftCss === appliedCss) {
        setDraftCss(currentCss);
      }
      setAppliedCss(currentCss);
      lastSyncedCss.current = currentCss;
    }
  }, [currentCss, draftCss, appliedCss]);

  // Sync with external HTML updates
  useEffect(() => {
    if (currentHtml !== undefined && currentHtml !== lastSyncedHtml.current) {
      if (draftHtml === appliedHtml) {
        setDraftHtml(currentHtml);
      }
      setAppliedHtml(currentHtml);
      lastSyncedHtml.current = currentHtml;
    }
  }, [currentHtml, draftHtml, appliedHtml]);

  // Apply CSS to the preview area
  useEffect(() => {
    if (styleRef.current) {
      // Helper to extract at-rules (like @keyframes, @layer) that cannot be nested
      const extractAtRules = (css) => {
        if (!css) return { atRules: '', other: '' };
        let atRules = '';
        let other = css;
        
        // Extract @keyframes
        const keyframeRegex = /@keyframes\s+[\w-]+\s*\{/g;
        let match;
        let processedCss = '';
        let lastIndex = 0;
        let tempCss = css;
        
        while ((match = keyframeRegex.exec(tempCss)) !== null) {
          processedCss += tempCss.substring(lastIndex, match.index);
          let braceCount = 1;
          let i = match.index + match[0].length;
          while (i < tempCss.length && braceCount > 0) {
            if (tempCss[i] === '{') braceCount++;
            else if (tempCss[i] === '}') braceCount--;
            i++;
          }
          atRules += tempCss.substring(match.index, i) + '\n';
          lastIndex = i;
        }
        processedCss += tempCss.substring(lastIndex);
        other = processedCss;
        
        // Extract @layer order declaration (e.g., @layer base, theme, custom;)
        const layerOrderRegex = /@layer\s+[\w-]+(?:\s*,\s*[\w-]+)*\s*;/g;
        other = other.replace(layerOrderRegex, (match) => {
          atRules += match + '\n';
          return '';
        });
        
        // Extract @layer blocks and scope the selectors inside
        const layerBlockRegex = /@layer\s+[\w-]+\s*\{/g;
        processedCss = '';
        lastIndex = 0;
        tempCss = other;
        
        // Helper to prefix selectors with scope ID
        const prefixSelectors = (cssContent, scopeId) => {
          // First, strip all CSS comments
          let cleanCss = cssContent.replace(/\/\*[\s\S]*?\*\//g, '');
          
          // Split by rule blocks and prefix each selector
          let result = '';
          
          // Match selector { properties } patterns
          const ruleRegex = /([^{}]+)\{([^{}]*)\}/g;
          let ruleMatch;
          
          while ((ruleMatch = ruleRegex.exec(cleanCss)) !== null) {
            const selector = ruleMatch[1].trim();
            const properties = ruleMatch[2];
            
            // Skip empty selectors
            if (!selector) continue;
            
            // Prefix each selector in comma-separated list
            const prefixedSelector = selector
              .split(',')
              .map(s => {
                s = s.trim();
                if (!s) return s;
                // Handle :root
                if (s === ':root') return `#${scopeId}`;
                // Handle pseudo-elements/classes on element itself
                if (s.startsWith(':')) return `#${scopeId}${s}`;
                // Normal selectors
                return `#${scopeId} ${s}`;
              })
              .filter(s => s)
              .join(', ');
            
            if (prefixedSelector) {
              result += `${prefixedSelector} { ${properties} }\n`;
            }
          }
          
          return result || cssContent;
        };
        
        while ((match = layerBlockRegex.exec(tempCss)) !== null) {
          processedCss += tempCss.substring(lastIndex, match.index);
          let braceCount = 1;
          let i = match.index + match[0].length;
          while (i < tempCss.length && braceCount > 0) {
            if (tempCss[i] === '{') braceCount++;
            else if (tempCss[i] === '}') braceCount--;
            i++;
          }
          // For @layer blocks, we need to scope the content inside
          const layerMatch = tempCss.substring(match.index, i);
          const layerName = layerMatch.match(/@layer\s+([\w-]+)/)[1];
          const layerContent = layerMatch.substring(layerMatch.indexOf('{') + 1, layerMatch.lastIndexOf('}'));
          // Scope each selector inside the layer
          const scopedLayerContent = prefixSelectors(layerContent, scopeId);
          atRules += `@layer ${layerName} {\n${scopedLayerContent}}\n`;
          lastIndex = i;
        }
        processedCss += tempCss.substring(lastIndex);
        other = processedCss;
        
        return { atRules, other };
      };

      const { atRules, other } = extractAtRules(appliedCss);

      // Use CSS Nesting for perfect scoping without breaking sibling/descendant selectors
      // But keep @keyframes and @layer at the top level
      // Replace :root with & so it applies to the scope container itself (Local Root)
      const scopedCss = `
        ${atRules}
        #${scopeId} {
          ${other.replace(/:root/g, '&')}
        }
      `;
      styleRef.current.textContent = scopedCss;
    }
  }, [appliedCss, scopeId]);

  const handleReset = () => {
    const resetCss = initialCss || '';
    const resetHtml = initialHtml || '';
    
    setDraftCss(resetCss);
    setAppliedCss(resetCss);
    setDraftHtml(resetHtml);
    setAppliedHtml(resetHtml);
    
    // Sync tracking reset
    lastSyncedCss.current = resetCss;
    lastSyncedHtml.current = resetHtml;
  };

  const handleApply = () => {
    setAppliedCss(draftCss);
    if (hasHtml) {
      setAppliedHtml(draftHtml);
    }
    setRenderKey(prev => prev + 1); // Increment to force preview re-render
  };

  const [copiedType, setCopiedType] = useState(null); // 'css' or 'html'

  const handleCopy = async (type) => {
    const textToCopy = type === 'css' ? appliedCss : appliedHtml;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Decide if we should show HTML features
  const hasHtml = initialHtml || currentHtml;

  const hasChanges = draftCss !== appliedCss || (hasHtml && draftHtml !== appliedHtml);

  // Calculate heights based on layout mode
  // Priority: previewHeight/codeHeight > height > defaults
  const isVerticalLayout = activeTab === 'both';
  let containerHeight, previewHeightStyle, codeHeightStyle;

  if (isVerticalLayout) {
    // Vertical layout: stack preview and code vertically
    if (previewHeight || codeHeight) {
      // Individual heights specified (takes priority)
      const previewPx = previewHeight ? parseInt(previewHeight) : 300; // default 300px
      const codePx = codeHeight ? parseInt(codeHeight) : 300; // default 300px
      containerHeight = `${previewPx + codePx}px`;
      previewHeightStyle = previewHeight || '300px';
      codeHeightStyle = codeHeight || '300px';
    } else if (height) {
      // General height: split 50/50
      containerHeight = height;
      previewHeightStyle = '50%';
      codeHeightStyle = '50%';
    } else {
      // No heights: use CSS defaults
      containerHeight = undefined;
      previewHeightStyle = undefined;
      codeHeightStyle = undefined;
    }
  } else {
    // Horizontal layout: preview and code side by side
    if (previewHeight || codeHeight) {
      // Individual heights specified (takes priority)
      const previewPx = previewHeight ? parseInt(previewHeight) : 0;
      const codePx = codeHeight ? parseInt(codeHeight) : 0;
      const maxHeight = Math.max(previewPx, codePx);
      containerHeight = `${maxHeight}px`;
      // Both areas use the same max height in horizontal layout
      previewHeightStyle = `${maxHeight}px`;
      codeHeightStyle = `${maxHeight}px`;
    } else if (height) {
      // General height: both areas fill 100%
      containerHeight = height;
      previewHeightStyle = '100%';
      codeHeightStyle = '100%';
    } else {
      // No heights: use CSS defaults
      containerHeight = undefined;
      previewHeightStyle = undefined;
      codeHeightStyle = undefined;
    }
  }

  return (
    <div className="live-editor-container">
      <div className="live-editor-header">
        {hasHtml && (
          <div className="live-editor-tabs">
            <button
              className={`tab-btn ${activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
            <button
              className={`tab-btn ${activeTab === 'both' ? 'active' : ''}`}
              onClick={() => setActiveTab('both')}
            >
              Both
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
      <div
        className={`live-editor-content ${activeTab === 'both' ? 'vertical-layout' : ''}`}
        style={containerHeight ? { height: containerHeight } : undefined}
      >
        <div
          className="live-editor-preview"
          id={scopeId}
          style={previewHeightStyle ? { height: previewHeightStyle, maxHeight: 'none' } : undefined}
        >
          {/* Viewport Simulator: Traps fixed position but stays static */}
          <div className="preview-viewport" style={{
            transform: 'translateZ(0)',
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="preview-scroll" style={{
              width: '100%',
              height: '100%',
              overflow: 'auto',
              padding: 'var(--spacing-lg)',
              background: '#ffffff' // 기본 밝은 배경 추가
            }}>
              <style ref={styleRef}></style>
              {hasHtml ? (
                /* 
                  Note: Using dangerouslySetInnerHTML without sanitization is risky in public environments. 
                  In this playground, it's used for educational purposes with user-provided local content.
                */
                <div key={renderKey} dangerouslySetInnerHTML={{ __html: appliedHtml }} />
              ) : (
                <div key={renderKey}>{preview}</div>
              )}
            </div>
          </div>
        </div>
        <div
          className={`live-editor-code ${activeTab === 'both' ? 'split-view' : ''}`}
          style={isVerticalLayout && codeHeightStyle ? { height: codeHeightStyle } : undefined}
        >
          {(!hasHtml || activeTab === 'css' || activeTab === 'both') && (
            <div className={`code-editor-wrapper ${activeTab === 'both' ? 'half-width' : ''}`}>
              <button
                className="copy-btn"
                onClick={() => handleCopy('css')}
                title="Copy CSS"
              >
                {copiedType === 'css' ? '✓ Copied!' : '📋 Copy CSS'}
              </button>
              <textarea
                className="code-textarea"
                value={draftCss}
                onChange={(e) => setDraftCss(e.target.value)}
                spellCheck="false"
                placeholder="/* Enter your CSS here */"
                style={codeHeightStyle || activeTab === 'both' ? { height: codeHeightStyle || '100%', maxHeight: 'none' } : undefined}
              />
            </div>
          )}
          {hasHtml && (activeTab === 'html' || activeTab === 'both') && (
            <div className={`code-editor-wrapper ${activeTab === 'both' ? 'half-width' : ''}`}>
              <button
                className="copy-btn"
                onClick={() => handleCopy('html')}
                title="Copy HTML"
              >
                {copiedType === 'html' ? '✓ Copied!' : '📋 Copy HTML'}
              </button>
              <textarea
                className="code-textarea"
                value={draftHtml}
                onChange={(e) => setDraftHtml(e.target.value)}
                spellCheck="false"
                placeholder="<!-- Enter your HTML here -->"
                style={codeHeightStyle || activeTab === 'both' ? { height: codeHeightStyle || '100%', maxHeight: 'none' } : undefined}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveCodeEditor;
