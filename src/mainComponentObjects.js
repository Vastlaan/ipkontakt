import React from 'react';

const mainComponentObjects = [
	{
		name:'Odbojniki, stopki samoprzylepne',
		image: <img src={require("./img/elem/Odbojniki, stopki samoprzylepne.png")} alt="Odbojniki, stopki samoprzylepne" id="Odbojniki, stopki samoprzylepne"/>
	},
	{
		name:'Taśmy, wykroje samoprzylepne',
		image: <img src={require("./img/elem/tasmy_m.png")} alt="taśmy" id="Taśmy, wykroje samoprzylepne"/>
	},
	{
		name:'Akcesoria światłowodowe',
		image: <img src={require("./img/elem/OFB3P_m.png")} alt="światłowody" id="Akcesoria światłowodowe"/>
	},
	{
		name:'Ferryty / rdzenie ferrytowe',
		image: <img src={require("./img/elem/RRC_m.png")} alt="Ferryty / rdzenie ferrytowe" id="Ferryty / rdzenie ferrytowe"/>
	},
	{
		name:'Tulejki dystansowe ',
		image: <img src={require("./img/elem/FP-6120_m.png")} alt="Tulejki dystansowe" id="Tulejki dystansowe"/>
	},
	{
		name:'Prowadnice, mocowania do PCB',
		image: <img src={require("./img/elem/VMCGE-30M-01_m.png")} alt="Prowadnice, mocowania do PCB" id="Prowadnice, mocowania do PCB"/>
	},
	{
		name:'Nity, zatrzaski, zaślepki',
		image: <img src={require("./img/elem/SR33_m.png")} alt="odbojniki" id="Nity, zatrzaski, zaślepki"/>
	},
	{
		name:'Plastikowe wkręty, śrubki, nakrętki, podkładki',
		image: <img src={require("./img/elem/FP-10309_m.png")} alt="Plastikowe wkręty, śrubki, nakrętki, podkładki" id="Plastikowe wkręty, śrubki, nakrętki, podkładki"/>
	},
	{
		name:'Metalowe śrubki z podkładką',
		image: <img src={require("./img/elem/AR-P4_m.png")} alt="Metalowe śrubki z podkładką" id="Metalowe śrubki z podkładką"/>
	},
	{
		name:'Akcesoria, uchwyty, osłony kabli',
		image: <img src={require("./img/elem/FP-6890_m.png")} alt="Akcesoria, uchwyty, osłony kabli" id="Akcesoria, uchwyty, osłony kabli"/>
	},
	{
		name:'Korytka kablowe',
		image: <img src={require("./img/elem/RX_m.png")} alt="Korytka kablowe" id="Korytka kablowe"/>
	},
	{
		name:'Koszulki termokurczliwe',
		image: <img src={require("./img/elem/H-1_m.png")} alt="Koszulki termokurczliwe" id="Koszulki termokurczliwe"/>
	},
	{
		name:'Przelotki, przepusty kablowe',
		image: <img src={require("./img/elem/FP-3457_m.png")} alt="Przelotki, przepusty kablowe" id="Przelotki, przepusty kablowe"/>
	},
	{
		name:'Dławnice kablowe',
		image: <img src={require("./img/elem/R-DKM_m.png")} alt="Dławnice kablowe" id="Dławnice kablowe"/>
	},
	{
		name:'Osłony krawędzi, narożników',
		image: <img src={require("./img/elem/F-OK-1090_m.png")} alt="Osłony krawędzi, narożników" id="Osłony krawędzi, narożników"/>
	},
	{
		name:'Opaski zaciskowe',
		image: <img src={require("./img/elem/CTS-GTES_m.png")} alt="Opaski zaciskowe" id="Opaski zaciskowe"/>
	},
	{
		name:'Uchwyty do opasek kablowych',
		image: <img src={require("./img/elem/FTH-40_m.png")} alt="Uchwyty do opasek kablowych" id="Uchwyty do opasek kablowych"/>
	},
	{
		name:'Filtry, osłony do wentylatorów',
		image: <img src={require("./img/elem/MFF_m.png")} alt="Filtry, osłony do wentylatorów" id="Filtry, osłony do wentylatorów"/>
	},
	{
		name:'Podstawki i oprawki pod LED',
		image: <img src={require("./img/elem/FP-6586_m.png")} alt="Podstawki i oprawki pod LED" id="Podstawki i oprawki pod LED"/>
	},
	{
		name:'Tulejki, izolatory, osłony',
		image: <img src={require("./img/elem/FP-10145_m.png")} alt="Tulejki, izolatory, osłony" id="Tulejki, izolatory, osłony"/>
	},
	{
		name:'Amortyzatory, reduktory wibracji',
		image: <img src={require("./img/elem/RFRT-D2_m.png")} alt="Amortyzatory, reduktory wibracji" id="Amortyzatory, reduktory wibracji"/>
	},
	{
		name:'Stopki, nóżki do obudów',
		image: <img src={require("./img/elem/FF_m.png")} alt="Stopki, nóżki do obudów" id="Stopki, nóżki do obudów"/>
	},
	{
		name:'Stopki meblowe i przemysłowe',
		image: <img src={require("./img/elem/O-SWOP_m.png")} alt="Stopki meblowe i przemysłowe" id="Stopki meblowe i przemysłowe"/>
	},
	{
		name:'Podkładki samoprzylepne',
		image: <img src={require("./img/elem/O-FASPR_m.png")} alt="Podkładki samoprzylepne" id="Podkładki samoprzylepne"/>
	},
	{
		name:'Pokrętła i uchwyty',
		image: <img src={require("./img/elem/T-POG_m.png")} alt="Pokrętła i uchwyty" id="Pokrętła i uchwyty"/>
	},
	{
		name:'Zaślepki, uchwyty do szkła',
		image: <img src={require("./img/elem/D-WR_m.png")} alt="Zaślepki, uchwyty do szkła" id="Zaślepki, uchwyty do szkła"/>
	},
	{
		name:'Zaślepki i nasadki',
		image: <img src={require("./img/elem/TM-TM_m.png")} alt="Zaślepki i nasadki" id="Zaślepki i nasadki"/>
	},
	{
		name:'Wkładki, korki, zaślepki do rur',
		image: <img src={require("./img/elem/O-WRKL_m.png")} alt="Wkładki, korki, zaślepki do rur" id="Wkładki, korki, zaślepki do rur"/>
	},
	{
		name:'Końcówki, nakładki na rury',
		image: <img src={require("./img/elem/O-KWB_m.png")} alt="Końcówki, nakładki na rury" id="Końcówki, nakładki na rury"/>
	},
	{
		name:'Osłony rur i kołnierzy',
		image: <img src={require("./img/elem/TM-EP310_m.png")} alt="Osłony rur i kołnierzy" id="Osłony rur i kołnierzy"/>
	},
	{
		name:'Elementy maskujące odporne na wysokie temperatury',
		image: <img src={require("./img/elem/TM-EC_m.png")} alt="Elementy maskujące odporne na wysokie temperatury" id="Elementy maskujące odporne na wysokie temperatury"/>
	},
	{
		name:'Osłony zabezpieczające',
		image: <img src={require("./img/elem/TM-SSR_m.png")} alt="Osłony zabezpieczające" id="Osłony zabezpieczające"/>
	},
	{
		name:'Zabezpieczenia: budowlane, siatki',
		image: <img src={require("./img/elem/O-SIA_m.png")} alt="Zabezpieczenia: budowlane, siatki" id="Zabezpieczenia: budowlane, siatki"/>
	},
	{
		name:'Kółka meblowe',
		image: <img src={require("./img/elem/O-KLZP_m.png")} alt="Kółka meblowe" id="Kółka meblowe"/>
	},
	{
		name:'Akcesoria meblowe, tapicerskie',
		image: <img src={require("./img/elem/T-WRO_m.png")} alt="Akcesoria meblowe, tapicerskie" id="Akcesoria meblowe, tapicerskie"/>
	},
	{
		name:'Uszczelki',
		image: <img src={require("./img/elem/O-KUP_m.png")} alt="Uszczelki" id="Uszczelki"/>
	},
	{
		name:'Narzędzia',
		image: <img src={require("./img/elem/MTG_m.png")} alt="Narzędzia" id="Narzędzia"/>
	},
	{
		name:'Metalowe elementy złączne',
		image: <img src={require("./img/elem/O-MNK_m.png")} alt="Metalowe elementy złączne" id="Metalowe elementy złączne"/>
	},
	{
		name:'Uchwyty szafek, meblowe',
		image: <img src={require("./img/elem/G-UMOP_m.png")} alt="Uchwyty szafek, meblowe" id="Uchwyty szafek, meblowe"/>
	},
	{
		name:'Kapturki i osłony na śruby i nity',
		image: <img src={require("./img/elem/O-OSI2_m.png")} alt="Kapturki i osłony na śruby i nity" id="Kapturki i osłony na śruby i nity"/>
	},
	{
		name:'Przyssawki',
		image: <img src={require("./img/elem/O-PRZ_m.png")} alt="Przyssawki" id="Przyssawki"/>
	},
	{
		name:'Sprężyny',
		image: <img src={require("./img/elem/O-SNDF_m.png")} alt="Sprężyny" id="Sprężyny"/>
	}

]
export default mainComponentObjects