import styled from 'styled-components';
import { HeroTitle } from '../../Typography';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import { RenderaPalette } from '../../Colors';
const Main = styled('main')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 94px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/hero.png');
  width: 100%;
  height: 725px;
  background-size: cover;
  background-position: center;
`;
const ImageContainer = styled('figure')`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const SubContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
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
          Jewelry That Empowers
        </HeroTitle>
        <Button>Explore Collections</Button>
      </SubContainer>
    </Main>
  );
}
