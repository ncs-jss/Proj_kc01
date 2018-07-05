import React from 'react';
import './Nearby.css';
import Card from '../../components/Card/Card';
	const data = [
	{	name:'Stellar IT Park',
		dist:'100m',
		type:'Multipurpose Building',
		desc:'See a movie at the drive-in. Eat a whole lobster with your hands. Buy a Creamsicle from the neighborhood ice cream truck.',
		link:'//goo.gl/maps/yeo8mzvDkgG2'
	},
	{
		name:'Balram Tea Stall',
		dist:'30m',
		type:'Tea Stall',
		desc:'Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm',
		link:'#'
	},
	{
		name:'Fortis Hospital',
		dist:'1000m',
		type:'Hospital',
		desc:'Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum.',
		link:'//goo.gl/maps/XGy6xYxBzA12'
	},
	{	name:'Stellar IT Park',
		dist:'100m',
		type:'Multipurpose Building',
		desc:'See a movie at the drive-in. Eat a whole lobster with your hands. Buy a Creamsicle from the neighborhood ice cream truck.',
		link:'//goo.gl/maps/yeo8mzvDkgG2'
	},
	{
		name:'Balram Tea Stall',
		dist:'30m',
		type:'Tea Stall',
		desc:'Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm',
		link:'#'
	},
	{
		name:'Fortis Hospital',
		dist:'1000m',
		type:'Hospital',
		desc:'Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum.',
		link:'//goo.gl/maps/XGy6xYxBzA12'
	},
	{
		name:'Balram Tea Stall',
		dist:'30m',
		type:'Tea Stall',
		desc:'Catch fireflies at night. Eat corn on the cob. Eat a soft-serve vanilla ice cream cone with rainbow sprinkles. Watch the sun set from a beach. Get caught in a summer rainstorm',
		link:'#'
	},
	{
		name:'Fortis Hospital',
		dist:'1000m',
		type:'Hospital',
		desc:'Read a trashy novel. Smell freshly-cut grass. Dum dum,eat some gum-gum.',
		link:'//goo.gl/maps/XGy6xYxBzA12'
	},
	{	name:'Stellar IT Park',
		dist:'100m',
		type:'Multipurpose Building',
		desc:'See a movie at the drive-in. Eat a whole lobster with your hands. Buy a Creamsicle from the neighborhood ice cream truck.',
		link:'//goo.gl/maps/yeo8mzvDkgG2'
	}
	];
const Component = props =>{
	return <div className="nearby" id="container">
				<div className="nearby-content" id="myContent">
					{data.map(p => <Card name={p.name} dist={p.dist} type={p.type} desc={p.desc} link={p.link}></Card>)}
				</div>
			</div>
}
export default Component;
