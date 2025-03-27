import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { BodyText, MediumTitle } from "../../Typography";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const FooterContainer = styled("footer")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  background-color: ${RenderaPalette.brown400};
  padding: 40px 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  overflow-x: hidden;
`;
const SubContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 43px;
  align-items: center;
`;
const NavContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 24px;
`;
const IconContainer = styled("div")`
  display: flex;
  gap: 24px;
`;
const Spacer = styled("hr")`
  width: 100%;
  height: 2px;
  border: none;
  background-color: ${RenderaPalette.yellow50};
`;
const PolicyServiceContainer = styled("div")`
  display: flex;
  gap: 43px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
const TextContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 72px;
  }
`;
const ImageContainer = styled("figure")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: ${RenderaPalette.beige200};
  border-radius: 100%;
  cursor: pointer;
`;
export default function Footer() {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <SubContainer>
        <NavContainer>
          <MediumTitle color={RenderaPalette.white0}>
            {t("footer.title")}
          </MediumTitle>
          <Spacer />
          <Navbar $showNav={true} />
        </NavContainer>

        <IconContainer>
          <ImageContainer>
            <img src="/images/facebook.png" alt="as" width={23} height={23} />
          </ImageContainer>
          <ImageContainer>
            <img src="/images/instagram.png" alt="as" width={23} height={23} />
          </ImageContainer>
        </IconContainer>
      </SubContainer>

      <Spacer />
      <TextContainer>
        <BodyText
          fontSize="14px"
          $lineHeight="22px"
          letterSpacing="0.09px"
          color={RenderaPalette.white0}>
          {t("footer.allRightsReserved")}
        </BodyText>
        <PolicyServiceContainer>
          <BodyText
            fontSize="14px"
            $lineHeight="22px"
            letterSpacing="0.09px"
            color={RenderaPalette.white0}>
            {t("footer.policy")}
          </BodyText>
          <BodyText
            fontSize="14px"
            $lineHeight="22px"
            letterSpacing="0.09px"
            color={RenderaPalette.white0}>
            {t("footer.terms_service")}
          </BodyText>
        </PolicyServiceContainer>
      </TextContainer>
    </FooterContainer>
  );
}
