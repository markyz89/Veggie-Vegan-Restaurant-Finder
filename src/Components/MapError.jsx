import React, { Component } from 'react'

export default class MapError extends React.Component {
	constructor(props) {
		super(props)
			this.state = {
			mapError: false
		}

	}


componentDidCatch(error, info) {
    console.log(info)
    this.setState({ mapError: true })
	}

	render() {

		if(this.state.mapError === true) {
			return (
				<div>
					<h1>Map didn't load. Sorry about that.</h1>
					<p>Switch your internet on and off and try again</p>
				</div>
				)
			}
			return this.props.children
		}
		
	}



