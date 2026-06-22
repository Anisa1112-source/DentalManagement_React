import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/pengirimanAdmin.css";

function Pengiriman() {
  const [dataPengiriman, setDataPengiriman] = useState([]);
  const [showModalTerima, setShowModalTerima] = useState(false);
  const [showModalTambah, setShowModalTambah] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Form tambah data baru
  const [inputID, setInputID] = useState("");
  const [inputResi, setInputResi] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("globalPengiriman");
    if (savedData) {
      setDataPengiriman(JSON.parse(savedData));
    } else {
      const defaultData = [
        { id: "PSN001", dokter: "drg. Budi Santoso", pesanan: "Crown Zirconia .M. Putih", resi: "SPX239123ND", status: "Menunggu Kurir" },
        { id: "PSN002", dokter: "drg. Anita Rahayu", pesanan: "Veneer Porselen .S. Cream", resi: "JNT20938243912", status: "Dikemas" },
        { id: "PSN003", dokter: "drg. Dian Wulandari", pesanan: "Gigi Tiruan Full .L. Natural", resi: "EXPRS29319313", status: "Diterima" },
        { id: "PSN004", dokter: "drg. Hendra Setiawan", pesanan: "Bridge Porselen .M. Putih", resi: "REG12133423", status: "Diterima" },
      ];
      localStorage.setItem("globalPengiriman", JSON.stringify(defaultData));
      setDataPengiriman(defaultData);
    }
  }, []);

  const handleStatusClick = (id, statusSekarang) => {
    if (statusSekarang !== "Diterima") {
      setSelectedId(id);
      setShowModalTerima(true);
    }
  };

  const konfirmasiDiterima = () => {
    const updated = dataPengiriman.map(item =>
      item.id === selectedId ? { ...item, status: "Diterima" } : item
    );
    setDataPengiriman(updated);
    localStorage.setItem("globalPengiriman", JSON.stringify(updated));
    setShowModalTerima(false);
  };

  const handleTambahPengiriman = () => {
    if(!inputID || !inputResi) return alert("Mohon isi semua data!");
    const newData = {
      id: inputID,
      dokter: "drg. Baru Terdaftar",
      pesanan: "Custom Item Lab .M. Natural",
      resi: inputResi,
      status: "Dikemas"
    };
    const updated = [newData, ...dataPengiriman];
    setDataPengiriman(updated);
    localStorage.setItem("globalPengiriman", JSON.stringify(updated));
    setShowModalTambah(false);
    setInputID("");
    setInputResi("");
  };

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

      {/* CONTENT */}
      <div className="main-content">
        <div className="topbar">
          <div className="topbar-left"><h2>Pengiriman</h2></div>
          <div className="topbar-right"><span>admin@gmail.com</span></div>
        </div>

        <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
          <button className="shipping-add" onClick={() => setShowModalTambah(true)} style={{ padding: "12px 24px", background: "#2b96dc", color: "#fff", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", marginLeft: "auto" }}>
            + Tambah Pengiriman
          </button>
        </div>

        <div className="shipping-wrapper">
          <table className="shipping-table">
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
              {dataPengiriman.map((item) => {
                let statusColor = "#e59800"; // Kuning - Menunggu Kurir
                if (item.status === "Dikemas") statusColor = "#e53e3e"; // Merah
                if (item.status === "Diterima") statusColor = "#38a169"; // Hijau

                return (
                  <tr key={item.id}>
                    <td style={{ fontWeight: "bold" }}>{item.id}</td>
                    <td>{item.dokter}</td>
                    <td>{item.pesanan}</td>
                    <td>{item.resi}</td>
                    <td>
                      <span 
                        onClick={() => handleStatusClick(item.id, item.status)}
                        className={item.status !== "Diterima" ? "status-clickable" : "status-disabled"}
                        style={{ color: statusColor }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <Link to={`/pengiriman/detail/${item.id}`} style={{ color: "#2b96dc", fontWeight: "bold", textDecoration: "none" }}>Detail</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL PERBARUI STATUS */}
      {showModalTerima && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">Perbarui Status Pengiriman</div>
            <div className="modal-body">
              <h2>Tandai pesanan sebagai DITERIMA</h2>
              <div className="modal-footer-buttons">
                <button onClick={() => setShowModalTerima(false)} className="btn-modal-cancel">Batal</button>
                <button onClick={konfirmasiDiterima} className="btn-modal-confirm">Ya, Perbarui</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL TAMBAH PENGIRIMAN */}
      {showModalTambah && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">Tambah Pengiriman</div>
            <div className="modal-body">
              <div className="form-group">
                <label>ID Pesanan</label>
                <input type="text" className="form-input" value={inputID} onChange={(e)=>setInputID(e.target.value)} placeholder="Masukkan ID Pesanan" />
              </div>
              <div className="form-group">
                <label>No Resi</label>
                <input type="text" className="form-input" value={inputResi} onChange={(e)=>setInputResi(e.target.value)} placeholder="Masukkan No Resi" />
              </div>
              <div className="modal-footer-buttons" style={{ marginTop: "30px" }}>
                <button onClick={() => setShowModalTambah(false)} className="btn-modal-cancel">Batal</button>
                <button onClick={handleTambahPengiriman} className="btn-modal-confirm" style={{ background: "#2b96dc", color: "white" }}>Tambah</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pengiriman;