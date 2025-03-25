import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import TitleContainer from "../TitleContainer/TitleContainer";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { HeadingSmall, MediumText } from "../../Typography";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";

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
  const [email, setEmail] = useState("");
  const toastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const showWarning = () => {
    toast.warn("Email already subscribed!", {
      ...toastOptions,
      position: "bottom-center",
      style: {
        backgroundColor: RenderaPalette.yellow200,
        color: RenderaPalette.black1000,
      },
    });
  };
  const showGeneralError = () => {
    toast.error("Something went wrong. Please try again later.", {
      ...toastOptions,
      position: "bottom-center",
      style: {
        backgroundColor: RenderaPalette.red500,
        color: RenderaPalette.white0,
      },
    });
  };
  const showError = () => {
    toast.error("Please enter a valid email!", {
      ...toastOptions,
      position: "bottom-center",
      style: {
        backgroundColor: RenderaPalette.red500,
        color: RenderaPalette.white0,
      },
    });
  };

  const showSuccess = () => {
    toast.success("Subscription successful!", {
      ...toastOptions,
      position: "bottom-center",
      style: {
        backgroundColor: RenderaPalette.green500,
        color: RenderaPalette.white0,
      },
    });
  };
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const saveEmail = async () => {
    try {
      const response = await axios.post("http://localhost:3000/subscribe", {
        email,
      });

      if (response.status === 200) {
        showSuccess();
        setEmail("");
      }
    } catch (err: any) {
      if (err.response && err.response.status === 409) {
        showWarning();
      } else {
        showGeneralError();
      }
    }
  };

  const handleSubscribe = () => {
    if (!isValidEmail(email)) {
      showError();
      return;
    }
    saveEmail();
  };
  return (
    <Section>
      <ToastContainer />
      <SubContainer1>
        <TitleContainer
          title="Stay Inspired"
          titleSize="medium"
          subTitle="Subscribe to our newsletter for exclusive designs, special offers, and insights into the world of fine jewelry."
          subTitleAlignment="center"
          titleColor={RenderaPalette.white0}
          subTitleColor={RenderaPalette.white100}
        />
        <InputContainer>
          <InputField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleSubscribe}
            variant="secondary"
            isDisabled={!email.trim()}
            color={RenderaPalette.black1000}>
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
