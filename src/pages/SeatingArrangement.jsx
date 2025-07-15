import React, { useState } from 'react'
import { CheckCircle, X, Calendar, Clock, Users } from 'lucide-react'

const SeatingArrangement = () => {
  const [selectedTable, setSelectedTable] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [reservationDetails, setReservationDetails] = useState(null)

  // Table layout data - realistic restaurant floor plan
  const tables = [
    // Window side tables (left wall)
    { id: 1, x: 20, y: 50, status: 'available', seats: 2, type: 'window' },
    { id: 2, x: 20, y: 90, status: 'occupied', seats: 2, type: 'window' },
    { id: 3, x: 20, y: 130, status: 'available', seats: 2, type: 'window' },
    { id: 4, x: 20, y: 170, status: 'reserved', seats: 2, type: 'window' },
    { id: 5, x: 20, y: 210, status: 'available', seats: 2, type: 'window' },
    
    // Center area tables (main dining)
    { id: 6, x: 80, y: 60, status: 'available', seats: 4, type: 'center' },
    { id: 7, x: 140, y: 60, status: 'occupied', seats: 4, type: 'center' },
    { id: 8, x: 200, y: 60, status: 'available', seats: 4, type: 'center' },
    
    { id: 9, x: 80, y: 110, status: 'reserved', seats: 4, type: 'center' },
    { id: 10, x: 200, y: 110, status: 'available', seats: 4, type: 'center' },
    
    { id: 11, x: 80, y: 160, status: 'available', seats: 4, type: 'center' },
    { id: 12, x: 140, y: 160, status: 'occupied', seats: 4, type: 'center' },
    { id: 13, x: 200, y: 160, status: 'available', seats: 4, type: 'center' },
    
    { id: 14, x: 80, y: 210, status: 'available', seats: 4, type: 'center' },
    { id: 15, x: 200, y: 210, status: 'reserved', seats: 4, type: 'center' },
    
    // Right wall tables (larger tables)
    { id: 16, x: 280, y: 55, status: 'available', seats: 6, type: 'wall' },
    { id: 17, x: 280, y: 105, status: 'occupied', seats: 6, type: 'wall' },
    { id: 18, x: 280, y: 155, status: 'available', seats: 6, type: 'wall' },
    { id: 19, x: 280, y: 205, status: 'available', seats: 6, type: 'wall' },
    
    // VIP booth at the back
    { id: 20, x: 160, y: 260, status: 'reserved', seats: 8, type: 'booth' }
  ]

  const getTableColor = (status) => {
    switch (status) {
      case 'available': return '#28a745'
      case 'occupied': return '#dc3545'
      case 'reserved': return '#ffc107'
      default: return '#6c757d'
    }
  }

  const getTableTextColor = (status) => {
    return status === 'reserved' ? '#333' : 'white'
  }

  const handleReserveTable = () => {
    if (selectedTable && selectedTable.status === 'available') {
      const currentTime = new Date()
      const reservationTime = new Date(currentTime.getTime() + 30 * 60000) // 30 minutes from now
      
      setReservationDetails({
        table: selectedTable,
        date: currentTime.toLocaleDateString(),
        time: reservationTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        guests: selectedTable.seats,
        confirmationId: `RES${Math.random().toString(36).substr(2, 8).toUpperCase()}`
      })
      setShowConfirmation(true)
    }
  }

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
          Seating Arrangement
        </h1>
      </div>

      <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '1rem',
        paddingBottom: '1rem'
      }}>
        {/* Restaurant Layout Title */}
        <div style={{ 
          background: 'white',
          borderRadius: '15px',
          padding: '1rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            fontSize: '1.2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            Restaurant Layout
          </h2>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            fontSize: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#28a745'
              }}></div>
              <span>Available</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#ffc107'
              }}></div>
              <span>Reserved</span>
            </div>
          </div>
        </div>

        {/* Seating Layout */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '1rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1rem'
        }}>
          <div style={{ 
            position: 'relative',
            height: '320px',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '20px',
            border: '2px solid #dee2e6',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            {/* Restaurant Elements */}
            <div style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#6c757d',
              color: 'white',
              padding: '6px 20px',
              borderRadius: '15px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              🍳 Kitchen
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#17a2b8',
              color: 'white',
              padding: '6px 20px',
              borderRadius: '15px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              🚪 Main Entrance
            </div>

            {/* Window indication (left side) */}
            <div style={{
              position: 'absolute',
              left: '0',
              top: '35px',
              bottom: '35px',
              width: '6px',
              background: 'linear-gradient(to bottom, #87ceeb, #4682b4)',
              borderRadius: '0 3px 3px 0'
            }}></div>
            
            {/* Window label */}
            <div style={{
              position: 'absolute',
              left: '10px',
              top: '30px',
              fontSize: '0.6rem',
              color: '#666',
              fontWeight: '600',
              transform: 'rotate(-90deg)',
              transformOrigin: 'left center'
            }}>
              WINDOWS
            </div>

            {/* Bar area (center) */}
            <div style={{
              position: 'absolute',
              top: '130px',
              left: '130px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.6rem',
              fontWeight: 'bold',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(255,107,107,0.3)'
            }}>
              🍻<br/>BAR
            </div>

            {/* VIP Section indicator */}
            <div style={{
              position: 'absolute',
              bottom: '25px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ffd700',
              color: '#333',
              padding: '3px 10px',
              borderRadius: '8px',
              fontSize: '0.6rem',
              fontWeight: '600'
            }}>
              ⭐ VIP Section
            </div>

            {/* Tables */}
            {tables.map(table => {
              const getTableSize = () => {
                if (table.seats <= 2) return '28px'
                if (table.seats <= 4) return '32px'
                if (table.seats <= 6) return '36px'
                return '40px'
              }
              
              const getTableShape = () => {
                if (table.type === 'booth') return '10px'
                if (table.type === 'window') return '4px'
                return '50%'
              }

              return (
                <div
                  key={table.id}
                  onClick={() => setSelectedTable(table)}
                  style={{
                    position: 'absolute',
                    left: `${table.x}px`,
                    top: `${table.y}px`,
                    width: getTableSize(),
                    height: getTableSize(),
                    borderRadius: getTableShape(),
                    background: getTableColor(table.status),
                    color: getTableTextColor(table.status),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    border: selectedTable?.id === table.id ? '3px solid #007bff' : 'none',
                    transform: selectedTable?.id === table.id ? 'scale(1.15)' : 'scale(1)',
                    boxShadow: selectedTable?.id === table.id ? '0 4px 15px rgba(0,123,255,0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  {table.id}
                </div>
              )
            })}
          </div>
        </div>

        {/* Table Information */}
        {selectedTable && (
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
            marginBottom: '1rem'
          }}>
            <h3 style={{ 
              fontSize: '1.1rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#333'
            }}>
              Table {selectedTable.id} Details
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem' }}>Status</div>
                <span style={{ 
                  padding: '4px 12px',
                  borderRadius: '15px',
                  background: getTableColor(selectedTable.status),
                  color: getTableTextColor(selectedTable.status),
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textTransform: 'capitalize'
                }}>
                  {selectedTable.status}
                </span>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem' }}>Seats</div>
                <div style={{ fontWeight: 'bold', color: '#333' }}>{selectedTable.seats}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem' }}>Location</div>
                <div style={{ 
                  fontWeight: '600', 
                  color: '#007bff',
                  textTransform: 'capitalize'
                }}>
                  {selectedTable.type === 'window' ? '🪟 Window Side' : 
                   selectedTable.type === 'center' ? '🍽️ Main Dining' :
                   selectedTable.type === 'wall' ? '🏢 Wall Side' :
                   selectedTable.type === 'booth' ? '⭐ VIP Booth' : 'Standard'}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem' }}>Table Type</div>
                <div style={{ fontWeight: 'bold', color: '#333' }}>
                  {selectedTable.seats <= 2 ? 'Intimate' :
                   selectedTable.seats <= 4 ? 'Standard' :
                   selectedTable.seats <= 6 ? 'Family' : 'Large Group'}
                </div>
              </div>
            </div>
            
            {selectedTable.status === 'available' && (
              <button 
                onClick={handleReserveTable}
                style={{
                  width: '100%',
                  background: '#ff6b6b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '12px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Reserve This Table
              </button>
            )}
          </div>
        )}

        {/* Summary Statistics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>
              {tables.filter(t => t.status === 'available').length}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Available</div>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545' }}>
              {tables.filter(t => t.status === 'occupied').length}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Occupied</div>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffc107' }}>
              {tables.filter(t => t.status === 'reserved').length}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Reserved</div>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#17a2b8' }}>
              {tables.length}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Total</div>
          </div>
        </div>

        {/* Seat Confirmation Popup */}
        {showConfirmation && reservationDetails && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }} onClick={() => setShowConfirmation(false)}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '350px',
              width: '100%',
              padding: '2rem',
              textAlign: 'center',
              position: 'relative'
            }} onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setShowConfirmation(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                <X size={20} />
              </button>

              {/* Success Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <CheckCircle size={40} color="white" />
              </div>

              {/* Confirmation Message */}
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '0.5rem'
              }}>
                Reservation Confirmed!
              </h2>

              <p style={{
                color: '#666',
                marginBottom: '1.5rem',
                fontSize: '0.9rem'
              }}>
                Your table has been successfully reserved
              </p>

              {/* Reservation Details */}
              <div style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '15px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '1rem'
                  }}>
                    Reservation Details
                  </div>
                  
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong>Confirmation ID:</strong>
                    <div style={{
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      display: 'inline-block',
                      marginLeft: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      {reservationDetails.confirmationId}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: '600', minWidth: '60px' }}>Table:</span>
                    <span>#{reservationDetails.table.id} - {reservationDetails.table.type === 'window' ? '🪟 Window Side' : 
                           reservationDetails.table.type === 'center' ? '🍽️ Main Dining' :
                           reservationDetails.table.type === 'wall' ? '🏢 Wall Side' : '⭐ VIP Booth'}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <Calendar size={16} style={{ marginRight: '8px', color: '#666' }} />
                    <span style={{ fontWeight: '600', minWidth: '60px' }}>Date:</span>
                    <span>{reservationDetails.date}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <Clock size={16} style={{ marginRight: '8px', color: '#666' }} />
                    <span style={{ fontWeight: '600', minWidth: '60px' }}>Time:</span>
                    <span>{reservationDetails.time}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Users size={16} style={{ marginRight: '8px', color: '#666' }} />
                    <span style={{ fontWeight: '600', minWidth: '60px' }}>Guests:</span>
                    <span>{reservationDetails.guests} people</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => setShowConfirmation(false)}
                  style={{
                    flex: 1,
                    background: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Here you could add functionality to share or save the reservation
                    navigator.share && navigator.share({
                      title: 'DineSpace Reservation',
                      text: `Table reserved! Confirmation: ${reservationDetails.confirmationId}`,
                      url: window.location.href
                    }).catch(() => {
                      // Fallback for browsers that don't support Web Share API
                      navigator.clipboard?.writeText(`DineSpace Reservation - Confirmation: ${reservationDetails.confirmationId}`)
                    })
                  }}
                  style={{
                    flex: 1,
                    background: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SeatingArrangement
