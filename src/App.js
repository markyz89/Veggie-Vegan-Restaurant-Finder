import React, { Component } from 'react';
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      restaurants: [
      {
        title: "Henderson's",
        position: {lat: 55.9541839, lng: -3.2004868}
      },
      {
        title: "Nova Pizza",
        position: {lat: 55.9566963, lng: -3.2050091}
      }

      ] 
    }
  }


  render() {
    return (
      <div className="App">
        <div className="componentContainer">
         <div className="sidebarContainer">
            <Sidebar />
          </div>
         <div className="mapContainer">   
          <Map
          restaurants = {this.state.restaurants} />
         </div>
        </div>
      </div>
    );
  }
}

export default App;
