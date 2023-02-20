import { Container, List, NavItem, PageRightCenter } from "./styles";
import { bio } from "../../data/resume-data";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { name } = bio;

  return (
    <Container className="">
      <Name className="bold">{name}</Name>

      <nav>
        <List>
          <NavItem>
            <Link to="/components">Components</Link>
          </NavItem>
          <NavItem>
            <button>Achievements</button>
          </NavItem>
          <NavItem>
            <a href={bio.githubUrl} target="_blank" rel="noreferrer">
              github
            </a>
          </NavItem>
          <NavItem>
            <a href={bio.linkedInUrl} target="_blank" rel="noreferrer">
              linkedIn
            </a>
          </NavItem>
        </List>
      </nav>

      <PageRightCenter>feedback</PageRightCenter>
    </Container>
  );
};

const Name = styled.h1`
  font-family: "Inconsolata", monospace;
`;
export default Header;
