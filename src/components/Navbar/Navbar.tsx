import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeadingLightSmall } from "../../Typography";
import { scrollToProducts } from "../../utils";
import { useState } from "react";

const NavbarContainer = styled.nav<{
  $showNav: boolean;
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || RenderaPalette.white0};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${({ $showNav }) => !$showNav && `display: none`}
`;
const SlideNavbar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: rgba(0, 0, 0, 0.8);
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

const NavList = styled.ul<{ $isColumnLayout?: boolean }>`
  display: flex;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ $isColumnLayout }) => ($isColumnLayout ? "flex" : "none")};
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
`;

const NavItem = styled.li`
  display: flex;
  cursor: pointer;
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
const ImageContainer = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MobileImageContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 50px;
    position: relative;
  }
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

interface NavBarProps {
  $showNav?: boolean;
  $showImage?: boolean;
  $bgColor?: string;
  $itemColor?: string;
  $hoverColor?: string;
  $$isColumnLayout?: boolean;
}

export default function Navbar({
  $showNav = true,
  $showImage = true,
  $bgColor = RenderaPalette.white0,
  $itemColor = RenderaPalette.gray700,
  $hoverColor = RenderaPalette.black950,
  $$isColumnLayout = false,
}: NavBarProps) {
  const { t } = useTranslation();
  const [isSlidingNavOpen, setIsSlidingNavOpen] = useState(false);

  return (
    <NavbarContainer backgroundColor={$bgColor} $showNav={$showNav}>
      {$showImage && (
        <MobileImageContainer>
          <Logo src="/images/logo.png" alt="logo" width={184} height={79} />
          <Hamburger
            src="/icons/hamburger.svg"
            alt="hamburger"
            onClick={() => setIsSlidingNavOpen(!isSlidingNavOpen)}
          />
        </MobileImageContainer>
      )}
      <SlideNavbar $isOpen={isSlidingNavOpen}>
        <NavList $isColumnLayout={true}>
          <NavItem>
            <Link href="https://rendera.co" target="_blank">
              <HeadingLightSmall
                hoverColor={RenderaPalette.white0}
                color={RenderaPalette.white0}>
                {t("navbar.home")}
              </HeadingLightSmall>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="https://rendera.co" target="_blank">
              <HeadingLightSmall
                hoverColor={RenderaPalette.white0}
                color={RenderaPalette.white0}>
                {t("navbar.about")}
              </HeadingLightSmall>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="https://rendera.co" target="_blank">
              <HeadingLightSmall
                hoverColor={RenderaPalette.white0}
                color={RenderaPalette.white0}>
                {t("navbar.shop")}
              </HeadingLightSmall>
            </Link>
          </NavItem>
          <NavItem onClick={scrollToProducts}>
            <HeadingLightSmall
              hoverColor={RenderaPalette.white0}
              color={RenderaPalette.white0}>
              {t("navbar.collections")}
            </HeadingLightSmall>
          </NavItem>
          <NavItem>
            <Link href="https://rendera.co" target="_blank">
              <HeadingLightSmall
                hoverColor={RenderaPalette.white0}
                color={RenderaPalette.white0}>
                {t("navbar.blog")}
              </HeadingLightSmall>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="https://rendera.co" target="_blank">
              <HeadingLightSmall
                hoverColor={RenderaPalette.white0}
                color={RenderaPalette.white0}>
                {t("navbar.contact")}
              </HeadingLightSmall>
            </Link>
          </NavItem>
        </NavList>
      </SlideNavbar>
      {$showImage && (
        <ImageContainer>
          <img src="/images/logo.png" alt="logo" width={184} height={79} />
        </ImageContainer>
      )}
      <NavList $isColumnLayout={$$isColumnLayout}>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall hoverColor={$hoverColor} color={$itemColor}>
              {t("navbar.home")}
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall hoverColor={$hoverColor} color={$itemColor}>
              {t("navbar.about")}
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall hoverColor={$hoverColor} color={$itemColor}>
              {t("navbar.shop")}
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem onClick={scrollToProducts}>
          <HeadingLightSmall hoverColor={$hoverColor} color={$itemColor}>
            {t("navbar.collections")}
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall hoverColor={$hoverColor} color={$itemColor}>
              {t("navbar.blog")}
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall hoverColor={$hoverColor} color={$itemColor}>
              {t("navbar.contact")}
            </HeadingLightSmall>
          </Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}
