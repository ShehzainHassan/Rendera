import styled from "styled-components";
import TitleContainer from "../TitleContainer/TitleContainer";
import ClientCard from "../ClientCard/ClientCard";
import Button from "../Button/Button";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;
const ReviewsContainer = styled("div")`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export default function Reviews() {
  return (
    <Section>
      <TitleContainer
        title="What our clients say"
        subTitle="Stories from clients who have made Rendera jewelry part of their most meaningful moments."
        subTitleAlignment="center"
      />
      <ReviewsContainer>
        <ClientCard
          imgSrc="/images/client-1.png"
          name="Lois Lane"
          review="The craftsmanship of my engagement ring exceeded all expectations.
                It's become a treasured heirloom that I'll pass down for generations."
        />
        <ClientCard
          imgSrc="/images/client-2.png"
          name="Angelina Alex"
          review="The craftsmanship of my engagement ring exceeded all expectations.
                It's become a treasured heirloom that I'll pass down for generations."
        />
      </ReviewsContainer>
      <ReviewsContainer>
        <ClientCard
          cardType="medium"
          imgSrc="/images/client-2.png"
          name="Angelina Alex"
          review="The craftsmanship of my engagement ring exceeded all expectations.
                It's become a treasured heirloom that I'll pass down for generations."
        />
        <ClientCard
          cardType="medium"
          imgSrc="/images/client-2.png"
          name="Angelina Alex"
          review="The craftsmanship of my engagement ring exceeded all expectations.
                It's become a treasured heirloom that I'll pass down for generations."
        />
        <ClientCard
          cardType="medium"
          imgSrc="/images/client-2.png"
          name="Angelina Alex"
          review="The craftsmanship of my engagement ring exceeded all expectations.
                It's become a treasured heirloom that I'll pass down for generations."
        />
      </ReviewsContainer>
      <Button>View More</Button>
    </Section>
  );
}
