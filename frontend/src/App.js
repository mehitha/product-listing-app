import React, { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./services/api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import SearchFilter from "./components/SearchFilter";

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
    </div>
  );
}

export default App;
