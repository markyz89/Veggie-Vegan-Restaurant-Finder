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
        infoWindowOpen: false        
      },
      {
        title: "Nova Pizza",
        position: {lat: 55.9566963, lng: -3.2050091},
        infoWindowOpen: false
      }

      ] 
    }
  this.toggleInfoWindow = this.toggleInfoWindow.bind(this);
  }


toggleInfoWindow(e, key) {
  // console.log(e);
  let marker = this.state.restaurants
  // console.log(key)
  // console.log(marker)

  let selectedMarker = marker.filter(a => key === a.title)
  console.log("selectedMarker is", selectedMarker )

  
 

  // marker.map(marker => {
  //   this.setState(state => ({
  //       infoWindowOpen: !infoWindowOpen
  //   }))
  //     }
  // )

  // this.setState({
  //   marker.infoWindowOpen = !marker.infoWindowOpen
  // })
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
