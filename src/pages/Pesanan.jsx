import { Link } from "react-router-dom"; 
import "../style/pesananAdmin.css";

function Pesanan() {
  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
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

        {/* TOMBOL KELUAR (Sudah ditambahkan di sini) */}
        <Link to="/login" className="btn-keluar">Keluar</Link>

      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        <div className="topbar">
          <div className="topbar-left">
            <i className="fa-solid fa-bars"></i> {/* Menambahkan icon bars biar serasi sama dashboard */}
            <h2>Daftar Pesanan</h2>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">
          <div className="filter-search">
            <input
              type="text"
              placeholder="Cari Pesanan"
            />
          </div>

          <div className="filter-select">
            <select>
              <option>Semua</option>
              <option>Proses</option>
              <option>Baru</option>
              <option>Selesai</option>
              <option>Revisi</option>
            </select>
          </div>

          <div className="filter-date">
            <span>April 2026</span>
          </div>
        </div>

        {/* TABLE CARD */}
        <div className="table-card">

          <table className="pesanan-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dokter</th>
                <th>Pesanan</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PSN001</td>
                <td>drg. Budi Santoso</td>
                <td>Crown Zirconia</td>
                <td>23 April 2026</td>
                <td>
                  <span className="badge badge-proses">Proses</span>
                </td>
                <td>Detail</td>
              </tr>

              <tr>
                <td>PSN002</td>
                <td>drg. Anita Rahayu</td>
                <td>Veneer Porselen</td>
                <td>22 April 2026</td>
                <td>
                  <span className="badge badge-selesai">Selesai</span>
                </td>
                <td>Detail</td>
              </tr>

              <tr>
                <td>PSN003</td>
                <td>drg. Dian Wulandari</td>
                <td>Gigi Tiruan</td>
                <td>22 April 2026</td>
                <td>
                  <span className="badge badge-baru">Baru</span>
                </td>
                <td>Detail</td>
              </tr>

              <tr>
                <td>PSN004</td>
                <td>drg. Hendra Setiawan</td>
                <td>Bridge Porselen</td>
                <td>21 April 2026</td>
                <td>
                  <span className="badge badge-revisi">Revisi</span>
                </td>
                <td>Detail</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default Pesanan;