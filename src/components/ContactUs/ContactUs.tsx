import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import TitleContainer from "../TitleContainer/TitleContainer";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { HeadingSmall, MediumText } from "../../Typography";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: ${RenderaPalette.brown400};
  padding: 40px;
  gap: 40px;
`;
const InputContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const SubContainer1 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export default function ContactUs() {
  return (
    <Section>
      <SubContainer1>
        <TitleContainer
          title="Stay Inspired"
          titleSize="medium"
          subTitle="Subscribe to our newsletter for exclusive designs, special offers, and insights into the world of fine jewelry."
          titleColor={RenderaPalette.white0}
          subTitleColor={RenderaPalette.white100}
        />
        <InputContainer>
          <InputField />
          <Button
            variant="secondary"
            // color={RenderaPalette.black1000}
            // backgroundColor={RenderaPalette.yellow100}
          >
            Subscribe
          </Button>
        </InputContainer>
      </SubContainer1>

      <TextContainer>
        <HeadingSmall color={RenderaPalette.white0}>
          Join our community and receive 10% off your first order.
        </HeadingSmall>
        <MediumText color={RenderaPalette.white100}>
          By subscribing, you agree to our Privacy Policy and consent to receive
          updates from Rendera
        </MediumText>
      </TextContainer>
    </Section>
  );
}
