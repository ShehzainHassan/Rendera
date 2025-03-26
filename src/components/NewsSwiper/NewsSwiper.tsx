import NewsCard from "../NewsCard/NewsCard";
import StyledSlider from "../Swiper/Swiper";

const allNews = [
  {
    imageUrl: "/images/jewellery.png",
    date: "October 12, 2025",
    title: "The Art of Fine Jewelry Making",
    description:
      "Explore the intricate craftsmanship behind fine jewelry, where precision, skill, and passion combine to....",
  },

  {
    imageUrl: "/images/jewellery.png",
    date: "October 12, 2025",
    title: "The Art of Fine Jewelry Making",
    description:
      "Explore the intricate craftsmanship behind fine jewelry, where precision, skill, and passion combine to....",
  },
  {
    imageUrl: "/images/jewellery.png",
    date: "October 12, 2025",
    title: "The Art of Fine Jewelry Making",
    description:
      "Explore the intricate craftsmanship behind fine jewelry, where precision, skill, and passion combine to....",
  },
];

const NewsSwiper = () => {
  return (
    <StyledSlider>
      {allNews.map((news, index) => (
        <div key={index}>
          <NewsCard
            imgSrc={news.imageUrl}
            title={news.title}
            description={news.description}
            date={news.date}
          />
        </div>
      ))}
    </StyledSlider>
  );
};

export default NewsSwiper;
