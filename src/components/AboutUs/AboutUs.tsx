import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeroTitle, MediumText } from "../../Typography";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";

const Section = styled("section")`
  display: grid;
  grid-template-columns: 6fr 6fr;
  align-items: center;
  justify-content: center;
  gap: 110px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 32px;
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
  const { t } = useTranslation();
  return (
    <Section>
      <Article>
        <SectionTitleContainer>
          <HeroTitle
            letterSpacing="-2px"
            fontSize="56px"
            $mobileFontSize="36px">
            {t("about.title")}
          </HeroTitle>
          <TextContainer>
            <MediumText $lineHeight="28px" color={RenderaPalette.gray700}>
              {t("about.subtext1")}
            </MediumText>
            <MediumText $lineHeight="28px" color={RenderaPalette.gray700}>
              {t("about.subtext2")}
            </MediumText>
          </TextContainer>
        </SectionTitleContainer>

        <Button $alignSelf="left">{t("about.button")}</Button>
      </Article>
      <ImageContainer>
        <Image src="/images/about-us.png" alt="about" />
      </ImageContainer>
    </Section>
  );
}
