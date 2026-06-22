import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const cekLogin = () => {
    // DATA DUMMY AKUN SESUAI DENGAN USER FIGMA
    const akunAdmin = {
      email: "admin@gmail.com",
      password: "admin123",
    };

    const akunDokter = {
      email: "dokerheri@gmail.com",
      password: "dokter123", // Password bebas disesuaikan
    };

    // LOGIKA PENGECEKAN ROLE BERDASARKAN EMAIL
    if (email === akunAdmin.email && password === akunAdmin.password) {
      setError(false);
      navigate("/dashboard"); // Masuk ke Dashboard Admin Lab
    } else if (email === akunDokter.email && password === akunDokter.password) {
      setError(false);
      navigate("/dokter/dashboard"); // Masuk ke Dashboard Dokter Gigi
    } else {
      setError(true); // Jika email atau password tidak cocok, munculkan error
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      cekLogin();
    }
  };

  return (
    <div className="login-container">
      {/* PANEL SEBELAH KIRI (LOGO DAN BRANDING) */}
      <div className="left-panel">
        <div className="logo-section">
          <img
            src="/assets/Logo.png"
            alt="Logo Dental"
          />
          <h1>DENTAL</h1>
          <h2>MANAGEMENT SYSTEM</h2>
          <p>
            Silakan Masuk Untuk Melanjutkan
            <br />
            Ke Sistem
          </p>
        </div>
      </div>

      {/* PANEL SEBELAH KANAN (FORM INPUT LOGIN) */}
      <div className="right-panel">
        <div className="login-box">
          <div className="avatar">
            <i className="fa-regular fa-circle-user"></i>
          </div>

          <h3>Masuk Ke Akun Anda</h3>

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "center",
                marginBottom: "8px",
                fontWeight: "bold"
              }}
            >
              Email atau password salah!
            </p>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <div className="option">
            <div>
              <input type="checkbox" /> Ingat saya
            </div>
            <a href="#">Lupa Password?</a>
          </div>

          <button
            className="btn"
            onClick={cekLogin}
          >
            Masuk
          </button>

          <div className="register-link">
            Belum punya akun ?{" "}
            <Link to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;