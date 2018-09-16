import React from 'react';
import Card from './card.js';
import mainComponentObjects from './mainComponentObjects.js';
import {allowPolishS, allowPolishL, allowPolishE, allowPolishZ, allowPolishO} from './functions';


const Main =({searchField,click})=>{

	const cardArray=mainComponentObjects.map((obj,i)=>{
		return(
			<Card key={i} index={i} name={obj.name} click={click} source={mainComponentObjects}/>
			)

	});
	const adjustCardArray=cardArray.filter(card=>{
			const conditions =[searchField.toLowerCase(),
			allowPolishS(searchField.toLowerCase()),
			allowPolishL(searchField.toLowerCase()),
			allowPolishZ(searchField.toLowerCase()),
			allowPolishO(searchField.toLowerCase()),
			allowPolishE(searchField.toLowerCase())]
			return conditions.some(el=>card.props.name.toLowerCase().includes(el))
		}
		);

	
	return(
		<div className='mainComponent'>

			<div className='content_header' style={{width:'100%'}}>
				<h3>CZĘŚCI Z TWORZYW SZTUCZNYCH I METALU ORAZ KOMPONENTY ELEKTRONICZNE</h3>
			</div>
			{adjustCardArray}	
		</div>
		)
			
}

export default Main