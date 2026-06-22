import { Link, useNavigate } from "react-router-dom";
import "../style/Style.css";

function DokterDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* SIDEBAR DOKTER (4 Menu Sesuai Figma) */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <div style={{ fontSize: "32px" }}></div>
          <div><p className="logo-title">DENTAL</p><p className="logo-sub">SYSTEM</p></div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dokter/dashboard" className="nav-item active"><i className="fa-solid fa-house"></i> Dashboard</Link>
          <Link to="/dokter/pesanan" className="nav-item"><i className="fa-solid fa-box"></i> Pesanan Saya</Link>
          <Link to="/dokter/pengiriman" className="nav-item"><i className="fa-solid fa-truck"></i> Pengiriman</Link>
          <Link to="/dokter/transaksi" className="nav-item"><i className="fa-solid fa-money-bill-transfer"></i> Transaksi</Link>
        </nav>
        <Link to="/" className="btn-keluar">Keluar</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left"><h2>Dashboard</h2></div>
          
          {/* 🌟 JIKA DIKLIK AKAN PINDAH KE HALAMAN PROFIL */}
          <div 
            className="topbar-right" 
            onClick={() => navigate("/dokter/profil")} 
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <i className="fa-solid fa-circle-user" style={{ fontSize: "24px", color: "#1a5694" }}></i>
            <span style={{ fontWeight: "600" }}>drg. Heri (Client)</span>
          </div>
        </div>

        {/* KONTEN UTAMA DASHBOARD (Full Center ala Figma) */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "75vh" }}>
          <div style={{ background: "white", padding: "60px 40px", borderRadius: "24px", textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid #e2e8f0", maxWidth: "650px" }}>
            <div style={{ fontSize: "70px", marginBottom: "20px" }}>🦷</div>
            <h1 style={{ color: "#1a5694", fontSize: "28px", fontWeight: "850", margin: "0 0 15px 0" }}>DENTAL MANAGEMENT SYSTEM</h1>
            <p style={{ fontWeight: "600", color: "#4a5568", lineHeight: "1.6", marginBottom: "35px" }}>
              Selamat datang di Dental Management System. Kami menyediakan berbagai macam produk gigi palsu yang premium, awet, dengan harga terjangkau.
            </p>
            <button 
              onClick={() => navigate("/dokter/tambah-pesanan")}
              style={{ padding: "16px 45px", background: "#73c2fb", color: "white", border: "none", borderRadius: "14px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", boxShadow: "0 6px 20px rgba(115,194,251,0.3)" }}
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DokterDashboard;