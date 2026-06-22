import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Style.css";

function DokterProfil() {
  const navigate = useNavigate();

  // State Form Input biar bisa diketik & di-update sesuai Figma
  const [nama, setNama] = useState("drg. Heri");
  const [email, setEmail] = useState("dokterheri@gmail.com");
  const [noHp, setNoHp] = useState("0840328492840");
  const [klinik, setKlinik] = useState("Klinik Keluarga Sejahtera");
  const [alamat, setAlamat] = useState("Jalan Dandan, RT 02 RW 49, Banguntapan, Yogyakarta");

  return (
    <div className="dashboard-container" style={{ background: "#f4f7fe", minHeight: "100vh", padding: "30px" }}>
      {/* Tombol Kembali di Pojok Kiri Atas */}
      <div 
        onClick={() => navigate("/dokter/dashboard")} 
        style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", color: "#1a5694", fontWeight: "700", fontSize: "14px", marginBottom: "20px", width: "fit-content" }}
      >
        <i className="fa-solid fa-arrow-left"></i> Kembali
      </div>

      {/* Konten Utama Profil Full Putih Rapi */}
      <div style={{ background: "white", maxWidth: "600px", margin: "0 auto", borderRadius: "16px", padding: "30px", border: "1px solid #e2e8f0" }}>
        <h2 style={{ color: "#1a5694", fontSize: "18px", fontWeight: "700", marginBottom: "25px", borderBottom: "1px solid #f1f5f9", paddingBottom: "10px" }}>Profil</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div className="form-group">
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "13px", color: "#4a5568" }}>Nama</label>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }} />
          </div>

          <div className="form-group">
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "13px", color: "#4a5568" }}>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }} />
          </div>

          <div className="form-group">
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "13px", color: "#4a5568" }}>No. HP</label>
            <input type="text" value={noHp} onChange={(e) => setNoHp(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }} />
          </div>

          <div className="form-group">
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "13px", color: "#4a5568" }}>Klinik</label>
            <input type="text" value={klinik} onChange={(e) => setKlinik(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px" }} />
          </div>

          <div className="form-group">
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "13px", color: "#4a5568" }}>Alamat</label>
            <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} style={{ width: "100%", height: "70px", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "13px", resize: "none" }}></textarea>
          </div>

          {/* Tombol Aksi Sesuai Layout Atb */}
          <div style={{ display: "flex", gap: "12px", marginTop: "15px" }}>
            <button onClick={() => alert("Profil berhasil diperbarui!")} style={{ flex: "1", padding: "11px", background: "#73c2fb", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "13px", cursor: "pointer" }}>
              Update Profil
            </button>
            <button onClick={() => alert("Silakan masukkan password baru!")} style={{ flex: "1", padding: "11px", background: "none", border: "1px solid #e53e3e", color: "#e53e3e", borderRadius: "8px", fontWeight: "bold", fontSize: "13px", cursor: "pointer" }}>
              Ganti Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DokterProfil;