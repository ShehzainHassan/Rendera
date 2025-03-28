import React from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RenderaPalette } from "../../Colors";

const SliderWrapper = styled.div`
  display: none;

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: ${RenderaPalette.tan300};
    font-size: 20px;
  }
  .slick-dots li button:before {
    font-size: 10px;
    opacity: 1;
    color: ${RenderaPalette.gray700};
  }
  @media (max-width: 768px) {
    display: block;
    padding: 10px;
  }
`;

interface StyledSliderProps {
  settings?: Settings;
  children: React.ReactNode;
}

const StyledSlider: React.FC<StyledSliderProps> = ({ settings, children }) => {
  const defaultSettings: Settings = {
    ...settings,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1.03,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => <button />,
  };

  return (
    <SliderWrapper>
      <Slider {...defaultSettings}>{children}</Slider>
    </SliderWrapper>
  );
};

export default StyledSlider;
