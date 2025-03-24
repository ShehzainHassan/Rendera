import styled from "styled-components";
import { RenderaPalette } from "./Colors";
export const HeroTitle = styled.h1<{ color?: string }>`
  font-family: Bellefair, sans-serif;
  font-weight: 400;
  font-size: 72px;
  line-height: 100%;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;
export const BigHeading = styled.h2<{ color?: string }>`
  font-family: Bellefair, sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;
export const SectionTitle = styled.h3<{ color?: string }>`
  font-family: Bellefair, sans-serif;
  font-weight: 400;
  font-size: 56px;
  line-height: 100%;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;
export const SubTitle = styled.h4<{ color?: string }>`
  font-family: Bellefair, sans-serif;
  font-weight: 400;
  font-size: 42px;
  line-height: 100%;
  letter-spacing: -2px;
  text-transform: uppercase;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingBold = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingBoldWithLineHeight = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const LargeNumber = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 36.5px;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingLarge = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0px;
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
  line-height: 100%;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const HeadingLightSmall = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const ExtraLargeText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const ExtraLargeTextWithLineHeight = styled.p<{
  color?: string;
  fontFamily?: string;
}>`
  font-family: ${(props) => props.fontFamily || "Poppins, sans-serif"};
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0%;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const BigText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.82px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const LargeText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const MediumText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const MediumTextWithLineHeight = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const BodyText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const SmallText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const SmallTextWithLineHeight = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.09px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;
export const SmallTextSpaced = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const TinyText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0%;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;

export const TinyLightText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 13.69px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;
export const SmallLightText = styled.p<{ color?: string }>`
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  color: ${(props) => props.color || RenderaPalette.black1000};
`;
