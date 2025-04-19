import styled from "styled-components";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import TitleContainer from "../TitleContainer/TitleContainer";
import { useTranslation } from "react-i18next";
import { Products } from "../../interfaces";
import ProductSwiper from "../ProductSwiper/ProductSwiper";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: 768px) {
    display: block;
    gap: 24px;
  }
`;

const CardContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Center = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export default function Trending() {
  const { t } = useTranslation();
  const products = t("trending.products", { returnObjects: true }) as Products;
  return (
    <Section>
      <TitleContainer
        title={t("trending.title")}
        subTitle={t("trending.subtext")}
        subTitleAlignment="center"
      />
      <CardContainer>
        {Object.entries(products).map(([key, product]) => (
          <ProductCard
            key={key}
            imageUrl={product.imgUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            $cardType={product.cardType}
          />
        ))}
      </CardContainer>
      <ProductSwiper />

      <Center>
        <Button>{t("trending.button")}</Button>
      </Center>
    </Section>
  );
}
