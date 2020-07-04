"use strict";

class ticTacToe {
    constructor(){
        this.gameTableElement = document.getElementById("game");
        this.status = "playing";
        this.mapValues = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.phase = "X";
    } 
    init() {
        this.renderMap();
        this.initEventHandlers();
    }
    renderMap() {
        for (let x = 0; x < 3; x++) {
            const tr = document.createElement("tr");
            this.gameTableElement.appendChild(tr);
            for (let y = 0; y < 3; y++) {
                let td = document.createElement("td")
                td.dataset.row = +x;
                td.dataset.col = +y;
                tr.appendChild(td);
            }
        }
    }
    initEventHandlers(){
        this.gameTableElement.addEventListener("click",event => this.cellClickHandler(event));
    }
    cellClickHandler(event){
        if (!this.isCorrectClick(event)){
            return;
        }
        this.fillCell(event);
        if(this.hasWon()){
            this.setStatusStopped();
            this.sayWonPhrase();
        }
        this.togglePhase();
    }
    isCorrectClick(event){
        return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
    }
    isStatusPlaying(){
        return this.status == "playing";
    }
    isClickByCell(){
        return event.target.tagName === "TD";
    }
    isCellEmpty(event){
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        return this.mapValues[row][col] === "";
    }
    fillCell(event){
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;
        this.mapValues[row][col] = this.phase;
        event.target.textContent = this.phase;
    }
    hasWon(){
        return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0},) ||
               this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1},) ||
               this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2},) ||

               this.isLineWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2},) ||
               this.isLineWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2},) ||
               this.isLineWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2},) ||

               this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2},) ||
               this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0},);
    }
    isLineWon(a, b, c){
        let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x];
        return value === "XXX" || value === "000";
    }
    setStatusStopped(){
        this.status = "stopped";
    }
    sayWonPhrase(){
        let figure = this.phase === "X" ? "Крестики" : "Нолики";
        alert(`${figure} выиграли!`)
    }
    togglePhase(){
        this.phase = this.phase === "X" ? "0" : "X";
    }
}

window.addEventListener("load", function () {
    let game = new ticTacToe;
    game.init();
})