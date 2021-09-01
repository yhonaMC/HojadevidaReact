import React from "react";
import { ThemeProvider } from "styled-components";
import {
  SocialStyle,
  SocialUl,
  SocialLi,
  SocialAnchor,
  SocialIcon,
  facebook,
  twitter,
  linkedin,
  github,
} from "./StyleSocial";

const Social = () => (
  <SocialStyle>
    <SocialUl>
      <SocialLi>
        <SocialAnchor href="https://www.facebook.com" target="_blank">
          <ThemeProvider theme={facebook}>
            <SocialIcon className="fab fa-facebook" />
          </ThemeProvider>
        </SocialAnchor>
      </SocialLi>
      <SocialLi>
        <SocialAnchor href="https://www.twitter.com" target="_blank">
          <ThemeProvider theme={twitter}>
            <SocialIcon className="fab fa-twitter" />
          </ThemeProvider>
        </SocialAnchor>
      </SocialLi>
      <SocialLi>
        <SocialAnchor href="https://www.linkedin.com" target="_blank">
          <ThemeProvider theme={linkedin}>
            <SocialIcon className="fab fa-linkedin" />
          </ThemeProvider>
        </SocialAnchor>
      </SocialLi>
      <SocialLi>
        <SocialAnchor href="https://www.github.com" target="_blank">
          <ThemeProvider theme={github}>
            <SocialIcon className="fab fa-github" />
          </ThemeProvider>
        </SocialAnchor>
      </SocialLi>
    </SocialUl>
  </SocialStyle>
);

export default Social;
