import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import { BrowserRouter, Route } from "react-router-dom";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Route path="/" component={Nav} />
    <div className="scoreboard">
      <Route path="/header" component={Header} /> 
      <Route path="/playerlist" component={PlayerList} /> 
      <Route path="/addplayer" component={AddPlayerForm} /> 
    </div>
    </div>
    
  </BrowserRouter>
);

export default App;
