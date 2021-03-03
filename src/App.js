import React,{useState} from "react";
import { Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Autoq from "./pages/Autoq";
import Customer from "./pages/Customer";
import Rules from "./pages/Rules";


const App = () => {
  const [language,setLanguage] = useState('ko');
  const [catagory,setCatagory] = useState(423);
  const [apiUrl] = useState('http://api-dev.achakey.net');

  const toggle = e => {
      setLanguage(e);
  }
  const changeCatagory = e => {
    setCatagory(e);
  }
  return (
    <>
      <Switch>
        <Route path="/" exact component={() => <Main apiUrl={apiUrl} changeCatagory={e => changeCatagory(e)} catagory={catagory} toggle={e => toggle(e)} language={language}/>} />
        <Route path="/autoq" component={() => <Autoq apiUrl={apiUrl} changeCatagory={e => changeCatagory(e)} catagory={catagory} toggle={e => toggle(e)} language={language}/>} />
        <Route path="/customer" component={() => <Customer apiUrl={apiUrl} changeCatagory={e => changeCatagory(e)} catagory={catagory} toggle={e => toggle(e)} language={language}/>} />
        <Route path="/rules" component={() => <Rules apiUrl={apiUrl} changeCatagory={e => changeCatagory(e)} catagory={catagory} toggle={e => toggle(e)} language={language}/>} />
      </Switch>
    </>
  );
}

export default App;


