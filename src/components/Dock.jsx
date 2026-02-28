import React from 'react'
import "./dock.scss"

const Dock = ({ windowState, setWindowState }) => {
  const openWindow = (windowName) => {
    setWindowState(prev => ({
      ...prev, [windowName]: !prev[windowName]
    }))
  }

  return (
    <footer className='dock'>
      <div className="icon github" onClick={() => openWindow('github')}><img src="/doc-icons/github.svg" alt="" /></div>
      <div className="icon note" onClick={() => openWindow('note')}><img src="/doc-icons/note.svg" alt="" /></div>
      <div className="icon pdf" onClick={() => openWindow('resume')}><img src="/doc-icons/pdf.svg" alt="" /></div>
      <div className="icon calender" onClick={() => window.open('https://calendar.google.com/', '_blank')}><img src="/doc-icons/calender.svg" alt="" /></div>
      <div className="icon spotify" onClick={() => openWindow('spotify')}><img src="/doc-icons/spotify.svg" alt="" /></div>
      <div className="icon mail" onClick={() => window.open('mailto:muzammil.ahmed.mangrio@gmail.com', '_blank')}><img src="/doc-icons/mail.svg" alt="" /></div>
      <div className="icon link" onClick={() => window.open('https://www.linkedin.com/in/muzammil-ahmed-mangrio-39137a1b1/', '_blank')}><img src="/doc-icons/link.svg" alt="" /></div>
      <div className="icon cli" onClick={() => openWindow('cli')}><img src="/doc-icons/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock