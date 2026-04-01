import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProductById } from "../services/api";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px", background: "#f5f5f5", minHeight: "100vh" }}>
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ← Back to Home
      </button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {/* Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "300px", objectFit: "cover" }}
        />

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>₹ {product.price}</h3>

          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "10px 20px",
              background: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
