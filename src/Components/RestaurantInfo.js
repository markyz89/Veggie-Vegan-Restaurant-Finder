import React, { Component } from 'react' 
import { InfoWindow, StreetViewPanorama } from 'react-google-maps'


function RestaurantInfo(props) {
	let marker = props.marker
	let image = marker.categories[0].icon.prefix
	console.log("image is", marker.categories[0].icon.prefix+marker.id+marker.categories[0].icon.suffix)
	return(
		<InfoWindow>
			<div>
				<h3>{marker.name}</h3>
				<p>{marker.location.address}</p>
				<p>{marker.location.postalCode}</p>
				<p className="fourSquareCredit">Information provided by <a href="wwww.foursquare.com" target="_blank">Foursquare</a>.</p>
				{/* <img src={(marker.categories[0].icon.prefix.prefix)+(marker.id)+(marker.categories[0].icon.suffix)}></img> */}
			</div>
		</InfoWindow>

		)


}

export default RestaurantInfo

