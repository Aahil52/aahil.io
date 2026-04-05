import enclosureBottom from "@/assets/river-sense/enclosure-bottom.webp";
import enclosureClosed from "@/assets/river-sense/enclosure-closed.webp";
import interfaceLayout from "@/assets/river-sense/interface-layout.webp";
import waterLevelFixture from "@/assets/river-sense/water-level-fixture-installed.webp";

import assembly from "@/assets/accelerometer/assembly.webp";
import enclosure from "@/assets/accelerometer/enclosure.webp";
import stiffnessCharacterization from "@/assets/accelerometer/stiffness-characterization.webp";
import stiffnessCharacterizationSetup from "@/assets/accelerometer/stiffness-characterization-setup.webp";
import demodCharacterization from "@/assets/accelerometer/demod-characterization.webp";
import characterization from "@/assets/accelerometer/characterization.webp";

export const projects = [
  {
    slug: "accelerometer",
    title: "Macro Electromechanical Accelerometer",
    subtitle: "First-principles differential capacitive accelerometer built at 1000x MEMS scale from 3D-printed PLA and copper-foil tape. Linear with 0.41 V/g sensitivity and R² = 0.99.",
    content: (
      <>
        <p className="text-zinc-300 leading-relaxed">
          I wanted to understand how MEMS accelerometers actually work at a fundamental level. So I built one at macro scale, roughly
          1000x larger than a typical MEMS device, using 3D-printed PLA and copper-foil tape in an undergraduate lab
          with no specialized equipment. The macro-scale geometry makes every stage of the transduction chain directly
          observable and characterizable.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center items-center">
          <div>
            <img src={assembly} alt="Accelerometer assembly" className="rounded-md h-56 w-auto" />
            <p className="text-xs text-zinc-400 mt-1 text-center">Accelerometer assembly</p>
          </div>
          <div>
            <img src={enclosure} alt="Accelerometer in enclosure" className="rounded-md h-56 w-auto" />
            <p className="text-xs text-zinc-400 mt-1 text-center">Installed in custom enclosure</p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed mt-4">
          The sensor uses a gap-varying differential capacitive topology with 14 interlocking finger pairs. When
          the proof mass displaces under acceleration, one set of capacitor gaps shrinks while the other expands,
          encoding displacement as a differential capacitance. This differential structure rejects parasitic capacitance
          and is the reason the device works at all: the absolute capacitances are dominated by parasitics at
          this scale, but the differential signal preserves only the displacement-dependent imbalance. An AC bridge excited
          at 200 kHz converts the sub-picofarad capacitance changes into a measurable voltage.
        </p>

        <p className="text-zinc-300 leading-relaxed mt-4">
          The design went through two mechanical revisions. The first revealed a 4x stiffness discrepancy that I
          initially attributed to PLA anisotropy, but eventually traced to a fundamental error in my flexure topology
          model: the four beams were acting in parallel, not in the series-parallel configuration I had assumed.
          Revision 1 corrected the parameters using empirical stiffness data and achieved 0.53 mm of displacement
          under 1 g, with a 204.6 g proof mass augmented by lead sinkers fit into pockets in the 3D print.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center items-center">
          <div>
            <img src={stiffnessCharacterization} alt="Stiffness characterization" className="rounded-md h-56 w-auto" />
            <p className="text-xs text-zinc-400 mt-1 text-center">Stiffness characterization (Rev 1)</p>
          </div>
          <div>
            <img src={stiffnessCharacterizationSetup} alt="Stiffness characterization setup" className="rounded-md h-56 w-auto" />
            <p className="text-xs text-zinc-400 mt-1 text-center">Stiffness characterization setup</p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed mt-4">
          The most unexpected result was the demodulation. Capacitive accelerometers normally require a phase-sensitive
          demodulator, a multiplying circuit that uses a reference signal to extract the sign of the displacement.
          Instead, I found that driving the INA121 instrumentation amplifier beyond its gain-bandwidth product at a
          gain of 26.9 introduced a subtle nonlinear distortion. Even-order terms in the Taylor expansion of that
          distortion produced a DC component whose sign tracked the phase of the bridge imbalance. After an aggressive
          15.9 Hz low-pass filter, the output was a signed DC voltage proportional to acceleration: accidental
          synchronous demodulation. I validated this by running a control experiment at lower gain where 200 kHz fell
          within the amplifier's bandwidth, confirming that the demodulation vanished.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center items-center">
          <div>
            <img src={demodCharacterization} alt="Demodulator characterization" className="rounded-md h-56 w-auto" />
            <p className="text-xs text-zinc-400 mt-1 text-center">Demodulator characterization (R² = 0.996)</p>
          </div>
          <div>
            <img src={characterization} alt="Final accelerometer characterization" className="rounded-md h-56 w-auto" />
            <p className="text-xs text-zinc-400 mt-1 text-center">Final calibration: 0.41 V/g, R² = 0.99</p>
          </div>
        </div>

        <p className="text-zinc-300 leading-relaxed mt-4">
          The final accelerometer achieved 0.41 V/g sensitivity with R² = 0.9948 linearity across ±4 g, exceeding
          the theoretical prediction by a factor of 1.85, which validates the model form while indicating unmodeled
          contributions. The signal chain was conditioned through a gain/offset stage for a 0–3.3 V ESP32 ADC input.
          Despite crude fabrication, drifting wiring resistances (0–500 Ω between plates), and an accidental demodulation
          mechanism, the device produced a clean linear transfer function. The project took 200+ hours over Nov–Dec 2025.
        </p>

        <a
          href={`${import.meta.env.BASE_URL}accelerometer-report.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:text-pink-300 hover:underline block mt-4"
        >
          Read the full technical report →
        </a>
      </>
    )
  },
  {
  slug: "river-sense",
  title: "RIVER-SENSE",
  subtitle: "Modular water quality sensing platform. Custom mixed-signal PCB, engineered flow chamber, and MOSFET-isolated probe multiplexing. Deployed at the Athens Water Treatment Plant for under $150/unit.",
  content: (
    <>
      <p className="text-zinc-300 leading-relaxed">
        RIVER-SENSE started from a simple problem: existing water quality monitors cost thousands of dollars,
        putting continuous field monitoring out of reach for most research groups. I wanted to build something
        that could measure pH, TDS, turbidity, and temperature in a single flow-through system for under $150.
      </p>
      <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center items-center">
        <div>
          <img src={enclosureClosed} alt="Enclosure closed" className="rounded-md h-56 w-auto" />
          <p className="text-xs text-zinc-400 mt-1 text-center">Assembled enclosure</p>
        </div>
        <div>
          <img src={enclosureBottom} alt="Enclosure bottom" className="rounded-md h-56 w-auto" />
          <p className="text-xs text-zinc-400 mt-1 text-center">Enclosure interior</p>
        </div>
      </div>

      <p className="text-zinc-300 leading-relaxed mt-4">
        The hardest challenge was sensor crosstalk. The TDS probe introduced an unpredictable DC offset into the pH readings
        that made both measurements unreliable when sampled simultaneously. I solved this with dual MOSFET
        isolation, using a P-channel high-side and N-channel low-side switch to power-cycle the TDS probe between
        readings, shifting pH measurements back toward control by over 300 mV.
      </p>

      <div className="flex flex-col md:flex-row gap-3 mt-4 justify-center items-center">
        <div>
          <img src={interfaceLayout} alt="Interface PCB layout" className="rounded-md h-56 w-auto" />
          <p className="text-xs text-zinc-400 mt-1 text-center">Interface PCB layout</p>
        </div>
        <div>
          <img src={waterLevelFixture} alt="Water level fixture installed" className="rounded-md h-56 w-auto" />
          <p className="text-xs text-zinc-400 mt-1 text-center">Flow fixture installed</p>
        </div>
      </div>

      <p className="text-zinc-300 leading-relaxed mt-4">
        The system runs on a Raspberry Pi with a custom interface PCB built around the ADS1115 16-bit ADC,
        with separated analog and digital domains and a continuous ground plane for noise performance. The
        enclosure uses embedded neodymium magnets for tool-free serviceability, and flow is regulated through a
        custom standpipe fixture that achieves weir-like discharge characteristics. The whole platform was
        deployed at the Athens Water Treatment Plant, funded by UGA Geology and CURO, and is targeting
        publication in <em>Water Research</em>.
      </p>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="text-sm text-white hover:text-pink-300 hover:underline block mt-4"
      >
        View live dashboard →
      </a>
    </>
  )
},
  {
    slug: "cordic",
    title: "CORDIC AXI Peripheral",
    subtitle: "Iterative shift-and-add trigonometry in RTL. A CORDIC peripheral with AXI4-Lite bus integration for SiliconJackets Tapeout 3.",
    expandable: false,
    content: <></>,
  },
  {
    slug: "repiq",
    title: "RepIQ",
    expandable: false,
    subtitle: "Wearable AI system that fuses EMG, ECG, and IMU data to predict proximity-to-failure during strength training with a custom BLE data pipeline and an abstract submitted to IEEE BSN.",
    content: (
      <>
        <p className="text-zinc-300 leading-relaxed">
          An in-progress wearable AI system designed to estimate reps until muscular failure using EMG and IMU data.
          Currently building the BLE data pipeline and beginning to collect labeled training data with custom hardware.
        </p>
        <a
          href="https://repiq.fit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:text-pink-300 hover:underline block mt-4"
        >
          Visit repiq.fit →
        </a>
      </>
    )
  }
];
