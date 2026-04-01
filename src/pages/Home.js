import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", background: "#f5f5f5" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
