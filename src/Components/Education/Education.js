import React from "react";
import H2Styled from "../Styled/H2Styled";
import H3Styled from "../Styled/H3Styled";
import PStyled from "../Styled/PStyled";

const Education = () => {
  return (
    <div className="Education">
      <H2Styled>Estudios</H2Styled>
      <div className="Education-container">
        <div className="Education-item">
          <H3Styled>
            Santiago Mariño - <span>2018</span>
          </H3Styled>
          <PStyled>Ingeniería en sistema</PStyled>
        </div>
        <div className="Education-item">
          <H3Styled>
            Academia Geek - <span>2021</span>
          </H3Styled>
          <PStyled>Cerificado desarrollador front-end</PStyled>
        </div>
      </div>
    </div>
  );
};

export default Education;
