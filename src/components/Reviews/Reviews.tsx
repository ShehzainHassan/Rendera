import styled from "styled-components";
import TitleContainer from "../TitleContainer/TitleContainer";
import ClientCard from "../ClientCard/ClientCard";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { ReviewsData } from "../../interfaces";

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
    display: none;
  }
`;
export default function Reviews() {
  const { t } = useTranslation();
  const reviews = t("clients.reviews", { returnObjects: true }) as ReviewsData;
  const reviewList = Object.values(reviews);
  return (
    <Section>
      <TitleContainer
        title={t("clients.title")}
        subTitle={t("clients.subtext")}
        subTitleAlignment="center"
      />
      <ReviewsContainer>
        {reviewList.slice(0, 2).map((client, index) => (
          <ClientCard
            key={index}
            imgSrc={client.imgSrc}
            name={client.name}
            review={client.review}
            $cardType={client.cardType}
          />
        ))}
      </ReviewsContainer>
      <ReviewsContainer>
        {reviewList.slice(2, reviewList.length).map((client, index) => (
          <ClientCard
            key={index}
            imgSrc={client.imgSrc}
            name={client.name}
            review={client.review}
            $cardType={client.cardType}
          />
        ))}
      </ReviewsContainer>
      <Button>{t("clients.button")}</Button>
    </Section>
  );
}
