import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Style.css";

function DokterTambahPesanan() {
  const navigate = useNavigate();
  
  // State Input Form sesuai Figma
  const [kodeGigi, setKodeGigi] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [warna, setWarna] = useState("A2");
  const [jenisProduk, setJenisProduk] = useState("Crown Zirconia");
  const [catatan, setCatatan] = useState("");
  const [metodeBayar, setMetodeBayar] = useState("Transfer Bank");
  const [subtotal, setSubtotal] = useState(0);

  // Logika Hitung Otomatis Berdasarkan Input Jenis Produk & Banyaknya Kode Gigi
  useEffect(() => {
    if (!kodeGigi) {
      setSubtotal(0);
      return;
    }
    
    // Hitung berapa banyak elemen gigi yang dipilih (misal diinput: 11, 12 berarti 2 gigi)
    const jumlahGigi = kodeGigi.split(",").filter(item => item.trim() !== "").length;
    
    let hargaPerGigi = 425000; // Harga dasar Crown Zirconia
    if (jenisProduk === "Veneer Porselen") hargaPerGigi = 500000;
    if (jenisProduk === "Bridge Porselen") hargaPerGigi = 450000;
    if (jenisProduk === "Gigi Tiruan Full") hargaPerGigi = 1200000;

    setSubtotal(jumlahGigi * hargaPerGigi);
  }, [kodeGigi, jenisProduk]);

  // Fungsi simpan data ke LocalStorage biar terbaca di Pesanan Saya & Transaksi
  const handleKirimPesanan = (e) => {
    e.preventDefault();
    if (!kodeGigi || !ukuran) {
      alert("Harap isi Kode Gigi dan Ukuran terlebih dahulu!");
      return;
    }

    const newId = `PSN${String(Math.floor(100 + Math.random() * 900))}`;
    const tanggalHariIni = new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    // 1. Simpan ke Database Pesanan
    const currentPesanan = JSON.parse(localStorage.getItem("globalPesanan")) || [];
    const barisPesananBaru = {
      id: newId,
      produk: `${jenisProduk} . ${ukuran} . ${warna}`,
      tanggal: tanggalHariIni,
      status: "Menunggu"
    };
    localStorage.setItem("globalPesanan", JSON.stringify([barisPesananBaru, ...currentPesanan]));

    // 2. Simpan ke Database Transaksi
    const currentTransaksi = JSON.parse(localStorage.getItem("globalTransaksi")) || [];
    const barisTransaksiBaru = {
      id: `TRX-${Math.floor(100 + Math.random() * 900)}`,
      tanggal: tanggalHariIni,
      total: `Rp. ${subtotal.toLocaleString("id-ID")}`,
      metode: metodeBayar,
      status: "Belum"
    };
    localStorage.setItem("globalTransaksi", JSON.stringify([barisTransaksiBaru, ...currentTransaksi]));

    navigate("/dokter/pesanan");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-logo">
          <div style={{ fontSize: "32px" }}>🦷</div>
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

      <div className="main-content">
        <div className="topbar">
          <div className="topbar-left"><h2>Tambah Pesanan</h2></div>
          <div className="topbar-right"><span>drg. Heri (Client)</span></div>
        </div>

        <form onSubmit={handleKirimPesanan} className="bottom-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginTop: "20px" }}>
          {/* CARD FORM KIRI */}
          <div className="card" style={{ padding: "30px", borderRadius: "16px" }}>
            <h3 style={{ color: "#1a5694", marginBottom: "20px", fontSize: "18px", fontWeight: "700" }}>Item Pesanan 1</h3>
            
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "14px" }}>Kode Gigi (Gunakan koma jika lebih dari satu)</label>
              <input type="text" value={kodeGigi} onChange={(e) => setKodeGigi(e.target.value)} placeholder="Contoh: 11, 21" style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #cbd5e1" }} required />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "14px" }}>Ukuran</label>
              <input type="text" value={ukuran} onChange={(e) => setUkuran(e.target.value)} placeholder="Contoh: M, S, L atau detail mm" style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #cbd5e1" }} required />
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "14px" }}>Warna / Shade</label>
              <input type="text" value={warna} onChange={(e) => setWarna(e.target.value)} placeholder="Contoh: A2, B3, Natural" style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #cbd5e1" }} required />
            </div>

            <div className="form-group">
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "14px" }}>Jenis Produk</label>
              <select value={jenisProduk} onChange={(e) => setJenisProduk(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #cbd5e1", background: "white" }}>
                <option>Crown Zirconia</option>
                <option>Veneer Porselen</option>
                <option>Bridge Porselen</option>
                <option>Gigi Tiruan Full</option>
              </select>
            </div>
          </div>

          {/* CARD FORM KANAN */}
          <div className="card" style={{ padding: "30px", borderRadius: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ color: "#1a5694", marginBottom: "20px", fontSize: "18px", fontWeight: "700" }}>Catatan untuk Teknisi</h3>
              <textarea value={catatan} onChange={(e) => setCatatan(e.target.value)} placeholder="Tulis instruksi tambahan penyesuaian bentuk lengkung gigi..." style={{ width: "100%", height: "130px", padding: "12px", borderRadius: "10px", border: "1px solid #cbd5e1", resize: "none" }}></textarea>
              
              <div className="form-group" style={{ marginTop: "15px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "14px" }}>Metode Pembayaran</label>
                <select value={metodeBayar} onChange={(e) => setMetodeBayar(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #cbd5e1", background: "white" }}>
                  <option>Transfer Bank</option>
                  <option>Tunai / Cash</option>
                </select>
              </div>
            </div>

            <div style={{ textAlign: "right", borderTop: "1px solid #e2e8f0", paddingTop: "20px" }}>
              <p style={{ fontSize: "18px", fontWeight: "600", color: "#4a5568" }}>Subtotal: <span style={{ color: "#1a5694", fontWeight: "850", fontSize: "24px" }}>Rp. {subtotal.toLocaleString("id-ID")}</span></p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "15px" }}>
                <button type="button" onClick={() => navigate("/dokter/dashboard")} style={{ padding: "12px 30px", background: "#f1f5f9", color: "#64748b", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}>Batal</button>
                <button type="submit" style={{ padding: "12px 35px", background: "#73c2fb", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 12px rgba(113,194,251,0.4)" }}>Pesan</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DokterTambahPesanan;