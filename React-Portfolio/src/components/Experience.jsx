export default function Experience() {
  return (
    <section id="experience" className="grid cols-2">
      <div className="card">
        <h2>Experience</h2>
        <p><strong>Merging Unit – Team Lead</strong> · 2023–Present</p>
        <ul>
          <li>Led PCB design for interface, voltage & current sensing cards.</li>
          <li>Firmware for ADC → DMA → Ethernet; PPS sync for 4 kS/s.</li>
        </ul>
        <p><strong>Grid Internship</strong> · 2 months</p>
        <ul>
          <li>Hands‑on with substation systems and measurements.</li>
        </ul>
      </div>
      <div className="card">
        <h2>Education</h2>
        <ul>
          <li>Final‑year project: Concrete mix design – IS vs ECI.</li>
          <li>Control Systems: Frequency response analysis project.</li>
        </ul>
      </div>
    </section>
  )
}
