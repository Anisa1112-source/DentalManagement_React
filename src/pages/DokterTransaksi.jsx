import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Style.css";

function DokterTransaksi() {
  const navigate = useNavigate();

  const [listTransaksi] = useState([
    { id: "TRX-001", idPesanan: "PSN-001", dokter: "drg. Budi Santoso", total: "Rp 1.700.000", metode: "Transfer", status: "Lunas" },
    { id: "TRX-002", idPesanan: "PSN-002", dokter: "drg. Anita rahayu", total: "Rp 1.950.000", metode: "Tunai", status: "Lunas" },
    { id: "TRX-003", idPesanan: "PSN-003", dokter: "drg. Dian wulandari", total: "Rp 1.200.000", metode: "Transfer", status: "Belum" },
    { id: "TRX-004", idPesanan: "PSN-004", dokter: "drg. Ratna Sari", total: "Rp.3.000.000", metode: "Tempo", status: "Belum" }
  ]);

  const statusClass = (status) => {
    if (status === "Lunas") return "badge-dokter badge-dokter-selesai";
    return "badge-dokter badge-dokter-revisi";
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-logo">
          <div style={{ fontSize: "22px" }}>🦷</div>
          <div><p className="logo-title">DENTAL</p><p className="logo-sub">SYSTEM</p></div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dokter/dashboard" className="nav-item"><i className="fa-solid fa-house"></i> Dashboard</Link>
          <Link to="/dokter/pesanan" className="nav-item"><i className="fa-solid fa-box"></i> Pesanan Saya</Link>
          <Link to="/dokter/pengiriman" className="nav-item"><i className="fa-solid fa-truck"></i> Pengiriman</Link>
          <Link to="/dokter/transaksi" className="nav-item active"><i className="fa-solid fa-money-bill-transfer"></i> Transaksi</Link>
        </nav>
        <Link to="/" className="btn-keluar">Keluar</Link>
      </div>

      <div className="main-content">
        <div className="topbar">
          <div className="topbar-left"><h2>Transaksi</h2></div>
          <div className="topbar-right" onClick={() => navigate("/dokter/profil")} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-bell" style={{ marginRight: "14px" }}></i>
            <span>drg. Heri (Client)</span>
            <i className="fa-solid fa-circle-user" style={{ fontSize: "22px", marginLeft: "10px" }}></i>
          </div>
        </div>

        <div className="filter-bar-dokter">
          <input type="text" placeholder="Cari Transaksi" className="input-search-dokter" />
          <select className="select-filter-dokter">
            <option value="Semua">Semua</option>
            <option value="Lunas">Lunas</option>
            <option value="Belum">Belum</option>
          </select>
          <select className="select-filter-dokter">
            <option>April 2026</option>
            <option>Maret 2026</option>
            <option>Mei 2026</option>
          </select>
        </div>

        <div className="table-card-dokter">
          <table className="table-pesanan-dokter">
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
              {listTransaksi.map((item) => (
                <tr key={item.id}>
                  <td className="td-id">{item.id}</td>
                  <td>{item.idPesanan}</td>
                  <td>{item.dokter}</td>
                  <td className="td-total">{item.total}</td>
                  <td>{item.metode}</td>
                  <td>
                    <span className={statusClass(item.status)}>{item.status}</span>
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

export default DokterTransaksi;