import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Part from './particles';
import Baner from './baner.js';
import SideNav from './sidenav.js';
import Scroll from './scroll.js';
import Main from './main.js';
import Ofirmie from './ButtonComponents/ofirmie';
import ProjektyIndywidualne from './ButtonComponents/projektyIndywidualne.js';
import Wspolpraca from './ButtonComponents/wspolpraca';
import Aktualnosci from './ButtonComponents/aktualnosci';
import MapaStrony from './ButtonComponents/mapastrony2';
import Kontakt from './ButtonComponents/kontakt';
import {changeWidth} from './functions';
import Odbojniki from './cardChildrenComponents/odbojniki';
import Tasmy from './cardChildrenComponents/tasmy';
import AkcesoriaSwiatlowodowe from './cardChildrenComponents/akcesoriaSwiatlowodowe';
import Ferryty from './cardChildrenComponents/ferryty';
import Tulejki from './cardChildrenComponents/tulejki';
import Prowadnice from './cardChildrenComponents/prowadnice';
import Nity from './cardChildrenComponents/nity';
import Wkrety from './cardChildrenComponents/wkrety';
import Srubki from './cardChildrenComponents/srubki';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchField:"",
      whatToRender: 'card'
    }
  }
  changeField=(event)=>{
    this.setState({whatToRender:'card'})
    return this.setState({searchField:event.target.value}) 
  }

  click=(event)=>{
     console.log(event.target.id)
    return this.setState({whatToRender:event.target.id});
   
      
      
  }

  renderSwitch(parameter){
    switch (parameter){
      case 'card':
        return <Main searchField={this.state.searchField} click={this.click}/>;
      case 'ofirmie':
        return <Ofirmie/>;
      case 'projekty':
        return <ProjektyIndywidualne/>;
      case 'wspolpraca':
        return <Wspolpraca />;
      case 'aktualnosci':
        return <Aktualnosci />;
      case 'mapastrony':
        return <MapaStrony />;
      case 'kontakt':
        return <Kontakt />;
      case 'Odbojniki, stopki samoprzylepne':
        return <Odbojniki searchField={this.state.searchField} click={this.click}/>;
      case 'Taśmy, wykroje samoprzylepne':
        return <Tasmy searchField={this.state.searchField} click={this.click} />;
      case 'Akcesoria światłowodowe':
        return <AkcesoriaSwiatlowodowe searchField={this.state.searchField} click={this.click} />;
      case 'Ferryty / rdzenie ferrytowe':
        return <Ferryty searchField={this.state.searchField} click={this.click}/>;
      case 'Tulejki dystansowe':
        return <Tulejki searchField={this.state.searchField} click={this.click} />;
      case 'Prowadnice, mocowania do PCB':
        return <Prowadnice searchField={this.state.searchField} click={this.click}/>;
      case 'Nity, zatrzaski, zaślepki':
        return <Nity searchField={this.state.searchField} click={this.click}/>;
      case 'Plastikowe wkręty, śrubki, nakrętki, podkładki':
        return <Wkrety searchField={this.state.searchField} click={this.click}/>;
      case 'Metalowe śrubki z podkładką':
        return <Srubki searchField={this.state.searchField} click={this.click}/>;
      case 'Akcesoria, uchwyty, osłony kabli':
        return <MapaStrony />;
      case 'Koszulki termokurczliwe':
        return <MapaStrony />;
      case 'Przelotki, przepusty kablowe':
        return <MapaStrony />;
      case 'Dławnice kablowe':
        return <MapaStrony />;
      case 'Osłony krawędzi, narożników':
        return <MapaStrony />;
      case 'Uchwyty do opasek kablowych':
        return <MapaStrony />;
      case 'Filtry, osłony do wentylatorów':
        return <MapaStrony />;
      case 'Podstawki i oprawki pod LED':
        return <MapaStrony />;
      case 'Tulejki, izolatory, osłony':
        return <MapaStrony />;
      case 'Amortyzatory, reduktory wibracji':
        return <MapaStrony />;
      case 'Stopki, nóżki do obudów':
        return <MapaStrony />;
      case 'Stopki meblowe i przemysłowe':
        return <MapaStrony />;
      case 'Podkładki samoprzylepne':
        return <MapaStrony />;
      case 'Pokrętła i uchwyty':
        return <MapaStrony />;
      case 'Zaślepki, uchwyty do szkła':
        return <MapaStrony />;
      case 'Zaślepki i nasadki':
        return <MapaStrony />;
      case 'Wkładki, korki, zaślepki do rur':
        return <MapaStrony />;
      case 'Końcówki, nakładki na rury':
        return <MapaStrony />;
      case 'Osłony rur i kołnierzy':
        return <MapaStrony />;
      case 'Elementy maskujące odporne na wysokie temperatury':
        return <MapaStrony />;
      case 'Osłony zabezpieczające':
        return <MapaStrony />;
      case 'Zabezpieczenia: budowlane, siatki':
        return <MapaStrony />;
      case 'Kółka meblowe':
        return <MapaStrony />;
      case 'Akcesoria meblowe, tapicerskie':
        return <MapaStrony />;
      case 'Uszczelki':
        return <MapaStrony />;
      case 'Narzędzia':
        return <MapaStrony />;
      case 'Metalowe elementy złączne':
        return <MapaStrony />;
      case 'Uchwyty szafek, meblowe':
        return <MapaStrony />;
      case 'Kapturki i osłony na śruby i nity':
        return <MapaStrony />;
      case 'Przyssawki':
        return <MapaStrony />;
      case 'Sprężyny':
        return <MapaStrony />;
      default:
        return <Main searchField={this.state.searchField} click={this.click}/>;
    }
  }
  onButtonClick=(event)=>{
    
    switch(event.target.id){
      case 'baner-home':
      this.hideMenu('none');
      this.setState({searchField:''});
        return this.setState({whatToRender:'card'});
      case 'baner-ofirmie':
        this.hideMenu('none');
        return this.setState({whatToRender:'ofirmie'});
      case 'baner-oferta':
        this.hideMenu('none');
        return this.setState({whatToRender:'card'});
      case 'baner-projekty-indywidualne':
        this.hideMenu('none');
        return this.setState({whatToRender:'projekty'});
      case 'baner-wspolpraca':
        this.hideMenu('none');
        return this.setState({whatToRender:'wspolpraca'});
      case 'baner-aktualnosci':
        this.hideMenu('none');
        return this.setState({whatToRender:'aktualnosci'});
      case 'baner-mapa-strony':
        this.hideMenu('none');
        return this.setState({whatToRender:'mapastrony'});
      case 'baner-kontakt':
        this.hideMenu('none');
        return this.setState({whatToRender:'kontakt'});
      default:
        this.hideMenu('none');
        return this.setState({whatToRender:'card'});
    }
  }
  hideMenu=(type)=>{
    const menu = document.querySelector('#baner-board-b')
    if(type==='none'){
      if(window.innerWidth<550) {
      return menu.style.display='none'
      } else{
        return
      }
    }
    if(menu.style.display==='flex'){
      return menu.style.display='none'
    }else{
      return menu.style.display='flex'
    }
    
  }
  valueParticles=()=>{
     let value = (window.innerWidth<641) ? 20 : 100;
     return value;
  }    
  

  render() {
    document.body.onresize=changeWidth;
    return (
      <div className="App">
        <Part valueP={this.valueParticles()}/>
        <Baner onchange={this.changeField} buttonClick={this.onButtonClick} hideMenu={this.hideMenu}/>
        <Scroll>
          <SideNav  props2={this.click} />
          {this.renderSwitch(this.state.whatToRender)}
          
        </Scroll>
      </div>
    );
  }
}

export default App;
