import { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import MusicCard from './components/MusicCard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { SONG_FILE } from './data'

function App() {
  const { pathname } = useLocation()
  const [recruiter, setRecruiter] = useState(false)

  /* ---------- Audio ditaruh di sini supaya tidak berhenti saat pindah halaman ---------- */
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    const a = audioRef.current
    if (a.paused) {
      a.play()
      setPlaying(true)
    } else {
      a.pause()
      setPlaying(false)
    }
  }
  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration
  }
  const player = { playing, current, duration, togglePlay, seek }

  // Kembali ke atas setiap pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className={recruiter ? 'recruiter' : ''}>
      <audio
        ref={audioRef}
        src={SONG_FILE}
        loop
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setCurrent(e.target.currentTime)}
      />

      {/* Kartu musik: tampil di semua halaman */}
      <MusicCard player={player} />

      {/* Menu kecil di kiri atas, tampil di semua halaman */}
      <nav className="nav">
        <ul>
          <li><NavLink to="/projects">Work</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <button className="toggle" onClick={() => setRecruiter(!recruiter)}>
        Recruiter Mode: {recruiter ? 'On' : 'Off'}
      </button>

      <div key={pathname} className="route">
        <Routes>
          <Route path="/" element={<Home recruiter={recruiter} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home recruiter={recruiter} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App