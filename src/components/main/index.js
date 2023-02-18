// import React from "react";
import styled from "styled-components";
import { bio } from "../../data/resume-data";
import avatar from "../../images/sameer.jpeg";

import Projects from "../projects";
const Main = () => {
  return (
    <>
      <Container>
        <Avatar>
          <img src={avatar} alt="sameer" />
        </Avatar>
        <AboutMe>{bio.aboutMe}</AboutMe>
      </Container>

      <Projects />
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const Avatar = styled.div`
  width: 40%;
  img {
    max-height: 300px;
    border-radius: 0 10%;
  }
`;
const AboutMe = styled.div`
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 20px;
`;

export default Main;
