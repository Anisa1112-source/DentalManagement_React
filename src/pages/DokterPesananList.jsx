import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Style.css";

function DokterPesananList() {
  const navigate = useNavigate();

  // 🌟 Data contoh minimal — nanti ganti dengan data dari API kamu
  const [listPesanan] = useState([
    { id: "PSN001", produk: "Crown Zirconia . M . Putih", tanggal: "23 April 2026", status: "Proses" },
    { id: "PSN002", produk: "Veneer Porselen . S . Cream", tanggal: "22 April 2026", status: "Selesai" },
    { id: "PSN003", produk: "Gigi Tiruan Full . L . Natural", tanggal: "22 April 2026", status: "Menunggu" },
    { id: "PSN004", produk: "Bridge Porselen . M . Putih", tanggal: "21 April 2026", status: "Revisi" }
  ]);

  const statusClass = (status) => {
    if (status === "Proses") return "badge-dokter badge-dokter-proses";
    if (status === "Selesai") return "badge-dokter badge-dokter-selesai";
    if (status === "Menunggu") return "badge-dokter badge-dokter-menunggu";
    if (status === "Revisi") return "badge-dokter badge-dokter-revisi";
    return "badge-dokter badge-dokter-default";
  };

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <div style={{ fontSize: "22px" }}>🦷</div>
          <div><p className="logo-title">DENTAL</p><p className="logo-sub">SYSTEM</p></div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dokter/dashboard" className="nav-item"><i className="fa-solid fa-house"></i> Dashboard</Link>
          <Link to="/dokter/pesanan" className="nav-item active"><i className="fa-solid fa-box"></i> Pesanan Saya</Link>
          <Link to="/dokter/pengiriman" className="nav-item"><i className="fa-solid fa-truck"></i> Pengiriman</Link>
          <Link to="/dokter/transaksi" className="nav-item"><i className="fa-solid fa-money-bill-transfer"></i> Transaksi</Link>
        </nav>
        <Link to="/" className="btn-keluar">Keluar</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left"><h2>Pesanan Saya</h2></div>
          <div className="topbar-right" onClick={() => navigate("/dokter/profil")} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-bell" style={{ marginRight: "14px" }}></i>
            <span>drg. Heri (Client)</span>
            <i className="fa-solid fa-circle-user" style={{ fontSize: "22px", marginLeft: "10px" }}></i>
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar-dokter">
          <input type="text" placeholder="Cari Pesanan" className="input-search-dokter" />
          <select className="select-filter-dokter">
            <option value="Semua">Semua</option>
            <option value="Proses">Proses</option>
            <option value="Selesai">Selesai</option>
            <option value="Menunggu">Menunggu</option>
            <option value="Revisi">Revisi</option>
          </select>
          <select className="select-filter-dokter">
            <option>April 2026</option>
            <option>Maret 2026</option>
            <option>Mei 2026</option>
          </select>
        </div>

        {/* TABEL PESANAN - 5 KOLOM SESUAI FIGMA */}
        <div className="table-card-dokter">
          <table className="table-pesanan-dokter">
            <thead>
              <tr>
                <th>ID</th>
                <th>Pesanan</th>
                <th>Tgl Pesanan</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {listPesanan.map((item) => (
                <tr key={item.id}>
                  <td className="td-id">{item.id}</td>
                  <td>{item.produk}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    <span className={statusClass(item.status)}>{item.status}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/dokter/pesanan/detail/${item.id}`)}
                      className="link-detail-dokter"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DokterPesananList;