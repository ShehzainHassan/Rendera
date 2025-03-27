import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { HeroTitle } from "../../Typography";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import { RenderaPalette } from "../../Colors";
import { useTranslation } from "react-i18next";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 94px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/images/hero.png");
  width: 100%;
  height: 725px;
  background-size: cover;
  background-position: center;
`;

const ImageContainer = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const MobileImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 45px;
  padding-right: 45px;
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Hamburger = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

const SlideNavbar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: rgba(0, 0, 0, 0.9);
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100vh;
  padding-top: 50px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: ${RenderaPalette.white0};
  cursor: pointer;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsNavbarOpen(false);
      }
    };

    if (isNavbarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavbarOpen]);

  const { t } = useTranslation();
  const scrollToProducts = () => {
    const products = document.getElementById("products-section");
    if (products) {
      products.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Main>
      {isMobile ? (
        <MobileImageContainer>
          <Logo src="/images/logo.png" alt="logo" width={184} height={79} />
          <Hamburger
            src="/icons/hamburger.svg"
            alt="hamburger"
            onClick={() => setIsNavbarOpen(true)}
          />
        </MobileImageContainer>
      ) : (
        <ImageContainer>
          <img src="/images/logo.png" alt="logo" width={184} height={79} />
          <Navbar />
        </ImageContainer>
      )}

      <SlideNavbar $isOpen={isNavbarOpen} ref={navbarRef}>
        <CloseButton onClick={() => setIsNavbarOpen(false)}>×</CloseButton>
        <Navbar $showNav={true} />
      </SlideNavbar>

      <SubContainer>
        <HeroTitle $textAlign="center" color={RenderaPalette.white0}>
          {t("hero.title")}
        </HeroTitle>
        <Button onClick={scrollToProducts}> {t("hero.explore")}</Button>
      </SubContainer>
    </Main>
  );
}
