import { keyProjects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Enterprise delivery</div>
            <h2 className="section-title">Key Projects</h2>
          </div>
          <span className="section-index">02 / 05</span>
        </div>

        <div className="project-grid">
          {keyProjects.map((project) => (
            <article className="card" key={project.id}>
              <h3 className="card-title">{project.name}</h3>
              <div className="card-client">Client — {project.client}</div>
              <div className="card-env">{project.environment}</div>
              <p className="card-desc">{project.description}</p>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
