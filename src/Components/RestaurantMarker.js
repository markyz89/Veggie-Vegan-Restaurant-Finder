import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import RestaurantInfo from './RestaurantInfo'

export default class RestaurantMarker extends Component {
	constructor(props) {
		super(props);


	this.state = {
			infoWindowOpen: false
		}
	}

		handleClick(e, key) {
		let markerClick = e
		console.log("e in mapjs =", markerClick)
		console.log(key)
		let infoWindowOpen = this.state.infoWindowOpen
		this.setState({
			infoWindowOpen: !infoWindowOpen
		})
		// this.props.onMarkerClick(e, key)

		// instead of doing this, maybe go the other way, create a marker and infowindow component,
		// and store state in there. Won't have to store state in an object and will be easier to toggle!
		
	}



render() {
	let marker = this.props.marker
	return (

		<Marker
						key={marker.title}
						position={{lat: marker.location.lat, lng: marker.location.lng}}
						onClick={(e) => this.handleClick(e, marker.title)}
				 	>
			 			<React.Fragment>
			 			{this.state.infoWindowOpen === true && (
			 				<RestaurantInfo
			 					marker={marker}
			 				 />
			 				)}
			 			</React.Fragment>
		 			</Marker>	


		)
}


}

