(()=>{"use strict";var t={427:(t,e,r)=>{var s=r(138);(t=r.hmd(t)).exports={Gameboard:class{constructor(){this.carrier=new s.l(5),this.battleship=new s.l(4),this.destroyer=new s.l(3),this.submarine=new s.l(3),this.patrolBoat=new s.l(2)}board=Array.from({length:10},(()=>new Array(10).fill(null)));placeShip(t,e,r){for(let s=0;s<=t.length-1;s++)this.board[e][r+s]=t}receiveAttack(t,e){null===this.board[t][e]?this.board[t][e]="miss":(this.board[t][e].hit(),this.board[t][e]="hit")}allSunk(){return!0===this.carrier.sunk&&!0===this.battleship.sunk&&!0===this.destroyer.sunk&&!0===this.submarine.sunk&&!0===this.patrolBoat.sunk}}}},138:(t,e,r)=>{r.d(e,{l:()=>s}),r(427),t=r.hmd(t);class s{constructor(t){this.length=t,this.sunk=!1,this.hitIndex=0}hit(){this.hitIndex++,this.isSunk()}isSunk(){this.hitIndex==this.length&&(this.sunk=!0)}}t.exports={Ship:s}}},e={};function r(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={id:s,loaded:!1,exports:{}};return t[s](o,o.exports,r),o.loaded=!0,o.exports}r.d=(t,e)=>{for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},r.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(138)})();