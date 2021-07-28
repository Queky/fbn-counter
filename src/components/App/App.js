import "./App.css";
import Title from "../Title/Title.jsx";
import Competition from "../Competition/Competition";
import Configuration from "../Configuration/Configuration";
import { useEffect, useState } from "react";

function App() {

  const [config, setConfig] = useState({lane: 0});

  useEffect(() => {
    //console.log('qqqq', config);
  }, [config]);

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
    <>
      <Title text={"Contador de larga distancia"}>
      </Title>
      <Configuration setConfig={setConfig}></Configuration>
      <Competition config>

      </Competition>
    </>
  );
}

export default App;
