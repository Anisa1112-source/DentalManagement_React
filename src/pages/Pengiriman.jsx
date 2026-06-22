import { Link } from "react-router-dom";
import "../style/pesananAdmin.css"; // Memakai CSS keroyokan agar otomatis rapi

function Pengiriman() {
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
          <Link to="/pesanan" className="nav-item">
            <i className="fa-solid fa-box"></i> Pesanan
          </Link>
          <Link to="/persetujuan" className="nav-item">
            <i className="fa-solid fa-circle-check"></i> Persetujuan
          </Link>
          <Link to="/produksi" className="nav-item">
            <i className="fa-solid fa-gear"></i> Produksi
          </Link>
          <Link to="/pengiriman" className="nav-item active">
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
        
        {/* TOPBAR BAWAAN KAMU (Ada email admin) */}
        <div className="topbar-produksi">
          <h2>Pengiriman</h2>
          <span className="admin-email">admin@gmail.com</span>
        </div>

        {/* TOMBOL TAMBAH PENGIRIMAN (Kembali ke versi awal kamu yang di kanan atas) */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
          <button style={{
            backgroundColor: "#2382d4",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            + Tambah Pengiriman
          </button>
        </div>

        {/* FILTER BAR TAMBAHAN */}
        <div className="filter-bar" style={{ marginTop: "0px", marginBottom: "24px" }}>
          <div className="filter-search">
            <input type="text" placeholder="Cari Pesanan" />
          </div>

          <div className="filter-select">
            <select>
              <option>Semua</option>
              <option>Menunggu Kurir</option>
              <option>Dikemas</option>
              <option>Diterima</option>
            </select>
          </div>

          <div className="filter-date">
            <span>April 2026</span>
          </div>
        </div>

        {/* TABEL DATA PENGIRIMAN BAWAAN KAMU */}
        <div className="table-card">
          <table className="pesanan-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dokter</th>
                <th>Pesanan</th>
                <th>No Resi</th>
                <th>Status Pengiriman</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PSN001</td>
                <td>drg. Budi Santoso</td>
                <td>Crown Zirconia .M. Putih</td>
                <td>SPX239123ND</td>
                <td><span style={{ color: "#d97706", fontWeight: "bold" }}>Menunggu Kurir</span></td>
                <td>
                  <Link to="/pengiriman/detail/PSN001" className="link-detail">Detail</Link>
                </td>
              </tr>

              <tr>
                <td>PSN002</td>
                <td>drg. Anita Rahayu</td>
                <td>Veneer Porselen .S. Cream</td>
                <td>JNT20938243912</td>
                <td><span style={{ color: "#dc2626", fontWeight: "bold" }}>Dikemas</span></td>
                <td>
                  <Link to="/pengiriman/detail/PSN002" className="link-detail">Detail</Link>
                </td>
              </tr>

              <tr>
                <td>PSN003</td>
                <td>drg. Dian Wulandari</td>
                <td>Gigi Tiruan Full .L. Natural</td>
                <td>EXPRS29319313</td>
                <td><span style={{ color: "#16a34a", fontWeight: "bold" }}>Diterima</span></td>
                <td>
                  <Link to="/pengiriman/detail/PSN003" className="link-detail">Detail</Link>
                </td>
              </tr>

              <tr>
                <td>PSN004</td>
                <td>drg. Hendra Setiawan</td>
                <td>Bridge Porselen .M. Putih</td>
                <td>REG12133423</td>
                <td><span style={{ color: "#16a34a", fontWeight: "bold" }}>Diterima</span></td>
                <td>
                  <Link to="/pengiriman/detail/PSN004" className="link-detail">Detail</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Pengiriman;