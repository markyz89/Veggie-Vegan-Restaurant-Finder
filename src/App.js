import React, { Component } from 'react';
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      restaurants: [] 
    }
  
  }


componentDidMount() {
fetch('https://api.foursquare.com/v2/venues/search?ll=55.9505012,-3.1895519&categoryId=4bf58dd8d48988d1d3941735&client_id=XTZDTYMEUQQBOBOF114BI0C0NLJJC0K3DMBP4Q25YZAC5AYS&client_secret=KWTAY4DDBU1FOPJNHZGVRAPAFKFXSMUZQDEDUPGADWBYAJ1N&v=20180731')
  .then(response => response.json())
  .then(data => this.setState({
    restaurants: data.response.venues
  }))
  .catch(error => console.log("error =",error))
}



// https://api.foursquare.com/v2/venues/search?ll=55.9505012,-3.1895519&query=vegan,vegetarian&client_id=XTZDTYMEUQQBOBOF114BI0C0NLJJC0K3DMBP4Q25YZAC5AYS&client_secret=KWTAY4DDBU1FOPJNHZGVRAPAFKFXSMUZQDEDUPGADWBYAJ1N&v=20180731


  render() {
    return (
      <div className="App">
        <div className="componentContainer">
         <div className="sidebarContainer">
            <Sidebar 
            restaurants={this.state.restaurants}/>
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
