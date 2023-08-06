import { Container, List, NavItem, PageRightCenter } from "./styles";
import { bio } from "../../data/resume-data";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo1.png";
import FileDownloadButton from "../downloadFile";

const Header = (props) => {
  return (
    <Container className="">
      <img src={logo} alt="logo" className="logo" style={{ width: "100px" }}></img>
      <Name className="bold">{"My Portfolio"}</Name>

      <nav>
        <List>
          <NavItem>
            <Link to="/components">Components</Link>
          </NavItem>
          <NavItem>
            <FileDownloadButton />
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
