import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Components from "./components";
import BackToTopButton from "./components/backToTopButton";
// import VotingApp from "./voting-app";

function App() {
  return (
    <>
      {/* <VotingApp /> */}

      <AppContainer>
        <Header />
        <Main />
        <Footer />
        <BackToTopButton />
      </AppContainer>

      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/components" element={<Components />} />
      </Routes>
    </>
  );
}

const AppContainer = styled.div`
  margin: 0 10px;
`;
export default App;
