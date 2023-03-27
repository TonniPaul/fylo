import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer_sub_container">
        <img src="/assets/logo.svg" alt="" className="logo footer_logo" />
        <div className="footer_links_container">
          <div className="footer_flex address">
            <img
              src="/assets/icon-location.svg"
              alt="location"
              className="footer_icon"
            />
            <p className="location_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="footer_columns">
            <div className="footer_flex">
              <img
                src="/assets/icon-phone.svg"
                alt="phone-Icon"
                className="footer_icon"
              />
              <a href="tel:+2347025007998" className="phone">
                +1-543-123-4567
              </a>
            </div>
            <div className="footer_flex">
              <img
                src="/assets/icon-email.svg"
                alt="phone-Icon"
                className="footer_icon"
              />
              <a href="mailto:pauloluwatoni@gmail.com" className="footer_email">
                example@fylo.com
              </a>
            </div>
          </div>
          <div className="footer_columns">
            <a href="/" className="footer_links">
              About Us
            </a>
            <a href="/" className="footer_links">
              Jobs
            </a>
            <a href="/#home" className="footer_links">
              Press
            </a>
            <a href="/" className="footer_links">
              Blog
            </a>
          </div>
          <div className="footer_columns">
            <a href="/" className="footer_links">
              Contact Us
            </a>
            <a href="/" className="footer_links">
              Terms
            </a>
            <a href="/" className="footer_links">
              Privacy
            </a>
          </div>
          <div className="footer_columns socials">
            <img
              src="/assets/facebook.svg"
              alt="fb-icon"
              className="socials_icon"
            />
            <img
              src="/assets/twitter.svg"
              alt="twitter-icon"
              className="socials_icon"
            />
            <img
              src="/assets/instagram.svg"
              alt="instagram-icon"
              className="socials_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
