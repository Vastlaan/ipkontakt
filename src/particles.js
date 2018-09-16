import React from 'react';
import Particles from 'react-particles-js';

const Part= ({valueP}) =>{
	
	const parameters = {
	  particles: {
	    number:{
	      value:valueP,
	      density:{
	        enable:true,
	        value_area: 800
	      }
	    }
	  }
	}
	return(
		<Particles params={parameters} className='particles' />
		)
}
export default Part