import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LatestNews from "./components/LatestNews/LatestNews";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import Reviews from "./components/Reviews/Reviews";
import Trending from "./components/Trending/Trending";
import { Wrapper } from "./components/Wrapper/Wrapper";
import "./i18n";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Wrapper>
        <AboutUs />
        <div id="products-section">
          <ProductContainer />
        </div>
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
