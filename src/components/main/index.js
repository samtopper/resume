// import React from "react";
import styled from "styled-components";
import { bio } from "../../data/resume-data";
import avatar from "../../images/sameer.jpeg";
import Dropdown from "../dropdown";
const Main = () => {
  return (
    <>
      <Container>
        <Avatar>
          <img src={avatar} alt="sameer" />
        </Avatar>
        <AboutMe>{bio.aboutMe}</AboutMe>
      </Container>

      <Dropdown
        label="Choose a car:"
        id="cars"
        grouping={false}
        options={[
          { label: "Mercedes", value: "mercedes" },
          { label: "Audi", value: "audi" },
          { label: "Saab", value: "saab" },
          { label: "Volvo", value: "volvo" },
        ]}
        groups={[
          {
            groupLabel: "German Cars",
            options: [
              { label: "Mercedes", value: "mercedes" },
              { label: "Audi", value: "audi" },
            ],
          },
          {
            groupLabel: "Swedish Cars",
            options: [
              { label: "Volvo", value: "volvo" },
              { label: "Saab", value: "saab" },
            ],
          },
        ]}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
`;
const Avatar = styled.div`
  width: 40%;
  img {
    max-height: 300px;
    border-radius: 0 10%;
  }
`;
const AboutMe = styled.div`
  font-family: "Inconsolata", monospace;
  font-weight: bold;
  font-size: 20px;
`;

export default Main;
