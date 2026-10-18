import { useEffect, useRef } from 'react'
import { NAME, ROLE, EMAIL, LINKEDIN, GITHUB, INSTAGRAM, ABOUT, certs } from '../data'

/* ---------- Ikon sosmed (SVG) ---------- */
const icons = {
  github: <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.200 1.8 1.200 1 1.800 2.700 1.300 3.400 1 .1-.8.4-1.300.7-1.600-2.600-.3-5.300-1.300-5.300-5.700 0-1.300.5-2.300 1.200-3.100-.1-.3-.5-1.500.1-3.100 0 0 1-.3 3.200 1.200a11 11 0 0 1 5.800 0c2.200-1.500 3.200-1.200 3.200-1.200.6 1.600.2 2.800.1 3.100.8.8 1.200 1.800 1.200 3.100 0 4.400-2.700 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 12 .5z" />,
  linkedin: <path d="M20.4 20.4h-3.600v-5.600c0-1.300 0-3-1.800-3s-2.100 1.400-2.100 2.900v5.700H9.300V9h3.400v1.600c.5-.9 1.600-1.800 3.400-1.800 3.600 0 4.300 2.400 4.300 5.500v6.100zM5.300 7.400a2.100 2.100 0 1 1 0-4.200 2.100 2.100 0 0 1 0 4.200zM7.100 20.400H3.600V9h3.500v11.400z" />,
  instagram: <path d="M12 2.200c3.200 0 3.600 0 4.800.1 3.300.1 4.800 1.700 4.900 4.900.1 1.300.1 1.600.1 4.800s0 3.600-.1 4.800c-.1 3.200-1.700 4.800-4.900 4.900-1.300.1-1.600.1-4.800.1s-3.600 0-4.800-.1c-3.300-.1-4.800-1.700-4.900-4.900-.1-1.300-.1-1.600-.1-4.800s0-3.600.1-4.800C2.400 4 4 2.400 7.200 2.300 8.400 2.200 8.800 2.200 12 2.200zM12 0C8.700 0 8.300 0 7.100.1 2.700.3.300 2.700.1 7.100 0 8.300 0 8.700 0 12s0 3.700.1 4.900c.2 4.400 2.600 6.800 7 7C8.300 24 8.700 24 12 24s3.700 0 4.900-.1c4.400-.2 6.800-2.600 7-7 .1-1.200.1-1.600.1-4.900s0-3.700-.1-4.900c-.2-4.400-2.600-6.800-7-7C15.700 0 15.300 0 12 0zm0 5.800a6.200 6.200 0 1 0 0 12.400 6.200 6.200 0 0 0 0-12.400zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.400-11.800a1.400 1.400 0 1 0 0 2.900 1.400 1.400 0 0 0 0-2.900z" />,
  mail: <path d="M2 5h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.300V17h18V7.300l-9 6.200-9-6.200zM4.500 7 12 12.200 19.500 7h-15z" />,
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function Home({ recruiter }) {
  const certsRef = useRef(null)

  // ⛔ Kartu sertifikat bergeser halus mengikuti mouse
  useEffect(() => {
    const el = certsRef.current
    const onMove = (e) => {
      el.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5) * 2)
      el.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <main className="home">
      {/* Sosmed vertikal di tepi kiri */}
      <div className="rail">
        <a href={LINKEDIN} target="_blank" rel="noreferrer">LI</a>
        <a href={GITHUB} target="_blank" rel="noreferrer">GH</a>
        <a href={`mailto:${EMAIL}`}>EM</a>
        <span className="rail-line" />
      </div>

      {/* ===================== KARTU PROFIL (tanpa kotak hitam) ===================== */}
      <section className="profile-card">
        <div className="pc-head">
          {/* ✏️ foto profil: public/foto.jpg */}
          <div className="pc-avatar" style={{ backgroundImage: 'url(/profile.jpeg)' }} />
          <div>
            <h1 style={{ color: '#000'}}>{NAME}</h1>
            <p>{ROLE}</p>
          </div>
        </div>

        {/* <h2>Halo! Aku Nicholas. Seorang Mahasiswa Sains Data di TELKOM UNIVERSITY SURABAYA yang tertarik pada dunia IT khususnya dibagian data dan website</h2>
        
        <p className="pc-about" style={{ color: '#000' }}>{ABOUT[0]}</p> */}
        {/* <h2 style={{ color: '#000' }}>About</h2> */}
        <p style={{ color: '#000' }}>{ABOUT[0]}</p>

        {/* Ikon sosmed saja, tanpa kotak */}
        <div className="pc-icons">
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="mail" /></a>
        </div>

        {recruiter && (
          <div className="cta">
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href="/cv.pdf" download>Download CV</a>
          </div>
        )}
      </section>

      <span className="copy">©/{new Date().getFullYear()}</span>

      {/* ===================== SERTIFIKAT MELAYANG (tanpa latar) ===================== */}
      <section className="certs" ref={certsRef}>
        {certs.map((c, i) => (
          <div key={c.pos} className={`card ${c.pos}`} style={{ '--d': 10 + i * 5 }}>
            {c.img ? (
              <div className="card-in has-img" style={{ animationDelay: `${i * -1.2}s` }}>
                <img src={c.img} alt={c.title} />
              </div>
            ) : (
              <div className={`card-in ${c.type}`} style={{ animationDelay: `${i * -1.2}s` }}>
                <small>{c.label}</small>
                <h4>{c.title}</h4>
                <p>{NAME}</p>
                <footer>{c.issuer}</footer>
                {c.type === 'blue' && <div className="seal" />}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}