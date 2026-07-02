import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Career event log</div>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <span className="section-index">01 / 05</span>
        </div>

        <div className="bus">
          {experience.map((job) => (
            <div className={`bus-event ${job.current ? 'is-current' : ''}`} key={job.company}>
              <span className="bus-node" aria-hidden="true" />
              <div className="bus-offset">
                {job.current ? <span className="live">● LIVE</span> : 'CLOSED'} · {job.period}
              </div>
              <h3 className="bus-topic">{job.role}</h3>
              <div className="bus-company">{job.company}</div>
              <ul className="bus-payload">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
