import React from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  display: none;

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: () => <button />,
    ...settings,
  };

  return (
    <SliderWrapper>
      <Slider {...defaultSettings}>{children}</Slider>
    </SliderWrapper>
  );
};

export default StyledSlider;
