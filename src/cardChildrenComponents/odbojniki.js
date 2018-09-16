import React from 'react';
import Card from '../card.js';
import odbojnikiComponents from './odbojnikiComponents.js';
import {allowPolishS, allowPolishL,allowPolishZ,allowPolishO, allowPolishE} from '../functions';


const Odbojniki =({searchField,click})=>{

	
	
	
	
	const cardArray=odbojnikiComponents.map((obj,i)=>{
		return(
			<Card key={i} index={i} name={obj.name} click={click} source={odbojnikiComponents} />
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
				<h3>SAMOPRZYLEPNE ODBOJNIKI, BUMPONY, NÓŻKI, STOPKI</h3>
			</div>
			{adjustCardArray}	
		</div>
		)
			
}

export default Odbojniki