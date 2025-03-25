import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { MediumTextWithLineHeight, SectionTitle } from "../../Typography";
import Button from "../Button/Button";

const Section = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Article = styled("article")`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 460px;
`;
const ImageContainer = styled("figure")`
  border-radius: 20px;
`;
const SectionTitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Image = styled("img")`
  width: 590px;
  height: 480px;
  @media (max-width: 768px) {
    width: 390px;
    height: 317px;
  }
`;
export default function AboutUs() {
  return (
    <Section>
      <Article>
        <SectionTitleContainer>
          <SectionTitle>About Rendera</SectionTitle>
          <TextContainer>
            <MediumTextWithLineHeight color={RenderaPalette.gray700}>
              At Rendera, we believe in luxury, empowerment, and craftsmanship.
              Our designs are made to inspire and transform, creating timeless
              pieces for the modern individual.
            </MediumTextWithLineHeight>
            <MediumTextWithLineHeight color={RenderaPalette.gray700}>
              Each piece tells a story of elegance and sophistication, carefully
              crafted with attention to detail and a commitment to excellence
              that defines our brand.
            </MediumTextWithLineHeight>
          </TextContainer>
        </SectionTitleContainer>

        <Button alignSelf="left">Learn More</Button>
      </Article>
      <ImageContainer>
        <Image src="/images/about-us.png" alt="about" />
      </ImageContainer>
    </Section>
  );
}
