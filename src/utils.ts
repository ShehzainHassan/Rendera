export const scrollToProducts = () => {
  const products = document.getElementById("products-section");
  if (products) {
    products.scrollIntoView({ behavior: "smooth" });
  }
};
