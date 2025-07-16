import React, { useState } from 'react'
import { Search, Star, X, Clock, Users } from 'lucide-react'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Items')
  const [selectedItem, setSelectedItem] = useState(null)

  const categories = ['All Items', 'Appetizers', 'Main Courses', 'Desserts']

  const menuItems = [
    {
      id: 1,
      name: 'Classic Margherita Pizza',
      description: 'Fresh mozzarella, basil, and tomato sauce on our signature crust',
      detailedDescription: 'Our signature wood-fired pizza featuring the finest San Marzano tomatoes, creamy fresh mozzarella di bufala, and aromatic basil leaves. The dough is aged for 48 hours and baked in our traditional stone oven at 900°F for the perfect crispy yet chewy texture.',
      price: '₹899',
      originalPrice: '₹1099',
      discount: '15% OFF',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop',
      category: 'Main Courses',
      rating: 4.5,
      badge: 'New Item',
      prepTime: '12-15 mins',
      serves: '1-2 people',
      ingredients: ['San Marzano tomatoes', 'Mozzarella di bufala', 'Fresh basil', 'Extra virgin olive oil', 'Sea salt'],
      allergens: ['Gluten', 'Dairy']
    },
    {
      id: 2,
      name: 'Spicy Chicken Wings',
      description: 'Crispy wings tossed in our house-made spicy buffalo sauce',
      detailedDescription: 'Perfectly seasoned chicken wings, double-fried for maximum crispiness, then tossed in our signature buffalo sauce made with aged cayenne peppers, butter, and secret spices. Served with cooling ranch dip and celery sticks.',
      price: '₹649',
      originalPrice: '₹849',
      discount: '23% OFF',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=200&fit=crop',
      category: 'Appetizers',
      rating: 4.3,
      prepTime: '8-10 mins',
      serves: '2-3 people',
      ingredients: ['Chicken wings', 'Buffalo sauce', 'Celery', 'Ranch dip', 'Cayenne pepper'],
      allergens: ['Dairy']
    },
    {
      id: 3,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
      detailedDescription: 'Decadent dark chocolate cake with a warm, flowing chocolate center that melts in your mouth. Made with premium Belgian chocolate and served with artisanal vanilla bean ice cream and fresh berries.',
      price: '₹449',
      originalPrice: '₹549',
      discount: '18% OFF',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop',
      category: 'Desserts',
      rating: 4.8,
      badge: 'Best Seller',
      prepTime: '5-7 mins',
      serves: '1 person',
      ingredients: ['Belgian dark chocolate', 'Vanilla ice cream', 'Fresh berries', 'Butter', 'Eggs'],
      allergens: ['Gluten', 'Dairy', 'Eggs']
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herbs and seasonal vegetables',
      detailedDescription: 'Premium Atlantic salmon fillet, grilled to perfection and seasoned with fresh herbs. Accompanied by a medley of seasonal roasted vegetables and served with our signature lemon herb butter sauce.',
      price: '₹1249',
      originalPrice: '₹1499',
      discount: '17% OFF',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop',
      category: 'Main Courses',
      rating: 4.6,
      prepTime: '15-18 mins',
      serves: '1 person',
      ingredients: ['Atlantic salmon', 'Seasonal vegetables', 'Lemon herb butter', 'Fresh herbs', 'Olive oil'],
      allergens: ['Fish', 'Dairy']
    },
    {
      id: 5,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan, croutons and caesar dressing',
      detailedDescription: 'Fresh crisp romaine lettuce tossed in our house-made Caesar dressing, topped with aged parmesan cheese, garlic croutons, and a hint of anchovy. A classic preparation that never goes out of style.',
      price: '₹549',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop',
      category: 'Appetizers',
      rating: 4.2,
      prepTime: '5 mins',
      serves: '1-2 people',
      ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Garlic croutons', 'Caesar dressing', 'Anchovy'],
      allergens: ['Gluten', 'Dairy', 'Fish']
    },
    {
      id: 6,
      name: 'Fresh Berry Smoothie',
      description: 'Mixed berries with yogurt and honey',
      detailedDescription: 'A refreshing blend of seasonal berries including strawberries, blueberries, and raspberries, combined with creamy Greek yogurt and natural honey. Perfectly balanced for a healthy and delicious treat.',
      price: '₹349',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop',
      category: 'Desserts',
      rating: 4.4,
      prepTime: '3 mins',
      serves: '1 person',
      ingredients: ['Mixed berries', 'Greek yogurt', 'Natural honey', 'Mint leaves'],
      allergens: ['Dairy']
    },
    {
      id: 7,
      name: 'Beef Burger Deluxe',
      description: 'Juicy beef patty with fresh vegetables and special sauce',
      detailedDescription: 'Our signature burger featuring a prime beef patty grilled to perfection, layered with fresh lettuce, tomato, pickles, and our secret sauce. Served on a brioche bun with crispy fries.',
      price: '₹749',
      originalPrice: '₹949',
      discount: '21% OFF',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop',
      category: 'Main Courses',
      rating: 4.7,
      prepTime: '10-12 mins',
      serves: '1 person',
      ingredients: ['Prime beef', 'Brioche bun', 'Fresh vegetables', 'Secret sauce', 'Crispy fries'],
      allergens: ['Gluten', 'Dairy']
    },
    {
      id: 8,
      name: 'Pasta Carbonara',
      description: 'Creamy pasta with bacon, eggs, and parmesan cheese',
      detailedDescription: 'Traditional Italian carbonara made with fresh pasta, crispy pancetta, farm-fresh eggs, and aged Parmigiano-Reggiano. A classic Roman dish prepared with authentic technique and premium ingredients.',
      price: '₹949',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop',
      category: 'Main Courses',
      rating: 4.5,
      prepTime: '8-10 mins',
      serves: '1 person',
      ingredients: ['Fresh pasta', 'Pancetta', 'Farm eggs', 'Parmigiano-Reggiano', 'Black pepper'],
      allergens: ['Gluten', 'Dairy', 'Eggs']
    }
  ]

  const filteredItems = selectedCategory === 'All Items' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Hide scrollbar styles */}
      <style>
        {`
          .category-tabs::-webkit-scrollbar {
            display: none;
          }
          .category-tabs {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      
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
          Menu
        </h1>
      </div>

      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
        {/* Search Bar */}
        <div style={{ 
          position: 'relative',
          marginBottom: '1.5rem'
        }}>
          <Search 
            size={18} 
            style={{ 
              position: 'absolute', 
              left: '15px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#999'
            }} 
          />
          <input
            type="text"
            placeholder="Search Menu"
            style={{
              width: '100%',
              padding: '12px 15px 12px 45px',
              border: '1px solid #e0e0e0',
              borderRadius: '25px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: 'white'
            }}
          />
        </div>

        {/* Category Tabs */}
        <div 
          className="category-tabs"
          style={{ 
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem',
            overflowX: 'auto',
            paddingBottom: '5px'
          }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '20px',
                background: selectedCategory === category ? '#ff6b6b' : '#f0f0f0',
                color: selectedCategory === category ? 'white' : '#666',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Deals & Benefits */}
        <div style={{
          background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
          color: 'white',
          padding: '1rem',
          borderRadius: '15px',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
            Deals & Benefits
          </h3>
          <p style={{ fontSize: '0.85rem', margin: 0, opacity: 0.9 }}>
            🔥 25% OFF on orders above ₹2500 • Free delivery on weekends
          </p>
        </div>

        {/* Featured Items Header */}
        <h2 style={{ 
          fontSize: '1.2rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: '#333'
        }}>
          Featured Items
        </h2>
        
        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{ 
                    width: '100%', 
                    height: '160px', 
                    objectFit: 'cover'
                  }}
                />
                {item.discount && (
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: '#28a745',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {item.discount}
                  </span>
                )}
                {item.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: item.badge === 'New Item' ? '#007bff' : '#ffc107',
                    color: item.badge === 'New Item' ? 'white' : '#333',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    {item.badge}
                  </span>
                )}
                {/* Click indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '8px',
                  fontSize: '0.7rem'
                }}>
                  Tap for details
                </div>
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ 
                  fontSize: '1rem', 
                  fontWeight: 'bold', 
                  margin: '0 0 0.5rem 0',
                  color: '#333'
                }}>
                  {item.name}
                </h3>
                <p style={{ 
                  color: '#666', 
                  margin: '0 0 0.75rem 0', 
                  fontSize: '0.85rem',
                  lineHeight: '1.4'
                }}>
                  {item.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '5px',
                  marginBottom: '0.75rem'
                }}>
                  <Star size={14} fill="#ffc107" color="#ffc107" />
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>{item.rating}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <span style={{ 
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      color: '#ff6b6b'
                    }}>
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span style={{ 
                        textDecoration: 'line-through', 
                        color: '#999',
                        marginLeft: '8px',
                        fontSize: '0.85rem'
                      }}>
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Item Detail Modal */}
        {selectedItem && (
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
          }} onClick={() => setSelectedItem(null)}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '400px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative'
            }} onClick={(e) => e.stopPropagation()}>
              {/* Modal Header with Image */}
              <div style={{ position: 'relative' }}>
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover',
                    borderRadius: '20px 20px 0 0'
                  }}
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(0,0,0,0.7)',
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
              </div>

              {/* Modal Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h2 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 'bold', 
                    margin: '0 0 0.5rem 0',
                    color: '#333'
                  }}>
                    {selectedItem.name}
                  </h2>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Star size={16} fill="#ffc107" color="#ffc107" />
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>{selectedItem.rating}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={16} color="#666" />
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>{selectedItem.prepTime}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Users size={16} color="#666" />
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>{selectedItem.serves}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{ 
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      color: '#ff6b6b'
                    }}>
                      {selectedItem.price}
                    </span>
                    {selectedItem.originalPrice && (
                      <span style={{ 
                        textDecoration: 'line-through', 
                        color: '#999',
                        marginLeft: '10px',
                        fontSize: '1rem'
                      }}>
                        {selectedItem.originalPrice}
                      </span>
                    )}
                    {selectedItem.discount && (
                      <span style={{
                        marginLeft: '10px',
                        background: '#28a745',
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}>
                        {selectedItem.discount}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                    Description
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: '1.5',
                    fontSize: '0.9rem',
                    margin: 0
                  }}>
                    {selectedItem.detailedDescription}
                  </p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                    Ingredients
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <span key={index} style={{
                        background: '#f8f9fa',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        color: '#555'
                      }}>
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                    Allergens
                  </h3>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem' 
                  }}>
                    {selectedItem.allergens.map((allergen, index) => (
                      <span key={index} style={{
                        background: '#fff3cd',
                        color: '#856404',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu
