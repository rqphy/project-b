import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import "./index.scss";
import Header from "./Components/Header/Header";
import Bases from "./Pages/Bases/Bases";
import Frameworks from "./Pages/Frameworks/Frameworks";
import Git from "./Pages/Git/Git";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Article from "./Pages/Article/Article";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/bases" component={Bases} />
        <Route exact path="/frameworks" component={Frameworks} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/git" component={Git} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
