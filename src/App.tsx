import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LatestNews from "./components/LatestNews/LatestNews";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import Reviews from "./components/Reviews/Reviews";
import Trending from "./components/Trending/Trending";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Hero />
      <Wrapper>
        <AboutUs />
        <ProductContainer />
        <Trending />
        <Reviews />
        <LatestNews />
        <ContactUs />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
