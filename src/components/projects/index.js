import styled from "styled-components";
import { PropTypes } from "prop-types";

const Projects = ({ projects }) => {
  return (
    <>
      <h1>My Projects</h1>

      <ProjectsContainer>
        {projects.map((item, i) => (
          <ProjectTile key={i}>
            <Img
              src="https://dummyimage.com/200x200/000000/ccc.png&text=hello"
              alt="project-img"
            />
            <Title>{item.title}</Title>
            <Info>{item.info}</Info>
            <a href={item.projectLink} target="_blank" rel="noreferrer">
              {item.linkText}
            </a>
          </ProjectTile>
        ))}
      </ProjectsContainer>
    </>
  );
};
export default Projects;

Projects.propTypes = {
  projects: PropTypes.array,
};
Projects.defaultProps = {
  projects: [],
};
const ProjectTile = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  min-height: 300px;
  border-radius: 0 30px 0 0;
  padding: 10px;
  margin: 10px;
  background-color: rgb(231, 237, 227);
`;

const Title = styled.h3``;

const Info = styled.p``;

const Img = styled.img`
  border-radius: 0 30px 0 0;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
