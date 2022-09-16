import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, List, NavItem } from "./styles";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Header = (props) => {
  return (
    <Container className="App-header">
      <div>
        <FontAwesomeIcon icon={solid("bars")} swapOpacity beat />
      </div>
      <h1>Explore Hyderabad</h1>

      <nav>
        <List>
          <NavItem>
            <button>Home</button>
          </NavItem>
          <NavItem>
            <button>About</button>
          </NavItem>
          <NavItem>
            <button>Contact</button>
          </NavItem>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
