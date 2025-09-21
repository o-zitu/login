import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.style.scss';
import { 
  FaTachometerAlt, FaShoppingCart, FaBox, FaCubes, 
  FaCog, FaUsers, FaBuilding, FaSignOutAlt 
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  return (
    <aside className="sidebar-container">
      <div className="sidebar-logo">
        <img src={logo} alt="MeuGestor Logo" />
        <span>MeuGestor</span>
      </div>
      <nav className="sidebar-nav">
        <h3 className="menu-title">MENU</h3>
        <ul>
          <Link to="/dashboard">
            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
              <FaTachometerAlt />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/vendas">
            <li className={location.pathname === '/vendas' ? 'active' : ''}>
              <FaShoppingCart />
              <span>Vendas</span>
            </li>
          </Link>
          
          <Link to="/products">
            <li className={location.pathname === '/products' ? 'active' : ''}>
              <FaBox />
              <span>Produtos</span>
            </li>
          </Link>

          <Link to="/materiais">
            <li className={location.pathname === '/materiais' ? 'active' : ''}>
              <FaCubes />
              <span>Materiais</span>
            </li>
          </Link>
        </ul>
        <h3 className="menu-title">OUTROS</h3>
        <ul>
          <Link to="/configuracoes">
            <li className={location.pathname === '/configuracoes' ? 'active' : ''}>
              <FaCog />
              <span>Configurações</span>
            </li>
          </Link>

          <Link to="/usuarios">
             <li className={location.pathname === '/usuarios' ? 'active' : ''}>
              <FaUsers />
              <span>Usuários</span>
            </li>
          </Link>

          <Link to="/empresas">
            <li className={location.pathname === '/empresas' ? 'active' : ''}>
              <FaBuilding />
              <span>Empresas</span>
            </li>
          </Link>
          
          <li onClick={handleLogout}>
            <FaSignOutAlt />
            <span>Sair</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;