import styled from "styled-components";
import { RenderaPalette } from "../../Colors";
import { ReactNode } from "react";
import { HeadingBold, HeadingLightSmall } from "../../Typography";
interface ButtonProps {
  $variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  color?: string;
  $alignSelf?: "left" | "center" | "right";
  onClick?: () => void;
  $isDisabled?: boolean;
  children: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${({ $alignSelf = "center" }) => {
    switch ($alignSelf) {
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
  ${({ $variant }) => $variant === "secondary" && `height: 62px;`}

  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $variant }) =>
    $variant === "secondary" ? `border-radius: 16px;` : `border-radius: 62px;`}

  ${({ $variant = "primary", size = "medium" }) => {
    switch ($variant) {
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
  background-color: ${({ $variant }) =>
    $variant === "secondary"
      ? RenderaPalette.yellow100
      : RenderaPalette.tan300};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "secondary"
        ? RenderaPalette.tan300
        : RenderaPalette.brown400};
    ${HeadingBold} {
      color: ${({ $variant }) =>
        $variant === "secondary"
          ? RenderaPalette.black1000
          : RenderaPalette.white0};
    }
  }
  ${({ $isDisabled }) =>
    $isDisabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export default function Button({
  children,
  $variant,
  color = RenderaPalette.white0,
  size,
  onClick,
  $isDisabled = false,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      $variant={$variant}
      size={size}
      color={color}
      onClick={onClick}
      $isDisabled={$isDisabled}
      {...props}>
      {size === "small" ? (
        <HeadingLightSmall disableHover={true} color={color}>
          {children}
        </HeadingLightSmall>
      ) : (
        <HeadingBold color={color}>{children}</HeadingBold>
      )}
    </StyledButton>
  );
}
