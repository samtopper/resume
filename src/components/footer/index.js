import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { bio } from "../../data/resume-data";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

//@ts-check

const Footer = (props) => {
  return (
    <Container>
      <p className="bold">reach me out here</p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="" style={{ marginLeft: "4px" }}>
          {bio.email}
        </span>
      </p>
      <p>
        <FontAwesomeIcon icon={faMobile} />
        <span className="" style={{ marginLeft: "4px" }}>
          {bio.mobile}
        </span>
      </p>
    </Container>
  );
};

const Container = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: space-between;
`;
export default Footer;
