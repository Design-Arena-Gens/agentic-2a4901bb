import { FlyingWingIllustration } from "./components/FlyingWingIllustration";

const highlights = [
  {
    label: "Span",
    value: "58 m adaptive composite",
  },
  {
    label: "Solar Array",
    value: "28 m² triple-junction",
  },
  {
    label: "Cruise Altitude",
    value: "22 km stratospheric band",
  },
  {
    label: "Endurance",
    value: "96 h autonomous",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <h1>Stratospheric Solar Wing</h1>
        <p>
          A featherlight flying wing glider rides the upper atmosphere, harvesting sunlight with
          high-efficiency gallium-arsenide cells that cascade across its seamless wingspan.
          Integrated power routing and adaptive control fins keep the craft balanced while it skims
          luminescent cloud decks.
        </p>
        <div className="canvasWrapper">
          <div className="canvasInner">
            <span className="sun" aria-hidden="true" />
            <span className="cloud one" aria-hidden="true" />
            <span className="cloud two" aria-hidden="true" />
            <span className="cloud three" aria-hidden="true" />
            <div className="sceneLayer">
              <FlyingWingIllustration />
            </div>
          </div>
        </div>
      </section>

      <section className="infoCard">
        <p>
          Solar power dances over the wing&rsquo;s leading edge, feeding ultra-dense batteries and
          thin-film supercapacitors concealed within the spar. The vehicle maintains flight through
          carefully tuned differential thrust fans embedded along the trailing edge, ensuring
          whisper-quiet operation for environmental monitoring, scientific payloads, or continuous
          communication relays.
        </p>
        <div className="infoGrid">
          {highlights.map((item) => (
            <div key={item.label} className="infoItem">
              <span className="infoLabel">{item.label}</span>
              <span className="infoValue">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
