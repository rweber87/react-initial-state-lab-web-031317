import React from 'react'

class Bomb extends React.Component{
	constructor(props){
		super()
		this.state = {
			secondsLeft: props.initialCount
		}
	}

	render(){
		if(this.state.secondsLeft === 0){
			return(
				<h1>Boom!</h1>
				)
		}

		return (
			<div>{`${this.state.secondsLeft} seconds left before I go boom!`}</div>
		)
	}
}

export default Bomb