import { Container, List, NavItem } from "./styles";
import { bio } from "../../data/resume-data";

const Header = (props) => {
  const { name } = bio;

  return (
    <Container className="">
      <h1>{name}</h1>

      <nav>
        <List>
          <NavItem>
            <button>Achievements</button>
          </NavItem>
          <NavItem>
            <button>Skills</button>
          </NavItem>
          <NavItem>
            <a href={bio.linkedInUrl} target="_blank" rel="noreferrer">
              linkedIn
            </a>
          </NavItem>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
