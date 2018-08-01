import React, { Component } from 'react';
import { withSriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import RestaurantMarker from './RestaurantMarker'

class Map extends Component {
	constructor(props) {
		super(props);

	}


	updateMarkerFromClick(e, key) {
		
		
		// console.log("this won't work", key)
		// if(key) {
		//     this.setState({
		//     listKey: key
		//     })  
	 //    }
	}


	render() {

		// console.log("list key =",this.props.onHandleClick)
		// console.log("or maybe list key =",this.props.listKey)
		// console.log(this.props.markerToAnimate)
		let markerToAnimate = this.props.markerToAnimate

		const EdinburghMap = withGoogleMap (props => (

			
			<GoogleMap
				defaultCenter = {{lat: 55.9505012, lng: -3.1895519 }}
				defaultZoom = {14}
			>

			
				{this.props.filteredRestaurants.map(marker => (
					<RestaurantMarker
					marker={marker}
					key={marker.id}
					id={marker.id}
					markerToAnimate={markerToAnimate}

					 /> 

					))} 
			
			
				
	
			</GoogleMap>
			
			)) 


		return (
			<div>
				<EdinburghMap
				containerElement={<div className="containerElement"
				/>				
			}
				mapElement={<div className="mapElement" /> }
				/>
				
				
				
			</div>
		)
	}
}

export default Map



// credit Yelstin Fernandes for getting me started with react-google-maps
//https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb

// 55.9541839,-3.2004868 Hendersons
{/*
	

				{props.isMarkerShown && <Marker position={{
					lat: 55.9541839,
					lng: -3.2004868}}/>}



			const markers = [{
				location: {
					lat: 55.9541839,
					lng: -3.2004868
				}
			}]

					<Marker
				position = {this.props.position}
				 />


*/}	