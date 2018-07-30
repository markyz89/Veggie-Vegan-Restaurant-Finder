import React, { Component } from 'react';
import { withSriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, key) {
		let markerClick = e
		// console.log("e in mapjs =", markerClick)
		// console.log(key)
		this.props.onMarkerClick(e, key)

		// instead of doing this, maybe go the other way, create a marker and infowindow component,
		// and store state in there. Won't have to store state in an object and will be easier to toggle!
		
	}


	render() {


		const EdinburghMap = withGoogleMap (props => (

			
			<GoogleMap
				defaultCenter = {{lat: 55.9505012, lng: -3.1895519 }}
				defaultZoom = {14}
			>

			
				{this.props.restaurants.map(marker => (
					<Marker
						key={marker.title}
						position={{lat: marker.position.lat, lng: marker.position.lng}}
						onClick={(e) => this.handleClick(e, marker.title)}
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