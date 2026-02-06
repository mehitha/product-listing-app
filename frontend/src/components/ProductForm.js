// import React, { useState } from "react";
// import { addProduct } from "../services/api";

// const ProductForm = ({ refresh }) => {
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addProduct({
//       ...form,
//       price: Number(form.price),
//     });
//     setForm({ name: "", price: "", category: "", image: "" });
//     refresh();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="price" type="number" placeholder="Price" onChange={handleChange} />
//       <input name="category" placeholder="Category" onChange={handleChange} />
//       <input name="image" placeholder="Image URL" onChange={handleChange} />
//       <button>Add Product</button>
//     </form>
//   );
// };

// export default ProductForm;


// import React, { useState } from "react";
// import { addProduct } from "../services/api";

// const ProductForm = ({ refresh }) => {
//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     category: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addProduct({
//       ...form,
//       price: Number(form.price),
//     });
//     setForm({ name: "", price: "", category: "", image: "" });
//     refresh();
//   };

//   return (
//     <form className="product-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <input 
//           className="form-input" 
//           name="name" 
//           placeholder="Product Name" 
//           value={form.name}
//           onChange={handleChange} 
//         />
//         <input 
//           className="form-input" 
//           name="price" 
//           type="number" 
//           placeholder="Price (₹)" 
//           value={form.price}
//           onChange={handleChange} 
//         />
//         <input 
//           className="form-input" 
//           name="category" 
//           placeholder="Category" 
//           value={form.category}
//           onChange={handleChange} 
//         />
//         <input 
//           className="form-input" 
//           name="image" 
//           placeholder="Image URL (optional)" 
//           value={form.image}
//           onChange={handleChange} 
//         />
//         <button className="add-btn" type="submit">
//           ➕ Add Product
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProductForm;



import React, { useState } from "react";
import { addProduct } from "../services/api";

const ProductForm = ({ refresh }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct({
      ...form,
      price: Number(form.price),
    });
    setForm({ name: "", price: "", category: "", image: "" });
    refresh();
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <input 
        className="form-input"
        name="name" 
        placeholder="Product Name" 
        value={form.name}
        onChange={handleChange} 
      />
      <input 
        className="form-input"
        name="price" 
        type="number" 
        placeholder="Price (₹)" 
        value={form.price}
        onChange={handleChange} 
      />
      <input 
        className="form-input"
        name="category" 
        placeholder="Category" 
        value={form.category}
        onChange={handleChange} 
      />
      <input 
        className="form-input"
        name="image" 
        placeholder="Image URL (optional)" 
        value={form.image}
        onChange={handleChange} 
      />
      <button type="submit">➕</button>
    </form>
  );
};

export default ProductForm;
