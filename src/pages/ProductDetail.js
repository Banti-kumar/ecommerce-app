import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Loading or Product not found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/")}>← Back</button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <img src={product.images?.[0]} alt={product.title} width="300" />

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>₹ {product.price}</h3>

          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
