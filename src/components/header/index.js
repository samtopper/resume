import { Container, List, NavItem, PageRightCenter } from "./styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo1.png";

const Header = (props) => {
  return (
    <Container className="">
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="logo"
          style={{ width: "100px" }}
          onClick={() => {
            console.log("clicked logo");
          }}
        ></img>
      </Link>
      <Name className="bold">{"Sameer Ahmed Khan"}</Name>
      <nav>
        <List>
          <NavItem>
            <Link to="/usecases">Usecases</Link>
          </NavItem>
          <NavItem>
            <Link to="/components">Components</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
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
