import styled from "styled-components";
import ImageCard from "../ImageCard/ImageCard";
const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export default function ProductContainer() {
  return (
    <Container>
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </Container>
  );
}
