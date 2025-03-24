import styled from "styled-components";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import TitleContainer from "../TitleContainer/TitleContainer";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const CardContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export default function Trending() {
  return (
    <Section>
      <TitleContainer
        title="Trending Now"
        subTitle="Explore our best-selling collections, featuring exquisite designs for
        every occasion."
      />
      <CardContainer>
        <ProductCard
          imageUrl="/images/Ring.png"
          title="Aurora Emerald Ring"
          description="An elegant emerald surrounded by diamonds on a white gold band, exuding timeless beauty."
          price="$135"
          rating="5.0 Ratings"
        />
        <ProductCard
          cardType="large"
          imageUrl="/images/Ring.png"
          title="Aurora Emerald Ring"
          description="An elegant emerald surrounded by diamonds on a white gold band, exuding timeless beauty."
          price="$135"
          rating="5.0 Ratings"
        />
        <ProductCard
          imageUrl="/images/Ring.png"
          title="Aurora Emerald Ring"
          description="An elegant emerald surrounded by diamonds on a white gold band, exuding timeless beauty."
          price="$135"
          rating="5.0 Ratings"
        />
      </CardContainer>
      <Button>Discover More</Button>
    </Section>
  );
}
