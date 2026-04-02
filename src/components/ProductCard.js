import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        background: "#fff",
      }}
    >
      <img
        src={product.images?.[0]}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3 style={{ fontSize: "14px" }}>{product.title}</h3>

      <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;
