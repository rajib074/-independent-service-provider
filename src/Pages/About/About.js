import React from "react";
import image from "../../image/team (1).jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="about-left-content">
              <div className="section-title-left">
                
                <h2>About Me</h2>
                <h3>আমি রাজীব সরকার  </h3>
                <p>
                  ওয়েব ডেভলাপমেন্ট এর কাজে নতুন। এই কাজ টি ভালোভাবে শেখার অনেক
                  দিন এর ইচ্ছা,এই কাজটি দিযে আমি ভবিষৎ এ কিছু করতে চায় ,এবং আমি
                  একটি টিম বানাতে চায় যেখানে আমার সাথে আরো অনেক যেন এই কাজ এর
                  সাথে জড়িত হয়ে তাদের ভবিষৎ ভালো করতে পারে।{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-right-img mt-5 mt-md-0">
              <img src={image} alt="About" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
