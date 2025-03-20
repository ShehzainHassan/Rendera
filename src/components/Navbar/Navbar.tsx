import styled from "styled-components";
import { BodyText } from "../../Typography";
import { RenderaPalette } from "../../Colors";

const NavbarContainer = styled("nav")`
  display: flex;
  gap: 30px;
`;
const NavList = styled("ul")`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled("li")`
  display: flex;
  cursor: pointer;
`;
export default function Navbar() {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <BodyText color={RenderaPalette.white0}>Home</BodyText>
        </NavItem>
        <NavItem>
          <BodyText color={RenderaPalette.white0}>About</BodyText>
        </NavItem>
        <NavItem>
          <BodyText color={RenderaPalette.white0}>Shop</BodyText>
        </NavItem>
        <NavItem>
          <BodyText color={RenderaPalette.white0}>Collections</BodyText>
        </NavItem>
        <NavItem>
          <BodyText color={RenderaPalette.white0}>Blog</BodyText>
        </NavItem>
        <NavItem>
          <BodyText color={RenderaPalette.white0}>Contact</BodyText>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}
