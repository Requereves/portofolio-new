import { ABOUT, SKILLS, NAME, SUB } from '../data'

export default function About() {
  return (
    <main className="subpage">
      <h1 className="page-title">About Me<span>_</span></h1>
      <div className="about-head">
        <div className="avatar" style={{ backgroundImage: 'url(/foto.jpg)' }} />
        <div>
          <h2>{NAME}</h2>
          <p className="sub">{SUB}</p>
        </div>
      </div>
      {ABOUT.map((t, i) => (
        <p key={i} className="about-text">{t}</p>
      ))}
      <div className="skills">
        {SKILLS.map((s) => (
          <span key={s} className="skill">{s}</span>
        ))}
      </div>
    </main>
  )
}