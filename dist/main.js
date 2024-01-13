(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:String(r)}t.d({},{B:()=>k,Tb:()=>w,lK:()=>E,t:()=>x});var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=e,this.sunk=!1,this.hitIndex=0}var e,n;return e=t,(n=[{key:"hit",value:function(){this.hitIndex++,this.isSunk()}},{key:"isSunk",value:function(){this.hitIndex==this.length&&(this.sunk=!0)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function l(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==a(e)?e:String(e)}var c=function(){function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,r="board",n=Array.from({length:10},(function(){return new Array(10).fill(null)})),(r=l(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.carrier=new o(5),this.battleship=new o(4),this.destroyer=new o(3),this.submarine=new o(3),this.patrolBoat=new o(2)}var e,r;return e=t,(r=[{key:"placeShip",value:function(t,e,r){var n=this;if(function(t,e,r){for(var o=0;o<=t.length-1;o++)if(null!==n.board[e][r+o])return!1;return!0}(t,e,r)){for(var o=0;o<=t.length-1;o++)this.board[e][r+o]=t;return!0}return!1}},{key:"receiveAttack",value:function(t,e){null===this.board[t][e]?this.board[t][e]="miss":(this.board[t][e].hit(),this.board[t][e]="hit")}},{key:"allSunk",value:function(){return!0===this.carrier.sunk&&!0===this.battleship.sunk&&!0===this.destroyer.sunk&&!0===this.submarine.sunk&&!0===this.patrolBoat.sunk}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:String(e)}var b=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.board=new c}var e,r;return e=t,(r=[{key:"playTurn",value:function(t,e,r){t.board.receiveAttack(e,r)}},{key:"randomTurn",value:function(t){var e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return"miss"!==t.board.board[e][r]&&"hit"!==t.board.board[e][r]?(this.playTurn(t,e,r),"".concat(e).concat(r)):this.randomTurn(t)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=!0,p=!1,m=function(t){var e=document.querySelector("body"),r=document.createElement("section");e.appendChild(r),r.classList.add("gridContainer"),r.classList.add(t.name);for(var n=0;n<=9;n++)for(var o=0;o<=9;o++){var a=document.createElement("div");a.classList.add("".concat(n).concat(o)),r.appendChild(a),"player1"===t.name&&null!==w.board.board[n][o]&&a.classList.add("ship"),"player2"===t.name&&h(a)}},h=function(t){t.addEventListener("click",(function(){var e=Number(t.getAttribute("class").charAt(0)),r=Number(t.getAttribute("class").charAt(1));f&&(p||"hit"!==E.board.board[e][r]&&"miss"!==E.board.board[e][r]&&(null!==E.board.board[e][r]?t.classList.add("ship"):t.classList.add("miss"),w.playTurn(E,e,r),f=!1,(p=k(E,w))||setTimeout((function(){y(),f=!0,p=k(w,E)}),300)))}))},y=function(){var t=E.randomTurn(w),e=document.getElementsByClassName("player1")[0].getElementsByClassName("".concat(t)),r=t.charAt(0),n=t.charAt(1);"hit"===w.board.board[r][n]?e[0].classList.add("isHit"):e[0].classList.add("miss")},v=function(t){t.addEventListener("click",(function(){var e=document.getElementById("shipPlaced"),r=document.getElementById("placeShipsTitle"),n=Number(t.getAttribute("class").charAt(0)),o=Number(t.getAttribute("class").charAt(1));"Carrier"==e.textContent?w.board.placeShip(w.board.carrier,n,o)?(e.textContent="Battleship",S(t,w.board.carrier)):console.log("Can't place the ship here"):"Battleship"==e.textContent?w.board.placeShip(w.board.battleship,n,o)?(e.textContent="Destroyer",S(t,w.board.battleship)):console.log("Can't place the ship here"):"Destroyer"==e.textContent?w.board.placeShip(w.board.destroyer,n,o)?(e.textContent="Submarine",S(t,w.board.destroyer)):console.log("Can't place the ship here"):"Submarine"==e.textContent?w.board.placeShip(w.board.submarine,n,o)?(e.textContent="Patrol Boat",S(t,w.board.submarine)):console.log("Can't place the ship here"):"Patrol Boat"==e.textContent&&(w.board.placeShip(w.board.patrolBoat,n,o)?(e.textContent="",r.textContent="Click on start to play the game!",S(t,w.board.patrolBoat),C()):console.log("Can't place the ship here"))}))},g=function(t){var e,r=document.getElementById("shipPlaced"),n=t.classList.value;t.addEventListener("mouseover",(function(){if("Carrier"===r.textContent)e=5;else if("Battleship"===r.textContent)e=4;else if("Destroyer"===r.textContent)e=3;else if("Submarine"===r.textContent)e=3;else{if("Patrol Boat"!==r.textContent)return;e=2}var o=+t.classList.value+(e-1);if(o<10&&(o="0"+o),o.toString().charAt(0)===n.toString().charAt(0))for(var a=0;a<e;a++){var i=+n+a;i<10&&(i="0"+i),document.getElementsByClassName("".concat(i))[0].setAttribute("id","mouseover")}})),t.addEventListener("mouseout",(function(){for(var t=0;t<e;t++){var r=+n+t;r<10&&(r="0"+r),document.getElementsByClassName("".concat(r))[0].removeAttribute("id","mouseover")}}))},S=function(t,e){for(var r=t.classList.value,n=e.length,o=0;o<n;o++){var a=+r+o;a<10&&(a="0"+a),document.getElementsByClassName("".concat(a))[0].classList.add("ship")}t.classList.add("ship")},C=function(){var t=document.querySelector("body"),e=document.getElementById("shipPlacement"),r=document.createElement("button");e.appendChild(r),r.textContent="Start",r.addEventListener("click",(function(){t.removeChild(e),x()}))},w=new b("player1"),E=new b("player2"),k=function(t,e){return!!t.board.allSunk()&&(function(t){var e=document.querySelector("body"),r=document.createElement("h1");"player1"===t.name?r.textContent="You won!":r.textContent="You lost!",e.appendChild(r)}(e),!0)},x=function(){B(),console.log(E.board),m(w),m(E)},B=function(){var t=function(){return Math.floor(10*Math.random())},e=function(){return Math.floor(10*Math.random())};!function r(){return!!E.board.placeShip(E.board.carrier,t(),e())||r()}(),function r(){return!!E.board.placeShip(E.board.battleship,t(),e())||r()}(),function r(){return!!E.board.placeShip(E.board.destroyer,t(),e())||r()}(),function r(){return!!E.board.placeShip(E.board.submarine,t(),e())||r()}(),function r(){return!!E.board.placeShip(E.board.patrolBoat,t(),e())||r()}()};!function(){var t=document.getElementById("shipPlacement"),e=document.createElement("section");t.appendChild(e),e.classList.add("gridContainer"),document.getElementById("shipPlaced").textContent="Carrier";for(var r=0;r<=9;r++)for(var n=0;n<=9;n++){var o=document.createElement("div");o.classList.add("".concat(r).concat(n)),e.appendChild(o),v(o),g(o)}}()})();