import { pocProjects } from '../data/resume'

export default function PocProjects() {
  return (
    <section id="poc" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Self-directed · deployed to production</div>
            <h2 className="section-title">Gen AI &amp; Agentic AI — POC Projects</h2>
          </div>
          <span className="section-index">04 / 05</span>
        </div>

        <div className="poc-grid">
          {pocProjects.map((poc) => (
            <article className="poc-card" key={poc.id}>
              <div className="poc-status">
                <span className="pulse" aria-hidden="true" />
                Live on Streamlit Cloud
              </div>
              <h3 className="poc-title">{poc.name}</h3>
              <p className="poc-desc">{poc.description}</p>
              <ul>
                {poc.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a className="poc-link" href={poc.url} target="_blank" rel="noreferrer noopener">
                Open live demo ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
