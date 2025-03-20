import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  color?: string;
}

const Button = styled.button<ButtonProps>`
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

export default Button;
