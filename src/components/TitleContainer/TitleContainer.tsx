import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeroTitle, MediumText } from "../../Typography";

const Container = styled.div<{ alignment: "left" | "middle" }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignment }) =>
    alignment === "left" ? "flex-start" : "center"};
  gap: 16px;
`;

interface TitleContainerProps {
  title: string;
  titleSize?: "medium" | "large";
  subTitle: string;
  subTitleAlignment?: string;
  alignment?: "left" | "middle";
  titleColor?: string;
  subTitleColor?: string;
  maxWidth?: string;
  mobileMaxWidth?: string;
  mobileLineHeight?: string;
  mobileFontSize?: string;
}

export default function TitleContainer({
  title,
  subTitle,
  subTitleAlignment = "left",
  alignment = "middle",
  titleColor = RenderaPalette.black950,
  subTitleColor = RenderaPalette.gray700,
  titleSize = "large",
  maxWidth = "650px",
  mobileFontSize = "36px",
  mobileMaxWidth = "390px",
  mobileLineHeight = "28px",
}: TitleContainerProps) {
  return (
    <Container alignment={alignment}>
      {titleSize === "large" ? (
        <HeroTitle
          letterSpacing="-2px"
          fontSize="56px"
          mobileFontSize={mobileFontSize}
          color={titleColor}>
          {title}
        </HeroTitle>
      ) : (
        <HeroTitle
          fontSize="42px"
          mobileFontSize={mobileFontSize}
          letterSpacing="-2px"
          color={titleColor}>
          {title}
        </HeroTitle>
      )}

      <MediumText
        lineHeight={mobileLineHeight}
        mobileMaxWidth={mobileMaxWidth}
        mobileLineHeight={mobileLineHeight}
        maxWidth={maxWidth}
        color={subTitleColor}
        textAlign={subTitleAlignment}>
        {subTitle}
      </MediumText>
    </Container>
  );
}
