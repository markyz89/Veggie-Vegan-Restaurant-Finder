import React, { Component } from 'react';
import ReactDOM from 'react'
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import escapeRegExp from 'escape-string-regexp'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      restaurants: [],
      query: '', 
      markerToAnimate: '',
      menuOpen: false
      
    }

  this.onHandleClick = this.onHandleClick.bind(this)
  this.openMenu = this.openMenu.bind(this)


  }


componentDidMount() {

// console.log(ReactDOM.findDOMNode(this.refs.RestaurantMarker.infoWindow))


fetch('https://api.foursquare.com/v2/venues/search?ll=55.9505012,-3.1895519&categoryId=4bf58dd8d48988d1d3941735&client_id=XTZDTYMEUQQBOBOF114BI0C0NLJJC0K3DMBP4Q25YZAC5AYS&client_secret=KWTAY4DDBU1FOPJNHZGVRAPAFKFXSMUZQDEDUPGADWBYAJ1N&v=20180731')
  .then(response => response.json())
  .then(data => this.setState({
    restaurants: data.response.venues
  }))
  .catch(error => console.log("error =",error))
  
}



updateQuery(query) {
    this.setState({query: query})
  } 


onHandleClick(e, key) {
  // console.log("event is",e)
  // console.log("key is", key)
  // console.log("key in app", listKey) 
  let markerToAnimate = this.state.restaurants.filter(r => r.id === key)
    // console.log("marker to animate is", markerToAnimate)
  this.setState({
    markerToAnimate: markerToAnimate
  })
   
}

openMenu() {
  const menuOpen = this.state.menuOpen
  this.setState({
    menuOpen: !menuOpen,
  })
}




  render() {
    let filteredRestaurants
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filteredRestaurants = this.state.restaurants.filter((restaurant) => match.test(restaurant.name))
    } else {
      filteredRestaurants = this.state.restaurants
    }


    // console.log("in the render", listKey)

    
    let openOrClose = "sidebarContainer"
    if(this.state.menuOpen === true) {
      openOrClose = ""
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
         <div className={openOrClose}
        
                         
             
                  >
         <div className="logoContainer">
           <h1>Veggie/Vegan Restaurant Finder</h1>
           <h2>Edinburgh</h2>
           <input 
              className="restaurantFilter"
              type='text'
              placeholder="Filter restaurants"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
            <Sidebar 
            restaurants={this.state.restaurants}
            filteredRestaurants={filteredRestaurants}
            onHandleClick={this.onHandleClick}/>
          </div>
         <div className="mapContainer"
             >   
          <Map
            restaurants = {this.state.restaurants}
            onMarkerClick = {this.toggleInfoWindow}
            filteredRestaurants={filteredRestaurants}
            onHandleClick={this.onHandleClick}
            markerToAnimate={this.state.markerToAnimate}
            
            
          />
          
         </div>
        </div>
      </div>
    );
  }
}

export default App;
