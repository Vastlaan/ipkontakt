import React from 'react';

export const changeWidth=()=>{
    const scrol = document.querySelector('#scrol');
    if(document.body.clientWidth<571){
      return scrol.style.flexDirection='column';
    }
    return scrol.style.flexDirection='row';
  }

export const allowPolishS=(string)=>{
	let newString=""
	for(let i=0;i<string.length;i++){
		if(string.charAt(i)==="s"){
			newString+="ś"
		}else{
			newString+=string.charAt(i)
		}
	}	
	return newString
}

export const allowPolishL=(string)=>{
		let newString=""
		for(let i=0;i<string.length;i++){
			if(string.charAt(i)==="l"){
				newString+="ł"
			}else{
				newString+=string.charAt(i)
			
			}
		}
		
		return newString
	}

export const allowPolishE=(string)=>{
		let newString=""
		for(let i=0;i<string.length;i++){
			if(string.charAt(i)==="e"){
				newString+="ę"
			}else{
				newString+=string.charAt(i)
			}
		}
		return newString
	}

export const allowPolishO=(string)=>{
	let newString=""
	for(let i=0;i<string.length;i++){
		if(string.charAt(i)==="o"){
			newString+="ó"
		}else{
			newString+=string.charAt(i)
		}
	}
	return newString
}

export const allowPolishZ=(string)=>{
		let newString=""
		for(let i=0;i<string.length;i++){
			if(string.charAt(i)==="z"){
				newString+="ż"
			}else{
				newString+=string.charAt(i)
			}
		}		
		return newString
	}