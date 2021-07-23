import logo from "../../logo.svg";
import "./App.css";
import Title from "../Title/Title.jsx";
import { Subtitle } from "../Subtitle/Subtitle";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <p>Que pasa pavo</p>
    // </div>
    <Title text={"Contador de larga distancia"}>
      <Subtitle text={"Preferencias"}></Subtitle>
    </Title>
  );
}

export default App;
