import styled from "styled-components";
import { MediumText, SectionTitle, SubTitle } from "../../Typography";
import { RenderaPalette } from "../../Colors";

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
  alignment?: "left" | "middle";
  titleColor?: string;
  subTitleColor?: string;
}

export default function TitleContainer({
  title,
  subTitle,
  alignment = "middle",
  titleColor = RenderaPalette.black950,
  subTitleColor = RenderaPalette.gray700,
  titleSize = "large",
}: TitleContainerProps) {
  return (
    <Container alignment={alignment}>
      {titleSize === "large" ? (
        <SectionTitle color={titleColor}>{title}</SectionTitle>
      ) : (
        <SubTitle color={titleColor}>{title}</SubTitle>
      )}

      <MediumText color={subTitleColor}>{subTitle}</MediumText>
    </Container>
  );
}
