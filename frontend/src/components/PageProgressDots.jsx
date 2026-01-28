import { useState, useEffect, useCallback } from 'react';
import './PageProgressDots.css';

/**
 * PageProgressDots
 * 화면 우측에 페이지 내 섹션들을 점으로 표시하고, 스크롤 위치에 따라 활성화된 점을 표시합니다.
 * 점을 클릭하면 해당 섹션으로 부드럽게 이동합니다.
 */
function PageProgressDots() {
    const [sections, setSections] = useState([]);
    const [activeId, setActiveId] = useState('');

    // 페이지 내의 모든 CollapsibleSection(data-section 속성 보유)을 찾습니다.
    const findSections = useCallback(() => {
        const sectionNodes = document.querySelectorAll('section[data-section]');
        const sectionData = Array.from(sectionNodes).map(node => ({
            id: node.id,
            title: node.querySelector('.section-title span')?.textContent || node.id
        }));
        setSections(sectionData);
    }, []);

    useEffect(() => {
        // 컴포넌트 마운트 시 및 DOM 변화 시 섹션 탐색
        findSections();
        
        // 동적으로 추가되는 경우를 위해 약간의 지연 후 재탐색 (React 렌더링 동기화)
        const timer = setTimeout(findSections, 100);

        // IntersectionObserver 설정
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -80% 0px', // 화면 상단 부근에 왔을 때 감지
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sectionNodes = document.querySelectorAll('section[data-section]');
        sectionNodes.forEach(node => observer.observe(node));

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [findSections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (sections.length === 0) return null;

    return (
        <nav className="page-progress-dots" aria-label="Page navigation">
            <div className="dots-container">
                {sections.map(section => (
                    <div 
                        key={section.id}
                        className={`dot-wrapper ${activeId === section.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(section.id)}
                    >
                        <span className="dot-tooltip">{section.title}</span>
                        <button 
                            className="dot-button"
                            aria-label={`Scroll to ${section.title}`}
                        />
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default PageProgressDots;
