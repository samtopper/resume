import styled from "styled-components";
import votingImg from "./images/voting.jpg";
import "./styles.css";

const Welcome = () => {
  return (
    <>
      <h2>SIO Elections</h2>
      <Wrapper>
        <p>
          welcome to voting application. Please sign up/ login to proceed
          further
        </p>
        <img src={votingImg} alt="voting " className="voting-img" />

        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </Wrapper>
    </>
  );
};

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;
