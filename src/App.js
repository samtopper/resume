import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Map from "./components/map";
import { Test } from "./components/test";

function App() {
  return (
    <div className="App">
      <Header />

      <Test />
      <Map />

      <Footer />
    </div>
  );
}

export default App;
