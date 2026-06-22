import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/pesananAdmin.css";

function Persetujuan() {
  // State untuk Modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // 'Setuju' atau 'Tolak'
  const [selectedPesanan, setSelectedPesanan] = useState(null);
  const [catatan, setCatatan] = useState("");

  // Data pesanan menunggu persetujuan
  const [listPersetujuan, setListPersetujuan] = useState([
    { id: "PSN-010", dokter: "drg. Budi Santoso", produk: "Crown Zirconia", tanggal: "24 Apr 2026", klinik: "Klinik Sehat" },
    { id: "PSN-011", dokter: "drg. Ratna Sari", produk: "Veneer Porselen x3", tanggal: "23 Apr 2026", klinik: "Klinik Medika" },
    { id: "PSN-012", dokter: "drg. Dian Wulandari", produk: "Gigi Tiruan", tanggal: "23 Apr 2026", klinik: "Klinik Prima" },
  ]);

  // Fungsi buka modal
  const handleAction = (type, pesanan) => {
    setModalType(type);
    setSelectedPesanan(pesanan);
    setShowModal(true);
  };

  // Fungsi Simpan di Modal
  const handleSimpan = () => {
    alert(`Pesanan ${selectedPesanan.id} berhasil di-${modalType.toLowerCase()} dengan catatan: ${catatan}`);
    // Hapus dari list setelah diproses (simulasi)
    setListPersetujuan(listPersetujuan.filter(item => item.id !== selectedPesanan.id));
    setShowModal(false);
    setCatatan("");
  };

  return (
    <div className="dashboard-container">
      {/* SIDEBAR DENGAN ICON LENGKAP */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <img src="/assets/Logo.png" alt="Logo" />
          <div>
            <p className="logo-title">DENTAL</p>
            <p className="logo-sub">SYSTEM</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className="nav-item"><i className="fa-solid fa-house"></i> Dashboard</Link>
          <Link to="/pesanan" className="nav-item"><i className="fa-solid fa-box"></i> Pesanan</Link>
          <Link to="/persetujuan" className="nav-item active"><i className="fa-solid fa-circle-check"></i> Persetujuan</Link>
          <Link to="/produksi" className="nav-item"><i className="fa-solid fa-gear"></i> Produksi</Link>
          <Link to="/pengiriman" className="nav-item"><i className="fa-solid fa-truck"></i> Pengiriman</Link>
          <Link to="/transaksi" className="nav-item"><i className="fa-solid fa-money-bill-wave"></i> Transaksi</Link>
        </nav>
        <Link to="/login" className="btn-keluar">Keluar</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="topbar-produksi">
          <h2>Persetujuan Bos</h2>
          <span className="admin-email">bos@gmail.com</span>
        </div>

        <div className="persetujuan-header-text">
          <p>Pesanan menunggu persetujuan bos - <span>{listPersetujuan.length} pesanan</span></p>
        </div>

        {/* CONTAINER LIST PESANAN (Dibuat lebih naik dan rapi) */}
        <div className="persetujuan-list-container">
          {listPersetujuan.map((item) => (
            <div className="card-persetujuan" key={item.id}>
              <div className="card-persetujuan-left">
                <div className="icon-user-box">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <div className="info-text">
                  <h4>{item.dokter}</h4>
                  <p className="produk-name">{item.produk}</p>
                  <p className="sub-info">#{item.id} - Diajukan {item.tanggal} - {item.klinik}</p>
                </div>
              </div>
              <div className="card-persetujuan-right">
                <button className="btn-setuju" onClick={() => handleAction("Setuju", item)}>Setuju</button>
                <button className="btn-tolak" onClick={() => handleAction("Tolak", item)}>Tolak</button>
              </div>
            </div>
          ))}
          {listPersetujuan.length === 0 && (
            <div style={{textAlign: 'center', marginTop: '50px', color: '#64748b'}}>
              <i className="fa-solid fa-circle-check" style={{fontSize: '50px', color: '#22c55e'}}></i>
              <p style={{marginTop: '10px'}}>Semua pesanan sudah diproses!</p>
            </div>
          )}
        </div>
      </div>

      {/* POPUP MODAL (Sesuai Gambar Kedua Kamu) */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content-bos">
            <h3>Apakah anda yakin?</h3>
            <div className="modal-body-catatan">
              <label>Catatan</label>
              <textarea 
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Masukkan catatan di sini..."
              />
            </div>
            <div className="modal-footer-btns">
              <button className="btn-modal-batal" onClick={() => setShowModal(false)}>Batal</button>
              <button className="btn-modal-simpan" onClick={handleSimpan}>Simpan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Persetujuan;