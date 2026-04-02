import ProductCard from "../components/ProductCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/api";

function Home() {
  const [products, setLocalProducts] = useState([]);
  const { setProducts } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setLocalProducts(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{ padding: "20px", background: "#f5f5f5", paddingBottom: "180px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Products</h1>
      </div>

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
