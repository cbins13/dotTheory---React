import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";
import FeaturedPlayer from "./FeaturedPlayer";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route path="/" component={Nav} />
      <div className="scoreboard">
        <Switch>
          <Route exact path="/">
            <Header />
            <PlayerList />
            <AddPlayerForm />
          </Route>
          <Route path="/header" component={Header} />
          <Route exact path="/playerlist" component={PlayerList} />
          <Route path="/playerlist/:name/:score?" component={FeaturedPlayer} />
          <Route path="/addplayer" component={AddPlayerForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
