import styled from "styled-components";
import { MediumText, SectionTitle } from "../../Typography";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
const TitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export default function Trending() {
  return (
    <Section>
      <TitleContainer>
        <SectionTitle>Trending Now</SectionTitle>
        <MediumText>
          Explore our best-selling collections, featuring exquisite designs for
          every occasion.
        </MediumText>
      </TitleContainer>
    </Section>
  );
}
