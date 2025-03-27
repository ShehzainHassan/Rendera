import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { BodyText, ExtraLargeText } from "../../Typography";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${RenderaPalette.beige100};
  border-radius: 30px;
  padding: 20px 40px;
`;

const ImageContainer = styled.figure<{ $cardType: "large" | "medium" }>`
  border-radius: 500px;
  img {
    width: ${({ $cardType }) => ($cardType === "medium" ? "45px" : "55px")};
    height: ${({ $cardType }) => ($cardType === "medium" ? "45px" : "55px")};
  }
`;

const Ratings = styled.figure<{ $cardType: "large" | "medium" }>`
  display: flex;
  gap: 4px;
  img {
    width: ${({ $cardType }) => ($cardType === "medium" ? "15px" : "19px")};
    height: ${({ $cardType }) => ($cardType === "medium" ? "15px" : "19px")};
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
  $cardType?: "medium" | "large";
}

export default function ClientCard({
  imgSrc,
  name,
  review,
  $cardType = "large",
}: ClientCardProps) {
  return (
    <CardContainer>
      <SubContainer>
        <ImageContainer $cardType={$cardType}>
          <img src={imgSrc} alt="pic" />
        </ImageContainer>
        <ReviewContainer>
          {$cardType === "medium" ? (
            <ExtraLargeText
              fontSize="20px"
              letterSpacing="-0.82px"
              fontFamily="Bellefair">
              {name}
            </ExtraLargeText>
          ) : (
            <ExtraLargeText
              fontSize="24px"
              $lineHeight="100%"
              letterSpacing="-1px"
              fontFamily="Bellefair">
              {name}
            </ExtraLargeText>
          )}
          <Ratings $cardType={$cardType}>
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
            <img src="/images/rating.png" alt="star" />
          </Ratings>
          {$cardType === "medium" ? (
            <BodyText
              fontSize="12px"
              $lineHeight="20px"
              color={RenderaPalette.gray800}>
              {review}
            </BodyText>
          ) : (
            <BodyText
              fontSize="14px"
              $lineHeight="24px"
              letterSpacing="0.1px"
              color={RenderaPalette.gray800}>
              {review}
            </BodyText>
          )}
        </ReviewContainer>
      </SubContainer>
    </CardContainer>
  );
}
