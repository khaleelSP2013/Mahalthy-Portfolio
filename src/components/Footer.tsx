import { contact } from '../data/resume'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2 className="footer-title">Let's build something reliable.</h2>
            <p className="footer-sub">
              Open to Technical Lead / Architect conversations — enterprise platforms, event-driven
              systems, and applied Agentic AI.
            </p>
          </div>

          <div className="footer-contact">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
            <span>{contact.location}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {contact.name}</span>
          <span>Built with React + TypeScript</span>
        </div>
      </div>
    </footer>
  )
}
