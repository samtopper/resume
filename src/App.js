import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import "./App.css";
import styled from "styled-components";
import BackToTopButton from "./components/backToTopButton";

function App() {
  return (
    <>
      <AppContainer>
        <Header />
        <Main />
        <Footer />
        <BackToTopButton />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  margin: 0 10px;
`;
export default App;
