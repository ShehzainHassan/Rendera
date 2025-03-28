import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import TitleContainer from "../TitleContainer/TitleContainer";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { HeadingSmall, MediumText } from "../../Typography";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: ${RenderaPalette.brown400};
  padding: 40px;
  gap: 40px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;
const InputContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 8px;
  }
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
      const response = await axios.post(
        "http://localhost:3000/newsletter/subscribe",
        {
          email,
        }
      );

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
  const { t } = useTranslation();
  return (
    <Section>
      <ToastContainer />
      <SubContainer1>
        <TitleContainer
          title={t("subscribe.title")}
          titleSize="medium"
          subTitle={t("subscribe.subtext")}
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
            $variant="secondary"
            $isDisabled={!email.trim()}
            color={RenderaPalette.black1000}>
            {t("subscribe.btnTxt")}
          </Button>
        </InputContainer>
      </SubContainer1>

      <TextContainer>
        <HeadingSmall color={RenderaPalette.white0}>
          {t("subscribe.promoTxt")}
        </HeadingSmall>
        <MediumText $lineHeight="28px" color={RenderaPalette.white100}>
          {t("subscribe.consentTxt")}
        </MediumText>
      </TextContainer>
    </Section>
  );
}
