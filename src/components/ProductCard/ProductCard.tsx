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

const CardContainer = styled.div<{ $cardType: "medium" | "large" }>`
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
  max-width: ${({ $cardType }) => ($cardType === "large" ? "315px" : "240px")};
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
    <CardContainer $cardType={$cardType}>
      <img
        src={imageUrl}
        alt={title}
        width="100%"
        height={$cardType === "large" ? "250px" : "200px"}
      />
      <DetailsContainer>
        {$cardType === "medium" ? (
          <HeadingLarge>{title}</HeadingLarge>
        ) : (
          <HeadingLarge>{title}</HeadingLarge>
        )}

        <DescriptionContainer $cardType={$cardType}>
          {$cardType === "medium" ? (
            <BodyText
              fontSize="14px"
              $lineHeight="22px"
              letterSpacing="0.09px"
              color={RenderaPalette.gray650}>
              {description}
            </BodyText>
          ) : (
            <BodyText
              fontSize="16px"
              $lineHeight="28px"
              letterSpacing="0.11px"
              color={RenderaPalette.gray650}>
              {description}
            </BodyText>
          )}

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
            {$cardType === "medium" ? (
              <BodyText fontWeight={300} fontSize="12px">
                {rating}
              </BodyText>
            ) : (
              <BodyText fontWeight={300} fontSize="13.69px">
                {rating}
              </BodyText>
            )}
          </RatingContainer>
        </DescriptionContainer>
      </DetailsContainer>
    </CardContainer>
  );
}
