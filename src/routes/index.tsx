import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type PointerEvent } from "react";

import concreteAsset from "@/assets/unavailable-concrete.png.asset.json";
import charcoalAsset from "@/assets/deep-charcoal.png.asset.json";
import graphiteAsset from "@/assets/washed-graphite.png.asset.json";
import sandAsset from "@/assets/coastal-sand.png.asset.json";
import boneAsset from "@/assets/bone-white.png.asset.json";
import navyAsset from "@/assets/midnight-navy.png.asset.json";

const colorways = [
  { id: "01", name: "DEEP CHARCOAL", image: charcoalAsset.url, light: "warm" },
  { id: "02", name: "WASHED GRAPHITE", image: graphiteAsset.url, light: "neutral" },
  { id: "03", name: "COASTAL SAND", image: sandAsset.url, light: "sand" },
  { id: "04", name: "BONE WHITE", image: boneAsset.url, light: "bright" },
  { id: "05", name: "MIDNIGHT NAVY", image: navyAsset.url, light: "cool" },
] as const;

const storyLines = [
  "HEAVYWEIGHT DOUBLE-KNIT",
  "STRUCTURED COLLAR",
  "TAILORED DRAPE",
  "NO EXTERIOR BRANDING",
  "COLORWAY ARCHIVE",
];

const detailStudies = [
  { label: "01 / COLLAR", title: "ELEVATED COLLAR", position: "50% 11%", image: boneAsset.url },
  { label: "02 / SURFACE", title: "FABRIC TEXTURE", position: "50% 48%", image: graphiteAsset.url },
  { label: "03 / STRUCTURE", title: "REINFORCED SHOULDER SEAM", position: "18% 22%", image: sandAsset.url },
  { label: "04 / IDENTITY", title: "INTERNAL WOVEN LABEL", position: "50% 13%", image: charcoalAsset.url },
  { label: "05 / FINISH", title: "HEAVYWEIGHT HEM CONSTRUCTION", position: "50% 88%", image: navyAsset.url },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UNAVAILABLE, LATELY. — Release 001" },
      { name: "description", content: "Five elevated heavyweight tees. Produced in limited quantities." },
      { property: "og:title", content: "UNAVAILABLE, LATELY. — Release 001" },
      { property: "og:description", content: "Five elevated heavyweight tees. Produced in limited quantities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LaunchPage,
});

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function LaunchPage() {
  const pageRef = useRef<HTMLElement>(null);
  const [activeColor, setActiveColor] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    pageRef.current?.style.setProperty("--pointer-x", x.toFixed(3));
    pageRef.current?.style.setProperty("--pointer-y", y.toFixed(3));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  const heroProgress = Math.min(scrollY / Math.max(window.innerHeight * 1.15, 1), 1);

  return (
    <main ref={pageRef} onPointerMove={handlePointerMove} className="launch-page">
      <section className="hero-installation" aria-labelledby="hero-title">
        <div className="concrete-environment" style={{ backgroundImage: `url(${concreteAsset.url})` }} />
        <div className="environment-shade" />
        <header className="site-header">
          <button className="menu-mark" aria-label="Open menu"><span /><span /></button>
          <span className="wordmark">UNAVAILABLE, LATELY.</span>
          <button className="release-link" onClick={() => scrollTo("notify")}>RELEASE 001</button>
        </header>

        <div className="hero-copy">
          <p className="editorial-label">LIMITED STUDY / 001</p>
          <h1 id="hero-title">NOT MADE<br />TO BE AVAILABLE.</h1>
          <p className="hero-support">Five elevated heavyweight tees.<br />Produced in limited quantities.</p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => scrollTo("archive")}>VIEW THE COLLECTION</button>
            <button className="text-action" onClick={() => scrollTo("notify")}>RELEASE NOTIFICATION</button>
          </div>
        </div>

        <div className="shirt-installation" aria-label="Five heavyweight t-shirt colorways">
          {colorways.map((color, index) => {
            const offsets = [-32, -16, 0, 16, 32];
            const depths = [0.84, 0.93, 1.04, 0.93, 0.84];
            const separation = offsets[index] * heroProgress;
            return (
              <img
                key={color.name}
                className={`hero-shirt shirt-${index + 1}`}
                src={color.image}
                alt={`${color.name.toLowerCase()} heavyweight t-shirt`}
                style={{
                  "--separate": `${separation}vw`,
                  "--depth": depths[index],
                  "--delay": `${index * -1.7}s`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
        <div className="scroll-cue"><span>SCROLL TO ENTER</span><i /></div>
      </section>

      <section className="construction-story" aria-labelledby="construction-title">
        <div className="story-index">001—005 / CONSTRUCTION</div>
        <div className="story-heading">
          <p className="editorial-label">A SINGLE STANDARD</p>
          <h2 id="construction-title">FIVE COLORS.<br />ONE CONSTRUCTION.</h2>
        </div>
        <ol className="construction-list">
          {storyLines.map((line, index) => (
            <li key={line} style={{ "--line-index": index } as React.CSSProperties}>
              <span>0{index + 1}</span><strong>{line}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section id="archive" className={`colorway-archive light-${colorways[activeColor].light}`} aria-labelledby="archive-title">
        <div className="archive-environment" style={{ backgroundImage: `url(${concreteAsset.url})` }} />
        <div className="archive-header">
          <p className="editorial-label">COLORWAY ARCHIVE / RELEASE 001</p>
          <h2 id="archive-title">ONE FORM.<br />FIVE VALUES.</h2>
        </div>
        <div className="active-product">
          {colorways.map((color, index) => (
            <img key={color.name} src={color.image} alt={`${color.name.toLowerCase()} t-shirt`} className={index === activeColor ? "is-active" : ""} />
          ))}
          <span className="product-shadow" />
        </div>
        <nav className="colorway-selector" aria-label="Choose a colorway">
          {colorways.map((color, index) => (
            <button key={color.name} onClick={() => setActiveColor(index)} className={index === activeColor ? "is-active" : ""} aria-pressed={index === activeColor}>
              <span>{color.id}</span><strong>{color.name}</strong>
            </button>
          ))}
        </nav>
        <p className="archive-caption">{colorways[activeColor].id} / {colorways[activeColor].name}</p>
      </section>

      <section className="details-section" aria-labelledby="details-title">
        <header className="details-intro">
          <p className="editorial-label">FORM STUDY / 540 GSM</p>
          <h2 id="details-title">BUILT TO<br />HOLD ITS FORM.</h2>
          <p>Dense double-knit construction gives the garment a structured silhouette without sacrificing comfort.</p>
        </header>
        <div className="detail-grid">
          {detailStudies.map((detail, index) => (
            <figure key={detail.title} className={`detail-study detail-${index + 1}`}>
              <div className="detail-image-wrap">
                <img src={detail.image} alt={`${detail.title.toLowerCase()} detail`} style={{ objectPosition: detail.position }} />
              </div>
              <figcaption><span>{detail.label}</span><strong>{detail.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="nothing-section" aria-labelledby="nothing-title">
        <div className="nothing-shirt"><img src={charcoalAsset.url} alt="Unbranded deep charcoal heavyweight t-shirt" /></div>
        <div className="nothing-copy">
          <p className="editorial-label">REDUCTION / 001</p>
          <h2 id="nothing-title">NOTHING<br />EXTERNAL.</h2>
          <ul><li>No chest graphic.</li><li>No sleeve mark.</li><li>No visible logo.</li><li>Only the garment remains.</li></ul>
        </div>
      </section>

      <section id="notify" className="release-section" aria-labelledby="release-title">
        <div className="release-concrete" style={{ backgroundImage: `url(${concreteAsset.url})` }} />
        <div className="release-content">
          <p className="editorial-label">UNAVAILABLE, LATELY. / DROP 001</p>
          <h2 id="release-title">RELEASE 001</h2>
          <div className="countdown" aria-label="Release countdown at zero">
            {[["00", "DAYS"], ["00", "HOURS"], ["00", "MINUTES"], ["00", "SECONDS"]].map(([value, label], index) => (
              <div key={label}><span>{value}</span><small>{label}</small>{index < 3 && <b>:</b>}</div>
            ))}
          </div>
          {submitted ? (
            <div className="form-confirmation" role="status">NOTIFICATION REQUEST RECEIVED.</div>
          ) : (
            <form className="notify-form" onSubmit={handleSubmit}>
              <label htmlFor="email">BE THE FIRST TO KNOW</label>
              <div><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="EMAIL ADDRESS" /><button type="submit">NOTIFY ME</button></div>
            </form>
          )}
          <p className="limited-line">Limited quantities. No planned restock.</p>
        </div>
      </section>

      <footer className="final-frame">
        <div><p>UNAVAILABLE, LATELY.</p><span>ST. PETERSBURG, FLORIDA</span><span>27.7731° N, 82.6400° W</span></div>
        <small>© 2026 / RELEASE 001</small>
      </footer>
    </main>
  );
}
