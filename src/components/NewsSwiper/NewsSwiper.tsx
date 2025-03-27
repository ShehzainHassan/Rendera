import { useTranslation } from "react-i18next";
import NewsCard from "../NewsCard/NewsCard";
import StyledSlider from "../Swiper/Swiper";
import { NewsData } from "../../interfaces";

const NewsSwiper = () => {
  const { t } = useTranslation();
  const news = t("latest.news", { returnObjects: true }) as NewsData;

  return (
    <StyledSlider>
      {Object.values(news).map((article, index) => (
        <NewsCard
          key={index}
          imgSrc={article.imgSrc}
          date={article.date}
          title={article.title}
          description={article.description}
        />
      ))}
    </StyledSlider>
  );
};

export default NewsSwiper;
