import React from "react";
import { Link } from "react-router-dom";
import "../style/pesananAdmin.css"; // Menggunakan file CSS tunggal kita

function Transaksi() {
  // Fungsi simulasi klik download laporan keuangan
  const handleDownload = () => {
    alert("Laporan Transaksi Keuangan (Periode April 2026) Berhasil Diunduh! 📄✅");
  };

  return (
    <div className="dashboard-container">
      
      {/* SIDEBAR DENGAN IKON LENGKAP YANG MUNCUL SEMUA */}
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
          <Link to="/transaksi" className="nav-item active">
            <i className="fa-solid fa-money-bill-wave"></i> Transaksi
          </Link>
        </nav>

        <Link to="/login" className="btn-keluar">Keluar</Link>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="main-content">
        
        {/* TOPBAR */}
        <div className="topbar-produksi">
          <h2>Transaksi</h2>
          <span className="admin-email">admin@gmail.com</span>
        </div>

        {/* FILTER BAR ATAS */}
        <div className="filter-bar" style={{ marginBottom: "24px" }}>
          <div className="filter-search">
            <input type="text" placeholder="Cari transaksi" />
          </div>

          <div className="filter-select">
            <select>
              <option>Semua</option>
              <option>Lunas</option>
              <option>Belum</option>
            </select>
          </div>

          <div className="filter-date">
            <span>April 2026</span>
          </div>

          {/* 🌟 PERBAIKAN: Tombol download yang aman tanpa error compiler */}
          <button onClick={handleDownload} className="filter-date btn-download-aktif">
            <i className="fa-solid fa-file-arrow-down" style={{ color: "#2382d4", marginRight: "8px" }}></i> 
            Download
          </button>
        </div>

        {/* TABEL DATA TRANSAKSI */}
        <div className="table-card">
          <table className="pesanan-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>ID Pesanan</th>
                <th>Dokter</th>
                <th>Total</th>
                <th>Metode</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>TRX-001</td>
                <td><strong>PSN-001</strong></td>
                <td>drg. Budi Santoso</td>
                <td><span style={{ color: "#2382d4", fontWeight: "bold" }}>Rp 1.700.000</span></td>
                <td>Transfer</td>
                <td><span className="badge badge-selesai">Lunas</span></td>
              </tr>

              <tr>
                <td>TRX-002</td>
                <td><strong>PSN-002</strong></td>
                <td>drg. Anita Rahayu</td>
                <td><span style={{ color: "#2382d4", fontWeight: "bold" }}>Rp 1.950.000</span></td>
                <td>Tunai</td>
                <td><span className="badge badge-selesai">Lunas</span></td>
              </tr>

              <tr>
                <td>TRX-003</td>
                <td><strong>PSN-003</strong></td>
                <td>drg. Dian Wulandari</td>
                <td><span style={{ color: "#2382d4", fontWeight: "bold" }}>Rp 1.200.000</span></td>
                <td>Transfer</td>
                <td><span className="badge badge-baru">Belum</span></td>
              </tr>

              <tr>
                <td>TRX-004</td>
                <td><strong>PSN-004</strong></td>
                <td>drg. Ratna Sari</td>
                <td><span style={{ color: "#2382d4", fontWeight: "bold" }}>Rp 3.000.000</span></td>
                <td>Tempo</td>
                <td><span className="badge badge-proses">Belum</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Transaksi;