import ClientCard from "../ClientCard/ClientCard";
import StyledSlider from "../Swiper/Swiper";

const reviews = [
  {
    imageUrl: "/images/client-2.png",
    name: "Angelina Alex",
    review:
      "The craftsmanship of my engagement ring exceeded all expectations. It's become a treasured heirloom that I'll pass down for generations.",
  },
  {
    imageUrl: "/images/client-2.png",
    name: "Angelina Alex",
    review:
      "The craftsmanship of my engagement ring exceeded all expectations. It's become a treasured heirloom that I'll pass down for generations.",
  },
  {
    imageUrl: "/images/client-2.png",
    name: "Angelina Alex",
    review:
      "The craftsmanship of my engagement ring exceeded all expectations. It's become a treasured heirloom that I'll pass down for generations.",
  },
];

const ReviewsSwiper = () => {
  return (
    <StyledSlider>
      {reviews.map((review, index) => (
        <div key={index}>
          <ClientCard
            $cardType="medium"
            imgSrc={review.imageUrl}
            name={review.name}
            review={review.review}
          />
        </div>
      ))}
    </StyledSlider>
  );
};

export default ReviewsSwiper;
