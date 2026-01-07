import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeroTitle } from "../../Typography";
import { scrollToSection } from "../../utils";
import Button from "../Button/Button";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 94px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/images/hero.png");
  width: 100%;
  height: 725px;
  background-size: cover;
  background-position: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Main id="hero">
      <SubContainer>
        <HeroTitle $textAlign="center" color={RenderaPalette.white0}>
          {t("hero.title")}
        </HeroTitle>
        <Button onClick={() => scrollToSection("products-section")}>
          {t("hero.explore")}
        </Button>
      </SubContainer>
    </Main>
  );
}
