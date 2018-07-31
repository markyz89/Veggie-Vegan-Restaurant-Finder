import React, { Component } from 'react' 
import { InfoWindow } from 'react-google-maps'


function RestaurantInfo(props) {
	
	return(
		<InfoWindow>
			<h3>{props.marker.title}</h3>
		</InfoWindow>

		)


}

export default RestaurantInfo