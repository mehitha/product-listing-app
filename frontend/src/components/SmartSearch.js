import React, { useState } from 'react';

const SmartSearch = ({ products }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length < 2) {
      setResults([]);
      return;
    }

    const filtered = products.filter(product => 
      product.name?.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 5);

    setResults(filtered);
  };

  return (
    <div style={{
      margin: '20px 0 30px',
      padding: '25px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ fontSize: '28px', marginRight: '10px' }}>🔍</span>
        <h3 style={{ margin: 0, color: 'white', fontWeight: '600' }}>AI Smart Search</h3>
      </div>
      
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for products... (e.g., laptop, phone, shoes)"
          style={{
            width: '100%',
            padding: '16px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '12px',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
        />
        {query && (
          <span style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#666',
            fontSize: '14px',
            background: '#f0f0f0',
            padding: '4px 10px',
            borderRadius: '20px'
          }}>
            {results.length} found
          </span>
        )}
      </div>

      {results.length > 0 && (
        <div style={{
          marginTop: '20px',
          background: 'white',
          borderRadius: '12px',
          padding: '15px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ margin: '0 0 15px 0', color: '#333', fontSize: '16px' }}>
            📦 Search Results
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '15px'
          }}>
            {results.map(product => (
              <div key={product._id} style={{
                background: '#f8f9fa',
                borderRadius: '10px',
                padding: '12px',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={product.image || 'https://via.placeholder.com/150'} 
                  alt={product.name}
                  style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <h5 style={{ margin: '10px 0 5px', fontSize: '15px', color: '#333' }}>{product.name}</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#28a745' }}>${product.price}</span>
                  <span style={{ fontSize: '12px', color: '#6c757d' }}>In stock</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartSearch;