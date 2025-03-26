import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeadingLightSmall } from "../../Typography";

const NavbarContainer = styled.nav<{ $showNav: boolean }>`
  display: flex;
  gap: 30px;
  position: relative;
  ${({ $showNav }) =>
    !$showNav &&
    `
      display: none
    `}
`;

const NavList = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

interface NavBarProps {
  $showNav?: boolean;
}

export default function Navbar({ $showNav = true }: NavBarProps) {
  return (
    <NavbarContainer $showNav={$showNav}>
      <NavList>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall color={RenderaPalette.white0}>
              Home
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall color={RenderaPalette.white0}>
              About
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall color={RenderaPalette.white0}>
              Shop
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            Collections
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall color={RenderaPalette.white0}>
              Blog
            </HeadingLightSmall>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="https://rendera.co" target="_blank">
            <HeadingLightSmall color={RenderaPalette.white0}>
              Contact
            </HeadingLightSmall>
          </Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}
