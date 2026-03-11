import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./AboutMe.css";

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
                <img src={require(`../../assets/images/${aboutMeData.image_path}`)} alt="About Me" />
              </div>
              <div className="about-heading-text-div">
                <h1 className="about-heading-text" style={{ color: theme.text }}>
                  {aboutMeData.title}
                </h1>
                <p className="about-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  Hey! So you clicked "More About Me" — brave choice. Here's the unfiltered version.
                  <br />
                  <br />
                  I'm a software developer with about 11 years in the field. Started in backend with ASP.NET, eventually
                  went full stack, and now I work mostly with TypeScript, React and Node.js. Somewhere along the way I
                  also got into building interactive 3D configurators and hand-crafting 3D models of real products —
                  turns out making things spin on screen is unreasonably satisfying.
                  <br />
                  <br />
                  More recently, I've been deep into AI — building orchestration workflows, setting up infrastructure
                  for agentic coding, and training teams to actually use this stuff instead of just talking about it. I
                  genuinely believe AI is reshaping how we write software, and I'd rather be steering that wave than
                  watching it from the beach. I've been building AI products and designing AI-powered pipelines, and
                  honestly, it's the most fun I've had in tech besides spinny thingies.
                  <br />
                  <br />
                  I care about how teams work together. I've led dev teams, coordinated cross-functional projects,
                  mentored juniors, and dealt with customers directly — gathering feedback, presenting solutions,
                  occasionally nodding along to feature requests that defy the laws of physics. I also spent a few years
                  managing competitive esports teams, which sounds silly on paper but was genuinely harder than most
                  "real" management I've done. Try keeping five unpaid gamers aligned on strategy with zero contracts
                  and no office. It teaches you things no Scrum certification ever will.
                  <br />
                  <br />
                  When I hit a wall, I don't sit around waiting for someone to fix it. I dig into docs, experiment, read
                  source code, and usually come out the other side with a solution and a slightly concerning number of
                  browser tabs. I pick things up fast and I'm always curious about how stuff actually works under the
                  hood — not just "what button do I press" but "why does pressing it do that."
                  <br />
                  <br />
                  Personality-wise: friendly extrovert with a softer vibe than most people in tech. I connect easily
                  with people, I like getting a group's energy going, and I can switch to serious mode when the
                  situation calls for it. I take ownership of my work, I deliver what I commit to, and I'm the kind of
                  colleague who'll hop on a call at weird hours if something's on fire.
                  <br />
                  <br />
                  Outside of work — I'm into philosophy, I like being social, and I have strong opinions about memes. I
                  used to play a lot of video games but quit for good. I can still talk about them for hours though, so
                  consider that a warning.
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
