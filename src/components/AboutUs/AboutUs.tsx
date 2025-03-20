import styled from "styled-components";
import { MediumText, SectionTitle } from "../../Typography";
import Button from "../Button/Button";
import { RenderaPalette } from "../../Colors";

const Section = styled("section")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 110px;
  max-width: 1200px;
  padding: 120px;
  margin: 0 auto;
`;
const Article = styled("article")`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ImageContainer = styled("div")`
  border-radius: 20px;
`;
const ButtonContainer = styled("div")`
  display: flex;
  align-items: center;
`;
export default function AboutUs() {
  return (
    <Section>
      <Article>
        <SectionTitle>About Rendera</SectionTitle>
        <TextContainer>
          <MediumText color={RenderaPalette.gray700}>
            At Rendera, we believe in luxury, empowerment, and craftsmanship.
            Our designs are made to inspire and transform, creating timeless
            pieces for the modern individual.
          </MediumText>
          <MediumText color={RenderaPalette.gray700}>
            Each piece tells a story of elegance and sophistication, carefully
            crafted with attention to detail and a commitment to excellence that
            defines our brand.
          </MediumText>
        </TextContainer>
        <ButtonContainer>
          <Button>Learn More</Button>
        </ButtonContainer>
      </Article>
      <ImageContainer>
        <img src="/images/about-us.png" alt="about" width={590} height={480} />
      </ImageContainer>
    </Section>
  );
}
