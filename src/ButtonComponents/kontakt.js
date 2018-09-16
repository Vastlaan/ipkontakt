import React from 'react';

const Kontakt = () =>{
	return(
		<div className='mainComponent' id="kontakt">
			<div className="content_header" style={{width:'100%'}}>
				<h1>Kontakt</h1>
			</div>
			
				
					<div className='shadow-2 ma2 pa1 br5 tc'style={{width:'100%'}}>
						<h3 className='content_header pa2' style={{borderBottom:'none'}} ><strong itemProp="name">IP KONTAKT</strong></h3>
						<p style={{width:'100%'}} itemProp="location" itemScope="itemscope" itemType="http://schema.org/Place">
							<span itemProp="address" itemScope="itemscope" itemType="http://schema.org/PostalAddress">
								<span itemProp="streetAddress">Plac Zwycięstwa 2, budynek E</span><br/>
								<span itemProp="postalCode">90-312</span>
								<span itemProp="addressLocality">Łódź</span><br/>
								<span itemProp="addressCountry">Polska</span><br/>
							</span>
							<span itemProp="geo" itemScope="itemscope" itemType="http://schema.org/GeoCoordinates">
								<meta itemProp="latitude" content="51.75858" />
	   							<meta itemProp="longitude" content="19.47675" />
							</span>
						</p>
					</div>
					<div className='shadow-2 ma2 pa1 br5 tc ' id='contact' style={{width:'100%'}}>					
						<div>
							<h4>telefon</h4>
							<p itemProp="telephone">+48 42 674 22 74</p>
							<p>+48 42 676 75 25</p>
							<p>+48 42 674 22 88</p>
							<p>+48 42 674 22 98</p>
							<p>+48 693 771 705</p>
						</div>
						<div>
							<h4>fax</h4>
							<p itemProp="faxNumber">+48 42 676 49 25</p>
						</div>
						<div>
							<h4>email</h4>
							<p><a href="mailto:ipkontakt@ipkontakt.pl" itemProp="email">ipkontakt@ipkontakt.pl</a></p>
						</div>
							
					</div>
					<div className='shadow-2 ma2 pa1 br5 tc contact'style={{width:'100%'}}>	
						<iframe title="mapa" src={"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2469.5650935885046!2d19.474468366702986!3d51.75927578983856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zUGxhYyBad3ljacSZc3R3YSAyLCAgOTAtMzEyxYHDs2TFug!5e0!3m2!1spl!2snl!4v1533663348846"} 
						style={{width:"600px", height:"450px", frameborder:"0"}} ></iframe>
					</div>
					
			
		</div>
		)
}
export default Kontakt;