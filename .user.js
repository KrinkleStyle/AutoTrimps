// ==UserScript==
// @name         AutoTrimps-KrinkleStyle
// @version      1.0-KrinkleStyle
// @namespace    https://KrinkleStyle.github.io/AutoTrimps
// @updateURL    https://KrinkleStyle.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *KrinkleStyle.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest 
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-KrinkleStyle';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://KrinkleStyle.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
