import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { HeadingLightSmall } from "../../Typography";

const NavbarContainer = styled.nav`
  display: flex;
  gap: 30px;
  position: relative;
`;

const NavList = styled.ul<{ mobileFooter: boolean }>`
  display: ${({ mobileFooter }) => (mobileFooter ? "flex" : "none")};
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    ${({ mobileFooter }) =>
      mobileFooter &&
      `
      flex-direction: column;
      align-items: center;
      gap: 30px;
    `}
  }
`;

const NavItem = styled.li`
  display: flex;
  cursor: pointer;
`;

interface NavBarProps {
  mobileFooter?: boolean;
}

export default function Navbar({ mobileFooter = false }: NavBarProps) {
  return (
    <NavbarContainer>
      <NavList mobileFooter={mobileFooter}>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            Home
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            About
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            Shop
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            Collections
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            Blog
          </HeadingLightSmall>
        </NavItem>
        <NavItem>
          <HeadingLightSmall color={RenderaPalette.white0}>
            Contact
          </HeadingLightSmall>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}
