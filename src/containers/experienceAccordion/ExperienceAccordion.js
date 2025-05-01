import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
// import { Accordion, Panel } from "baseui/accordion"; // Removed Accordion imports

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    // Assuming the first section contains the work experiences we want to display directly
    const workExperiences = this.props.sections[0]?.experiences || [];

    return (
      <div className="experience-accord">
        {/* Removed Accordion and Panel structure */}
        {workExperiences.map((experience, index) => {
          return (
            <ExperienceCard
              index={index}
              totalCards={workExperiences.length}
              experience={experience}
              theme={theme}
              key={index} // Added key prop for list rendering
            />
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
