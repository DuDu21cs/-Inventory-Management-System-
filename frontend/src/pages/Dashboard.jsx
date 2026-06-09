import { useEffect, useState } from "react";
import { getDashboardSummary } from "../api/getDashboardSummary";
import { getLowStockProducts } from "../api/getLowStockProducts";
import AnalyticsCharts from "../components/analytics/AnalyticsCharts";
import "../css/dashboard.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const { user, accesstoken, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDashboardSummary();
      setSummary(data);

      const lowStock = await getLowStockProducts();
      setLowStockProducts(lowStock);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">DASHBOARD</h2>

      {/* Low Stock Alert */}
      {lowStockProducts.length > 0 && (
        <div className="low-stock-alert">
          <h5>⚠️ Low Stock Alert ({lowStockProducts.length} items)</h5>
          <ul>
            {lowStockProducts.map(product => (
              <li key={product.id}>
                <strong>{product.name}</strong> — only <span className="low-stock-qty">{product.quantity}</span> left
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="summary-boxes">
        <div className="summary-card">Products: {summary?.totalProducts}</div>
        <div className="summary-card">Suppliers: {summary?.totalSuppliers}</div>
        <div className="summary-card">Categories: {summary?.totalCategories}</div>
        <div className="summary-card">Locations: {summary?.totalLocations}</div>
      </div>

      <div className="dashboard-main">
        <div className="side-box">
          <div className="side-top">
            <button className="btn-pink" onClick={() => navigate('/profile')}>My Profile</button>
            <button className="btn-pink" onClick={() => navigate('/edit-profile')}>Edit Profile</button>
            <button className="btn-pink" onClick={() => navigate("/update-inventory")}>Update Inventory</button>
            <button className="btn-pink" onClick={() => navigate("/explore-inventory")}>Explore Inventory</button>
          </div>

          <div className="side-bottom">
            <h4>Total Inventory Value</h4>
            <p>₹{summary?.totalInventoryValue}</p>
          </div>
        </div>

        <div className="chart-box">
          <AnalyticsCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
