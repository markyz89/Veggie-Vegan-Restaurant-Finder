import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by' 

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state={
			query: ''
		}
	}

	updateQuery(query) {
		this.setState({query: query.trim()})
	} 



  render() {

  	let filteredRestaurants
  	if(this.state.query) {
  		const match = new RegExp(escapeRegExp(this.state.query), 'i')
  		filteredRestaurants = this.props.restaurants.filter((restaurant) => match.test(restaurant.name))
  	} else {
  		filteredRestaurants = this.props.restaurants
  	}

  	let restaurants = this.props.restaurants
    return (
    	<div>
			<input 
			type='text'
			placeholder="Filter restaurants"
			value={this.state.query}
			onChange={(event) => this.updateQuery(event.target.value)}

			/>
			{/* JSON.stringify(this.state) */}
			<ul className="sidebarList">
				{filteredRestaurants.map(restaurant => (
					<li className="listRestaurant">{restaurant.name}</li>

					))}
			</ul>
      	</div>
    );
  }
}

export default Sidebar;

// credit lesson 3.7 of the React part of the Nanodegree course