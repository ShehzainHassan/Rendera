import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Hero from "./components/Hero/Hero";
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
      </Wrapper>
    </>
  );
}

export default App;
