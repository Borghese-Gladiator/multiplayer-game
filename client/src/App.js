import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import DefaultLayout from './components/_layouts/DefaultLayout';
import Landing from './components/Landing';
import CreateRoom from './components/CreateRoom';
import Game from './components/Game';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/game/:roomID">
            <Game />
          </Route>
          <Route path="/create">
            <CreateRoom />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;