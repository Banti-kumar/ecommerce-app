import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getProducts } from "../services/api";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, setProducts, addToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      setLoading(true);
      getProducts().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [products, setProducts]);

  const product = products.find((p) => p.id === Number(id));

  if (loading || !product) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Loading...</h2>
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
