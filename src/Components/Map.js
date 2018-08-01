import React, { Component } from 'react';
import { withSriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import RestaurantMarker from './RestaurantMarker'

class Map extends Component {
	constructor(props) {
		super(props);

	}


	render() {

		// console.log(this.props.restaurants)
		const EdinburghMap = withGoogleMap (props => (

			
			<GoogleMap
				defaultCenter = {{lat: 55.9505012, lng: -3.1895519 }}
				defaultZoom = {14}
			>

			
				{this.props.restaurants.map(marker => (
					<RestaurantMarker
					marker={marker}

					 />

					))} 
			}
			
				
	
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