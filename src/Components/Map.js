import React, { Component } from 'react';
import ReactDOM from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import RestaurantMarker from './RestaurantMarker'


class Map extends Component {
	constructor(props) {
		super(props);
		

	}

	


	render() {

		let markerToAnimate = this.props.markerToAnimate


		// logic that generates the map from react-google-maps
		const EdinburghMap = withGoogleMap (props => (


	
		
		
			
			<GoogleMap
				defaultCenter = {{lat: 55.9505012, lng: -3.1895519 }}
				defaultZoom = {14}
				onTilesLoaded={() =>
     			// adds title to iframe
     			(document.getElementsByTagName('iframe')[0].title = 'Google Maps')
    			}





			>
			

				{this.props.filteredRestaurants && this.props.filteredRestaurants.map(marker => (
					<RestaurantMarker
					marker={marker}
					key={marker.id}
					id={marker.id}
					markerToAnimate={markerToAnimate}
					apiError={this.props.apiError}

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



