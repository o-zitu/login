// src/components/Sidebar/Sidebar.jsx

import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.style.scss';

// Ícones
import { 
  FaTachometerAlt, FaShoppingCart, FaBox, FaCubes, 
  FaCog, FaUsers, FaBuilding, FaSignOutAlt 
} from 'react-icons/fa';
// Logo (ajuste o caminho se necessário)
import logo from '../../assets/logo.png';

function Sidebar() {
  const location = useLocation(); // Hook para saber a URL atual
  const navigate = useNavigate(); // Hook para navegar programaticamente

  // Função para fazer logout
  const handleLogout = () => {
    // 1. Limpa os dados do usuário do localStorage
    localStorage.removeItem("user");
    // 2. Redireciona para a página de login
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
          {/* Link Funcional para Dashboard */}
          <Link to="/dashboard">
            <li className={location.pathname === '/dashboard' ? 'active' : ''}>
              <FaTachometerAlt />
              <span>Dashboard</span>
            </li>
          </Link>

          {/* Item Adicionado */}
          <Link to="/vendas">
            <li className={location.pathname === '/vendas' ? 'active' : ''}>
              <FaShoppingCart />
              <span>Vendas</span>
            </li>
          </Link>
          
          {/* Link Funcional para Produtos */}
          <Link to="/products">
            <li className={location.pathname === '/products' ? 'active' : ''}>
              <FaBox />
              <span>Produtos</span>
            </li>
          </Link>

          {/* Item Adicionado */}
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

          {/* Item Adicionado */}
          <Link to="/usuarios">
             <li className={location.pathname === '/usuarios' ? 'active' : ''}>
              <FaUsers />
              <span>Usuários</span>
            </li>
          </Link>

          {/* Item Adicionado */}
          <Link to="/empresas">
            <li className={location.pathname === '/empresas' ? 'active' : ''}>
              <FaBuilding />
              <span>Empresas</span>
            </li>
          </Link>
          
          {/* Botão Funcional de Sair */}
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