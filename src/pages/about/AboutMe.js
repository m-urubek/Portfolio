import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./AboutMe.css";

// TODO: Potentially move data to portfolio.js
const aboutMeData = {
  title: "More About Me",
  image_path: "about_me.svg",
};

class AboutMe extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="about-main">
        <Header theme={theme} />
        <div className="basic-about">
          <Fade bottom duration={2000} distance="40px">
            <div className="about-heading-div">
              <div className="about-heading-img-div">
                <img
                  src={require(`../../assets/images/${aboutMeData.image_path}`)}
                  alt="About Me"
                />
              </div>
              <div className="about-heading-text-div">
                <h1 className="about-heading-text" style={{ color: theme.text }}>
                  {aboutMeData.title}
                </h1>
                <p
                  className="about-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  • Software developer with ~11 years experience, strong in software development principles<br/>
                  • Keeping up with advancements in agentic coding<br/>
                  • Full stack - Backend (.NET) background, moving toward React and Node.js<br/>
                  • Strong problem-solver who identifies and resolves problems<br/>
                  • Team player with team leadership experience in software development and esports<br/>
                  • Fast learner, always up to new challenges and learning new stack<br/>
                  • Reliable, takes responsibility seriously<br/>
                  • Friendly extrovert with softer vibe, easy to work with
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default AboutMe;
