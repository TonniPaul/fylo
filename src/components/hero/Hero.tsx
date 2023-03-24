import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_main_container">
      <img src="/assets/illustration-intro.png" alt="" className="hero_img" />
      <h1 className="hero_header_text">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="hero_description_text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="btn">Get Started</button>
    </div>
  );
};

export default Hero;
