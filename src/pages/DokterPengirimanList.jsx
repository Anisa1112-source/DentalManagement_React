import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Style.css";

function DokterPengirimanList() {
  const navigate = useNavigate();

  const [listKirim] = useState([
    { id: "PSN001", pesanan: "Crown Zirconia . M . Putih", resi: "JNT23820", status: "Dikirim" },
    { id: "PSN002", pesanan: "Veneer Porselen . S . Cream", resi: "SPX298392", status: "Selesai" },
    { id: "PSN003", pesanan: "Gigi Tiruan Full . L . Natural", resi: "JNE29322", status: "Selesai" },
    { id: "PSN004", pesanan: "Bridge Porselen . M . Putih", resi: "SHP2390234", status: "Revisi" }
  ]);

  const statusClass = (status) => {
    if (status === "Dikirim") return "badge-dokter badge-dokter-proses";
    if (status === "Selesai") return "badge-dokter badge-dokter-selesai";
    if (status === "Revisi") return "badge-dokter badge-dokter-revisi";
    return "badge-dokter badge-dokter-default";
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
          <Link to="/dokter/pengiriman" className="nav-item active"><i className="fa-solid fa-truck"></i> Pengiriman</Link>
          <Link to="/dokter/transaksi" className="nav-item"><i className="fa-solid fa-money-bill-transfer"></i> Transaksi</Link>
        </nav>
        <Link to="/" className="btn-keluar">Keluar</Link>
      </div>

      <div className="main-content">
        <div className="topbar">
          <div className="topbar-left"><h2>Pengiriman</h2></div>
          <div className="topbar-right" onClick={() => navigate("/dokter/profil")} style={{ cursor: "pointer" }}>
            <i className="fa-solid fa-bell" style={{ marginRight: "14px" }}></i>
            <span>drg. Heri (Client)</span>
            <i className="fa-solid fa-circle-user" style={{ fontSize: "22px", marginLeft: "10px" }}></i>
          </div>
        </div>

        <div className="filter-bar-dokter">
          <input type="text" placeholder="Cari Pengiriman" className="input-search-dokter" />
          <select className="select-filter-dokter">
            <option value="Semua">Semua</option>
            <option value="Dikirim">Dikirim</option>
            <option value="Selesai">Selesai</option>
            <option value="Revisi">Revisi</option>
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
                <th>Pesanan</th>
                <th>No Resi</th>
                <th>Status Pengiriman</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {listKirim.map((item) => (
                <tr key={item.id}>
                  <td className="td-id">{item.id}</td>
                  <td>{item.pesanan}</td>
                  <td>{item.resi}</td>
                  <td>
                    <span className={statusClass(item.status)}>{item.status}</span>
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/dokter/pengiriman/${item.id}`)}
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

export default DokterPengirimanList;