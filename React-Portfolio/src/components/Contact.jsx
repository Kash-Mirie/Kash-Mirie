export default function Contact() {
  return (
    <section id="contact" className="grid cols-2">
      <div className="card">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:haseeb@example.com">haseeb@example.com</a></p>
        <p>GitHub: <a href="https://github.com/KasH-Mirie" target="_blank" rel="noreferrer">github.com/KasH-Mirie</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer">linkedin.com/in/your-handle</a></p>
      </div>
      <div className="card">
        <h2>Resume</h2>
        <p>Keep a one‑page PDF here for quick access.</p>
        <a className="btn" href="#">Download CV (soon)</a>
      </div>
    </section>
  )
}
