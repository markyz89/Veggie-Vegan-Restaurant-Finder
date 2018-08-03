import React, { Component } from 'react';
import Map from './Components/Map'
import Sidebar from './Components/Sidebar'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by' 
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      restaurants: [],
      query: '', 
      markerToAnimate: '',
      
    }

  this.onHandleClick = this.onHandleClick.bind(this)
 
  }


componentDidMount() {
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





  render() {
    let filteredRestaurants
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      filteredRestaurants = this.state.restaurants.filter((restaurant) => match.test(restaurant.name))
    } else {
      filteredRestaurants = this.state.restaurants
    }


    // console.log("in the render", listKey)

  


    return (
      <div className="App">
        <div className="componentContainer">
         <input type="button" className="displaySidebar"
                onClick={this.sidebarHandler}
                 />
         <div className="sidebarContainer"
            
             
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
         <div className="mapContainer">   
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
