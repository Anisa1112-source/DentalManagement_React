import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, User, Phone, Bell, UserCircle, Home, Package, CheckCircle, Settings, Truck, Wallet } from "lucide-react";
import "../style/ProfilAdmin.css"; 

function ProfilAdmin() {
  const [profil] = useState({
    email: "heri@gmail.com",
    nama: "Heri Maheri",
    noHp: "084932640940",
  });

  return (
    <div className="pa-page">
      {/* SIDEBAR */}
      <aside className="pa-sidebar">
        <div className="pa-sidebar-brand">
          <div className="pa-sidebar-brand-text">
            <p className="pa-sidebar-title">DENTAL</p>
            <p className="pa-sidebar-subtitle">SYSTEM</p>
          </div>
        </div>
        <nav className="pa-sidebar-nav">
          <Link to="/dashboard" className="pa-nav-item"><Home size={18} /><span>Dashboard</span></Link>
          <Link to="/pesanan" className="pa-nav-item"><Package size={18} /><span>Pesanan</span></Link>
          <Link to="/persetujuan" className="pa-nav-item"><CheckCircle size={18} /><span>Persetujuan</span></Link>
          <Link to="/produksi" className="pa-nav-item"><Settings size={18} /><span>Produksi</span></Link>
          <Link to="/pengiriman" className="pa-nav-item"><Truck size={18} /><span>Pengiriman</span></Link>
          <Link to="/transaksi" className="pa-nav-item"><Wallet size={18} /><span>Transaksi</span></Link>
          <Link to="/admin/profil" className="pa-nav-item pa-nav-item-active"><UserCircle size={18} /><span>Profil Admin</span></Link>
        </nav>
        <Link to="/login" className="pa-btn-keluar">Keluar</Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="pa-main">
        <div className="pa-topbar">
          <h2>Profil</h2>
          <span className="pa-topbar-email">admin@gmail.com</span>
        </div>

        <p className="pa-breadcrumb">&laquo; Kembali</p>

        <div className="pa-card-container">
          <div className="pa-card">
            <div className="pa-field-group">
              <label>Email</label>
              <input type="email" value={profil.email} className="pa-field-input" disabled />
            </div>
            <div className="pa-field-group">
              <label>Nama</label>
              <input type="text" value={profil.nama} className="pa-field-input" disabled />
            </div>
            <div className="pa-field-group">
              <label>No Hp</label>
              <input type="text" value={profil.noHp} className="pa-field-input" disabled />
            </div>
            <button className="pa-btn-update">Update Profil</button>
            <button className="pa-btn-password">Ganti Password</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilAdmin;