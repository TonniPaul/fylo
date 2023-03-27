import "./signUp.css";

const SignUp = () => {
  return (
    <section id="signup">
      <div className="signUp_container">
        <h3 className="signUp_header">Get early access today</h3>
        <p className="signup_description">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="signUp_form">
          <input
            type="email"
            placeholder="example@domain.com"
            name="email"
            className="email"
          />
          <button className="btn email_btn">Get Started For Free</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
