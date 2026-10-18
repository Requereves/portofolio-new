import { EMAIL, LINKEDIN, GITHUB } from '../data'

export default function Contact() {
  return (
    <main className="subpage">
      <h1 className="page-title">Contact<span>_</span></h1>
      <p className="about-text">Tertarik bekerja sama atau ada pertanyaan? Hubungi saya lewat:</p>
      <div className="cta">
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        <a href="/cv.pdf" download>Download CV</a>
      </div>
    </main>
  )
}