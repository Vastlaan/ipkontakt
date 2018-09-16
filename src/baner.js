import React from 'react';

const Baner = ({onchange,buttonClick, hideMenu}) => {
	

	return(
		
		<div id='baner' className='shadow-5 bb'>

			<div id='baner-board'>
				<div id='baner-logo'>
					<img src={require('./img/logo.png')} alt='logo'/>
				</div>
				<div id='baner-search' className='bg-light-blue dib tc shadow-4'>
					<input type='search' onChange={onchange} id='baner-searchField' placeholder='Wyszukaj produkt' className='bg-light-blue black'/>
				</div>
				<div id='baner-language'>
					<img src={require('./img/flaga-polska.png')} style={{width:'50px',height:'50px'}}alt='flaga polska'/>
					<img src={require('./img/flaga-wielka-brytania.png')} style={{width:'50px',height:'50px'}} alt='flaga polska'/>
				</div>
			</div>
			<button onClick={hideMenu} title='Menu' className="f6 link dim ph3 pv2 mb2 br2 dib white bg-blue">Menu</button>
			<div id='baner-board-b'>
				<a id='baner-home' onClick={buttonClick} className='tc  br3 ma2 pa1 grow bw2 shadow-5 f4 v-mid link pointer' ><span><img src={require('./img/home.png')} style={{width:'30px',height:'30px'}} alt='logo home'/></span>Strona główna</a>
				<a id='baner-ofirmie' className='tc   br3 ma2 pa1 grow bw2 shadow-5 f4 v-mid link pointer'  onClick={buttonClick}>O firmie</a>
				<a id='baner-oferta' className='tc   br3 ma2 pa1 grow bw2 shadow-5  f4 v-mid link pointer' onClick={buttonClick}>Oferta</a>
				<a id='baner-projekty-indywidualne' className='tc br3 ma2 pa1 grow bw2 shadow-5  f4 v-mid link pointer'onClick={buttonClick}>Projekty Indywidualne</a>
				<a id='baner-wspolpraca' className='tc br3 ma2 pa1 grow bw2 shadow-5  f4 v-mid link pointer' onClick={buttonClick}>Współpraca</a>
				<a id='baner-aktualnosci' className='tc br3 ma2 pa1 grow bw2 shadow-5  f4 v-mid link pointer' onClick={buttonClick} >Aktualności</a>
				<a id='baner-mapa-strony' className='tc br3 ma2 pa1 grow bw2 shadow-5  f4 v-mid link pointer' onClick={buttonClick}>Mapa Strony</a>
				<a id='baner-kontakt' className='tc br3 ma2 pa1 grow bw2 shadow-5  f4 v-mid link pointer' onClick={buttonClick}>Kontakt</a>
			</div>
		</div>
		)
	
}
export default Baner;