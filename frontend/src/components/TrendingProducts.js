import React from 'react';

const TrendingProducts = ({ products }) => {
  const trending = products.slice(0, 5);

  if (!trending.length) return null;

  return (
    <div style={{
      margin: '30px 0',
      padding: '25px',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '28px', marginRight: '10px' }}>🔥</span>
        <h3 style={{ margin: 0, color: 'white', fontWeight: '600' }}>Trending Now</h3>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '15px'
      }}>
        {trending.map((product, index) => (
          <div key={product._id} style={{
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '15px',
            border: '1px solid rgba(255,255,255,0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{
                width: '30px',
                height: '30px',
                background: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : index === 2 ? '#CD7F32' : 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: index < 3 ? '#333' : 'white',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                #{index + 1}
              </span>
            </div>
            <img 
              src={product.image || 'https://via.placeholder.com/120'} 
              alt={product.name}
              style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
            />
            <h4 style={{ margin: '10px 0 5px', fontSize: '15px', color: 'white' }}>{product.name}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>${product.price}</span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>🔥 Hot</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;