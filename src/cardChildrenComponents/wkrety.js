import React from 'react';
import Card from '../card.js';
import wkretyComponents from './wkretyComponents.js';
import {allowPolishS, allowPolishL,allowPolishZ,allowPolishO, allowPolishE} from '../functions';


const Wkrety =({searchField,click})=>{
	
	const cardArray=wkretyComponents.map((obj,i)=>{
		return(
			<Card key={i} index={i} name={obj.name} click={click} source={wkretyComponents} />
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
				<h3>PLASTIKOWE WKRĘTY, ŚRUBKI, NAKRĘTKI, PODKŁADKI PLASTIKOWE</h3>
			</div>
			{adjustCardArray}	
		</div>
		)
			
}

export default Wkrety