import React from "react";
import { Link } from "react-router-dom";
import "../style/pesananAdmin.css"; // Memakai file CSS utama agar otomatis rapi

function Pesanan() {
  return (
    <div className="dashboard-container">
      
      {/* SIDEBAR DENGAN IKON LENGKAP */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="/assets/Logo.png" alt="Logo" />
          <div>
            <p className="logo-title">DENTAL</p>
            <p className="logo-sub">SYSTEM</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item">
            <i className="fa-solid fa-house"></i> Dashboard
          </Link>
          <Link to="/pesanan" className="nav-item active">
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
        </nav>

        <Link to="/login" className="btn-keluar">Keluar</Link>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="main-content">
        
        {/* TOPBAR - 🌟 SAKLAR GARIS TIGA SUDAH DIHAPUS TOTAL DI SINI */}
        <div className="topbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div className="topbar-left">
            {/* Tombol i className="fa-solid fa-bars" sudah dihapus aman */}
            <h2 style={{ margin: 0 }}>Pesanan</h2>
          </div>
          <div className="topbar-right" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <i className="fa-regular fa-bell" style={{ fontSize: "18px", color: "#64748b", cursor: "pointer" }}></i>
            <span className="admin-email" style={{ color: "#64748b", fontSize: "14px" }}>admin@gmail.com</span>
            <i className="fa-regular fa-circle-user" style={{ fontSize: "24px", color: "#475569" }}></i>
          </div>
        </div>

        {/* FILTER BAR ATAS */}
        <div className="filter-bar" style={{ marginBottom: "24px" }}>
          <div className="filter-search">
            <input type="text" placeholder="Cari Pesanan" />
          </div>

          <div className="filter-select">
            <select>
              <option>Semua</option>
              <option>Baru</option>
              <option>Proses</option>
              <option>Selesai</option>
              <option>Revisi</option>
            </select>
          </div>

          <div className="filter-date">
            <span>April 2026</span>
          </div>
        </div>

        {/* TABEL DATA PESANAN */}
        <div className="table-card">
          <table className="pesanan-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dokter</th>
                <th>Pesanan</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PSN001</td>
                <td>drg. Budi Santoso</td>
                <td>Crown Zirconia .M. Putih</td>
                <td><span className="badge badge-proses">Proses</span></td>
                <td>
                  <Link to="/pesanan/PSN001" className="link-detail">Detail</Link>
                </td>
              </tr>

              <tr>
                <td>PSN002</td>
                <td>drg. Anita Rahayu</td>
                <td>Veneer Porselen .S. Cream</td>
                <td><span className="badge badge-baru">Baru</span></td>
                <td>
                  <Link to="/pesanan/PSN002" className="link-detail">Detail</Link>
                </td>
              </tr>

              <tr>
                <td>PSN003</td>
                <td>drg. Dian Wulandari</td>
                <td>Gigi Tiruan Full .L. Natural</td>
                <td><span className="badge badge-selesai">Selesai</span></td>
                <td>
                  <Link to="/pesanan/PSN003" className="link-detail">Detail</Link>
                </td>
              </tr>

              <tr>
                <td>PSN004</td>
                <td>drg. Hendra Setiawan</td>
                <td>Bridge Porselen .M. Putih</td>
                <td><span className="badge badge-revisi">Revisi</span></td>
                <td>
                  <Link to="/pesanan/PSN004" className="link-detail">Detail</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Pesanan;