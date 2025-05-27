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
Hai! This page isn’t some polished LinkedIn post - just my spot to talk about myself without the buzzwords or filters. I'm a 28-year-old software developer who works in software development for about 10 years. All the work time summed up would make roughly 6 full-time years in total. I began in backend, mostly .NET, but I’ve been drifting toward frontend lately – really wanna learn more React. Although I’m open to most roles as long as I’m a good fit. I like keeping up with new stuff, identifying and solving problems, and generally building things that I am passionate about!
<br/><br/>
When I get passionate about something, I dig deep. I’m one of those people who loves to figure out how things actually work — whether it’s the architecture of a system, the details behind electrical signals, compilers, or figuring out better workflows. When I get into something, I really want to understand it from the ground up. Weirdly, it’s kinda fun! 
<br/><br/>
I’ve always been into teamwork and planning — figuring out how to get people on the same page, set up smooth workflows, and make projects actually fun to work on. My time managing esports teams have taught me a lot. Leading an esports team on daily basis isn’t as simple as people think — it’s way harder than organizing people at a regular job. No contracts, no in-person check-ins and high interdependence. One off-day from a player can throw everything off. Making a team win under those conditions was a serious challenge that really changed my perspective on team dynamics and, honestly, generally in life.
<br/><br/>
While I do thrive in a team (there’s just something special about bouncing ideas around and building together), I’m also perfectly capable of working independently. I’m resourceful, and if I hit a wall, I don’t just stop and wait for help — I dig, experiment, read docs, poke around in the code, and usually come out the other side with a working solution (and probably a better understanding of the system too).
<br/><br/>
When it comes to keeping up with new trends, I am fully aware that a good software developer needs to keep learning throughout their entire career life and that’s exactly what I am doing. I was into technologies since like forever. For example, in my 4th grade at elementary school, I represented my school in programming for kids tournament. When it comes to technologies or anything requiring an analytical way of thinking, I learn fast and can adapt easily. This includes AI which I am really into. It is fascinating to see how it changes the industry, and I believe that a good engineer needs to learn to work with it or be left behind. I am experimenting with AI and really hope to have space to continue doing so. You can see one of such experiments on my <a href="https://github.com/m-urubek/MapHive">GitHub</a>.
<br/><br/>
My resume details my tech skills, so I won’t get into them here again much. I have a strong background in ASP.NET, mainly backend but of course also tweaking frontend quite often. I have enough frontend basics (HTML, CSS, jQuery – think simple Bootstrap like MapHive) to get things done, but I'm eager to grow significantly in this area. I'm solid on how the backend and frontend communicate. I also research and follow good programming principles to keep the code readable, scalable, efficient and maintainable. I have designed multiple projects in the end.
<br/><br/>
When I commit, I deliver. I take responsibility seriously and I care about the quality of my outputs. I catch up fast if needed, and I'm always there for colleagues, even outside of work hours, if something urgent pops up. 
<br/><br/>
Quick note on personality: I'm a friendly, easy-going extrovert. I've got a naturally softer presentation style than most tech-bros and so I connect with people very easily, especially with fellow software developers! I'm an extrovert who naturally tends to organize groups and get a group buzzing with energy. But I can switch to serious or representative mode when needed.
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