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
Hai, so you want to know more about me? Alright then! Let's skip the corporate buzzwords and get to it. I'm a 28-year-old software developer who started his career about 10 years ago with roughly 6 years of total time spent behind a computer screen making money. While my journey started deep in the backend with .NET, I'm increasingly drawn to frontend, especially React. Although I will be glad to consider any kind of software development job for which I have the necessary qualifications.
<br/><br/>
My technical foundation is built on a genuine fascination with how things really work – diving into the fundamental principles of computing– from architecture and electrotechnics to low-level interactions. Honestly, studying this is actually very fascinating and fun!
<br/><br/>
I also get a lot out of seeing a team work together effectively and figuring out the best way to tackle a project. I'm a big believer that getting the workflow and collaboration right can increase time efficiency and quality of pumping out code many times over. This whole area, including the stuff scrum masters handle, really interests me, and I'd be happy to step up in those ways.
<br/><br/>
While I do thrive in a team (there’s just something special about bouncing ideas around and building together), I’m also perfectly capable of working independently. I’m resourceful, and if I hit a wall, I don’t just stop and wait for help — I dig, experiment, read docs, poke around in the code, and usually come out the other side with a working solution (and probably a better understanding of the system too). 
<br/><br/>
When it comes to keeping up with new trends, I am fully aware that a good software developer needs to keep learning throughout their entire career life and that’s exactly what I am doing. I was into technologies since like forever. For example, in my 4th grade at elementary school, I represented my school in programming for kids tournament. When it comes to technologies or anything requiring an analytical way of thinking, I learn fast and can adapt easily. This includes AI. I fully grasp the significance of the benefits that AI bring into the field and am keeping up and experimenting in my free time. You can see one of such experiments on my <a href="https://github.com/m-urubek/MapHive">GitHub</a>.
<br/><br/>
My resume details my tech skills, with a strong focus on the backend. I have enough frontend basics (HTML, CSS, jQuery – think simple Bootstrap like MapHive) to get things done, but I'm eager to grow significantly in this area. I'm solid on how the backend and frontend communicate.
<br/><br/>
When I commit, I deliver. I take responsibility seriously, catch up fast if needed, and I'm always there for colleagues, even outside of work hours, if something urgent pops up.
<br/><br/>
Quick note on personality: I'm a friendly, easy-going extrovert. I've got a naturally softer presentation style than most tech-bros and so I connect with people very easily, especially with fellow software developers! I'm an extrovert who naturally tends to organize groups and get a group buzzing with energy.
<br/><br/>
When I'm not coding, you can find me being social or pondering philosophy, supporting human rights (sometimes through activism), or enjoying my side gig doing IT at a planetarium – a cool mix of tech and astronomy which I both love. For pure relaxation, it's usually Reddit, sharing silly memes on Discord or watching a TV-show from time to time. I used to do a lot of video games but that I quit for good. I can still talk about them for hours tho!
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