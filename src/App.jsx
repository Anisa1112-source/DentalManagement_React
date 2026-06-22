import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==========================================
// IMPORT PANEL ROUTE UNTUK ADMIN LAB DENTAL
// ==========================================
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pesanan from "./pages/Pesanan"; 
import DetailPesanan from "./pages/DetailPesanan"; // 🌟 TAMBAHAN: Import file Detail Pesanan Admin yang baru dibuat
import Persetujuan from "./pages/Persetujuan";
import Produksi from "./pages/Produksi";
import Pengiriman from "./pages/Pengiriman";
import PengirimanDetail from "./pages/PengirimanDetail";
import Transaksi from "./pages/Transaksi";

// ==========================================
// IMPORT PANEL ROUTE UNTUK USER DOKTER GIGI (CLIENT)
// ==========================================
import DokterDashboard from "./pages/DokterDashboard";
import DokterTambahPesanan from "./pages/DokterTambahPesanan"; 
import DokterPesananList from "./pages/DokterPesananList"; 
import DokterPesananDetail from "./pages/DokterPesananDetail"; // 🌟 Detail Pesanan + Tombol Revisi
import DokterPengirimanList from "./pages/DokterPengirimanList"; 
import DokterPengiriman from "./pages/DokterPengiriman"; // 🌟 Detail Pelacakan Logistik
import DokterTransaksi from "./pages/DokterTransaksi"; 
import DokterProfil from "./pages/DokterProfil"; // 🌟 Profil Terpisah Penuh Sesuai Figma

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* LOGIN & REGISTER MAIN */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ========================================== */}
        {/* PANEL ROUTES ADMIN LAB DENTAL              */}
        {/* ========================================== */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pesanan" element={<Pesanan />} />
        
        {/* 🌟 TAMBAHAN: Jalur Route inilah yang membuat link detail admin berfungsi dan tidak kosong lagi */}
        <Route path="/pesanan/:id" element={<DetailPesanan />} />
        
        <Route path="/persetujuan" element={<Persetujuan />} />
        <Route path="/produksi" element={<Produksi />} />
        <Route path="/pengiriman" element={<Pengiriman />} />
        <Route path="/pengiriman/detail/:id" element={<PengirimanDetail />} />
        <Route path="/transaksi" element={<Transaksi />} />

        {/* ========================================== */}
        {/* PANEL ROUTES USER DOKTER GIGI (CLIENT)    */}
        {/* ========================================== */}
        {/* 1. Dashboard Utama Dokter */}
        <Route path="/dokter/dashboard" element={<DokterDashboard />} />
        
        {/* 2. Form Input Tambah Pesanan Baru */}
        <Route path="/dokter/tambah-pesanan" element={<DokterTambahPesanan />} />

        {/* 3. List Data "Pesanan Saya" */}
        <Route path="/dokter/pesanan" element={<DokterPesananList />} />

        {/* 4. Detail Tampilan Pesanan (Ada Tombol Ajukan Revisi) */}
        <Route path="/dokter/pesanan/detail/:id" element={<TemplateRouteDetailPesanan />} />

        {/* 5. List Data Utama "Pengiriman" */}
        <Route path="/dokter/pengiriman" element={<DokterPengirimanList />} />

        {/* 6. Detail Pelacakan Alur Logistik / Resi */}
        <Route path="/dokter/pengiriman/:id" element={<DokterPengiriman />} />

        {/* 7. List Rekap Data Keuangan / Transaksi Banyak Baris */}
        <Route path="/dokter/transaksi" element={<DokterTransaksi />} />

        {/* 8. Halaman Split Screen Khusus Profil Dokter Gigi */}
        <Route path="/dokter/profil" element={<DokterProfil />} />
      </Routes>
    </BrowserRouter>
  );
}

// Komponen penunjang sementara agar rute tidak error saat diklik detail pesanan
function TemplateRouteDetailPesanan() {
  return <DokterPesananDetail />;
}

export default App;