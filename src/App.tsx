import "./App.css";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/signup/SignUp";
import TestimonyCard from "./components/testimony/TestimonyCard";
import { featureData } from "./data/featureObject";
import { testimonyData } from "./data/testimony";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section id="features">
        {featureData.map((item) => (
          <Features
            key={item.id}
            description={item.description}
            title={item.title}
            image={item.image}
            altText={item.altText}
          />
        ))}
      </section>
      <About />
      <section id="testimony">
        <img src="/assets/bg-quotes.png" alt="" className="quote_icon" />
        {testimonyData.map((item) => (
          <TestimonyCard
            key={item.id}
            profession={item.profession}
            username={item.username}
            profilePhoto={item.profilePhoto}
            testimony={item.testimony}
          />
        ))}
      </section>
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
