export default function Skills() {
  return (
    <section id="skills" className="grid cols-3">
      <div className="card">
        <h2>Skills</h2>
        <ul>
          <li>FPGA: Verilog/SystemVerilog, AXI, Xilinx Vivado</li>
          <li>Embedded: C (bare‑metal), lwIP, DMA</li>
          <li>Power: VSC control, Vienna rectifier, DAB</li>
          <li>Timing/Comms: PTP/IEEE‑1588, Ethernet</li>
        </ul>
      </div>
      <div className="card">
        <h2>Tooling</h2>
        <ul>
          <li>Zynq‑7020 (ZedBoard), OPAL‑RT</li>
          <li>TI F28379D, MATLAB/Simulink</li>
          <li>Git/GitHub, Wireshark</li>
        </ul>
      </div>
      <div className="card">
        <h2>Interests</h2>
        <ul>
          <li>Digital substations · IEC 61850</li>
          <li>Model Predictive Control</li>
          <li>Data‑driven control, fixed‑point math</li>
        </ul>
      </div>
    </section>
  )
}
