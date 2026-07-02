import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Foundation</div>
            <h2 className="section-title">Education</h2>
          </div>
          <span className="section-index">05 / 05</span>
        </div>

        <div className="edu-list">
          {education.map((entry) => (
            <div className="edu-row" key={entry.degree}>
              <span className="edu-degree">{entry.degree}</span>
              <span className="edu-inst">{entry.institution}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
