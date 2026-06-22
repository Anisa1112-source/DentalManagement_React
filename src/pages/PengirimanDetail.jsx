import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../style/Style.css";

function PengirimanDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pesanan, setPesanan] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("globalPengiriman");
    if (savedData) {
      const list = JSON.parse(savedData);
      const match = list.find(item => item.id === id);
      setPesanan(match || list[0]);
    }
  }, [id]);

  const handleSelesaiKirim = () => {
    const savedData = localStorage.getItem("globalPengiriman");
    if (savedData) {
      const list = JSON.parse(savedData);
      const updated = list.map(item => item.id === pesanan.id ? { ...item, status: "Diterima" } : item);
      localStorage.setItem("globalPengiriman", JSON.stringify(updated));
      setPesanan({ ...pesanan, status: "Diterima" });
    }
    setShowModal(false);
  };

  if (!pesanan) return <p style={{ padding: "30px" }}>Memuat Data Tracking...</p>;

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="/assets/Logo.png" alt="Logo" />
          <div><p className="logo-title">DENTAL</p><p className="logo-sub">SYSTEM</p></div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item"><i className="fa-solid fa-house"></i> Dashboard</Link>
          <Link to="/pesanan" className="nav-item"><i className="fa-solid fa-box"></i> Pesanan</Link>
          <Link to="/persetujuan" className="nav-item"><i className="fa-solid fa-circle-check"></i> Persetujuan</Link>
          <Link to="/produksi" className="nav-item"><i className="fa-solid fa-gear"></i> Produksi</Link>
          <Link to="/pengiriman" className="nav-item active"><i className="fa-solid fa-truck"></i> Pengiriman</Link>
          <Link to="/transaksi" className="nav-item"><i className="fa-solid fa-money-bill-wave"></i> Transaksi</Link>
        </nav>
        <Link to="/" className="btn-keluar">Keluar</Link>
      </div>

      <div className="main-content">
        <div className="topbar">
          <h2>Detail Tracking Pengiriman</h2>
        </div>

        <div className="stat-cards" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="stat-card">
            <p style={{ color: "#718096", margin: 0 }}>No. Pesanan</p>
            <h2 style={{ color: "#2b96dc", fontSize: "24px" }}>{pesanan.id}</h2>
          </div>
          <div className="stat-card">
            <p style={{ color: "#718096", margin: 0 }}>No Resi</p>
            <h2 style={{ fontSize: "24px" }}>{pesanan.resi}</h2>
          </div>
          <div className="stat-card">
            <p style={{ color: "#718096", margin: 0 }}>Status Kirim</p>
            <h2 style={{ fontSize: "24px", color: pesanan.status === "Diterima" ? "#38a169" : "#e59800" }}>{pesanan.status}</h2>
          </div>
        </div>

        <div className="card tracking-card" style={{ background: "white", padding: "30px", borderRadius: "18px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ fontWeight: "800", marginBottom: "20px" }}>Tracking status pengiriman</h3>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ padding: "15px", background: "#ebf8ff", borderRadius: "12px", display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{ width: "12px", height: "12px", background: "#2b96dc", borderRadius: "50%" }}></div>
              <div><strong style={{ display: "block" }}>Paket dijemput kurir</strong><span style={{ fontSize: "13px", color: "#718096" }}>Status Terkonfirmasi</span></div>
            </div>
            <div style={{ padding: "15px", background: pesanan.status === "Diterima" ? "#e6fffa" : "#ebf8ff", borderRadius: "12px", display: "flex", gap: "15px", alignItems: "center" }}>
              <div style={{ width: "12px", height: "12px", background: pesanan.status === "Diterima" ? "#38a169" : "#cbd5e0", borderRadius: "50%" }}></div>
              <div><strong style={{ display: "block" }}>Diterima oleh Dokter</strong><span style={{ fontSize: "13px", color: "#718096" }}>{pesanan.status === "Diterima" ? "Selesai" : "Menunggu estimasi tujuan"}</span></div>
            </div>
          </div>

          {pesanan.status !== "Diterima" ? (
            <button onClick={() => setShowModal(true)} style={{ width: "100%", padding: "16px", marginTop: "30px", background: "#c6f6d5", border: "none", color: "#22543d", borderRadius: "12px", fontWeight: "bold", fontSize: "16px", cursor: "pointer" }}>
              Perbarui ke : Diterima
            </button>
          ) : (
            <div style={{ width: "100%", padding: "16px", marginTop: "30px", background: "#e6fffa", color: "#234e52", borderRadius: "12px", fontWeight: "bold", textalign: "center", display: "block" }}>
              ✓ Pesanan Telah Selesai Diterima
            </div>
          )}
        </div>
      </div>

      {/* POP-UP MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">Perbarui Status Pengiriman</div>
            <div className="modal-body">
              <h2>Tandai pesanan sebagai DITERIMA</h2>
              <div className="modal-footer-buttons">
                <button onClick={() => setShowModal(false)} className="btn-modal-cancel">Batal</button>
                <button onClick={handleSelesaiKirim} className="btn-modal-confirm">Ya, Perbarui</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PengirimanDetail;