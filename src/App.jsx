import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Download, X } from 'lucide-react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Menu from './pages/Menu'
import BookSeats from './pages/BookSeats'
import SeatingArrangement from './pages/SeatingArrangement'
import OperatingHours from './pages/OperatingHours'

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setShowInstallPrompt(false)
    }
    
    setDeferredPrompt(null)
  }

  const handleDismissInstall = () => {
    setShowInstallPrompt(false)
    setDeferredPrompt(null)
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* PWA Install Prompt */}
      {showInstallPrompt && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
          color: 'white',
          padding: '1rem',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Download size={20} />
            <div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Install DineSpace</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>Add to home screen for quick access</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handleInstallClick}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '20px',
                padding: '6px 16px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Install
            </button>
            <button
              onClick={handleDismissInstall}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                padding: '6px',
                cursor: 'pointer',
                borderRadius: '50%'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      <div style={{ paddingTop: showInstallPrompt ? '80px' : '0', transition: 'padding-top 0.3s' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book-seats" element={<BookSeats />} />
          <Route path="/seating" element={<SeatingArrangement />} />
          <Route path="/hours" element={<OperatingHours />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
