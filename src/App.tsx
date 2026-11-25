
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="brand">
          <span className="brand-icon">⚛</span>
          Physics Discovery Lab
        </div>
        <span className="version">v0.1</span>
      </header>

      <section className="hero">
        <p className="eyebrow">INTERACTIVE PHYSICS</p>
        <h1>Explore Physics Through Simulation</h1>
        <p className="subtitle">
          ห้องปฏิบัติการฟิสิกส์เสมือนจริง
          สำหรับนักเรียนมัธยมศึกษาตอนปลาย
        </p>
      </section>

      <section className="content">
        <h2>Physics Simulations</h2>

        <div className="simulation-grid">
          <article className="simulation-card">
            <div className="simulation-icon">⚖️</div>
            <h3>Torque & Equilibrium</h3>
            <p>โมเมนต์ของแรงและสมดุลต่อการหมุน</p>
            <span className="status">Coming soon</span>
          </article>

          <article className="simulation-card">
            <div className="simulation-icon">〰️</div>
            <h3>Pendulum Lab</h3>
            <p>การแกว่งของลูกตุ้มอย่างง่าย</p>
            <span className="status">Coming soon</span>
          </article>
        </div>
      </section>

      <footer className="footer">
        Physics Discovery Lab · Version 0.1
      </footer>
    </main>
  )
}

export default App
