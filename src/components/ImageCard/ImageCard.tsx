import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeadingBoldWithLineHeight } from "../../Typography";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 280px;
  background-color: ${RenderaPalette.white0};
`;
const TextContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: aliceblue;
`;
export default function ImageCard() {
  return (
    <Container>
      <img src="/images/Earrings.png" alt="earring" />
      <TextContainer>
        <HeadingBoldWithLineHeight>Earrings</HeadingBoldWithLineHeight>
      </TextContainer>
    </Container>
  );
}
