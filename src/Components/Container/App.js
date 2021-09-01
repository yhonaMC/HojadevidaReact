import React from "react";
import Main from "../Main/Main";
import { SideBar } from "../Sidebar/Sidebar";
import Info from "../info/info";
import About from "../About/About";
import Education from "../Education/Education";
import Experiencia from "../Experiencia/Experiencia";
import Certificate from "../Certificado/Certificado";
import Skills from "../Skill/Skills";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }

`;

const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <SideBar>
        <About />
      </SideBar>
      <Info>
        <Education />
        <Experiencia />
        <Certificate />
        <Skills />
      </Info>
    </Main>
  );
};

export default App;
