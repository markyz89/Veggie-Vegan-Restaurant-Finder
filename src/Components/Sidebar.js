import React, { Component } from 'react';


class Sidebar extends Component {
	constructor(props) {
		super(props);

		
		
	}

	handleClick(e, key) {
		// console.log("event is",e)
		// console.log("key is", key)
		this.props.onHandleClick(e, key)
	}


	


  render() {



  	let filteredRestaurants = this.props.filteredRestaurants

  	let restaurants = this.props.restaurants
    return (
    	<div>
			
			{/* JSON.stringify(this.state) */}
			<ul className="sidebarList">
				{filteredRestaurants.map(restaurant => (
					<li 
					className="listRestaurant"
					key={restaurant.id}
					id={restaurant.id}
					onClick={(e, key) => this.handleClick(e, restaurant.id)}
					>{restaurant.name}
					</li>

					))}
			</ul>
      	</div>
    );
  }
}

export default Sidebar;

// credit lesson 3.7 of the React part of the Nanodegree course

// might need to move the filteredRestaurants list up to the parent state - App.js
// then would be able to pass filteredRestaurants down to both Map.js and Sidebar.js, 
// thus the filtered list is the same for both 
// Create a new input component to host the input field? Do it the simple way first.