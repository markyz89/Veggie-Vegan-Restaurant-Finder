import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps'
import RestaurantInfo from './RestaurantInfo'
import broccoli from '../broccoli.png'

export default class RestaurantMarker extends Component {
	constructor(props) {
		super(props);


	this.state = {
			infoWindowOpen: false,
			animation: ''
		}

		this.handleClick = this.handleClick.bind(this)
	}

		handleClick(e, key) {
		let markerClick = e
		// console.log("e in mapjs =", markerClick)
		// console.log(key)
		let infoWindowOpen = this.state.infoWindowOpen
		this.setState({
			infoWindowOpen: !infoWindowOpen
		})
		// this.props.onMarkerClick(e, key)

		// instead of doing this, maybe go the other way, create a marker and infowindow component,
		// and store state in there. Won't have to store state in an object and will be easier to toggle!
		
	}

	




render() {

	let markerToAnimate = this.props.markerToAnimate
	let infoWindowOpen = this.state.infoWindowOpen
	let animation = this.state.animation
	// console.log(this.props.id)
	if(markerToAnimate && infoWindowOpen === false)
	markerToAnimate.map(m => {
		console.log(m.id)
		if(m.id === this.props.id)
			this.setState({
				infoWindowOpen: !infoWindowOpen,
				animation: 4
			})
	})
	// console.log(this.props.markerToAnimate)
	let marker = this.props.marker
	
		if(this.props.markerToAnimate.id === marker.id){
			
		}
	
	return (

		<Marker
						key={marker.title}
						position={{lat: marker.location.lat, lng: marker.location.lng}}
						onClick={(e, key) => this.handleClick(e, this.props.marker.id)}
						animation={this.state.animation}
						icon={broccoli}
						className="broccoliIcons"
				 	>
			 			<React.Fragment>
			 			{this.state.infoWindowOpen === true && (
		 					<React.Fragment
		 						ref={this.infoWindow}>
				 				<RestaurantInfo
				 					marker={marker}
				 				 />
			 				 </React.Fragment>
			 				)}
			 			</React.Fragment>
		 			</Marker>	


		)
}


}

