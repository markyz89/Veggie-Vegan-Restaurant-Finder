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
				<p className="fourSquareCredit">Information provided by <a href="https://foursquare.com" target="_blank">Foursquare</a>.</p>
				<div className="fourSquareCredit">Icons made by <a href="https://www.flaticon.com/authors/twitter" target="_blank" title="Twitter">Twitter</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
				{/* <img src={(marker.categories[0].icon.prefix.prefix)+(marker.id)+(marker.categories[0].icon.suffix)}></img> */}
			</div>
		</InfoWindow>

		)


}

export default RestaurantInfo

