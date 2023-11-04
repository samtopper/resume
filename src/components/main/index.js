import styled from "styled-components";
import Projects from "../projects";
import avatar from "../../images/sameer.jpeg";
import projectsData from "../../data/projectsData.json";
import bgImg from "../../images/bg-img-1.webp";
import ContactForm from "../contactForm";
import { Route, Routes } from "react-router-dom";
import Components from "..";
import { UseCases } from "../../usecases";

import "./main.css";

const Main = (props) => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/components" element={<Components />} />

        <Route path="/usecases" element={<UseCases />} />

        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </MainContainer>
  );
};

const Home = () => (
  <>
    <MeContainer>
      <Avatar>
        <img src={avatar} alt="sameer" />
      </Avatar>
      <AboutMe>
        Hi, My Name is Sameer & I am a
        <Badge className="typewriter">
          <span>Web Developer</span>
        </Badge>
        <div className="typewriter">
          my skills are
          <h1>React</h1>
        </div>
      </AboutMe>

      <div>
        <picture>
          <source srcSet={bgImg} type="image/webp" alt="bg img"></source>
          <source srcSet="../../images/Sameer.png" type="image/jpeg" />
          <img src="img.jpg" alt="" />
        </picture>
      </div>
    </MeContainer>
    <h2>Skills</h2>
    <div>html, css & JavaScript</div>
    <div>libraries used in react ecosystem</div>
    <div>
      axios, storybook, jest, react testing library, webpack, react-router,
      ag-grid, chartjs
    </div>
    <Projects projects={projectsData.projects} />
  </>
);

const MeContainer = styled.div`
  display: flex;
`;
const MainContainer = styled.div`
  margin: 0 40px;
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
