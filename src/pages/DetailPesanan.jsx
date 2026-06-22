import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../style/pesananAdmin.css";

function DetailPesanan() {
  const { id } = useParams(); // Menangkap ID dari URL (PSN001, PSN002, dll)

  // 1. Data sumber yang 100% sama dengan tabel di halaman Pesanan
  const dataMock = {
    PSN001: { dokter: "drg. Budi Santoso", produk: "Crown Zirconia", tanggal: "23 April 2026", statusAsli: "Proses", shade: "A2", elemen: "Gigi 11, 21", catatan: "Mohon margin dibuat setipis mungkin agar pas saat dipasang ke pasien." },
    PSN002: { dokter: "drg. Anita Rahayu", produk: "Veneer Porselen", tanggal: "22 April 2026", statusAsli: "Selesai", shade: "A1", elemen: "Gigi 12, 11", catatan: "Warna disesuaikan dengan gigi asli sebelahnya." },
    PSN003: { dokter: "drg. Dian Wulandari", produk: "Gigi Tiruan", tanggal: "22 April 2026", statusAsli: "Baru", shade: "B2", elemen: "Rahang Atas", catatan: "Cek kembali file scan 3D rahang atas sebelum produksi." },
    PSN004: { dokter: "drg. Hendra Setiawan", produk: "Bridge Porselen", tanggal: "21 April 2026", statusAsli: "Revisi", shade: "A3", elemen: "Gigi 36, 37", catatan: "Revisi bagian pontik agak dinaikkan sedikit." }
  };

  // Ambil data berdasarkan ID, jika tidak ada kembali ke PSN001
  const detail = dataMock[id] || dataMock["PSN001"];

  // 2. Set nilai awal State Status mengikuti "statusAsli" dari data di atas
  const [status, setStatus] = useState(detail.statusAsli);

  // Efek transisi jika user pindah dari PSN001 ke PSN002 agar status dropdown-nya ikut berubah otomatis
  useEffect(() => {
    setStatus(detail.statusAsli);
  }, [id, detail.statusAsli]);

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
          <Link to="/pesanan" className="nav-item active">
            <i className="fa-solid fa-box"></i> Pesanan
          </Link>
          <Link to="/persetujuan" className="nav-item">
            <i className="fa-solid fa-circle-check"></i> Persetujuan
          </Link>
          <Link to="/produksi" className="nav-item">
            <i className="fa-solid fa-gear"></i> Dev Produksi
          </Link>
          <Link to="/pengiriman" className="nav-item">
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
        
        {/* TOPBAR */}
        <div className="topbar">
          <div className="topbar-left" style={{ gap: "16px" }}>
            <Link to="/pesanan" className="btn-kembali-link">
              <i className="fa-solid fa-arrow-left"></i> Kembali
            </Link>
            <span style={{ color: "#cbd5e1" }}>|</span>
            <h2>Detail Pesanan - {id || "PSN001"}</h2>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="detail-grid-layout">
          
          {/* KOLOM KIRI */}
          <div className="detail-kolom-kiri">
            
            {/* Card Info Utama */}
            <div className="detail-card-item">
              <div className="detail-card-header">
                <div>
                  <span className="detail-label-id">ID PESANAN</span>
                  <h3 className="detail-main-id">{id || "PSN001"}</h3>
                </div>
                {/* 🌟 WARNA BADGE OTOMATIS: Mengikuti isi dari status dinamis */}
                <span className={`badge badge-${status.toLowerCase()}`}>{status}</span>
              </div>

              <div className="detail-info-row">
                <div>
                  <p className="detail-info-label">Nama Dokter</p>
                  <p className="detail-info-val">{detail.dokter}</p>
                </div>
                <div>
                  <p className="detail-info-label">Tanggal Masuk</p>
                  <p className="detail-info-val">{detail.tanggal}</p>
                </div>
              </div>
            </div>

            {/* Card Spesifikasi */}
            <div className="detail-card-item">
              <h4 className="detail-section-title">Spesifikasi Pekerjaan Laboratorium</h4>
              <div className="detail-spec-list">
                <div className="detail-spec-item">
                  <span className="spec-label">Jenis Pesanan</span>
                  <span className="spec-val">{detail.produk}</span>
                </div>
                <div className="detail-spec-item">
                  <span className="spec-label">Warna / Shade</span>
                  <span className="spec-val">{detail.shade}</span>
                </div>
                <div className="detail-spec-item">
                  <span className="spec-label">Posisi Elemen Gigi</span>
                  <span className="spec-val">{detail.elemen}</span>
                </div>
                <div className="detail-spec-catatan">
                  <p className="spec-label" style={{ marginBottom: "8px" }}>Catatan Tambahan Dokter:</p>
                  <div className="catatan-text-box">"{detail.catatan}"</div>
                </div>
              </div>
            </div>

          </div>

          {/* KOLOM KANAN */}
          <div className="detail-kolom-kanan">
            
            {/* Card Aksi Admin */}
            <div className="detail-card-item">
              <h4 className="detail-section-title" style={{ border: "none", marginBottom: "5px" }}>Aksi Operasional</h4>
              <div className="detail-form-control">
                <label className="form-label-text">Ubah Status Progres:</label>
                {/* Dropdown otomatis memilih status pesanan yang benar */}
                <select 
                  className="detail-select-input" 
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Baru">Baru</option>
                  <option value="Proses">Proses</option>
                  <option value="Revisi">Revisi</option>
                  <option value="Selesai">Selesai</option>
                </select>
              </div>
              <button className="detail-btn-submit" onClick={() => alert(`Status ${id} Berhasil Diperbarui menjadi ${status}!`)}>
                Simpan Perubahan
              </button>
            </div>

            {/* Card Berkas Lampiran */}
            <div className="detail-card-item">
              <h4 className="detail-section-title" style={{ border: "none", marginBottom: "10px" }}>Berkas Lampiran</h4>
              <div className="detail-file-container">
                <p className="detail-info-label" style={{ margin: 0 }}>File Cetakan Gigi 3D</p>
                <a href="#download" className="detail-download-link">
                  <i className="fa-solid fa-file-pdf" style={{ marginRight: "4px" }}></i> download_scan_gigi.stl
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default DetailPesanan;