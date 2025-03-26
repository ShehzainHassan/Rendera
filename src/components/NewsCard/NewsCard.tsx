import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { BodyText, ExtraLargeText, MediumText } from "../../Typography";
import Button from "../Button/Button";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: ${RenderaPalette.beige300};
  width: 100%;
  height: auto;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const DescriptionContainer = styled("div")`
  display: flex;
  gap: 11px;
  flex-direction: column;
  padding: 5px 20px;
`;
interface NewsCardProps {
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  btnText?: string;
}
export default function NewsCard({
  imgSrc,
  date,
  title,
  description,
  btnText = "Read More",
}: NewsCardProps) {
  return (
    <Container>
      <Image src={imgSrc} alt="image" />
      <DescriptionContainer>
        <BodyText fontSize="12px" $lineHeight="20px">
          {date}
        </BodyText>
        <ExtraLargeText $lineHeight="28px" fontFamily="Bellefair">
          {title}
        </ExtraLargeText>
        <MediumText $lineHeight="24px" color={RenderaPalette.gray625}>
          {description}
        </MediumText>
        <Button size="small" $alignSelf="left">
          {btnText}
        </Button>
      </DescriptionContainer>
    </Container>
  );
}
