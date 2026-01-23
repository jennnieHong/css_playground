/**
 * PageHeader 컴포넌트
 * 모든 페이지의 상단 제목과 부제목 영역을 담당하는 공용 컴포넌트입니다.
 * 
 * @param {Object} props
 * @param {string} props.title - 페이지 제목
 * @param {string} props.subtitle - 페이지 부제목
 */
function PageHeader({ title, subtitle }) {
    return (
        <div className="page-header">
            <h1 className="page-title">{title}</h1>
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
    );
}

export default PageHeader;
