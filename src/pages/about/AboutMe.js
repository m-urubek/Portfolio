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
  bulletPoints: [
    {
      bold: "Software developer",
      text: "with ~11 years of experience across many projects, strong in software development principles",
    },
    {
      bold: "AI builder",
      text: "- designing AI orchestrations, AI products and utilizing agentic coding",
    },
    {
      bold: "Full stack",
      text: "- backend (ASP.NET) background, moving toward Typescript, React and Node.js",
    },
    {
      bold: "Product-Minded",
      text: "- moving beyond the backlog to proactively spot and solve problems before they even happen",
    },
    {
      bold: "Efficiency Focused",
      text: "- prioritizing solid tooling and environment setup for a frictionless development",
    },
    {
      bold: "Reliable",
      text: "- strong sense of ownership and drive for empowerment",
    },
    {
      bold: "Fast learner",
      text: "- proactively seeking new ways to widen my horizons and expertise",
    },
    {
      bold: "People person",
      text: "- leading teams, coordinating work and consulting customers",
    },
    {
      bold: "Friendly extrovert",
      text: "with softer vibe, easy to work with",
    },
  ],
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
                <img src={require(`../../assets/images/${aboutMeData.image_path}`)} alt="About Me" />
              </div>
              <div className="about-heading-text-div">
                <h1 className="about-heading-text" style={{ color: theme.text }}>
                  {aboutMeData.title}
                </h1>
                <p className="about-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {aboutMeData.bulletPoints.map((point, index) => (
                    <React.Fragment key={index}>
                      • <strong>{point.bold}</strong> {point.text}
                      {index < aboutMeData.bulletPoints.length - 1 && <br />}
                    </React.Fragment>
                  ))}
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
