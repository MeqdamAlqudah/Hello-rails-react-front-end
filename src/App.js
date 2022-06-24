import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateGreeting from "./components/CreateGreeting.js";
import GreetingMessages from "./components/GreetingMessages.js"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<h1>Home Page</h1>}/>
      <Route path = "/Greeting" element = {<GreetingMessages/>}/>
      <Route path="/createGreeting" element = {<CreateGreeting/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
