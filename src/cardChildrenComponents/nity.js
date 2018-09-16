import React from 'react';
import Card from '../card.js';
import nityComponents from './nityComponents.js';
import {allowPolishS, allowPolishL,allowPolishZ,allowPolishO, allowPolishE} from '../functions';


const Nity =({searchField,click})=>{
	
	const cardArray=nityComponents.map((obj,i)=>{
		return(
			<Card key={i} index={i} name={obj.name} click={click} source={nityComponents} />
			)

	});
	const adjustCardArray=cardArray.filter(card=>{
			const conditions =[
			searchField.toLowerCase(),
			allowPolishS(searchField.toLowerCase()),
			allowPolishO(searchField.toLowerCase()),
			allowPolishL(searchField.toLowerCase()),
			allowPolishE(searchField.toLowerCase()),
			allowPolishZ(searchField.toLowerCase()),
			]
			return conditions.some(el=>card.props.name.toLowerCase().includes(el))
		}
		);

	
	return(
		<div className='mainComponent'>
			<div className='card goBack' onClick={click}>
				<strong>&#8630;</strong> Powrót
			</div>
			<div className='content_header' style={{width:'100%'}}>
				<h3>PLASTIKOWE NITY, ZATRZASKI, ZAŚLEPKI, NITOKOŁKI, KLIPSY</h3>
			</div>
			{adjustCardArray}	
		</div>
		)
			
}

export default Nity