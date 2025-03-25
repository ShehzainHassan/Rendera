import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeadingBoldWithLineHeight } from "../../Typography";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 280px;
  position: relative;
`;
const TextContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  width: 100%;
  background-color: ${RenderaPalette.white0};
  opacity: 80%;
  padding: 20px 0;
  bottom: 0;
`;
export default function ImageCard() {
  return (
    <Container>
      <img src="/images/Earrings.png" alt="earring" />
      <TextContainer>
        <HeadingBoldWithLineHeight color={RenderaPalette.black1000}>
          Earrings
        </HeadingBoldWithLineHeight>
      </TextContainer>
    </Container>
  );
}
