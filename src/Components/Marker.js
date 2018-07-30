import React, { Component } from 'react';
import Marker from 'react-google-maps'

export default class Marker extends Component {


render() {
	return (

		<Marker 
			position = {this.props.position}
		/>


		)
}


}

