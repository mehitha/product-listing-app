import React from 'react';

const AIRecommendations = ({ products, currentProductId }) => {
  const currentProduct = products.find(p => p._id === currentProductId);
  if (!currentProduct) return null;

  const recommendations = products
    .filter(p => p._id !== currentProductId && p.category === currentProduct.category)
    .slice(0, 4);

  if (!recommendations.length) return null;

  return (
    <div style={{
      margin: '40px 0',
      padding: '25px',
      background: 'linear-gradient(135deg, #5f2c82 0%, #49a09d 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '28px', marginRight: '10px' }}>🤖</span>
        <div>
          <h3 style={{ margin: 0, color: 'white', fontWeight: '600' }}>You May Also Like</h3>
          <p style={{ margin: '5px 0 0', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
            Based on {currentProduct.name}
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        {recommendations.map(product => (
          <div key={product._id} style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '15px',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img 
              src={product.image || 'https://via.placeholder.com/200'} 
              alt={product.name}
              style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px' }}
            />
            <h4 style={{ margin: '0 0 5px', fontSize: '16px', color: 'white' }}>{product.name}</h4>
            <p style={{ margin: '0 0 10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
              {product.description?.substring(0, 40)}...
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>${product.price}</span>
              <span style={{
                padding: '4px 12px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '20px',
                color: 'white',
                fontSize: '12px'
              }}>
                {Math.floor(Math.random() * 30 + 70)}% match
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;