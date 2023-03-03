import styled from "styled-components";
import Projects from "../projects";

import "./main.css";

import avatar from "../../images/sameer.jpeg";
import { bio } from "../../data/resume-data";
import projectsData from "../../data/projectsData.json";

const Main = () => {
  return (
    <>
      <Container>
        <Avatar>
          <img src={avatar} alt="sameer" />
        </Avatar>
        <AboutMe>
          I am a
          <Badge className="typewriter">
            <span>Frontend Developer</span>
          </Badge>
          {bio.aboutMe}
        </AboutMe>
        <div className="typewriter">
          <h1>Frontend Developer.</h1>
        </div>
      </Container>

      <Projects projects={projectsData.projects} />
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
  width: 60%;
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 20px;
`;

const Badge = styled.span`
  padding: 4px;
  background-color: orange;
`;
export default Main;
