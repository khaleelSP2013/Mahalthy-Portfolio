import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Stack</div>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <span className="section-index">03 / 05</span>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.label}>
              <div className="skill-group-label">{group.label}</div>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
