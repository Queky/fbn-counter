import "./App.css";
import Title from "../Title/Title.jsx";
import Competition from "../Competition/Competition";
import Configuration from "../Configuration/Configuration";
import { useEffect, useState } from "react";

function App() {

  const [config, setConfig] = useState({});
  const [configVisible, setConfigVisible] = useState(true);

  useEffect(() => {
    console.log('qqqq', config);
    if(config.pool) setConfigVisible(false);
  }, [config]);

  return (
    <>
      <Title text={"Contador de larga distancia"}>
      </Title>
      <Configuration setConfig={setConfig} isVisible={configVisible}></Configuration>
      <Competition config>

      </Competition>
    </>
  );
}

export default App;
