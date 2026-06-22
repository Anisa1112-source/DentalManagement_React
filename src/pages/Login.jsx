import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css"; // Pastikan path ke file CSS sudah benar

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const cekLogin = () => {
    // Data Dummy Akun
    const akunAdmin = { email: "admin@gmail.com", password: "admin123" };
    const akunDokter = { email: "dokerheri@gmail.com", password: "dokter123" };

    if (email === akunAdmin.email && password === akunAdmin.password) {
      navigate("/dashboard");
    } else if (email === akunDokter.email && password === akunDokter.password) {
      navigate("/dokter/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo-section">
          <img src="/assets/Logo.png" alt="Logo Dental" />
          <h1>DENTAL</h1>
          <h2>MANAGEMENT SYSTEM</h2>
          <p>Silakan Masuk Untuk Melanjutkan<br />Ke Sistem</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <div className="avatar">
            <i className="fa-regular fa-circle-user"></i>
          </div>

          <h3>Masuk Ke Akun Anda</h3>

          {error && (
            <p style={{ color: "red", fontSize: "12px", textAlign: "center", marginBottom: "8px" }}>
              Email atau password salah!
            </p>
          )}

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="admin@gmail.com" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="option">
            <div><input type="checkbox" /> Ingat saya</div>
            <a href="#">Lupa Password?</a>
          </div>

          <button className="btn" onClick={cekLogin}>Masuk</button>

          <div className="register-link">
            Belum punya akun ? <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;