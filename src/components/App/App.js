import "./App.css";
import Title from "../Title/Title.jsx";
import Competition from "../Competition/Competition";
import Configuration from "../Configuration/Configuration";
import { useEffect, useState } from "react";
import View from "../../domain/View/View";

function App() {

  const [config, setConfig] = useState({});
  const [activeView, setActiveView] = useState(View.CONFIGURATION);

  useEffect(() => {
    console.log('qqqq', config);
    if(config.pool) setActiveView(View.COMPETITION);
  }, [config]);

  return (
    <>
      <Title text={"Contador de larga distancia"}>
      </Title>
      <Configuration setConfig={setConfig} isVisible={activeView === View.CONFIGURATION}>
      </Configuration>
      <Competition config isVisible={activeView === View.COMPETITION}>

      </Competition>
    </>
  );
}

export default App;
