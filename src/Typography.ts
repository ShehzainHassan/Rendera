import styled from "styled-components";
import { RenderaPalette } from "./Colors";
export const HeroTitle = styled.h1<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  mobileFontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Bellefair, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "72px"};
  line-height: ${(props) => props.lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  text-transform: ${(props) => props.textTransform || "uppercase"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFontSize || "48px"};
    text-align: center;
  }
`;

export const MediumTitle = styled.h2<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "32px"};
  line-height: ${(props) => props.lineHeight || "28px"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  text-align: ${(props) => props.textAlign || "left"};
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingBold = styled.p<{
  color?: string;
  lineHeight?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  letterSpacing?: string;
  mobileFontSize?: string;
  mobileLineHeight?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 700};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFontSize || props.fontSize || "14px"};
    line-height: ${(props) => props.mobileLineHeight || "18.5px"};
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
  lineHeight?: string;
  letterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || "28px"};
  line-height: ${(props) => props.lineHeight || "100%"};
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
  lineHeight?: string;
  mobileFontSize?: string;
  hoverFontWeight?: number;
  hoverFontSize?: string;
  hoverColor?: string;
  mobileHoverFontWeight?: number;
  mobileHoverFontSize?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 500};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.lineHeight || "100%"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  &:hover {
    font-weight: ${(props) => props.hoverFontWeight || 800};
    font-size: ${(props) => props.hoverFontSize || props.fontSize || "16px"};
    color: ${(props) => props.hoverColor || RenderaPalette.peach100};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.mobileFontSize || props.fontSize || "12px"};

    &:hover {
      font-weight: ${(props) =>
        props.mobileHoverFontWeight || props.hoverFontWeight || 600};
      font-size: ${(props) =>
        props.mobileHoverFontSize ||
        props.hoverFontSize ||
        props.mobileFontSize ||
        "14px"};
    }
  }
`;

export const ExtraLargeText = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "24px"};
  line-height: ${(props) => props.lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "-1px"};
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const MediumText = styled.p<{
  color?: string;
  textAlign?: string;
  maxWidth?: string;
  mobileMaxWidth?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  mobileLineHeight?: string;
  letterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0.1px"};
  color: ${(props) => props.color || RenderaPalette.black1000};
  text-align: ${(props) => props.textAlign || "left"};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}

  @media (max-width: 768px) {
    ${(props) => props.mobileMaxWidth && `max-width: ${props.mobileMaxWidth};`}
    ${(props) =>
      props.mobileLineHeight && `line-height: ${props.mobileLineHeight};`}
  }
`;

export const BodyText = styled.p<{
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  mobileLineHeight?: string;
  mobileLetterSpacing?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: ${(props) => props.lineHeight || "100%"};
  letter-spacing: ${(props) => props.letterSpacing || "0px"};
  color: ${(props) => props.color || RenderaPalette.black1000};

  @media (max-width: 768px) {
    line-height: ${(props) =>
      props.mobileLineHeight || props.lineHeight || "20px"};
    letter-spacing: ${(props) =>
      props.mobileLetterSpacing || props.letterSpacing || "0px"};
  }
`;
