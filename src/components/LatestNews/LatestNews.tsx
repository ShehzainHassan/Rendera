import styled from "styled-components";
import TitleContainer from "../TitleContainer/TitleContainer";
import NewsCard from "../NewsCard/NewsCard";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;
const NewsContainer = styled("div")`
  display: flex;
  gap: 34px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default function LatestNews() {
  return (
    <Section>
      <TitleContainer
        title="Latest News"
        subTitle="Catch the latest updates from Rendera, including new collections, exclusive events, and exciting news from the world of luxury jewelry."
        alignment="left"
      />
      <NewsContainer>
        <NewsCard
          imgSrc="/images/jewellery.png"
          date="October 12, 2025"
          title="The Art of Fine Jewelry Making"
          description="Explore the intricate craftsmanship behind fine jewelry, where precision, skill, and passion combine to...."
        />
        <NewsCard
          imgSrc="/images/jewellery.png"
          date="October 12, 2025"
          title="The Art of Fine Jewelry Making"
          description="Explore the intricate craftsmanship behind fine jewelry, where precision, skill, and passion combine to...."
        />
        <NewsCard
          imgSrc="/images/jewellery.png"
          date="October 12, 2025"
          title="The Art of Fine Jewelry Making"
          description="Explore the intricate craftsmanship behind fine jewelry, where precision, skill, and passion combine to...."
        />
      </NewsContainer>
    </Section>
  );
}
