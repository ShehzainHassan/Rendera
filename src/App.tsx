import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/Hero/Hero";
import LatestNews from "./components/LatestNews/LatestNews";
import Reviews from "./components/Reviews/Reviews";
import Trending from "./components/Trending/Trending";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Hero />
      <Wrapper>
        <AboutUs />
        <Trending />
        <Reviews />
        <LatestNews />
      </Wrapper>
    </>
  );
}

export default App;
