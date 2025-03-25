import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeroTitle, MediumText } from "../../Typography";
import Button from "../Button/Button";

const Section = styled("section")`
  display: grid;
  grid-template-columns: 6fr 6fr;
  align-items: center;
  justify-content: center;
  gap: 110px;
  @media (max-width: 768px) {
    display: flex;
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
  width: 100%;
  height: auto;
`;
export default function AboutUs() {
  return (
    <Section>
      <Article>
        <SectionTitleContainer>
          <HeroTitle letterSpacing="-2px" fontSize="56px" mobileFontSize="36px">
            About Rendera
          </HeroTitle>
          <TextContainer>
            <MediumText lineHeight="28px" color={RenderaPalette.gray700}>
              At Rendera, we believe in luxury, empowerment, and craftsmanship.
              Our designs are made to inspire and transform, creating timeless
              pieces for the modern individual.
            </MediumText>
            <MediumText lineHeight="28px" color={RenderaPalette.gray700}>
              Each piece tells a story of elegance and sophistication, carefully
              crafted with attention to detail and a commitment to excellence
              that defines our brand.
            </MediumText>
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
