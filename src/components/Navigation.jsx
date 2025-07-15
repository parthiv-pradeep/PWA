import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Menu, Calendar, MapPin, Clock } from 'lucide-react'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/menu', icon: Menu, label: 'Menu' },
    { path: '/book-seats', icon: Calendar, label: 'Book Seats' },
    { path: '/seating', icon: MapPin, label: 'Seating Arrangement' },
    { path: '/hours', icon: Clock, label: 'Operating Hours' }
  ]

  return (
    <>
      {/* Top Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        textAlign: 'center',
        marginBottom: 0
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#ff6b6b'
        }}>
          DineSpace
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0',
        padding: '0.75rem 0 0.5rem 0',
        zIndex: 100,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: isActive(path) ? '#ff6b6b' : '#666',
                fontSize: '0.65rem',
                fontWeight: '500',
                padding: '0.25rem',
                minWidth: '55px',
                transition: 'color 0.3s',
                textAlign: 'center'
              }}
            >
              <Icon 
                size={20} 
                style={{ 
                  marginBottom: '0.25rem',
                  color: isActive(path) ? '#ff6b6b' : '#666'
                }} 
              />
              <span style={{ 
                lineHeight: '1.1',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%'
              }}>
                {label === 'Seating Arrangement' ? 'Seating' : 
                 label === 'Operating Hours' ? 'Hours' : 
                 label === 'Book Seats' ? 'Book' : label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navigation
