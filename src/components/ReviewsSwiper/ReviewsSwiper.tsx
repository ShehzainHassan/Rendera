import { useTranslation } from "react-i18next";
import ClientCard from "../ClientCard/ClientCard";
import StyledSlider from "../Swiper/Swiper";
import { ReviewsData } from "../../interfaces";

const ReviewsSwiper = () => {
  const { t } = useTranslation();
  const reviews = t("clients.reviews", { returnObjects: true }) as ReviewsData;
  const reviewList = Object.values(reviews);

  return (
    <StyledSlider>
      {reviewList.map((review, index) => (
        <ClientCard
          key={index}
          $cardType="medium"
          imgSrc={review.imgSrc}
          name={review.name}
          review={review.review}
        />
      ))}
    </StyledSlider>
  );
};

export default ReviewsSwiper;
