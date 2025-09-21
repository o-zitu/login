import { useEffect, useState } from "react";
import "./HeaderComponent.scss";
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa"; // Adicionei o ícone de seta


function Header() {
  const [username, setUsername] = useState("Usuário");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Pega o primeiro nome para não ficar muito longo
      const firstName = user.name.split(' ')[0];
      setUsername(firstName);
    }
  }, []);

  const userInitial = username ? username.charAt(0).toUpperCase() : 'U';

  return (
    <header className="header-container">
      {/* LADO ESQUERDO DO HEADER */}
      <div className="header-left">
        <div className="logo">
        </div>
        <div className="user-greeting">
          <div className="user-avatar">{userInitial}</div>
          <span>Olá, {username}</span>
        </div>
      </div>

      {/* LADO DIREITO DO HEADER */}
      <div className="header-right">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="business-selector">
          <span className="business-icon">🍔</span>
          <span className="business-name">Roger Burgedes</span>
          <FaChevronDown className="chevron-icon" />
        </div>

        <div className="notifications">
          <FaBell className="bell-icon" />
          <span className="notification-dot"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;