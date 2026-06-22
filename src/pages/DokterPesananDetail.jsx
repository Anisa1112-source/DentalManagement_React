import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/Style.css";

function DokterPesananDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🌟 Data contoh minimal — nanti ganti dengan hasil fetch API berdasarkan `id`
  const dataAktif = {
    tanggal: "16 April 2026",
    produk: "Crown Metal",
    dokter: "drg. Fauzi R.S",
    kodeGigi: "3.3",
    ukuran: "13.2 cm",
    warna: "A.2",
    jumlah: 1,
    statusProduksi: "Sedang Dikerjakan",
    catatanDokter: "-",
    pengiriman: {
      noResi: "SPX209329342453",
      tanggalKirim: "19 April 2026",
      tujuan: "Klinik Keluarga Sejahtera",
      statusPengiriman: "Dalam Pengiriman"
    },
    riwayatPengiriman: [
      { label: "Paket diterima kurir", tanggal: "19 April 2026, 09.20" },
      { label: "Dalam Perjalanan", tanggal: "19 April 2026, 13.51" },
      { label: "Tiba Ditujuan", tanggal: "Estimasi 21 - 24 April", pending: true }
    ]
  };

  const badgeClass = (status) => {
    if (status === "Sedang Dikerjakan") return "badge-dokter badge-dokter-proses";
    if (status === "Selesai") return "badge-dokter badge-dokter-selesai";
    if (status === "Revisi Diajukan" || status === "Revisi") return "badge-dokter badge-dokter-revisi";
    if (status === "Dalam Pengiriman") return "badge-dokter badge-dokter-proses";
    if (status === "Belum Dikirim") return "badge-dokter badge-dokter-default";
    return "badge-dokter badge-dokter-default";
  };

  const handleAjukanRevisi = () => {
    alert(`Mengajukan revisi untuk pesanan ${id}`);
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
          <div className="topbar-right">
            <i className="fa-solid fa-bell" style={{ marginRight: "14px" }}></i>
            <span>drg. Heri (Client)</span>
            <i className="fa-solid fa-circle-user" style={{ fontSize: "22px", marginLeft: "10px" }}></i>
          </div>
        </div>

        {/* Tombol Kembali */}
        <button onClick={() => navigate("/dokter/pesanan")} className="link-kembali-dokter">
          <i className="fa-solid fa-arrow-left"></i> Kembali
        </button>

        {/* HEADER ID + AJUKAN REVISI */}
        <div className="detail-header-row-dokter">
          <h3 className="detail-id-title-dokter">{id}</h3>
          <button onClick={handleAjukanRevisi} className="btn-ajukan-revisi-dokter">
            Ajukan Revisi
          </button>
        </div>

        {/* GRID 2 CARD ATAS: DETAIL PENGERJAAN & DETAIL PENGIRIMAN */}
        <div className="detail-grid-top-dokter">
          {/* DETAIL PENGERJAAN */}
          <div className="detail-card-dokter">
            <h4 className="detail-card-title-dokter">Detail Pengerjaan</h4>
            <p className="info-line-dokter"><strong>Produk:</strong> {dataAktif.produk}</p>
            <p className="info-line-dokter"><strong>Dokter:</strong> {dataAktif.dokter}</p>
            <p className="info-line-dokter"><strong>Kode Gigi:</strong> {dataAktif.kodeGigi}</p>
            <p className="info-line-dokter"><strong>Ukuran:</strong> {dataAktif.ukuran}</p>
            <p className="info-line-dokter"><strong>Warna:</strong> {dataAktif.warna}</p>
            <p className="info-line-dokter"><strong>Jumlah:</strong> {dataAktif.jumlah}</p>
            <p className="info-line-dokter"><strong>Tanggal Pesanan:</strong> {dataAktif.tanggal}</p>
            <p className="info-line-dokter">
              <strong>Status Produksi:</strong>{" "}
              <span className={badgeClass(dataAktif.statusProduksi)}>{dataAktif.statusProduksi}</span>
            </p>
            <p className="info-line-dokter"><strong>Catatan Dokter:</strong> {dataAktif.catatanDokter}</p>
          </div>

          {/* DETAIL PENGIRIMAN */}
          <div className="detail-card-dokter">
            <div className="detail-card-header-dokter">
              <h4 className="detail-card-title-dokter">Detail Pengiriman</h4>
              <span className={badgeClass(dataAktif.pengiriman.statusPengiriman)}>
                {dataAktif.pengiriman.statusPengiriman}
              </span>
            </div>
            <p className="info-line-dokter"><strong>No Resi:</strong> {dataAktif.pengiriman.noResi}</p>
            <p className="info-line-dokter"><strong>Tanggal Kirim:</strong> {dataAktif.pengiriman.tanggalKirim}</p>
            <p className="info-line-dokter"><strong>Tujuan:</strong> {dataAktif.pengiriman.tujuan}</p>
          </div>
        </div>

        {/* RIWAYAT PENGIRIMAN - full width, menyatu di bawah grid */}
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
  );
}

export default DokterPesananDetail;