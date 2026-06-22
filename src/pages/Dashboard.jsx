import React from "react";
import { Link } from "react-router-dom";
import "../style/style.css"; 

function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* ===== SIDEBAR ===== */}
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
        </nav>

        <Link to="/login" className="btn-keluar">Keluar</Link>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">

        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-left">
            <i className="fa-solid fa-bars"></i>
            <h2>Dashboard</h2>
          </div>
          <div className="topbar-right">
            <i className="fa-regular fa-bell"></i>
            <span>admin@gmail.com</span>
            <div className="admin-avatar">
              <i className="fa-regular fa-circle-user"></i>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="stat-cards">
          <div className="stat-card">
            <p className="stat-label">Total Pesanan</p>
            <h2 className="stat-number">128</h2>
            <p className="stat-desc">Semua Pesanan</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Disetujui</p>
            <h2 className="stat-number">100</h2>
            <p className="stat-desc">&nbsp;</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Sedang Diproses</p>
            <h2 className="stat-number">35</h2>
            <p className="stat-desc">Dalam Proses Produksi</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Pengiriman</p>
            <h2 className="stat-number">15</h2>
            <p className="stat-desc">Dalam Pengiriman</p>
          </div>
        </div>

        {/* Bottom Grid (Ini bagian bawah figma kamu yang sempat hilang) */}
        <div className="bottom-grid">

          {/* Pesanan Terbaru */}
          <div className="card pesanan-card">
            <div className="card-header">
              <h3>Pesanan Terbaru</h3>
              <a href="#lihat-semua">Lihat Semua</a>
            </div>

            <div className="pesanan-item">
              <div className="pesanan-info">
                <p className="drg-name">drg. Budi Santoso</p>
                <p className="drg-sub">Crown Zirconia - Klinik Sehat</p>
              </div>
              <span className="badge badge-proses">Proses</span>
            </div>

            <div className="pesanan-item">
              <div className="pesanan-info">
                <p className="drg-name">drg. Anita Rahayu</p>
                <p className="drg-sub">Veneer Porselen - RS Kartini</p>
              </div>
              <span className="badge badge-baru">Baru</span>
            </div>

            <div className="pesanan-item">
              <div className="pesanan-info">
                <p className="drg-name">drg. Dian Wulandari</p>
                <p className="drg-sub">Gigi Tiruan - Klinik Prima</p>
              </div>
              <span className="badge badge-selesai">Selesai</span>
            </div>

            <div className="pesanan-item">
              <div className="pesanan-info">
                <p className="drg-name">drg. Hendra Setiawan</p>
                <p className="drg-sub">Bridge Porselen - RS Medika</p>
              </div>
              <span className="badge badge-revisi">Revisi</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-col">

            {/* Status Produksi */}
            <div className="card">
              <h3 className="card-title">Status produksi</h3>
              <div className="produksi-item">
                <span className="produksi-label">Crown</span>
                <span className="produksi-pct">78%</span>
              </div>
              <div className="produksi-item">
                <span className="produksi-label">Veneer</span>
                <span className="produksi-pct">62%</span>
              </div>
              <div className="produksi-item">
                <span className="produksi-label">Bridge</span>
                <span className="produksi-pct">45%</span>
              </div>
              <div className="produksi-item">
                <span className="produksi-label">Gigi Tiruan</span>
                <span className="produksi-pct">30%</span>
              </div>
            </div>

            {/* Jadwal Hari Ini */}
            <div className="card">
              <h3 className="card-title">Jadwal hari ini</h3>
              <div className="jadwal-item">
                <span className="jadwal-time">08.00</span>
                <div className="jadwal-info">
                  <p className="jadwal-title">Crown</p>
                  <p className="jadwal-sub">drg. Budi Santoso</p>
                </div>
              </div>
              <div className="jadwal-item">
                <span className="jadwal-time">10.30</span>
                <div className="jadwal-info">
                  <p className="jadwal-title">Veneer</p>
                  <p className="jadwal-sub">drg. Anita Rahayu</p>
                </div>
              </div>
              <div className="jadwal-item">
                <span className="jadwal-time">13.00</span>
                <div className="jadwal-info">
                  <p className="jadwal-title">Bridge</p>
                  <p className="jadwal-sub">drg. Hendra Setiawan</p>
                </div>
              </div>
            </div>

          </div> {/* Akhir Right Column */}
        </div> {/* Akhir Bottom Grid */}
      </div> {/* Akhir Main Content */}
    </div>
  );
}

export default Dashboard;