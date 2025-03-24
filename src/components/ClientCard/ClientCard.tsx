import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import {
  ExtraLargeText,
  BigText,
  SmallTextSpaced,
  TinyText,
} from "../../Typography";

const CardContainer = styled.div<{ cardType: "big" | "medium" }>`
  display: flex;
  flex-direction: column;
  width: ${({ cardType }) => (cardType === "medium" ? "384px" : "470px")};
  height: ${({ cardType }) => (cardType === "medium" ? "184px" : "224px")};
  background-color: ${RenderaPalette.beige100};
  border-radius: 30px;
  padding: 20px 40px;
`;

const ImageContainer = styled.figure<{ cardType: "big" | "medium" }>`
  border-radius: 500px;
  img {
    width: ${({ cardType }) => (cardType === "medium" ? "45px" : "55px")};
    height: ${({ cardType }) => (cardType === "medium" ? "45px" : "55px")};
  }
`;

const Ratings = styled.figure<{ cardType: "big" | "medium" }>`
  display: flex;
  gap: 4px;
  img {
    width: ${({ cardType }) => (cardType === "medium" ? "15px" : "19px")};
    height: ${({ cardType }) => (cardType === "medium" ? "15px" : "19px")};
  }
`;

const SubContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17.25px;
  max-width: 320px;
`;

interface ClientCardProps {
  imgSrc: string;
  name: string;
  review: string;
  cardType?: "big" | "medium";
}

export default function ClientCard({
  imgSrc,
  name,
  review,
  cardType = "big",
}: ClientCardProps) {
  return (
    <CardContainer cardType={cardType}>
      <SubContainer>
        <ImageContainer cardType={cardType}>
          <img src={imgSrc} alt="pic" />
        </ImageContainer>
        <ReviewContainer>
          {cardType === "medium" ? (
            <BigText>{name}</BigText>
          ) : (
            <ExtraLargeText>{name}</ExtraLargeText>
          )}
          <Ratings cardType={cardType}>
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
          </Ratings>
          {cardType === "medium" ? (
            <TinyText color={RenderaPalette.gray800}>{review}</TinyText>
          ) : (
            <SmallTextSpaced color={RenderaPalette.gray800}>
              {review}
            </SmallTextSpaced>
          )}
        </ReviewContainer>
      </SubContainer>
    </CardContainer>
  );
}
