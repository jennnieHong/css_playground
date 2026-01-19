import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { api } from '../services/api';

function Navigation() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await api.getMenus();
      if (response.success) {
        setMenus(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch menus:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderMenuItem = (menu) => {
    const isActive = menu.path && location.pathname === menu.path;
    const hasChildren = menu.children && menu.children.length > 0;

    return (
      <li key={menu.id} className="nav-item">
        {menu.path ? (
          <Link 
            to={menu.path} 
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon">{menu.icon}</span>
            <span className="nav-title">{menu.title}</span>
          </Link>
        ) : (
          <div className="nav-category">
            <span className="nav-icon">{menu.icon}</span>
            <span className="nav-title">{menu.title}</span>
          </div>
        )}
        
        {hasChildren && (
          <ul className="nav-submenu">
            {menu.children.map(child => renderMenuItem(child))}
          </ul>
        )}
      </li>
    );
  };

  if (loading) {
    return (
      <nav className="navigation">
        <div className="nav-header">
          <h1 className="nav-logo">CSS Study</h1>
        </div>
        <div className="nav-loading">Loading...</div>
      </nav>
    );
  }

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1 className="nav-logo">CSS Study</h1>
      </div>
      <ul className="nav-menu">
        {menus.map(menu => renderMenuItem(menu))}
      </ul>
    </nav>
  );
}

export default Navigation;
