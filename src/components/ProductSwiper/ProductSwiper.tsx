import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard/ProductCard";
import StyledSlider from "../Swiper/Swiper";
import { Products } from "../../interfaces";

const ProductSwiper = () => {
  const { t } = useTranslation();
  const products = t("trending.products", { returnObjects: true }) as Products;
  return (
    <StyledSlider>
      {Object.entries(products).map(([key, product]) => (
        <ProductCard
          key={key}
          imageUrl={product.imgUrl}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          $cardType="medium"
        />
      ))}
    </StyledSlider>
  );
};

export default ProductSwiper;
