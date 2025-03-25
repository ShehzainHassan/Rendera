import styled from "styled-components";
import ImageCard from "../ImageCard/ImageCard";
const Container = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
