/**
 * pageMetadata.js
 * 각 학습 페이지에 대한 메타데이터 (태그, 설명 등)
 * 검색 기능에서 사용됩니다.
 */

export const pageMetadata = [
    {
        path: '/flexbox',
        title: 'Flexbox 레이아웃',
        tags: [
            'flexbox', 'flex', '정렬', 'align', 'justify', 'gap', '레이아웃', 'layout', '1차원',
            'flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content',
            'flex-grow', 'flex-shrink', 'flex-basis', 'order', '가로정렬', '세로정렬',
            'space-between', 'space-around', 'center', '중앙정렬', '플렉스박스'
        ],
        description: 'Flexbox를 이용한 1차원 레이아웃 배치 학습'
    },
    {
        path: '/grid',
        title: 'Grid 레이아웃',
        tags: [
            'grid', '그리드', '레이아웃', 'layout', '2차원', 'template', 'gap', 'area',
            'grid-template-columns', 'grid-template-rows', 'grid-template-areas',
            'grid-column', 'grid-row', 'fr', 'repeat', 'minmax', 'auto-fit', 'auto-fill',
            '그리드 레이아웃', '격자', '행', '열', 'column', 'row'
        ],
        description: 'CSS Grid를 이용한 2차원 레이아웃 배치 학습'
    },
    {
        path: '/box-model',
        title: 'Box Model',
        tags: [
            'box-model', '박스 모델', 'padding', 'margin', 'border', 'content', 'box-sizing', 'border-box',
            'content-box', '안쪽 여백', '바깥 여백', '테두리', '크기 계산', 'width', 'height',
            '박스', '모델', '여백', '패딩', '마진'
        ],
        description: 'CSS 박스 모델의 구성요소와 크기 계산 방식 이해'
    },
    {
        path: '/display',
        title: 'Display 속성',
        tags: [
            'display', 'block', 'inline', 'inline-block', 'none', 'flex', 'grid',
            '블록', '인라인', '인라인 블록', '숨기기', '표시', '요소', 'flow', 'flow-root'
        ],
        description: '요소의 표시 방식을 결정하는 display 속성 학습'
    },
    {
        path: '/position',
        title: 'Position 속성',
        tags: [
            'position', '위치', 'relative', 'absolute', 'fixed', 'sticky', 'top', 'left', 'z-index',
            'static', '상대', '절대', '고정', '스티키', 'bottom', 'right', '위치지정',
            '좌표', '겹침', '레이어', 'positioning', 'inset', 'shorthand', '단축속성',
            '모달', 'modal', 'tooltip', '툴팁', 'dropdown', '드롭다운', 'badge', '뱃지',
            'overlay', '오버레이', 'FAB', 'floating button', '플로팅 버튼', '채팅 버튼',
            'parent-child', '부모-자식', 'positioned ancestor', '기준점', 'containing block',
            'transform trap', 'filter trap', 'stacking context', '맨 위로', 'scroll to top'
        ],
        description: '요소의 위치 지정 방식과 좌표 시스템 이해 - 모달, 툴팁, 드롭다운, 뱃지 등 실무 패턴 포함'
    },
    {
        path: '/float',
        title: 'Float & Clear',
        tags: [
            'float', 'clear', 'clearfix', '레거시', '레이아웃', '플로트', 'left', 'right',
            '클리어', '그림 감싸기', '텍스트 감싸기', '구식', 'both',
            '부모 높이', 'parent height', 'overflow hidden', '높이 붕괴', 'height collapse',
            '::after', 'display table', '이미지 래핑', 'text wrapping', '블로그', '기사',
            '위키피디아', 'HTML 이메일', 'email template', '레거시 코드'
        ],
        description: '플로트 속성과 클리어픽스 기법 학습 - 부모 높이 문제 해결과 실무 활용 사례'
    },
    {
        path: '/colors',
        title: '색상 & 배경',
        tags: [
            'color', 'background', '색상', '배경', 'gradient', '그라데이션', 'rgba', 'hsl', 'opacity',
            'background-color', 'background-image', 'linear-gradient', 'radial-gradient',
            'hex', 'rgb', '투명도', '색', '컬러', '그레디언트', 'background-size', 'background-position'
        ],
        description: '색상 지정 방식과 배경 스타일링 학습'
    },
    {
        path: '/typography',
        title: '타이포그래피',
        tags: [
            'typography', '타이포그래피', 'font', 'text', '글꼴', 'line-height', 'letter-spacing', 'text-align',
            'font-family', 'font-size', 'font-weight', 'font-style', 'text-decoration', 'text-transform',
            '폰트', '서체', '글자', '행간', '자간', '정렬', 'word-spacing', 'web font', '웹폰트'
        ],
        description: '텍스트 스타일링과 웹 폰트 사용법 학습'
    },
    {
        path: '/units',
        title: 'CSS 단위',
        tags: [
            'units', '단위', 'px', 'rem', 'em', 'vw', 'vh', '%', 'calc',
            'pixel', 'relative', 'absolute', 'viewport', '뷰포트', '퍼센트', '계산',
            'ch', 'ex', 'vmin', 'vmax', '상대단위', '절대단위'
        ],
        description: 'CSS에서 사용하는 다양한 크기 단위 이해'
    },
    {
        path: '/viewport-units',
        title: '현대적 뷰포트 단위',
        tags: [
            'viewport', 'dvh', 'svh', 'lvh', 'mobile', 'address bar', '모바일', '주소창', '반응형', '뷰포트', '100vh', '100dvh'
        ],
        description: '모바일 브라우저의 주소창 문제를 해결하는 현대적인 뷰포트 단위(dvh, svh, lvh) 학습'
    },
    {
        path: '/height',
        title: 'Height & Width',
        tags: [
            'inset', 'height', 'width', 'min-height', 'max-width', 'auto', '크기', '높이', '너비',
            'min-width', 'max-height', '최소', '최대', '사이즈', 'size', '가로', '세로'
        ],
        description: '요소의 크기를 제어하는 속성들 학습'
    },
    {
        path: '/animations',
        title: 'CSS 애니메이션',
        tags: [
            'animation', 'transition', '애니메이션', 'keyframes', 'transform', '전환', 'hover', 'ease',
            '@keyframes', 'translate', 'rotate', 'scale', 'skew', 'duration', 'delay',
            '움직임', '변형', '회전', '확대', '축소', '이동', 'timing-function', 'cubic-bezier'
        ],
        description: 'CSS를 이용한 애니메이션과 전환 효과 학습'
    },
    {
        path: '/interaction',
        title: '상호작용 & 상태',
        tags: [
            'interaction', 'hover', 'active', 'focus', ':has()', 'pseudo-class', '상태', '클래스 토글', 'cursor', 'pointer-events',
            'focus-visible', ':not()', ':is()', ':where()', '의사 클래스', '마우스', '키보드',
            '인터랙션', '상호작용', 'user-select', 'disabled', 'checked', 'enabled'
        ],
        description: '사용자 상호작용과 CSS 의사 클래스 활용'
    },
    {
        path: '/forms',
        title: '폼 스타일링',
        tags: [
            'form', 'input', 'button', 'checkbox', 'radio', 'select', '폼', '입력',
            'textarea', 'label', 'placeholder', '버튼', '체크박스', '라디오',
            'accent-color', 'appearance', '커스터마이징', 'form styling'
        ],
        description: '폼 요소의 스타일링과 커스터마이징'
    },
    {
        path: '/pseudo-elements',
        title: '가상 요소',
        tags: [
            '전역변수', 'pseudo-elements', '가상 요소', '::before', '::after', 'content', '클래스 토글', 'attr()', '리본', 'ribbon',
            '::first-line', '::first-letter', '::selection', '::marker', 'before', 'after',
            '가상', '요소', '장식', 'decoration', '아이콘', 'icon', 'badge', '배지',
            'content 속성', 'content property', '필수 조건', 'data attribute', 'data-label',
            '체크리스트', 'custom bullet', '커스텀 불렛', '호버 효과', 'hover magic',
            '슬라이드 배경', 'slide background', '밑줄 애니메이션', 'underline animation',
            '동적 데이터', 'dynamic data', 'HTML 수정 없이', 'clean code', 'Pro 방식',
            '레이아웃 흐름', 'layout flow', 'normal flow', 'position absolute', 'absolute positioning',
            '공간 차지', 'space', '영향', 'affect', '높이 변화', 'height change',
            'flex 자식', 'flex child', 'flexbox', 'display flex', 'flex-shrink',
            '체크박스', 'checkbox', '중앙 정렬', 'centering', 'transform translate',
            '레이아웃 영향', 'layout impact', '흐름 제거', 'removed from flow',
            'position relative', '기준점', 'containing block', '실전 예제'
        ],
        description: '::before, ::after 등 가상 요소 활용법 - content 속성 필수, 레이아웃 흐름 이해, position absolute vs normal flow'
    },
    {
        path: '/hiding',
        title: '요소 숨기기',
        tags: [
            'hiding', 'display: none', 'visibility', 'opacity', '숨기기', 'sr-only', '접근성', '클래스 토글',
            'hidden', 'visible', '투명', '보이기', '감추기', 'show', 'hide',
            '토글', 'toggle', '애니메이션', 'fade', 'screen reader'
        ],
        description: '요소를 숨기는 다양한 CSS 기법과 차이점'
    },
    {
        path: '/stacking',
        title: 'Stacking Context',
        tags: [
            'stacking', 'z-index', '쌓임 맥락', 'layer', '레이어', '겹침',
            'stacking context', 'positioning', 'transform', 'opacity', 'filter',
            '계층', '순서', '위아래', '앞뒤', '깊이', 'depth', 'order',
            'isolation isolate', 'will-change', 'contain', '새로운 레이어',
            'transform trap', 'filter trap', 'fixed position trap', '함정',
            'Stacking Context 생성', '생성 조건', 'CSS 속성', '자동 생성',
            '@layer', 'cascading layers', '명시도', 'specificity', 'CSS 변수',
            'z-index 관리', 'z-index system', '시스템화', '상수화'
        ],
        description: 'z-index와 쌓임 맥락 개념 이해 - transform/filter가 생성하는 새 레이어, 실무 함정과 해결책'
    },
    {
        path: '/responsive',
        title: '반응형 디자인',
        tags: [
            'responsive', '반응형', 'media query', '미디어 쿼리', 'breakpoint', 'mobile', '모바일',
            '@media', 'min-width', 'max-width', 'screen', 'desktop', 'tablet',
            '브레이크포인트', '반응형 웹', 'RWD', '디바이스', '화면 크기', 'viewport'
        ],
        description: '미디어 쿼리를 이용한 반응형 웹 디자인'
    },
    {
        path: '/container-queries',
        title: 'Container Queries',
        tags: [
            'container queries', '컨테이너 쿼리', 'cqw', 'cqh', '컴포넌트 기반',
            '@container', 'container-type', 'container-name', '컨테이너',
            '컴포넌트', '모듈', '재사용', 'responsive components',
            'resize', 'resize handle', 'resize property', '크기 조절',
            'overflow hidden', 'overflow 필수', 'horizontal', 'vertical', 'both',
            'min-width', 'max-width', '핸들', 'drag', '드래그', '인터랙티브',
            'CQ Units', '컨테이너 전용 단위', 'inline-size', '독립성', '재사용성'
        ],
        description: '컨테이너 쿼리를 이용한 컴포넌트 기반 반응형 - resize 핸들 구현 원리와 CQ Units'
    },
    {
        path: '/custom-properties',
        title: 'CSS 변수',
        tags: [
            'custom properties', 'css variables', 'css 변수', '--', 'var()', '테마', 'theme',
            '커스텀 속성', '변수', 'dark mode', '다크모드', '라이트모드',
            '동적', 'dynamic', 'theming', '색상 시스템'
        ],
        description: 'CSS 커스텀 속성(변수)의 사용법'
    },
    {
        path: '/selectors',
        title: '현대적 선택자',
        tags: [
            'selectors', '선택자', ':is()', ':where()', ':not()', ':has()', 'nesting',
            '네스팅', '중첩', 'pseudo-class', 'combinator', 'specificity',
            '명시도', '선택', 'modern css', '최신'
        ],
        description: '최신 CSS 선택자와 네스팅 문법'
    },
    {
        path: '/selectors-basics',
        title: 'CSS 선택자 기초',
        tags: [
            'selectors', '선택자', 'combinator', '조합자', '.class.class', 'descendant', 'child',
            '자손 선택자', '직계 자식', 'adjacent sibling', 'general sibling', '인접 형제', '일반 형제',
            'specificity', '우선순위', '명시도', '!important', 'inline style',
            'BEM', 'OOCSS', 'SMACSS', 'Utility-First', 'naming convention', '네이밍 컨벤션',
            'kebab-case', 'camelCase', '클래스 이름', 'class naming', '실무 가이드',
            '.container.item', '.container .item', '띄어쓰기', '차이', '패턴'
        ],
        description: 'CSS 선택자 조합 방법과 네이밍 컨벤션 - BEM, OOCSS 등 실무 방법론 포함'
    },
    {
        path: '/architecture',
        title: 'CSS 아키텍처',
        tags: [
            'architecture', 'BEM', 'SMACSS', 'ITCSS', '설계', '구조', '클래스 이름', '유지보수',
            'methodology', '방법론', 'naming', 'scalable', 'maintainable',
            '확장', '네이밍', 'organization', '조직화', '7-1 pattern'
        ],
        description: '대규모 프로젝트를 위한 CSS 설계 방법론'
    },
    {
        path: '/accessibility',
        title: '접근성',
        tags: [
            'accessibility', '접근성', 'a11y', 'focus', 'sr-only', 'aria', '스크린 리더',
            'screen reader', 'keyboard', '키보드', 'contrast', '대비',
            '색맹', 'color blind', 'wcag', '웹 접근성', '장애인'
        ],
        description: '웹 접근성을 고려한 CSS 작성법'
    },
    {
        path: '/performance',
        title: 'CSS 성능',
        tags: [
            'performance', '성능', 'will-change', 'contain', 'GPU', '최적화', 'reflow', 'repaint',
            'optimization', 'speed', '속도', 'rendering', '렌더링',
            'critical css', 'lazy loading', 'paint', 'layout', 'composite'
        ],
        description: 'CSS 성능 최적화 기법'
    },
    {
        path: '/logical-properties',
        title: 'Logical Properties',
        tags: [
            'logical properties', 'inline', 'block', 'start', 'end', '다국어', 'RTL', 'LTR',
            'internationalization', 'i18n', '논리적 속성', 'writing-mode',
            '쓰기 방향', '방향성', 'direction', 'margin-inline', 'padding-block'
        ],
        description: '논리적 속성을 이용한 다국어 지원'
    },
    {
        path: '/specificity',
        title: 'CSS 명시도',
        tags: [
            'specificity', '명시도', '우선순위', 'priority', 'cascade', '캐스케이드',
            'inline', 'id', 'class', 'element', '!important', '중요도',
            'selector weight', '선택자 가중치', 'ABC 점수', '계산', '충돌', '덮어쓰기',
            '상속', 'inheritance', '상속되는 속성', 'inherited properties',
            'color', 'font', 'text', 'list-style', 'border-collapse', 'cursor', 'visibility',
            'inherit 키워드', 'initial', 'unset', 'revert', '기본값',
            '디버깅', 'debugging', '스타일 적용 안됨', 'DevTools'
        ],
        description: 'CSS 명시도 계산 방법과 캐스케이드 원리 - 상속되는 속성 전체 목록 포함'
    },
    {
        path: '/color-inheritance',
        title: 'Color 상속 원리',
        tags: [
            'color', 'inheritance', '상속', 'inherit', 'currentColor', '색상 상속',
            'SVG fill', 'SVG stroke', 'border-color', 'outline-color', '투명도',
            'transparent', 'button color', '폼 요소', 'form elements',
            '브라우저 기본값', 'user agent stylesheet', 'color: inherit',
            '테마', 'theme', '일관성', 'consistency', '디자인 시스템',
            '해결책', 'solution', '패턴', 'pattern', 'best practice'
        ],
        description: 'color 속성의 상속 원리와 버튼/SVG에서 색상이 안 먹히는 문제 해결'
    },
    {
        path: '/relative-absolute',
        title: 'Relative & Absolute 조합',
        tags: [
            'relative', 'absolute', 'position', '부모-자식', 'parent-child',
            'containing block', '기준점', '좌표', 'top', 'left', 'right', 'bottom',
            'inset', 'transform', 'translate', '중앙 정렬', 'centering',
            '모달', 'modal', '툴팁', 'tooltip', '배지', 'badge', '오버레이', 'overlay',
            '레이아웃 흐름', 'layout flow', '공간 차지', 'space', '겹치기', 'overlap',
            '실전', 'practical', '패턴', 'pattern', '사용 예시', 'use cases'
        ],
        description: 'position: relative와 absolute의 조합 패턴과 실전 활용법'
    },
    {
        path: '/modal-pattern',
        title: 'Modal 구현 패턴',
        tags: [
            'modal', '모달', 'dialog', '다이얼로그', 'overlay', '오버레이',
            'position fixed', 'z-index', '중앙 정렬', 'centering',
            'backdrop', '배경 어둡게', 'dimmed', 'body scroll lock', '스크롤 방지',
            'inert', 'focus trap', '포커스 트랩', 'keyboard navigation', 'ESC',
            'accessibility', '접근성', 'ARIA', 'aria-modal', 'role="dialog"',
            'animation', 'fade in', 'scale', '애니메이션', 'transition',
            '닫기 버튼', 'close button', '외부 클릭', 'click outside', 'backdrop click',
            'React', 'Vue', 'JavaScript', '프레임워크', '실무', 'production'
        ],
        description: '접근성을 고려한 모달 다이얼로그 구현 패턴 - CSS와 JavaScript 조합'
    }
];

/**
 * 검색어로 페이지 검색
 * @param {string} query - 검색어
 * @returns {Array} - 매칭된 페이지 목록
 */
export function searchPages(query) {
    if (!query || !query.trim()) return [];

    const lowerQuery = query.toLowerCase().trim();

    return pageMetadata.filter(page => {
        const inTitle = page.title.toLowerCase().includes(lowerQuery);
        const inTags = page.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
        const inDescription = page.description.toLowerCase().includes(lowerQuery);
        return inTitle || inTags || inDescription;
    }).map(page => ({
        ...page,
        // 매칭된 태그 하이라이트를 위해 별도 표시
        matchedTags: page.tags.filter(tag => tag.toLowerCase().includes(lowerQuery))
    }));
}
