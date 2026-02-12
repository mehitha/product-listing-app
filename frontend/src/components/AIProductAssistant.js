import React, { useState } from 'react';

const AIProductAssistant = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const getAIResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('recommend') || msg.includes('suggest')) {
      const randomProducts = products.slice(0, 3);
      return `Here are my top recommendations:\n${randomProducts.map(p => `• ${p.name} - $${p.price}`).join('\n')}`;
    }
    if (msg.includes('price') || msg.includes('cost')) {
      const product = products.find(p => p.name?.toLowerCase().includes(msg));
      return product ? `${product.name} is $${product.price}` : "Which product's price?";
    }
    if (msg.includes('best') || msg.includes('popular')) {
      const best = products[0];
      return `Our best seller is ${best.name} at $${best.price}`;
    }
    if (msg.includes('under') || msg.includes('budget')) {
      const budget = parseInt(msg.match(/\d+/)?.[0] || 500);
      const affordable = products.filter(p => p.price < budget).slice(0, 3);
      return affordable.length ? `Products under $${budget}:\n${affordable.map(p => `• ${p.name} - $${p.price}`).join('\n')}` : `No products under $${budget}`;
    }
    return "I can help you find products, check prices, and get recommendations! Try asking:\n• Recommend me a product\n• Best selling items\n• Products under 500\n• Price of [product name]";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setConversation([...conversation, { text: message, sender: 'user' }]);
    
    setTimeout(() => {
      setConversation(prev => [...prev, { text: getAIResponse(message), sender: 'ai' }]);
    }, 500);

    setMessage('');
  };

  return (
    <>
      {/* AI Assistant Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: isOpen ? '#dc3545' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          border: '3px solid white'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? '✕' : '🤖'}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '25px',
          width: '350px',
          height: '500px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden',
          animation: 'slideIn 0.3s ease'
        }}>
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🤖
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>AI Shopping Assistant</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%' }}></span>
                <span style={{ fontSize: '12px', opacity: 0.9 }}>Online • Ready to help</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            
            {/* Welcome Message */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <div style={{
                width: '35px',
                height: '35px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '18px'
              }}>
                AI
              </div>
              <div style={{
                background: 'white',
                padding: '12px 16px',
                borderRadius: '16px 16px 16px 0',
                maxWidth: '80%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                color: '#1e293b',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                👋 Hi! I'm your AI shopping assistant. Ask me about:
                <br/>• Product recommendations
                <br/>• Price checks
                <br/>• Best sellers
                <br/>• Budget finds
              </div>
            </div>

            {/* Conversation */}
            {conversation.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                {msg.sender === 'ai' && (
                  <div style={{
                    width: '35px',
                    height: '35px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px'
                  }}>
                    AI
                  </div>
                )}
                <div style={{
                  background: msg.sender === 'user' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                  color: msg.sender === 'user' ? 'white' : '#1e293b',
                  padding: '12px 16px',
                  borderRadius: msg.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                  maxWidth: '70%',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} style={{
            padding: '20px',
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            gap: '12px'
          }}>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '14px 18px',
                border: '2px solid #e2e8f0',
                borderRadius: '30px',
                outline: 'none',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                background: '#f8fafc'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
            <button type="submit" style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              ➤
            </button>
          </form>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default AIProductAssistant;