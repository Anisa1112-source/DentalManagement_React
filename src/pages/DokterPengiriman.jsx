import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/Style.css";

function DokterPengiriman() {
  const navigate = useNavigate();
  const { id } = useParams();

  const dataAktif = {
    statusPengiriman: "Dalam Pengiriman",
    produk: "Crown Metal",
    noResi: "SPX209329342453",
    tanggalKirim: "19 April 2026",
    tujuan: "Klinik Keluarga Sejahtera",
    penerima: "drg. Fauzi R.S",
    riwayatPengiriman: [
      { label: "Paket diterima kurir", tanggal: "19 April 2026, 09.20" },
      { label: "Dalam Perjalanan", tanggal: "19 April 2026, 13.51" },
      { label: "Tiba Ditujuan", tanggal: "Estimasi 21 - 24 April", pending: true }
    ]
  };

  const badgeClass = (status) => {
    if (status === "Dalam Pengiriman" || status === "Dikirim") return "badge-dokter badge-dokter-proses";
    if (status === "Selesai") return "badge-dokter badge-dokter-selesai";
    if (status === "Revisi") return "badge-dokter badge-dokter-revisi";
    return "badge-dokter badge-dokter-default";
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-logo">
          <div style={{ fontSize: "22px" }}></div>
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
          <div className="topbar-left"><h2>Pesanan Saya</h2></div>
          <div className="topbar-right">
            <i className="fa-solid fa-bell" style={{ marginRight: "14px" }}></i>
            <span>drg. Heri (Client)</span>
            <i className="fa-solid fa-circle-user" style={{ fontSize: "22px", marginLeft: "10px" }}></i>
          </div>
        </div>

        <button onClick={() => navigate("/dokter/pengiriman")} className="link-kembali-dokter">
          <i className="fa-solid fa-arrow-left"></i> Kembali
        </button>

        <div className="detail-header-row-dokter">
          <h3 className="detail-id-title-dokter">{id}</h3>
          <span className={badgeClass(dataAktif.statusPengiriman)}>{dataAktif.statusPengiriman}</span>
        </div>

        <div className="detail-grid-top-dokter">
          <div className="detail-card-dokter">
            <h4 className="detail-card-title-dokter">Info Pengiriman</h4>
            <p className="info-line-dokter"><strong>Produk:</strong> {dataAktif.produk}</p>
            <p className="info-line-dokter"><strong>No Resi:</strong> {dataAktif.noResi}</p>
            <p className="info-line-dokter"><strong>Tanggal Kirim:</strong> {dataAktif.tanggalKirim}</p>
            <p className="info-line-dokter"><strong>Tujuan:</strong> {dataAktif.tujuan}</p>
            <p className="info-line-dokter"><strong>Penerima:</strong> {dataAktif.penerima}</p>
          </div>

          <div className="detail-card-dokter">
            <h4 className="detail-card-title-dokter">Riwayat Pengiriman</h4>
            <div className="timeline-dokter">
              {dataAktif.riwayatPengiriman.map((r, idx) => (
                <div className="timeline-item-dokter" key={idx}>
                  <span className={`timeline-dot-dokter ${r.pending ? "pending" : ""}`}></span>
                  <div>
                    <p className={`timeline-label-dokter ${r.pending ? "pending" : ""}`}>{r.label}</p>
                    <span className="timeline-date-dokter">{r.tanggal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DokterPengiriman;