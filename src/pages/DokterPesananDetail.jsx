import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/detailPesananDokter.css";

function DokterPesananDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Data contoh (nanti ganti dengan fetch API)
  const dataAktif = {
    id: id,
    produk: "Crown Metal",
    dokter: "drg. Fauzi R.S",
    statusProduksi: "Sedang Dikerjakan", // Coba ganti ke "Selesai" untuk lihat perubahan
    pengiriman: {
      noResi: "SPX209329342453",
      statusPengiriman: "Dalam Pengiriman"
    },
    riwayatPengiriman: [
      { label: "Paket diterima kurir", tanggal: "19 April 2026, 09.20" },
      { label: "Dalam Perjalanan", tanggal: "19 April 2026, 13.51" }
    ]
  };

  const isSelesai = dataAktif.statusProduksi === "Selesai";

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <button onClick={() => navigate(-1)} className="link-kembali-dokter">← Kembali</button>

        <div className="detail-header-row-dokter">
          <h3>Detail Pesanan: {id}</h3>
          {isSelesai && <button className="btn-ajukan-revisi-dokter">Ajukan Revisi</button>}
        </div>

        <div className="detail-grid-top-dokter">
          {/* Card Detail Pengerjaan */}
          <div className="detail-card-dokter">
            <h4>Detail Pengerjaan</h4>
            <p><strong>Status:</strong> <span className="badge-dokter">{dataAktif.statusProduksi}</span></p>
            <p><strong>Produk:</strong> {dataAktif.produk}</p>
          </div>

          {/* Card Detail Pengiriman (Dinamis) */}
          <div className="detail-card-dokter">
            <h4>Detail Pengiriman</h4>
            {!isSelesai && dataAktif.statusProduksi === "Sedang Dikerjakan" ? (
              <div className="empty-state-dokter">
                <p>⚠️ Detail pengiriman akan muncul setelah pesanan selesai.</p>
              </div>
            ) : (
              <div>
                <p><strong>No Resi:</strong> {dataAktif.pengiriman.noResi}</p>
                <p><strong>Status:</strong> {dataAktif.pengiriman.statusPengiriman}</p>
              </div>
            )}
          </div>
        </div>

        {/* Riwayat Pengiriman */}
        {isSelesai && (
          <div className="detail-card-dokter">
            <h4>Riwayat Pengiriman</h4>
            <div className="timeline-dokter">
              {dataAktif.riwayatPengiriman.map((r, i) => (
                <div key={i} className="timeline-item-dokter">
                  <div className="timeline-dot-dokter"></div>
                  <div>
                    <p className="timeline-label-dokter">{r.label}</p>
                    <span className="timeline-date-dokter">{r.tanggal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DokterPesananDetail;