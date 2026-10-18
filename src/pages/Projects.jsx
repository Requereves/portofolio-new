import { projects } from '../data'

export default function Projects() {
  return (
    <main className="subpage">
      <h1 className="page-title">Projects<span>_</span></h1>
      <div className="projects-grid">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="project" target="_blank" rel="noreferrer">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <small>{p.tech}</small>
          </a>
        ))}
      </div>
    </main>
  )
}