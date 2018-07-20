import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Maps.css';
const Maps = ()=>{
	return (
		<div>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 1280 800">
		<defs>
		<clipPath id="b">
		<rect width="1280" height="800"/>
		</clipPath>
		</defs>
		<g id="a" class="a">
		<rect class="d" width="1280" height="800"/>
		<rect data-tip="Hello World, I am map1" data-for="map1" class="b" width="175" height="175" transform="translate(161 174)"/>
		<rect data-tip="Hello World, I am map2" data-for="map2" class="b" width="71" height="225" transform="translate(348 480)"/>
		<circle class="b" cx="75" cy="75" r="75" transform="translate(926 213)"/>
		<path class="b" d="M588.825,1517l100.508-100.508,54.42,54.42H866.281V1610.79H743.752Z" transform="translate(-75 -1114)"/>
		<path class="b" d="M53-636.652v-.385l-.5,0a42.5,42.5,0,0,1-42.5-42.5,42.5,42.5,0,0,1,42.5-42.5A42.46,42.46,0,0,1,65.849-719.9C67.238-759.3,69.9-802.522,75-824.74c10.791-47.013,42.542-47.013,53.333,0,5.167,22.509,8.137,66.575,9.83,106.391a42.342,42.342,0,0,1,17.338-3.686,42.5,42.5,0,0,1,42.5,42.5,42.5,42.5,0,0,1-42,42.5v.385Z" transform="translate(1166 -141.652) rotate(180)"/>
		</g></svg>
		<ReactTooltip id="map1"/>
		<ReactTooltip id="map2"/>
		</div>)
}
export default Maps;
