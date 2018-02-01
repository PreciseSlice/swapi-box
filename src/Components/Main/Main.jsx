import React, {Component} from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import People from '../People/People.jsx';
import Planets from '../Planets/Planets.jsx';
import Vehicles from '../Vehicles/Vehicles.jsx';
import Crawl from '../Crawl/Crawl';

// will need a favorities componet and route 

// main can be refactored out and all this can live in app

class Main extends Component {

  render(){
    const { setPeople, peopleData } = this.props;
    return (
      <div className="main">
      {/* Remove switch and move to main. div main can live witin the switch.
          Remove call to main add planets and vehicles */}
        <Switch>
          <Route exact path ="/" render={ () => (<Crawl />) } />
          <Route path ="/people" render={ () => (
            <People setPeople={setPeople} data={peopleData} />) 
          }/>
          {/* setPlanets, setVehicles methods passed as well */}
          <Route path ="/planets" render={ () => (<Planets />)}/>
          <Route path ="/vehicles" render={ () => (<Vehicles />)}/>
        </Switch>
        
      </div>
    );
  }
}

export default Main;