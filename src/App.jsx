import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==========================================
// IMPORT PANEL ROUTE UNTUK ADMIN LAB DENTAL
// ==========================================
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pesanan from "./pages/Pesanan"; 
import DetailPesanan from "./pages/DetailPesanan";
import Persetujuan from "./pages/Persetujuan";
import Produksi from "./pages/Produksi";
import Pengiriman from "./pages/Pengiriman";
import PengirimanDetail from "./pages/PengirimanDetail";
import Transaksi from "./pages/Transaksi";
// 🌟 TAMBAHAN: Profil Admin
import ProfilAdmin from "./pages/ProfilAdmin"; 

// ==========================================
// IMPORT PANEL ROUTE UNTUK USER DOKTER GIGI (CLIENT)
// ==========================================
import DokterDashboard from "./pages/DokterDashboard";
import DokterTambahPesanan from "./pages/DokterTambahPesanan"; 
import DokterPesananList from "./pages/DokterPesananList"; 
import DokterPesananDetail from "./pages/DokterPesananDetail"; 
import DokterPengirimanList from "./pages/DokterPengirimanList"; 
import DokterPengiriman from "./pages/DokterPengiriman"; 
import DokterTransaksi from "./pages/DokterTransaksi"; 
import DokterProfil from "./pages/DokterProfil"; 

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
        <Route path="/pesanan/:id" element={<DetailPesanan />} />
        <Route path="/persetujuan" element={<Persetujuan />} />
        <Route path="/produksi" element={<Produksi />} />
        <Route path="/pengiriman" element={<Pengiriman />} />
        <Route path="/pengiriman/detail/:id" element={<PengirimanDetail />} />
        <Route path="/transaksi" element={<Transaksi />} />
        
        {/* 🌟 ROUTE PROFIL ADMIN BARU */}
        <Route path="/admin/profil" element={<ProfilAdmin />} />

        {/* ========================================== */}
        {/* PANEL ROUTES USER DOKTER GIGI (CLIENT)     */}
        {/* ========================================== */}
        <Route path="/dokter/dashboard" element={<DokterDashboard />} />
        <Route path="/dokter/tambah-pesanan" element={<DokterTambahPesanan />} />
        <Route path="/dokter/pesanan" element={<DokterPesananList />} />
        <Route path="/dokter/pesanan/detail/:id" element={<TemplateRouteDetailPesanan />} />
        <Route path="/dokter/pengiriman" element={<DokterPengirimanList />} />
        <Route path="/dokter/pengiriman/:id" element={<DokterPengiriman />} />
        <Route path="/dokter/transaksi" element={<DokterTransaksi />} />
        <Route path="/dokter/profil" element={<DokterProfil />} />
      </Routes>
    </BrowserRouter>
  );
}

function TemplateRouteDetailPesanan() {
  return <DokterPesananDetail />;
}

export default App;