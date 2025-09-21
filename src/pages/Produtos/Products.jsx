import { useState, useEffect } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/headerComponent/HeaderComponent";
import "./Products.style.scss";
import { api } from '../../api';
import { FaPencilAlt, FaTrash, FaEllipsisV } from 'react-icons/fa';

const fetchProductsFromAPI = async () => {
  const response = await api.get('/products');
  return response.data;
};

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProductsFromAPI();
        setProducts(data);
      } catch (err) {
        setError("Falha ao carregar os produtos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="painel-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content-area">
          <div className="page-header">
            <h1>Produtos</h1>
          </div>
          
          <div className="page-content">
            {loading && <p>Carregando produtos...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && (
              <table className="products-table">
                <thead>
                  <tr>
                    <th className="col-nome">Nome</th>
                    <th className="col-marca">Marca</th>
                    <th className="col-preco">Preço</th>
                    <th className="col-validade">Validade</th>
                    <th className="col-acoes"></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>R$ {parseFloat(product.price).toFixed(2).replace('.', ',')}</td>
                      <td>{formatDate(product.expirationDate)}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn"><FaPencilAlt /></button>
                          <button className="action-btn"><FaTrash /></button>
                          <button className="action-btn"><FaEllipsisV /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;