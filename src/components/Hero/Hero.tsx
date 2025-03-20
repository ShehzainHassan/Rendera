import styled from "styled-components";
import { HeadingBold, HeroTitle } from "../../Typography";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import { RenderaPalette } from "../../Colors";
const Main = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 78px;
  background-image: url("/images/hero.png");
  width: 100%;
  height: 725px;
  background-size: cover;
  background-position: center;
`;
const ImageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const SubContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;
export default function Hero() {
  return (
    <Main>
      <ImageContainer>
        <img src="/images/logo.png" alt="logo" width={184} height={79} />
        <Navbar />
      </ImageContainer>
      <SubContainer>
        <HeroTitle color={RenderaPalette.white0}>
          Luxury That Empowers
        </HeroTitle>
        <Button>
          <HeadingBold color={RenderaPalette.white0}>
            Explore Collections
          </HeadingBold>
        </Button>
      </SubContainer>
    </Main>
  );
}
