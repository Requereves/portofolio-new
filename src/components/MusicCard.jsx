import { SONG, ARTIST, SONG_COVER } from '../data'

const fmt = (s) => {
  const m = Math.floor(s / 60)
  return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`
}

// Kartu musik gelap di kanan atas (audio-nya ada di App.jsx)
export default function MusicCard({ player }) {
  const { playing, current, duration, togglePlay, seek } = player

  return (
    <div className="music">
      <div className="music-row">
        <div
          className="music-art"
          style={SONG_COVER ? { backgroundImage: `url(${SONG_COVER})` } : undefined}
        />
        <div className="music-info">
          <small>{playing ? 'Now playing' : 'Press play'}</small>
          <b>{SONG}</b>
          <span>{ARTIST}</span>
        </div>
        <button className="music-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '❚❚' : '▶'}
        </button>
      </div>
      <div className="music-bar" onClick={seek}>
        <i style={{ width: duration ? `${(current / duration) * 100}%` : '0%' }} />
      </div>
      <div className="music-time">
        <span>{fmt(current)}</span>
        <span>{fmt(duration)}</span>
      </div>
    </div>
  )
}