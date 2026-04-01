// ✅ Fetch all products
export const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
