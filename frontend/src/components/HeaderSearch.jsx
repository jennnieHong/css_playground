/**
 * HeaderSearch.jsx
 * 상단 헤더에 배치되는 검색 input 컴포넌트
 */
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function HeaderSearch() {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    // URL에서 검색어를 읽어와 input에 자동 입력
    useEffect(() => {
        const urlQuery = searchParams.get('q');
        if (urlQuery) {
            setQuery(urlQuery);
        }
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query.trim())}`);
        }
    };

    return (
        <form className="header-search" onSubmit={handleSubmit}>
            <input
                type="text"
                className="header-search-input"
                placeholder="검색어 입력 후 Enter..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="header-search-btn" aria-label="검색">
                🔍
            </button>
        </form>
    );
}

export default HeaderSearch;
