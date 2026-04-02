export const getProducts = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!res.ok) throw new Error("Failed");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};