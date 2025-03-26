import styled from "styled-components";
import { RenderaPalette } from "./Colors";
export const HeroTitle = styled.h1<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $mobileFontSize?: string;
  $lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  $textAlign?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Bellefair, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "72px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  text-transform: ${(props) => props.textTransform || "uppercase"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  @media (max-width: 768px) {
    font-size: ${(props) => props.$mobileFontSize || "48px"};
    ${(props) => props.$textAlign && `text-align: ${props.$textAlign};`}
  }
`;

export const MediumTitle = styled.h2<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $lineHeight?: string;
  letterSpacing?: string;
  $textAlign?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "32px"};
  line-height: ${(props) => props.$lineHeight || "28px"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  text-align: ${(props) => props.$textAlign || "left"};
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingBold = styled.p<{
  color?: string;
  $lineHeight?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  letterSpacing?: string;
  $mobileFontSize?: string;
  $mobile$lineHeight?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  @media (max-width: 768px) {
    font-size: ${(props) => props.$mobileFontSize || props.fontSize || "14px"};
    line-height: ${(props) => props.$mobile$lineHeight || "18.5px"};
  }
`;

export const LargeNumber = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 36.5px;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingLarge = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $lineHeight?: string;
  letterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "28px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingMedium = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingSmall = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingLightSmall = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $lineHeight?: string;
  $mobileFontSize?: string;
  hoverFontWeight?: number;
  hoverFontSize?: string;
  hoverColor?: string;
  mobileHoverFontWeight?: number;
  mobileHoverFontSize?: string;
  disableHover?: boolean;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  ${({ disableHover, hoverFontWeight, hoverFontSize, hoverColor, fontSize }) =>
    !disableHover &&
    `
      &:hover {
        font-weight: ${hoverFontWeight || 800};
        font-size: ${hoverFontSize || fontSize || "16px"};
        color: ${hoverColor || RenderaPalette.peach100};
      }
    `}

  @media (max-width: 768px) {
    font-size: ${(props) => props.$mobileFontSize || props.fontSize || "12px"};

    ${({
      disableHover,
      mobileHoverFontWeight,
      hoverFontWeight,
      mobileHoverFontSize,
      hoverFontSize,
      $mobileFontSize,
    }) =>
      !disableHover &&
      `
        &:hover {
          font-weight: ${mobileHoverFontWeight || hoverFontWeight || 600};
          font-size: ${
            mobileHoverFontSize || hoverFontSize || $mobileFontSize || "14px"
          };
        }
      `}
  }
`;

export const ExtraLargeText = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $lineHeight?: string;
  letterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "-1px"};
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const MediumText = styled.p<{
  color?: string;
  $textAlign?: string;
  $maxWidth?: string;
  $mobilemaxWidth?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $lineHeight?: string;
  $mobile$lineHeight?: string;
  letterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0.1px"};
  color: ${(props) => props.color || RenderaPalette.black1000};
  text-align: ${(props) => props.$textAlign || "left"};
  ${(props) => props.$maxWidth && `max-width: ${props.$maxWidth};`}

  @media (max-width: 768px) {
    ${(props) =>
      props.$mobilemaxWidth && `max-width: ${props.$mobilemaxWidth};`}
    ${(props) =>
      props.$mobile$lineHeight && `line-height: ${props.$mobile$lineHeight};`}
  }
`;

export const BodyText = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  $lineHeight?: string;
  letterSpacing?: string;
  $mobile$lineHeight?: string;
  mobileLetterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.$lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  @media (max-width: 768px) {
    line-height: ${(props) =>
      props.$mobile$lineHeight || props.$lineHeight || "20px"};
    letter-spacing: ${(props) =>
      props.mobileLetterSpacing || props.letterSpacing || "0px"};
  }
`;
