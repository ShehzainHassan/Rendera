import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { ReactNode } from "react";
import { HeadingBold } from "../../Typography";
interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  color?: string;
  alignSelf?: "left" | "center" | "right";
  children: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-self: ${({ alignSelf = "center" }) => {
    switch (alignSelf) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  }};
  font-family: Poppins, sans-serif;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ variant }) =>
    variant === "secondary" ? `border-radius: 16px;` : `border-radius: 62px;`}

  ${({ variant = "primary", size = "medium" }) => {
    switch (variant) {
      case "primary":
        switch (size) {
          case "small":
            return `border-radius: 42px; padding: 12px 14px;`;
          case "large":
            return `border-radius: 100px; padding: 28px 188px;`;
          default:
            return `border-radius: 62px; padding: 30px 40px;`;
        }
      case "secondary":
        switch (size) {
          case "medium":
            return `border-radius: 16px; padding: 20px 30px 18px 30px;`;
          default:
            return `border-radius: 16px; padding: 20px 30px;`;
        }
      default:
        return `border-radius: 62px; padding: 30px 40px;`;
    }
  }}

background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : RenderaPalette.tan300};

  color: ${({ color }) => (color ? color : RenderaPalette.white0)};
  &:hover {
    background-color: ${({ backgroundColor }) => {
      if (!backgroundColor) {
        return RenderaPalette.tan300 === RenderaPalette.brown400
          ? RenderaPalette.tan300
          : RenderaPalette.brown400;
      }
      return backgroundColor;
    }};
  }
`;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <StyledButton {...props}>
      <HeadingBold color={RenderaPalette.white0}>{children}</HeadingBold>
    </StyledButton>
  );
}
