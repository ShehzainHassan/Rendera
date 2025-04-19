import styled from "styled-components";
import ImageCard from "../ImageCard/ImageCard";
import { useTranslation } from "react-i18next";
import { CollectionsData } from "../../interfaces";
const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 80px 0px;
  }
`;

export default function ProductContainer() {
  const { t } = useTranslation();
  const collections = t("Collections", {
    returnObjects: true,
  }) as CollectionsData;
  return (
    <Container>
      {Object.values(collections).map((item, index) => (
        <ImageCard key={index} imgSrc={item.imgSrc} name={item.name} />
      ))}
    </Container>
  );
}
