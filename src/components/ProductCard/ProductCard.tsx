import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { BodyText, HeadingLarge, LargeNumber } from "../../Typography";

interface ProductCardProps {
  $cardType?: "medium" | "large";
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  rating: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 21px;
  background-color: ${RenderaPalette.beige100};
  padding: 10px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 6.5px;
  justify-content: center;
`;

const DescriptionContainer = styled.div<{ $cardType: "medium" | "large" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export default function ProductCard({
  $cardType = "medium",
  imageUrl,
  title,
  description,
  price,
  rating,
}: ProductCardProps) {
  return (
    <CardContainer>
      <img src={imageUrl} alt={title} width="100%" height="auto" />
      <DetailsContainer>
        <HeadingLarge
          $lineHeight={$cardType === "medium" ? "24.44px" : "31.94px"}
          fontSize={$cardType === "medium" ? "24px" : "28px"}
          $whiteSpace="nowrap"
          overflow="hidden"
          $textOverflow="ellipsis"
          $maxWidth="100%">
          {title}
        </HeadingLarge>

        <DescriptionContainer $cardType={$cardType}>
          <BodyText
            fontSize={$cardType === "medium" ? "16px" : "16px"}
            $lineHeight={$cardType === "medium" ? "22px" : "28px"}
            letterSpacing={$cardType === "medium" ? "0.09px" : "0.11px"}
            color={RenderaPalette.gray650}>
            {description}
          </BodyText>

          {$cardType === "medium" ? (
            <HeadingLarge>{price}</HeadingLarge>
          ) : (
            <LargeNumber>{price}</LargeNumber>
          )}
          <RatingContainer>
            {$cardType === "medium" ? (
              <img src="/images/star.png" alt="star" width={14} height={14} />
            ) : (
              <img src="/images/star.png" alt="star" width={18} height={18} />
            )}
            <BodyText
              fontSize={$cardType === "medium" ? "12px" : "13.69px"}
              fontWeight={300}>
              {rating}
            </BodyText>
          </RatingContainer>
        </DescriptionContainer>
      </DetailsContainer>
    </CardContainer>
  );
}
