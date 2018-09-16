import React from 'react';
import Card from '../card.js';
import prowadniceComponents from './prowadniceComponents.js';
import {allowPolishS, allowPolishL,allowPolishZ,allowPolishO, allowPolishE} from '../functions';


const Prowadnice =({searchField,click})=>{
	
	const cardArray=prowadniceComponents.map((obj,i)=>{
		return(
			<Card key={i} index={i} name={obj.name} click={click} source={prowadniceComponents} />
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
				<h3>POZIOME I PIONOWE PROWADNICE, SZYNY, MOCOWANIA ORAZ UCHWYTY DO PŁYTEK DRUKOWANYCH PCB</h3>
			</div>
			{adjustCardArray}	
		</div>
		)
			
}

export default Prowadnice