import { Link } from "react-router-dom";
import "../style/pesananAdmin.css"; // Menggunakan file CSS keroyokan kita

function Produksi() {
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
          <Link to="/pesanan" className="nav-item">
            <i className="fa-solid fa-box"></i> Pesanan
          </Link>
          <Link to="/persetujuan" className="nav-item">
            <i className="fa-solid fa-circle-check"></i> Persetujuan
          </Link>
          <Link to="/produksi" className="nav-item active">
            <i className="fa-solid fa-gear"></i> Produksi
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

      {/* MAIN CONTENT */}
      <div className="main-content">
        
        {/* TOPBAR */}
        <div className="topbar-produksi">
          <h2>Proses Produksi</h2>
          <span className="admin-email">admin@gmail.com</span>
        </div>

        {/* BOARD LAYOUT KANBAN */}
        <div className="produksi-board">
          
          {/* KOLOM 1: ANTRIAN */}
          <div className="produksi-column">
            <div className="column-header">
              <h3>Antrian</h3>
              <span className="count-badge">3</span>
            </div>
            
            <div className="column-body">
              <div className="card-produksi">
                <span className="card-id">PSN-003</span>
                <h4>Gigi Tiruan Full</h4>
                <p className="card-dokter">drg. Dian W.</p>
                <div className="card-meta">
                  <span className="meta-tag tag-natural">Natural</span>
                </div>
              </div>

              <div className="card-produksi">
                <span className="card-id">PSN-007</span>
                <h4>Veneer Porselen</h4>
                <p className="card-dokter">drg. Lina M.</p>
              </div>
            </div>
          </div>

          {/* KOLOM 2: DIKERJAKAN */}
          <div className="produksi-column">
            <div className="column-header">
              <h3>Dikerjakan</h3>
              <span className="count-badge badge-progress">2</span>
            </div>
            
            <div className="column-body">
              <div className="card-produksi">
                <span className="card-id">PSN-001</span>
                <h4>Crown Zirconia</h4>
                <p className="card-dokter">Ahmad R. (Teknisi)</p>
                {/* Indikator Progres Minimalis */}
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: "65%" }}></div>
                  </div>
                  <span className="progress-text">65%</span>
                </div>
              </div>

              <div className="card-produksi">
                <span className="card-id">PSN-005</span>
                <h4>Bridge Porselen</h4>
                <p className="card-dokter">Rina S. (Teknisi)</p>
                <div className="progress-container">
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill" style={{ width: "88%" }}></div>
                  </div>
                  <span className="progress-text">88%</span>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM 3: REVISI */}
          <div className="produksi-column">
            <div className="column-header">
              <h3>Revisi</h3>
              <span className="count-badge badge-revisi-count">1</span>
            </div>
            
            <div className="column-body">
              <div className="card-produksi border-alert">
                <span className="card-id id-alert">PSN-004</span>
                <h4>Bridge Porselen</h4>
                <p className="card-dokter">drg. Hendra S.</p>
                <div className="card-meta">
                  <span className="meta-tag tag-alert">Warna tidak sesuai</span>
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM 4: SELESAI */}
          <div className="produksi-column">
            <div className="column-header">
              <h3>Selesai</h3>
              <span className="count-badge badge-success">2</span>
            </div>
            
            <div className="column-body">
              <div className="card-produksi bg-completed">
                <span className="card-id text-muted">PSN-002</span>
                <h4 className="text-muted">Veneer Porselen</h4>
                <p className="card-dokter">drg. Anita R.</p>
                <div className="card-meta">
                  <span className="meta-tag tag-success"><i className="fa-solid fa-circle-check"></i> Terkirim</span>
                </div>
              </div>

              <div className="card-produksi bg-completed">
                <span className="card-id text-muted">PSN-008</span>
                <h4 className="text-muted">Crown Zirconia</h4>
                <p className="card-dokter">drg. Tono P.</p>
                <div className="card-meta">
                  <span className="meta-tag tag-success"><i className="fa-solid fa-circle-check"></i> Terkirim</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Produksi;