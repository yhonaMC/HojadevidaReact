import React from "react";
import {
  AboutS,
  Avatar,
  Img,
  Name,
  H2,
  Profession,
  Location,
} from "../Styled/style";

const About = () => {
  return (
    <AboutS>
      <div className="About-container">
        <Avatar>
          <figure>
            <Img src="../img/img.jpeg" alt="mi-avatar" />
          </figure>
        </Avatar>
        <Name>
          <H2>Yhonaiker Moncada</H2>
        </Name>
        <Profession>
          <p>Desarrollador front-end</p>
        </Profession>
        <Location>
          <p>Bogota,Colombia</p>
        </Location>
        <div className="About-social">Redes Sociales</div>
      </div>
    </AboutS>
  );
};

export default About;
