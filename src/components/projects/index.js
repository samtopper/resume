import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>

      <ProjectTile>
        <Img
          src="https://dummyimage.com/200x200/000000/ccc.png&text=hello"
          alt="project-img"
        />
        <Title>Explore Hyderabad</Title>
        <Info>
          display locations and information about historical places & amusement
          parks in & around Hyderabad.
        </Info>
        <a
          href="https://github.com/samtopper/explore-hyderabad"
          target="_blank"
          rel="noreferrer"
        >
          hyderabad - places to visit
        </a>
      </ProjectTile>
    </>
  );
};
export default Projects;

const ProjectTile = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  min-height: 300px;
  border-radius: 0 30px 0 0;
  padding: 10px;
  background-color: rgb(231, 237, 227);
`;

const Title = styled.h3``;

const Info = styled.p``;

const Img = styled.img`
  border-radius: 0 30px 0 0;
`;
