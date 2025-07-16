import React from 'react'
import { Link } from 'react-router-dom'
import { ChefHat, Users, Clock, Calendar, Phone } from 'lucide-react'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', margin: 0, padding: 0, paddingBottom: '100px' }}>
      {/* Hero Section with Background Image */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '2rem 1rem 4rem 1rem',
        textAlign: 'center',
        position: 'relative',
        marginTop: '-2px'
      }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            DineSpace
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            marginBottom: '2rem',
            lineHeight: '1.5',
            opacity: 0.9
          }}>
            Experience culinary excellence with our smart dining solutions designed for your delight.
          </p>
          <Link 
            to="/menu" 
            style={{
              backgroundColor: '#ff6b6b',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(255,107,107,0.3)'
            }}
          >
            Explore Menu
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '2rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#333',
            textAlign: 'center'
          }}>
            Our Story & Philosophy
          </h2>
          <p style={{ 
            fontSize: '0.9rem', 
            lineHeight: '1.6', 
            color: '#666',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Our culinary journey is inspired by seasonal ingredients, creating exceptional experiences through innovative flavors. We bring people together with quality and creativity.
          </p>
          <p style={{ 
            fontSize: '0.9rem', 
            lineHeight: '1.6', 
            color: '#666',
            textAlign: 'center'
          }}>
            Every dish tells a story, from carefully crafted appetizers to signature cocktails, bringing people together in moments of culinary excellence.
          </p>
        </div>
      </section>

      {/* Discover Our Highlights */}
      <section style={{ padding: '2rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem',
            color: '#333',
            textAlign: 'center'
          }}>
            Discover Our Highlights
          </h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white'
              }}>
                <ChefHat size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                Chef's Signature Recipes
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                From farm-to-table ingredients to culinary excellence, our chefs create unforgettable dining experiences.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white'
              }}>
                <Users size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                Signature Cocktails
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                Explore our innovative cocktail menu featuring seasonal ingredients and unique flavor combinations.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#666'
              }}>
                <Clock size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                Private Dining & Events
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                Join our cooking classes for hands-on experiences and discover the art of culinary craftsmanship.
              </p>
            </div>

            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 15px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: '#666'
              }}>
                <Calendar size={20} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                Culinary Workshops
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                Join our interactive workshops and learn from master chefs in an engaging environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section style={{ padding: '2rem 1rem 6rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#333',
            textAlign: 'center'
          }}>
            Connect With Us
          </h2>
          <div style={{ 
            background: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#666' }}>
              Marine Drive, Ernakulam, Kerala
            </p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#666' }}>
              PIN: 682011
            </p>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Phone size={16} color="#ff6b6b" />
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333' }}>
                +91 98470 12345
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>
              Mon-Sat • Pre-booking • Open 11 AM - 11 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
