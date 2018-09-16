import React from 'react';
import Tilt from 'react-tilt';

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	render(){
		return(
			<Tilt className="Tilt shadow-3  pa1 ma2 " options={{ max : 40 }} style={{ height: 180, width: 180 }} >
	 			<div className="Tilt-inner">
			
					<div className='cardComponent '>
						<a id={this.props.name} onClick={this.props.click}>
							{this.props.source[this.props.index].image}
							<span id={this.props.name}>{this.props.name}</span>	
						</a>
					</div>
				</div>
			</Tilt>
		)}
}
export default Card