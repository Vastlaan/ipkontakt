import React from 'react';

const Aktualnosci = ()=>{
	return(
		<div className='mainComponent' id='aktualnosci'>
			<div className="content_header" style={{width:'100%'}}>
				<h1>Aktualności</h1>
			</div>
			<div className='aktElement tc  br3 ma1 pa1 bw2 shadow-5'>
				<p style={{float:'left',width:'70%'}}><strong>Tulejki plastikowe, sześciokątne, gwintowane, wciskane</strong></p>
				<p style={{float:'right',width:'30%'}}>2018-08-02 10:11:10</p>
				<img src={require('../img/elem/L-TDHMW2_m.jpg')} alt='tulejki plastikowe' />
				<p>Poszerzyliśmy naszą ofertę o <a id='L-TDHMW2'>Tulejki plastikowe, sześciokątne, gwintowane, wciskane, L-TDHMW2</a></p>
			</div>
			<div className='aktElement tc  br3 ma1 pa1 bw2 shadow-5'>
				<p style={{float:'left',width:'70%'}}><strong>Tulejki dystansowe okrągłe, zamknięte</strong></p>
				<p style={{float:'right',width:'30%'}}>2018-07-31 14:03:56</p>
				<img src={require('../img/elem/L-TDWZ_m.jpg')} alt='tulejki plastikowe' />
				<p>Poszerzyliśmy naszą ofertę o <a id='L-TDWZ'>Tulejki dystansowe okrągłe, zamknięte, L-TDWZ</a></p>
			</div>
			<div className='aktElement tc  br3 ma1 pa1 bw2 shadow-5'>
				<p style={{float:'left',width:'70%'}}><strong>Stopy plastikowe, regulowane</strong></p>
				<p style={{float:'right',width:'30%'}}>2018-07-31 11:15:30</p>
				<img src={require('../img/elem/T-STPR_m.jpg')} alt='tulejki plastikowe' />
				<p>Poszerzyliśmy naszą ofertę o <a id='T-STPR_m'> Stopy plastikowe, regulowane, T-STPR</a></p>
			</div>
			<div className='aktElement tc  br3 ma1 pa1 bw2 shadow-5'>
				<p style={{float:'left',width:'70%'}}><strong>Tulejki plastikowe, sześciokątne, gwintowane, wciskane</strong></p>
				<p style={{float:'right',width:'30%'}}>2018-07-27 11:57:41</p>
				<img src={require('../img/elem/L-TDHMW1_m.jpg')} alt='tulejki plastikowe' />
				<p>Poszerzyliśmy naszą ofertę o <a id='L-TDHMW1'>Tulejki plastikowe, sześciokątne, gwintowane, wciskane, L-TDHMW1</a></p>
			</div>
		</div>
		)
}
export default Aktualnosci;