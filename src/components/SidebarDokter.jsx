import { Link, useLocation } from "react-router-dom";

function SidebarDokter() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/assets/Logo.png" alt="Logo" />
        <div><p className="logo-title">DENTAL</p><p className="logo-sub">SYSTEM</p></div>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/dokter/dashboard" className={`nav-item ${location.pathname === '/dokter/dashboard' ? 'active' : ''}`}>
          <i className="fa-solid fa-house"></i> Dashboard
        </Link>
        {/* TEKS SUDAH DIUBAH MENJADI PESANAN */}
        <Link to="/dokter/pesanan" className={`nav-item ${location.pathname === '/dokter/pesanan' ? 'active' : ''}`}>
          <i className="fa-solid fa-file-invoice"></i> Pesanan
        </Link>
        <Link to="/dokter/pengiriman" className={`nav-item ${location.pathname === '/dokter/pengiriman' ? 'active' : ''}`}>
          <i className="fa-solid fa-truck"></i> Pengiriman
        </Link>
        <Link to="/dokter/transaksi" className={`nav-item ${location.pathname === '/dokter/transaksi' ? 'active' : ''}`}>
          <i className="fa-solid fa-money-bill-transfer"></i> Transaksi
        </Link>
      </nav>

      <Link to="/" className="btn-keluar">Keluar</Link>
    </div>
  );
}
export default SidebarDokter;