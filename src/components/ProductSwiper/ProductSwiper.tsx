import ProductCard from "../ProductCard/ProductCard";
import StyledSlider from "../Swiper/Swiper";

const products = [
  {
    imageUrl: "/images/Ring.png",
    title: "Aurora Emerald Ring",
    description:
      "An elegant emerald surrounded by diamonds on a white gold band, exuding timeless beauty.",
    price: "$135",
    rating: "5.0 Ratings",
  },
  {
    imageUrl: "/images/Ring.png",
    title: "Aurora Emerald Ring",
    description:
      "An elegant emerald surrounded by diamonds on a white gold band, exuding timeless beauty.",
    price: "$135",
    rating: "5.0 Ratings",
  },
  {
    imageUrl: "/images/Ring.png",
    title: "Aurora Emerald Ring",
    description:
      "An elegant emerald surrounded by diamonds on a white gold band, exuding timeless beauty.",
    price: "$135",
    rating: "5.0 Ratings",
  },
];

const ProductSwiper = () => {
  return (
    <StyledSlider>
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard
            $cardType="medium"
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        </div>
      ))}
    </StyledSlider>
  );
};

export default ProductSwiper;
