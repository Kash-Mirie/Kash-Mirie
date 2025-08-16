export default function Projects() {
  return (
    <section id="projects" className="grid cols-2">
      <div className="card">
        <h3>IEC‑61850 Merging Unit (FPGA + PS)</h3>
        <p className="muted">Zynq‑7020 · 16‑bit ADC · 4 kS/s · PTP/IEEE‑1588</p>
        <ul>
          <li>Voltage/current sensing card design; Ethernet frame format.</li>
          <li>FPGA timestamping; PS manages DMA, lwIP, PPS alignment.</li>
          <li>Verified via Wireshark and Excel plots.</li>
        </ul>
        <a className="btn" href="#">Case study (soon)</a>
      </div>

      <div className="card">
        <h3>UDP/PTP Stack on ZedBoard</h3>
        <p className="muted">Bare‑metal Xilinx SDK · AXI DMA · lwIP</p>
        <ul>
          <li>Custom S2MM interrupt flow for deterministic streaming.</li>
          <li>Integrated IEEE‑1588 demo adapted for MU use‑case.</li>
        </ul>
        <a className="btn" href="#">Notes (soon)</a>
      </div>

      <div className="card">
        <h3>MPC for Buck Converter</h3>
        <p className="muted">TI F28379D · Real‑time control</p>
        <ul>
          <li>State‑space modeling, constraint‑aware control.</li>
          <li>Ripple vs response trade‑offs bench‑tested.</li>
        </ul>
        <a className="btn" href="#">Repo (soon)</a>
      </div>

      <div className="card">
        <h3>Sensorless Induction Motor Control (WIP)</h3>
        <p className="muted">SRF‑PLL · dq frame · PWM @ 5 kHz</p>
        <ul>
          <li>Autotransformer grid emulation; ADC sensing + filters.</li>
          <li>PI control in dq frame; ePWM4/5/6.</li>
        </ul>
        <a className="btn" href="#">Write‑up (soon)</a>
      </div>
    </section>
  )
}
