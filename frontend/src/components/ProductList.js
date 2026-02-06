// import React from "react";

// const ProductList = ({ products }) => {
//   return (
//     <div className="product-grid">
//       {products.map((p) => (
//         <div className="card" key={p._id}>
//           <img src={p.image} alt={p.name} />
//           <h4>{p.name}</h4>
//           <p>₹{p.price}</p>
//           <p>{p.category}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


// import React from "react";

// const ProductList = ({ products }) => {
//   if (!products || products.length === 0) {
//     return (
//       <div style={{textAlign: 'center', padding: '40px'}}>
//         <h3>🛒 No products found</h3>
//       </div>
//     );
//   }

//   return (
//     <div className="product-grid">
//       {products.map((p) => (
//         <div key={p._id} className="card">
//           <div className="card-image">📦</div> {/* 👈 Add image placeholder */}
//           <div className="card-content">
//             <h4>{p.name}</h4>
//             <p className="price">₹{p.price}</p>
//             <p>{p.category}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;



import React from "react";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '40px'}}>
        <h3>🛒 No products found</h3>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p._id} className="card">
          {p.image ? (
            // 👈 REAL IMAGE FROM YOUR FORM
            <img 
              src={p.image} 
              alt={p.name}
              className="card img" 
              onError={(e) => {
                e.target.style.display = 'none'; // Hide broken images
                e.target.nextSibling.style.display = 'flex'; // Show placeholder
              }}
            />
          ) : (
            // 👈 FALLBACK PLACEHOLDER
            <div className="card-image">📦</div>
          )}
          <div className="card-content">
            <h4>{p.name}</h4>
            <p className="price">₹{p.price}</p>
            <p>{p.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

