import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Footer() {
  const { totalItems, totalPrice } = useContext(CartContext);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "60px",
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        boxSizing: "border-box",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
        zIndex: 1000,
      }}
    >
      <span
        style={{
          fontSize: "14px",
          color: "#6b7280",
          fontWeight: "500",
        }}
      >
        Items: <strong style={{ color: "#111827" }}>{totalItems}</strong>
      </span>

      <span
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#111827",
          whiteSpace: "nowrap",
        }}
      >
        Total: ₹ {totalPrice}
      </span>
    </div>
  );
}

export default Footer;
