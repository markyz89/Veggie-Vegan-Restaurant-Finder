import React, { Component } from 'react';
import ReactDOM from 'react'
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import MapError from './Components/MapError'
import ListError from './Components/ListError'
import escapeRegExp from 'escape-string-regexp'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      restaurants: [],
      query: '', 
      markerToAnimate: '',
      menuOpen: false,
      apiError: false
      
    }

  this.onHandleClick = this.onHandleClick.bind(this)
  this.openMenu = this.openMenu.bind(this)


  }


componentDidMount() {

// Fetches API data from Foursquare

fetch('https://api.foursquare.com/v2/venues/search?ll=55.9505012,-3.1895519&categoryId=4bf58dd8d48988d1d3941735&client_id=XTZDTYMEUQQBOBOF114BI0C0NLJJC0K3DMBP4Q25YZAC5AYS&client_secret=KWTAY4DDBU1FOPJNHZGVRAPAFKFXSMUZQDEDUPGADWBYAJ1N&v=20180731')
  .then(response => response.json())
  .then(data => this.setState({
    restaurants: data.response.venues
  }))
  .catch(error => this.setState({
    apiError: true
  }))
  
}


// sets the state in query to the value typed in by the user
updateQuery(query) {
    this.setState({query: query})
  } 


// Sets state to the marker that is to be animated with a one-time bounce
onHandleClick(e, key) {
  // console.log("event is",e)
  // console.log("key is", key)
  let markerToAnimate = this.state.restaurants.filter(r => r.id === key)
    // console.log("marker to animate is", markerToAnimate)
  this.setState({
    markerToAnimate: markerToAnimate
  })
   
}

// Opens and closes the sidebar menu when the sidebar is hidden by default on mobile devices
openMenu() {
  const menuOpen = this.state.menuOpen
  this.setState({
    menuOpen: !menuOpen,
  })
}





  render() {
    // logic for filtering the restaurant markers
    let filteredRestaurants
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filteredRestaurants = this.state.restaurants.filter((restaurant) => match.test(restaurant.name))
    } else {
      filteredRestaurants = this.state.restaurants
    }


   

    // styles applied to sidebar to show or hide it on mobile
    let openOrClose = "sidebarContainerFS sidebarContainerHide"
    if(this.state.menuOpen === true) {
      openOrClose = "sidebarContainerFS sidebarContainerShow"
    }

 
   

    return (
      <div className="App">
        <div className="componentContainer">
         <div className="hamburgerDiv"
            >
           <i className="fas fa-bars"
              onClick={this.openMenu}
            ></i>
         </div>
         <div className={openOrClose}>

         <div className="logoContainer">
           <h1 tabIndex="0">Veggie/Vegan Restaurant Finder</h1>
           <h2 tabIndex="0">Edinburgh</h2>
           <input 
              className="restaurantFilter"
              type='text'
              aria-label='Filter the list of Restaurants'
              placeholder="Filter restaurants"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
          {(filteredRestaurants) ?
            <Sidebar 
              restaurants={this.state.restaurants}
              filteredRestaurants={filteredRestaurants}
              onHandleClick={this.onHandleClick}
              apiError={this.state.apiError}/>
            :                
              <ListError
              />
             
            }
             
          
          </div>
         <div className="mapContainer">   
          
            <MapError>

              <Map
                restaurants = {this.state.restaurants}
                onMarkerClick = {this.toggleInfoWindow}
                filteredRestaurants={filteredRestaurants}
                onHandleClick={this.onHandleClick}
                markerToAnimate={this.state.markerToAnimate}
                apiError={this.state.apiError}           
              />

            </MapError>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
