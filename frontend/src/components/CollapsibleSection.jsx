import { useState } from 'react';

/**
 * CollapsibleSection
 * A reusable section component that can be toggled open/closed.
 * Preserves the state of its children (like LiveCodeEditor) by using display: none instead of unmounting.
 * 
 * @param {Object} props
 * @param {string|React.ReactNode} props.title - Section title
 * @param {React.ReactNode} props.children - Section content
 * @param {boolean} [props.initiallyOpen=false] - Whether the section is open by default
 * @param {string} [props.className=""] - Additional classes
 */
function CollapsibleSection({ title, children, initiallyOpen = false, className = "" }) {
    const [isOpen, setIsOpen] = useState(initiallyOpen);

    const toggleSection = (e) => {
        // 텍스트 선택 중이라면 토글하지 않음
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
            return;
        }
        setIsOpen(!isOpen);
    };

    return (
        <section className={`study-section ${className}`}>
            <h2
                className="section-title"
                onClick={toggleSection}
                style={{
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    userSelect: 'text',
                    caretColor: 'transparent',
                    outline: 'none'
                }}
                title={isOpen ? "Click to collapse" : "Click to expand"}
            >
                <span>{title}</span>
                <span style={{ fontSize: '0.8em', opacity: 0.6 }}>
                    {isOpen ? '▲' : '▼'}
                </span>
            </h2>

            <div
                className="section-content"
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {children}
            </div>
        </section>
    );
}

export default CollapsibleSection;
