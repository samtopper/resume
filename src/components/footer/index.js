import styled from "styled-components";
import { bio } from "../../data/resume-data";

const Footer = (props) => {
  return (
    <Container>
      <p>you can reach me out here</p>
      <p>email: {bio.email}</p>
      <p>mobile</p>
      <p>{bio.mobile}</p>
    </Container>
  );
};

const Container = styled.div`
  background-color: aqua;
`;
export default Footer;
