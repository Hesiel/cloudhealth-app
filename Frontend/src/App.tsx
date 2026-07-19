import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import VideoCall from './VideoCall';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [role, setRole] = useState('paciente');
  const [nombre, setNombre] = useState('');
  const [ci, setCi] = useState('');

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="app-header">
        <a href="#" className="logo">
          <div className="logo-icon">CH</div>
          Cloud<span>Health</span>
          <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--gray-400)', marginLeft: '4px' }}>La Paz</span>
        </a>
        <div className="user-info">
          <span>Hospital Municipal La Merced</span>
          <div className="user-avatar">👤</div>
        </div>
      </header>

      {/* ===== MAIN ===== */}
      <main className="app-main">
        {/* ===== HERO ===== */}
        <section className="hero-section">
          <span className="hero-badge">🏥 Red Municipal de Salud</span>
          <h1>Teleconsulta</h1>
          <p>Atención médica digital para los ciudadanos de La Paz</p>
        </section>

        {/* ===== PRE-CONSULTA ===== */}
        <div className="pre-consult-card">
          <h2>Antes de la consulta</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Soy:</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="paciente">Paciente</option>
                <option value="medico">Médico</option>
                <option value="practicante">Practicante</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nombre completo</label>
              <input
                type="text"
                placeholder="Escribe tu nombre..."
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>CI</label>
              <input
                type="text"
                placeholder="Número de carnet"
                value={ci}
                onChange={(e) => setCi(e.target.value)}
              />
            </div>
            <div className="form-group" style={{ justifyContent: 'flex-end' }}>
              <button className="btn-primary">Continuar</button>
            </div>
          </div>
        </div>

        {/* ===== VIDEOCALL ===== */}
        <VideoCall />

        {/* ===== DOCUMENTACIÓN ===== */}
        <section className="docs-section">
          <div className="card">
            <h2>📘 Documentación</h2>
            <p>Explora los recursos y aprende más</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank">
                  <img src={viteLogo} alt="" />
                  Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank">
                  <img src={reactLogo} alt="" />
                  React
                </a>
              </li>
            </ul>
          </div>

          <div className="card">
            <h2>🔗 Conéctate</h2>
            <p>Únete a la comunidad</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank">
                  <svg className="button-icon" role="presentation" aria-hidden="true" width="18" height="18">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank">
                  <svg className="button-icon" role="presentation" aria-hidden="true" width="18" height="18">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank">
                  <svg className="button-icon" role="presentation" aria-hidden="true" width="18" height="18">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/vite.dev" target="_blank">
                  <svg className="button-icon" role="presentation" aria-hidden="true" width="18" height="18">
                    <use href="/icons.svg#bluesky-icon"></use>
                  </svg>
                  Bluesky
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;