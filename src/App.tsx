import { useRef } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LatestNews from "./components/LatestNews/LatestNews";
import NewsSwiper from "./components/NewsSwiper/NewsSwiper";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import ProductSwiper from "./components/ProductSwiper/ProductSwiper";
import Reviews from "./components/Reviews/Reviews";
import ReviewsSwiper from "./components/ReviewsSwiper/ReviewsSwiper";
import Trending from "./components/Trending/Trending";
import { Wrapper } from "./components/Wrapper/Wrapper";
import "./i18n";
function App() {
  const productRef = useRef<HTMLDivElement>(null);
  const scrollToProducts = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero scrollToProducts={scrollToProducts} />
      <Wrapper>
        <AboutUs />
        <div ref={productRef}>
          <ProductContainer />
        </div>
        <Trending />
        <ProductSwiper />
        <Reviews />
        <ReviewsSwiper />
        <LatestNews />
        <NewsSwiper />
        <ContactUs />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
