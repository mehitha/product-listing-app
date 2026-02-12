// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { getProducts } from "./services/api";
// import ProductForm from "./components/ProductForm";
// import ProductList from "./components/ProductList";
// import SearchFilter from "./components/SearchFilter";



// function App() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [showAdmin, setShowAdmin] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const res = await getProducts();
//     setProducts(res.data);
//     setFilteredProducts(res.data);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h2>Product Store</h2>
//         <div className="admin-btn" onClick={() => setShowAdmin(!showAdmin)}>
//           ⚙️
//         </div>
//       </div>

//       {showAdmin && <ProductForm refresh={fetchProducts} />}

//       <SearchFilter products={products} setFiltered={setFilteredProducts} />
//       <ProductList products={filteredProducts} />
//     </div>


           
//   );
// }

// export default App;



// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { getProducts } from "./services/api";
// import ProductForm from "./components/ProductForm";
// import ProductList from "./components/ProductList";
// import SearchFilter from "./components/SearchFilter";
// import SmartSearch from './components/SmartSearch';           // ✅ FIXED
// import TrendingProducts from './components/TrendingProducts'; // ✅ FIXED
// import AIProductAssistant from './components/AIProductAssistant'; // ✅ FIXED

// function App() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [showAdmin, setShowAdmin] = useState(false);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const res = await getProducts();
//     setProducts(res.data);
//     setFilteredProducts(res.data);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <h2>Product Store</h2>
//         <div className="admin-btn" onClick={() => setShowAdmin(!showAdmin)}>
//           ⚙️
//         </div>
//       </div>

//       {showAdmin && <ProductForm refresh={fetchProducts} />}

//       {/* AI COMPONENTS */}
//       <SmartSearch products={products} />
//       <TrendingProducts products={products} />
      
//       <SearchFilter products={products} setFiltered={setFilteredProducts} />
//       <ProductList products={filteredProducts} />
      
//       <AIProductAssistant products={products} />
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./services/api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";
import AIProductAssistant from './components/AIProductAssistant'; // ONLY THIS ONE

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
    setFilteredProducts(res.data);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Product Store</h2>
        <div className="admin-btn" onClick={() => setShowAdmin(!showAdmin)}>
          ⚙️
        </div>
      </div>

      {showAdmin && <ProductForm refresh={fetchProducts} />}

      <SearchFilter products={products} setFiltered={setFilteredProducts} />
      <ProductList products={filteredProducts} />
      
      {/* ONLY AI ASSISTANT - NO OTHER AI FILES */}
      <AIProductAssistant products={products} />
    </div>
  );
}

export default App;