import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, MapPin, CheckCircle, X } from 'lucide-react'

const BookSeats = () => {
  const [selectedDate, setSelectedDate] = useState(15)
  const [selectedTime, setSelectedTime] = useState('6:00 PM')
  const [partySize, setPartySize] = useState(2)
  const [customerName, setCustomerName] = useState('')
  const [currentMonth] = useState('July 2025')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [bookingDetails, setBookingDetails] = useState(null)

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1)
  const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM']
  const partySizes = [1, 2, 3, 4, 5, 6, 7, 8]

  const getDayOfWeek = (day) => {
    // July 2025 starts on Tuesday (day 1 = Tuesday)
    const startDay = 2; // Tuesday
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(startDay + day - 2) % 7];
  }

  const handleConfirmReservation = () => {
    // Validate that name is provided
    if (!customerName.trim()) {
      alert('Please enter your name to confirm the reservation.')
      return
    }
    
    // Generate random table number and reservation ID
    const tableNumber = Math.floor(Math.random() * 20) + 1
    const reservationId = `RES${Date.now().toString().slice(-6)}`
    
    const booking = {
      date: `July ${selectedDate}, 2025`,
      time: selectedTime,
      partySize: partySize,
      tableNumber: tableNumber,
      reservationId: reservationId,
      customerName: customerName.trim(),
      dayOfWeek: getDayOfWeek(selectedDate)
    }
    
    setBookingDetails(booking)
    setShowConfirmation(true)
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
          Book Seats
        </h1>
      </div>

      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
        {/* Calendar */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
              <ChevronLeft size={20} color="#666" />
            </button>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
              {currentMonth}
            </h2>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
              <ChevronRight size={20} color="#666" />
            </button>
          </div>
          
          {/* Days of week header */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gap: '5px',
            marginBottom: '1rem'
          }}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} style={{ 
                textAlign: 'center', 
                fontWeight: '600',
                color: '#666',
                fontSize: '0.85rem',
                padding: '0.5rem 0'
              }}>
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar days */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(7, 1fr)', 
            gap: '5px'
          }}>
            {/* Empty cells for days before month starts */}
            <div></div>
            <div></div>
            
            {daysInMonth.map(day => (
              <div
                key={day}
                onClick={() => day >= 14 ? setSelectedDate(day) : null}
                style={{
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: day < 14 ? 'not-allowed' : 'pointer',
                  background: selectedDate === day ? '#ff6b6b' : 'transparent',
                  color: selectedDate === day ? 'white' : day < 14 ? '#ccc' : '#333',
                  transition: 'all 0.3s',
                  border: day === 14 && selectedDate !== day ? '2px solid #ff6b6b' : 'none'
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Time */}
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
            color: '#333',
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            Select Time
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '0.75rem'
          }}>
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                style={{
                  padding: '10px',
                  border: selectedTime === time ? '2px solid #ff6b6b' : '1px solid #e0e0e0',
                  borderRadius: '8px',
                  background: selectedTime === time ? '#ff6b6b' : 'white',
                  color: selectedTime === time ? 'white' : '#333',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s'
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Party Size */}
        <div style={{ 
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#333'
          }}>
            Party Size
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '0.75rem'
          }}>
            {partySizes.map(size => (
              <button
                key={size}
                onClick={() => setPartySize(size)}
                style={{
                  aspectRatio: '1',
                  border: partySize === size ? '2px solid #ff6b6b' : '1px solid #e0e0e0',
                  borderRadius: '50%',
                  background: partySize === size ? '#ff6b6b' : 'white',
                  color: partySize === size ? 'white' : '#333',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Name */}
        <div style={{ 
          background: 'white',
          borderRadius: '15px',
          padding: '1.5rem',
          boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#333'
          }}>
            Customer Name
          </h3>
          <input
            type="text"
            placeholder="Enter your full name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '0.9rem',
              outline: 'none',
              backgroundColor: 'white',
              transition: 'border-color 0.3s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#ff6b6b'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e0e0e0'
            }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.75rem',
          marginBottom: '1.5rem'
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
            <Calendar size={16} />
            Calendar
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
            <Users size={16} />
            List View
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
            Table View
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
            Wait List
          </button>
        </div>

        {/* Confirm Button */}
        <button 
          onClick={handleConfirmReservation}
          style={{
            width: '100%',
            background: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '15px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}
        >
          Confirm Reservation
        </button>

        {/* Selected Summary */}
        <div style={{ 
          background: '#f8f9fa',
          padding: '1rem',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontSize: '0.85rem',
            color: '#666',
            margin: 0
          }}>
            <strong>Selected:</strong> July {selectedDate}, 2025 at {selectedTime} for {partySize} {partySize === 1 ? 'person' : 'people'}
            {customerName && (
              <span>
                <br />
                <strong>Name:</strong> {customerName}
              </span>
            )}
          </p>
        </div>

        {/* Booking Confirmation Modal */}
        {showConfirmation && bookingDetails && (
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
              maxWidth: '400px',
              width: '100%',
              position: 'relative',
              animation: 'slideUp 0.3s ease-out'
            }} onClick={(e) => e.stopPropagation()}>
              
              {/* Success Header */}
              <div style={{
                background: 'linear-gradient(135deg, #28a745, #20c997)',
                color: 'white',
                padding: '2rem 1.5rem',
                borderRadius: '20px 20px 0 0',
                textAlign: 'center',
                position: 'relative'
              }}>
                <button
                  onClick={() => setShowConfirmation(false)}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>
                
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle size={35} color="#28a745" />
                </div>
                
                <h2 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: 'bold', 
                  margin: '0 0 0.5rem 0'
                }}>
                  Booking Confirmed!
                </h2>
                
                <p style={{ 
                  fontSize: '0.9rem', 
                  margin: 0, 
                  opacity: 0.9 
                }}>
                  Thank you for your reservation
                </p>
              </div>

              {/* Booking Details */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold', 
                    marginBottom: '1rem',
                    color: '#333',
                    textAlign: 'center'
                  }}>
                    Reservation Details
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gap: '0.75rem' 
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Users size={16} />
                        Name
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        {bookingDetails.customerName}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Calendar size={16} />
                        Date
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        {bookingDetails.date} ({bookingDetails.dayOfWeek})
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Clock size={16} />
                        Time
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        {bookingDetails.time}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Users size={16} />
                        Party Size
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        {bookingDetails.partySize} {bookingDetails.partySize === 1 ? 'person' : 'people'}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid #e9ecef'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <MapPin size={16} />
                        Table Number
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        Table {bookingDetails.tableNumber}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0'
                    }}>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        color: '#666'
                      }}>
                        Reservation ID
                      </span>
                      <span style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '600',
                        color: '#ff6b6b',
                        fontFamily: 'monospace'
                      }}>
                        {bookingDetails.reservationId}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '0.75rem' 
                }}>
                  <button
                    onClick={() => setShowConfirmation(false)}
                    style={{
                      padding: '12px',
                      background: '#f8f9fa',
                      color: '#666',
                      border: '1px solid #e9ecef',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    Close
                  </button>
                  
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Restaurant Reservation',
                          text: `Reservation confirmed for ${bookingDetails.customerName} on ${bookingDetails.date} at ${bookingDetails.time} for ${bookingDetails.partySize} people. Table ${bookingDetails.tableNumber}. ID: ${bookingDetails.reservationId}`
                        })
                      } else {
                        // Fallback for browsers that don't support Web Share API
                        const text = `Reservation confirmed for ${bookingDetails.customerName} on ${bookingDetails.date} at ${bookingDetails.time} for ${bookingDetails.partySize} people. Table ${bookingDetails.tableNumber}. ID: ${bookingDetails.reservationId}`
                        navigator.clipboard.writeText(text)
                        alert('Reservation details copied to clipboard!')
                      }
                    }}
                    style={{
                      padding: '12px',
                      background: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookSeats
