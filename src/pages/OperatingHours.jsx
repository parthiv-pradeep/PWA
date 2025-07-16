import React from 'react'
import { Clock, Phone, MapPin, Calendar } from 'lucide-react'

const OperatingHours = () => {
  const dailyHours = [
    { day: 'Monday', hours: '09:00 AM - 10:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '09:00 AM - 10:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '09:00 AM - 10:00 PM', isOpen: true },
    { day: 'Thursday', hours: '09:00 AM - 10:00 PM', isOpen: true },
    { day: 'Friday', hours: '09:00 AM - 11:00 PM', isOpen: true },
    { day: 'Saturday', hours: '09:00 AM - 11:00 PM', isOpen: true },
    { day: 'Sunday', hours: '10:00 AM - 09:00 PM', isOpen: true },
  ]

  const announcements = [
    "Closed on Christmas Day (December 25th)",
    "Extended hours on New Year's Eve",
    "Special Valentine's Day menu available",
    "Holiday catering services available",
    "Live music every Friday evening",
    "Call ahead for hour schedule updates"
  ]

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '1rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <h1 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          margin: 0,
          textAlign: 'center',
          color: '#333'
        }}>
          Operating Hours
        </h1>
      </div>

      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
        {/* Current Status */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#28a745',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            marginBottom: '0.75rem',
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            <Clock size={16} />
            <span>Currently Open</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>
            Today's Hours: 09:00 AM - 10:00 PM
          </p>
        </div>

        {/* Daily Hours */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1rem'
        }}>
          <h2 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#333',
            textAlign: 'center'
          }}>
            Daily Hours
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {dailyHours.map((dayInfo, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem',
                background: '#f8f9fa',
                borderRadius: '10px'
              }}>
                <div style={{ 
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: index === 1 ? '#ff6b6b' : '#333' // Highlight Tuesday as current day
                }}>
                  {dayInfo.day}
                </div>
                <div style={{ 
                  fontSize: '0.85rem',
                  color: dayInfo.isOpen ? '#666' : '#dc3545',
                  fontWeight: dayInfo.isOpen ? 'normal' : 'bold'
                }}>
                  {dayInfo.hours}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Announcements */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1rem'
        }}>
          <h2 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#333',
            textAlign: 'center'
          }}>
            Important Announcements
          </h2>
          
          <div style={{
            background: '#fff3cd',
            borderRadius: '10px',
            padding: '1rem'
          }}>
            <h3 style={{ 
              color: '#856404', 
              marginBottom: '0.75rem',
              fontSize: '0.95rem',
              fontWeight: 'bold'
            }}>
              Holiday & Special Notes
            </h3>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: 0,
              color: '#856404'
            }}>
              {announcements.map((announcement, index) => (
                <li key={index} style={{ 
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  lineHeight: '1.4'
                }}>
                  <span style={{ 
                    width: '4px',
                    height: '4px',
                    background: '#856404',
                    borderRadius: '50%',
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }}></span>
                  {announcement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
          marginBottom: '1rem'
        }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '12px',
            background: 'white',
            border: '2px solid #ff6b6b',
            borderRadius: '25px',
            color: '#ff6b6b',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}>
            <Phone size={16} />
            Call
          </button>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '12px',
            background: 'white',
            border: '2px solid #ff6b6b',
            borderRadius: '25px',
            color: '#ff6b6b',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}>
            <MapPin size={16} />
            Directions
          </button>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '12px',
            background: 'white',
            border: '2px solid #ff6b6b',
            borderRadius: '25px',
            color: '#ff6b6b',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}>
            <Calendar size={16} />
            Reserve
          </button>
          
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '12px',
            background: 'white',
            border: '2px solid #ff6b6b',
            borderRadius: '25px',
            color: '#ff6b6b',
            cursor: 'pointer',
            fontSize: '0.85rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}>
            <Clock size={16} />
            Menu
          </button>
        </div>

        {/* Contact Information Card */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#333'
          }}>
            Contact & Location
          </h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <MapPin size={16} color="#ff6b6b" />
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>
                Address
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
              Marine Drive, Ernakulam<br />
              Kerala, PIN: 682011
            </p>
          </div>
          
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <Phone size={16} color="#ff6b6b" />
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>
                Phone
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
              +91 98470 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatingHours
