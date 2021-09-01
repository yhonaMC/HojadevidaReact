import React from "react";
import {
  SkillContainer,
  SkillsH5,
  SkillsLine,
  move,
  SkillsSpan,
  average,
} from "./styleSkills";

const Skills = () => (
  <div className="Skills">
    <SkillContainer>
      <div className="Skills-item">
        <SkillsH5>HTML</SkillsH5>
        <SkillsLine className="Skills-line">
          <SkillsSpan width={average[0]} />
        </SkillsLine>
      </div>
      <div className="Skills-item">
        <SkillsH5>CSS</SkillsH5>
        <SkillsLine className="Skills-line">
          <SkillsSpan width={average[1]} />
        </SkillsLine>
      </div>
      <div className="Skills-item">
        <SkillsH5>JS</SkillsH5>
        <SkillsLine className="Skills-line">
          <SkillsSpan width={average[4]} />
        </SkillsLine>
      </div>
      <div className="Skills-item">
        <SkillsH5>ReactJS</SkillsH5>
        <SkillsLine className="Skills-line">
          <SkillsSpan width={average[3]} />
        </SkillsLine>
      </div>
      <div className="Skills-item">
        <SkillsH5>Git y GitHub</SkillsH5>
        <SkillsLine className="Skills-line">
          <SkillsSpan width={average[4]} />
        </SkillsLine>
      </div>
    </SkillContainer>
  </div>
);

export default Skills;
