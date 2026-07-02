import { contact, summary } from "../data/resume";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="eyebrow">13+ years · Technical Lead </div>
        <h1 className="hero-title">
          {contact.name}
          <span className="role">
            {contact.title} — Microservices · Event-Driven Systems · Agentic AI
          </span>
        </h1>
        <p className="hero-summary">{summary}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#poc">
            View AI POC Projects →
          </a>
          <a className="btn btn-ghost" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>

        <div className="hero-meta">
          <span>
            <strong>Location</strong> — {contact.location}
          </span>
          <span>
            <strong>Phone</strong> — {contact.phone}
          </span>
          <span>
            <strong>Languages</strong> — {contact.languages.join(", ")}
          </span>
        </div>
      </div>
    </section>
  );
}
