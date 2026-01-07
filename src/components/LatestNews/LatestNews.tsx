import styled from "styled-components";
import TitleContainer from "../TitleContainer/TitleContainer";
import NewsCard from "../NewsCard/NewsCard";
import { useTranslation } from "react-i18next";
import { NewsData } from "../../interfaces";
import NewsSwiper from "../NewsSwiper/NewsSwiper";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  @media (max-width: 768px) {
    display: block;
    gap: 24px;
    margin-bottom: 80px;
  }
`;
const NewsContainer = styled("div")`
  display: flex;
  gap: 34px;

  @media (max-width: 768px) {
    display: none;
  }
`;
export default function LatestNews() {
  const { t } = useTranslation();
  const news = t("latest.news", { returnObjects: true }) as NewsData;
  return (
    <Section id="news">
      <TitleContainer
        title="Latest News"
        subTitle="Catch the latest updates from Rendera, including new collections, exclusive events, and exciting news from the world of luxury jewelry."
        $alignment="left"
      />
      <NewsContainer>
        {Object.values(news).map((article, index) => (
          <NewsCard
            key={index}
            imgSrc={article.imgSrc}
            date={article.date}
            title={article.title}
            description={article.description}
          />
        ))}
      </NewsContainer>
      <NewsSwiper />
    </Section>
  );
}
