import React, { useState } from "react";

const SearchFilter = ({ products, setFiltered }) => {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    let result = products;

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (maxPrice) {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    setFiltered(result);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Apply</button>
    </div>
  );
};

export default SearchFilter;
