import { useState } from "react";

export default function App() {
  const productsData = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000 },
    { id: 3, name: "Shoes", category: "Fashion", price: 3000 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 1000 },
  ];

  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === category
        );

  return (
    <div style={styles.container}>
      <h1>Product Listing UI</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.select}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      <div style={styles.products}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>

            <p>Category: {product.category}</p>

            <p>Price: ₹{product.price}</p>

            <button style={styles.button}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
  },

  select: {
    padding: "10px",
    marginBottom: "20px",
  },

  products: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    border: "1px solid #ccc",
    padding: "20px",
    width: "200px",
    borderRadius: "10px",
  },

  button: {
    padding: "10px",
    cursor: "pointer",
  },
};