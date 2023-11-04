import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { bio } from "../../data/resume-data";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//@ts-check

const Footer = (props) => {
  return (
    <Container>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="" style={{ marginLeft: "4px" }}>
          {bio.email}
        </span>
      </p>

      <a href={bio.githubUrl} target="_blank" rel="noreferrer">
        github
      </a>
      <a href={bio.linkedInUrl} target="_blank" rel="noreferrer">
        linkedIn
      </a>
    </Container>
  );
};

const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
`;
export default Footer;
