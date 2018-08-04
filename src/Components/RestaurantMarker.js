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

		
		//event handler for click that opens the infoWindow above the marker
		handleClick(e, key) {
		let markerClick = e
		// console.log("e in mapjs =", markerClick)
		// console.log(key)
		let infoWindowOpen = this.state.infoWindowOpen
		this.setState({
			infoWindowOpen: !infoWindowOpen
		})
		

		
	}

	




render() {

	//logic that opens the infowindow and animates the marker
	let markerToAnimate = this.props.markerToAnimate
	let infoWindowOpen = this.state.infoWindowOpen
	let animation = this.state.animation
	// console.log(this.props.id)
	if(markerToAnimate && infoWindowOpen === false)
	markerToAnimate.map(m => {
		// console.log(m.id)
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
		 					<React.Fragment>
		 					{this.props.apiError === false && (
				 				<RestaurantInfo
				 					marker={marker}
				 				 />
				 				 )}
			 				 </React.Fragment>
			 				)}
			 			</React.Fragment>
		 			</Marker>	


		)
}


}

