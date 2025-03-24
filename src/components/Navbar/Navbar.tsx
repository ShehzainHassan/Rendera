import styled from "styled-components";
import { HeadingLightSmall } from "../../Typography";
import { RenderaPalette } from "../../Colors";

const NavbarContainer = styled("nav")`
  display: flex;
  gap: 30px;
`;
const NavList = styled("ul")`
  display: flex;
  gap: 50px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled("li")`
  display: flex;
  cursor: pointer;
  &:hover ${HeadingLightSmall} {
    font-weight: 800;
    font-size: 16px;
    color: ${RenderaPalette.peach100};
    line-height: 100%;
    letter-spacing: 0;
  }
`;
export default function Navbar() {
  return (
    <NavbarContainer>
      <NavList>
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
