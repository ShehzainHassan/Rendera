import styled from "styled-components";
import { MediumText, SectionTitle } from "../../Typography";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
interface TitleContainerProps {
  title: string;
  subTitle: string;
}
export default function TitleContainer({
  title,
  subTitle,
}: TitleContainerProps) {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      <MediumText>{subTitle}</MediumText>
    </Container>
  );
}
