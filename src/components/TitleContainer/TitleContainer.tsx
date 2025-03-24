import styled from "styled-components";
import { MediumText, SectionTitle } from "../../Typography";

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
  subTitle: string;
  alignment?: "left" | "middle";
}

export default function TitleContainer({
  title,
  subTitle,
  alignment = "middle",
}: TitleContainerProps) {
  return (
    <Container alignment={alignment}>
      <SectionTitle>{title}</SectionTitle>
      <MediumText>{subTitle}</MediumText>
    </Container>
  );
}
