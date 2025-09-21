// Painel.jsx ATUALIZADO

import "./Painel.style.scss";
import Header from "../../components/headerComponent/HeaderComponent";
import Sidebar from "../../components/Sidebar/Sidebar.jsx"; // <-- IMPORTA A NOVA SIDEBAR

function Painel() {
  return (
    <div className="painel-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content-area">
          <h1>Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default Painel;