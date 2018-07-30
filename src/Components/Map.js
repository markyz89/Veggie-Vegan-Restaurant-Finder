import React, { Component } from 'react';
import { withSriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
	constructor(props) {
		super(props);
	}

	render() {


		const EdinburghMap = withGoogleMap (props => (

			
			<GoogleMap
				defaultCenter = {{lat: 55.9505012, lng: -3.1895519 }}
				defaultZoom = {14}
			>

			
				{this.props.restaurants.map(marker => (
					<Marker
						position={{lat: marker.position.lat, lng: marker.position.lng}}
				 	>
			 			<React.Fragment>
			 				<InfoWindow>
			 					<h3>{marker.title}</h3>
			 				</InfoWindow>
			 			</React.Fragment>
		 			</Marker>	

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