import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { MediumTitle, SmallTextWithLineHeight } from "../../Typography";
import Navbar from "../Navbar/Navbar";

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
`;
const TextContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
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
  return (
    <FooterContainer>
      <SubContainer>
        <NavContainer>
          <MediumTitle color={RenderaPalette.white0}>Quick Links</MediumTitle>
          <Spacer />
          <Navbar />
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
        <SmallTextWithLineHeight color={RenderaPalette.white0}>
          © 2025 Rendera Jewelry. All rights reserved
        </SmallTextWithLineHeight>
        <PolicyServiceContainer>
          <SmallTextWithLineHeight color={RenderaPalette.white0}>
            Privacy Policy
          </SmallTextWithLineHeight>
          <SmallTextWithLineHeight color={RenderaPalette.white0}>
            Terms of Service
          </SmallTextWithLineHeight>
        </PolicyServiceContainer>
      </TextContainer>
    </FooterContainer>
  );
}
