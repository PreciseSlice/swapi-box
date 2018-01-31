import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import People from '../People/People.jsx';
import Planets from '../Planets/Planets.jsx';
import Vehicles from '../Vehicles/Vehicles.jsx';
//import { Link } from 'react-router-dom'

const Main = (props) => {
  return (
    <div className="main">
      <Switch>
        <Route exact path ='/people' component={ People }/>
        <Route exact path ='/planets' component={ Planets }/>
        <Route exact path ='/vehicles' component={ Vehicles }/>
      </Switch>
    </div>
  );
};

export default Main;