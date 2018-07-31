import React, { Component } from 'react';
import { withSriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

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
						position={{lat: marker.position.lat, lng: marker.position.lng}}
						onClick={(e) => this.handleClick(e, marker.title)}
				 	>
			 			<React.Fragment>
			 			{this.state.infoWindowOpen === true && (
			 				<InfoWindow>
			 					<h3>{marker.title}</h3>
			 				</InfoWindow>
			 				)}
			 			</React.Fragment>
		 			</Marker>	


		)
}


}

