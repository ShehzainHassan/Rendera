import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeadingBold } from "../../Typography";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 20px;

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
const Image = styled("img")`
  width: 100%;
  height: auto;
`;
export default function ImageCard() {
  return (
    <Container>
      <Image src="/images/Earrings.png" alt="earring" />
      <TextContainer>
        <HeadingBold $lineHeight="28px" color={RenderaPalette.black1000}>
          Earrings
        </HeadingBold>
      </TextContainer>
    </Container>
  );
}
