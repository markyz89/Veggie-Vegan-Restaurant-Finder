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
        position: {lat: 55.9541839, lng: -3.2004868},
      },
      {
        title: "Nova Pizza",
        position: {lat: 55.9566963, lng: -3.2050091},
      }

      ] 
    }
  
  }


componentDidMount() {
fetch('https://api.foursquare.com/v2/venues/search?ll=55.9505012,-3.1895519&query=vegan,vegetarian&client_id=XTZDTYMEUQQBOBOF114BI0C0NLJJC0K3DMBP4Q25YZAC5AYS&client_secret=KWTAY4DDBU1FOPJNHZGVRAPAFKFXSMUZQDEDUPGADWBYAJ1N&v=20180731')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("error =",error))
}



// https://api.foursquare.com/v2/venues/search?ll=55.9505012,-3.1895519&query=vegan,vegetarian&client_id=XTZDTYMEUQQBOBOF114BI0C0NLJJC0K3DMBP4Q25YZAC5AYS&client_secret=KWTAY4DDBU1FOPJNHZGVRAPAFKFXSMUZQDEDUPGADWBYAJ1N&v=20180731


  render() {
    return (
      <div className="App">
        <div className="componentContainer">
         <div className="sidebarContainer">
            <Sidebar />
          </div>
         <div className="mapContainer">   
          <Map
            restaurants = {this.state.restaurants}
            onMarkerClick = {this.toggleInfoWindow}
          />
          
         </div>
        </div>
      </div>
    );
  }
}

export default App;
