import "./App.css";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { featureData } from "./objectFiles/featureObject";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div id="features">
        {featureData.map((item) => (
          <Features
            key={item.id}
            description={item.description}
            title={item.title}
            image={item.image}
            altText={item.altText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
