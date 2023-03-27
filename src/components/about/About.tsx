import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="about_container">
        <img
          src="/assets/illustration-stay-productive.png"
          alt="about-img"
          className="about__img"
        />
        <div className="about__description_container">
          <h3 className="description_header">
            Stay productive, wherever you are
          </h3>
          <p className="description_text">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="description_text">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>

          <a href="#aa" className="about_call-to-action_container">
            <small className="see_more">See how Fylo works</small>
            <img
              src="/assets/icon-arrow.svg"
              alt="arrow-icon"
              className="see_more_img"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
