import React from "react";
import { Link } from "react-router-dom";
import "../style/pesananAdmin.css"; 
function Dashboard() {
  return (
    <div className="dashboard-container">
      
    
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="/assets/Logo.png" alt="Logo" />
          <div>
            <p className="logo-title">DENTAL</p>
            <p className="logo-sub">SYSTEM</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item active">
            <i className="fa-solid fa-house"></i> Dashboard
          </Link>
          <Link to="/pesanan" className="nav-item">
            <i className="fa-solid fa-box"></i> Pesanan
          </Link>
          <Link to="/persetujuan" className="nav-item">
            <i className="fa-solid fa-circle-check"></i> Persetujuan
          </Link>
          <Link to="/produksi" className="nav-item">
            <i className="fa-solid fa-gear"></i> Produksi
          </Link>
          <Link to="/pengiriman" className="nav-item">
            <i className="fa-solid fa-truck"></i> Pengiriman
          </Link>
          <Link to="/transaksi" className="nav-item">
            <i className="fa-solid fa-money-bill-wave"></i> Transaksi
          </Link>
          <Link to="/admin/profil" className="nav-item">
            <i className="fa-regular fa-circle-user"></i> Profil Admin
          </Link>
        </nav>

        <Link to="/login" className="btn-keluar">Keluar</Link>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="main-content">
        

        <div className="topbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div className="topbar-left">
      
            <h2 style={{ margin: 0 }}>Dashboard</h2>
          </div>
          <div className="topbar-right" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="fa-regular fa-bell" style={{ fontSize: "18px", color: "#64748b", cursor: "pointer" }}></i>
            <Link to="/admin/profil" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
              <span className="admin-email" style={{ color: "#64748b", fontSize: "14px" }}>admin@gmail.com</span>
              <i className="fa-regular fa-circle-user" style={{ fontSize: "24px", color: "#475569" }}></i>
            </Link>
          </div>
        </div>

     
        <div className="stats-grid" style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          <div className="stat-card" style={{ flex: 1, background: "white", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <p style={{ margin: "0 0 10px 0", color: "#64748b", fontSize: "13px" }}>Total Pesanan</p>
            <h1 style={{ margin: "0 0 5px 0", fontSize: "36px", color: "#1e293b" }}>128</h1>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>Semua Pesanan</p>
          </div>
          <div className="stat-card" style={{ flex: 1, background: "white", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <p style={{ margin: "0 0 10px 0", color: "#64748b", fontSize: "13px" }}>Disetujui</p>
            <h1 style={{ margin: "0 0 5px 0", fontSize: "36px", color: "#1e293b" }}>100</h1>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>Dalam Proses Produksi</p>
          </div>
          <div className="stat-card" style={{ flex: 1, background: "white", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <p style={{ margin: "0 0 10px 0", color: "#64748b", fontSize: "13px" }}>Sedang Diproses</p>
            <h1 style={{ margin: "0 0 5px 0", fontSize: "36px", color: "#1e293b" }}>35</h1>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>Dalam Proses Produksi</p>
          </div>
          <div className="stat-card" style={{ flex: 1, background: "white", padding: "20px", borderRadius: "12px", textAlign: "center", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <p style={{ margin: "0 0 10px 0", color: "#64748b", fontSize: "13px" }}>Pengiriman</p>
            <h1 style={{ margin: "0 0 5px 0", fontSize: "36px", color: "#1e293b" }}>15</h1>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>Dalam Pengiriman</p>
          </div>
        </div>

    
        <div className="dashboard-content-layout" style={{ display: "flex", gap: "24px" }}>
          
        
          <div className="table-card" style={{ flex: 1.5, background: "white", padding: "24px", borderRadius: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, color: "#1e293b" }}>Pesanan Terbaru</h3>
              <Link to="/pesanan" style={{ fontSize: "13px", color: "#2382d4", fontWeight: "600", textDecoration: "none" }}>Lihat Semua</Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "#eef7ff", borderRadius: "8px" }}>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "#1e293b", fontSize: "14px" }}>drg. Budi Santoso</h4>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "12px" }}>Crown Zirconia - Klinik Sehat</p>
                </div>
                <span className="badge badge-proses">Proses</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "#eef7ff", borderRadius: "8px" }}>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "#1e293b", fontSize: "14px" }}>drg. Anita Rahayu</h4>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "12px" }}>Veneer Porselen - RS Kartini</p>
                </div>
                <span className="badge badge-baru">Baru</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "#eef7ff", borderRadius: "8px" }}>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "#1e293b", fontSize: "14px" }}>drg. Dian Wulandari</h4>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "12px" }}>Gigi Tiruan - Klinik Prima</p>
                </div>
                <span className="badge badge-selesai">Selesai</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "#eef7ff", borderRadius: "8px" }}>
                <div>
                  <h4 style={{ margin: "0 0 4px 0", color: "#1e293b", fontSize: "14px" }}>drg. Hendra Setiawan</h4>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "12px" }}>Bridge Porselen - RS Medika</p>
                </div>
                <span className="badge badge-revisi">Revisi</span>
              </div>
            </div>
          </div>

          {/* SEKSI KANAN: STATUS PRODUKSI & JADWAL */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* CARD STATUS PRODUKSI */}
            <div className="table-card" style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
              <h3 style={{ margin: "0 0 20px 0", color: "#1e293b" }}>Status produksi</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px", color: "#475569" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Crown</span><strong>78%</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Veneer</span><strong>62%</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Bridge</span><strong>45%</strong></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><span>Gigi Tiruan</span><strong>30%</strong></div>
              </div>
            </div>

            {/* CARD JADWAL HARI INI */}
            <div className="table-card" style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
              <h3 style={{ margin: "0 0 20px 0", color: "#1e293b", textAlign: "center" }}>Jadwal hari ini</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "15px", alignItems: "center", padding: "12px 16px", background: "#e0f2fe", borderRadius: "8px" }}>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>08.00</strong>
                  <div>
                    <h5 style={{ margin: "0 0 2px 0", fontSize: "13px" }}>Crown</h5>
                    <p style={{ margin: 0, fontSize: "11px", color: "#475569" }}>drg. Budi Santoso</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "15px", alignItems: "center", padding: "12px 16px", background: "#e0f2fe", borderRadius: "8px" }}>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>10.30</strong>
                  <div>
                    <h5 style={{ margin: "0 0 2px 0", fontSize: "13px" }}>Veneer</h5>
                    <p style={{ margin: 0, fontSize: "11px", color: "#475569" }}>drg. Anita Rahayu</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "15px", alignItems: "center", padding: "12px 16px", background: "#e0f2fe", borderRadius: "8px" }}>
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>13.00</strong>
                  <div>
                    <h5 style={{ margin: "0 0 2px 0", fontSize: "13px" }}>Bridge</h5>
                    <p style={{ margin: 0, fontSize: "11px", color: "#475569" }}>drg. Hendra Setiawan</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;