import styled from "styled-components";
import Projects from "../projects";

import "./main.css";

import avatar from "../../images/sameer.jpeg";
// import { bio } from "../../data/resume-data";
import projectsData from "../../data/projectsData.json";
import SampleAgGrid from "../sampleAgGrid";
import { Profile } from "../profile";
import bgImg from "../../images/bg-img-1.webp";
const Main = () => {
  return (
    <>
      <Container>
        <Avatar>
          <img src={avatar} alt="sameer" />
        </Avatar>
        <AboutMe>
          Hi, My Name is Sameer & I am a
          <Badge className="typewriter">
            <span>Web Developer</span>
          </Badge>
          {/* {bio.aboutMe} */}
        </AboutMe>
        <div className="typewriter">
          my skills are
          <h1>React</h1>
        </div>
        <div>
          <picture>
            <source srcset={bgImg} type="image/webp" alt="bg img"></source>
            <source srcset="../../images/Sameer.png" type="image/jpeg" />
            <img src="img.jpg" alt="" />
          </picture>
        </div>
      </Container>
      <div>skills</div>
      <Profile />

      <h2>ag-grid</h2>
      <SampleAgGrid />

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
