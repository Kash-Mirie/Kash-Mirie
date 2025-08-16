export default function Hero() {
  return (
    <section className="hero">
      <div>
        <span className="badge muted">Power Electronics · Embedded Systems · FPGA</span>
        <h1 className="title">Engineer focused on digital substations, control, and real‑time systems.</h1>
        <p className="subtitle">I design and build hardware/firmware for grid‑scale systems: IEC 61850 Merging Units, PTP/IEEE‑1588, Zynq‑7020 (ZedBoard), and TI F28379D motor/control applications.</p>
        <div className="btn-row">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn" href="#contact">Hire Me</a>
        </div>
      </div>
      <div className="hero-avatar">
        {/* Use your GitHub avatar or put an image at public/avatar.png */}
        <img src="https://github.com/KasH-Mirie.png?size=280" alt="Haseeb avatar" />
      </div>
    </section>
  )
}
