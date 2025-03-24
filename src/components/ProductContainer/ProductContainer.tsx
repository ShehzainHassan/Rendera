import styled from "styled-components";
import ImageCard from "../ImageCard/ImageCard";
const Container = styled("div")`
  display: grid;
  grid-template-rows: repeat(4, 1);
`;
export default function ProductContainer() {
  return (
    <Container>
      <ImageCard />
    </Container>
  );
}
