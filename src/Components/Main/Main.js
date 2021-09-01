import React from "react";
import { MainStyled, MainContainer } from "./StyleMain";

const Main = ({ children }) => (
  <MainStyled>
    <MainContainer>{children}</MainContainer>
  </MainStyled>
);

export default Main;
