// import React from "react";
import styled from "styled-components";
import { bio } from "../../data/resume-data";
import avatar from "../../images/sameer.jpeg";
const Main = () => {
  console.log("bio", bio);

  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="sameer" />
      </Avatar>
      <div>{bio.aboutMe}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Avatar = styled.div`
  width: 40%;
  img {
    max-height: 300px;
  }
`;

export default Main;
