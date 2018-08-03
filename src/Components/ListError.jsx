import React, { Component } from 'react'

export default class ListError extends React.Component {
	constructor(props) {
		super(props)
			// this.state = {
			// listError: false
		

	}


// componentDidCatch(error, info) {
//     console.log(info)
//     this.setState({ listError: true })
// 	}

	render() {

		// if(this.state.listError === true) {
			return (
				<div>
					<h1 className="listError">List didn't load. Sorry about that.</h1>
					<p>Blame Foursquare</p>
				</div>
				)
			// }
			// return this.props.children
		}
		
	}

