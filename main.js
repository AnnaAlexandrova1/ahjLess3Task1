(()=>{"use strict";const t=new class{constructor(){this.board=void 0}drowBoard(t){const s=document.createElement("div");s.classList.add("board");for(let e=0;e<Math.floor(t)**2;e+=1){const t=document.createElement("div");t.classList.add("cell"),s.appendChild(t)}this.board=s,document.body.appendChild(s)}getBoard(t){return this.drowBoard(t),this.board}};t.drowBoard(4);const s=new class{constructor(t,s){this.board=t,this.size=s,this.position=void 0,this.activePosition=null}init(){const t=document.querySelector("body");t.insertBefore(this.createGoblinCounter(),t.firstChild),this.cells=Array.from(document.getElementsByClassName("cell")),this.cells.forEach((t=>t.addEventListener("click",this.onBoardClick.bind(this)))),this.start()}createPosition(){this.cells=Array.from(document.getElementsByClassName("cell"));let t=Math.floor(Math.random()*this.size**2);this.position===t&&(t=Math.floor(Math.random()*this.size**2)),this.removePosition(),this.position=t,this.addPosition()}removePosition(){void 0!==this.position&&this.cells[this.position].classList.remove("goblin")}addPosition(){this.cells[this.position].classList.add("goblin")}createGoblinCounter(){return this.goblinCounter=document.createElement("div"),this.goblinCounter.classList.add("countInfo"),this.goblinCounter.innerHTML='Убито гоблинов:<span class="dead">0</span><br>Промахов: <span class="lost">0</span><br>',this.goblinCounter}onBoardClick(t){t.preventDefault(),this.dead=document.querySelector(".dead"),this.lost=document.querySelector(".lost"),t.target.classList.contains("goblin")?(++this.dead.textContent,t.target.classList.remove("goblin")):++this.lost.textContent,this.dead.textContent>=5&&this.resetStore(),this.lost.textContent>=5&&this.resetStore(),this.changeCoursor()}changeCoursor(){this.cells=Array.from(document.getElementsByClassName("cell")),this.cells.forEach((t=>t.classList.add("hummer")))}resetStore(){this.lost.textContent=0,this.lost.textContent=0}start(){this.createPosition(),setInterval((()=>{this.createPosition()}),1e3)}}(t,4);s.init()})();