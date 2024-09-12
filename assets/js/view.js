import { RoundView } from "./roundView.js";
import { hBarView } from "./healthBarView.js";

export default class FightView{
    constructor(parentDOMElement, fightModel){
        this.parent = parentDOMElement;
        this.model = fightModel;

        this.init();
        this.model.addObserver(this);
    }

    init(){
        this.container = document.createElement('div');
        this.container.classList.add('container');
        this.parent.append(this.container);


        // creating stats div
        this.statsDiv = document.createElement('div');
        this.statsDiv.classList.add('stats-div');
        this.container.append(this.statsDiv);

        //creating player 1 stats div
        this.p1Stats = document.createElement('div');
        this.p1Stats.classList.add('p1-stats', 'top');
        this.statsDiv.append(this.p1Stats);
        //creating player 1 title
        this.p1Title = document.createElement('div');
        this.p1Title.classList.add('title');
        this.p1Title.innerText = 'Player 1';
        this.p1Stats.append(this.p1Title);
        //creating player 1 text
        this.p1Text = document.createElement('div');
        this.p1Text.classList.add('text');
        this.p1Stats.append(this.p1Text);

        //creating game stats div
        this.roundDiv = document.createElement('div');
        this.roundDiv.classList.add('round', 'top');
        this.statsDiv.append(this.roundDiv);

        //creating player 2 stats div
        this.p2Stats = document.createElement('div');
        this.p2Stats.classList.add('p2-stats', 'top');
        this.statsDiv.append(this.p2Stats);
        //creating player 2 title
        this.p2Title = document.createElement('div');
        this.p2Title.classList.add('title');
        this.p2Title.innerText = 'Player 2';
        this.p2Stats.append(this.p2Title);
        //creating player 2 text
        this.p2Text = document.createElement('div');
        this.p2Text.classList.add('text');
        this.p2Stats.append(this.p2Text);


        // creating game div and components
        this.gameDiv = document.createElement('div');
        this.gameDiv.classList.add('game-div');
        this.container.append(this.gameDiv)

        // player 1 div
        this.p1Div = document.createElement('div');
        this.p1Div.classList.add('p1-div', 'game');
        this.gameDiv.append(this.p1Div);

        // middle row div
        this.middleRow = document.createElement('div');
        this.middleRow.classList.add('game');
        this.gameDiv.append(this.middleRow);
        // btn div
        this.btnDiv = document.createElement('div');
        this.btnDiv.classList.add('buttonDiv');
        this.middleRow.append(this.btnDiv);
        // new round button
        this.newRoundBtn = document.createElement('button');
        this.newRoundBtn.classList.add('new-round');
        this.newRoundBtn.innerText = 'New Round';
        this.btnDiv.append(this.newRoundBtn);
        this.newRoundBtn.addEventListener('click', () => this.model.newRound());

        // player 2 div
        this.p2Div = document.createElement('div');
        this.p2Div.classList.add('p2-div', 'game');
        this.gameDiv.append(this.p2Div);

        const roundView = new RoundView(this.middleRow, this.model);
        const healthBarView = new hBarView(this.container, this.model);
    }

    update(roundInfo){
        this.newRoundBtn.disabled = !roundInfo.stats.gameStatus;

        const attackIcon =`
            <svg width="1.3rem" height="1.3rem" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill-rule="nonzero" d="M17.457 3L21 3.003l.002 3.523-5.467 5.466 2.828 2.829 1.415-1.414 1.414 1.414-2.474 2.475 2.828 2.829-1.414 1.414-2.829-2.829-2.475 2.475-1.414-1.414 1.414-1.415-2.829-2.828-2.828 2.828 1.415 1.415-1.414 1.414-2.475-2.475-2.829 2.829-1.414-1.414 2.829-2.83-2.475-2.474 1.414-1.414 1.414 1.413 2.827-2.828-5.46-5.46L3 3l3.546.003 5.453 5.454L17.457 3zm-7.58 10.406L7.05 16.234l.708.707 2.827-2.828-.707-.707zm9.124-8.405h-.717l-4.87 4.869.706.707 4.881-4.879v-.697zm-14 0v.7l11.241 11.241.707-.707L5.716 5.002l-.715-.001z"/>
                </g>
            </svg>`;
        const shieldIcon = `
            <svg width="1.3rem" height="1.3rem" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604z"/>
                </g>
            </svg>`;
        const heartIcon = `
            <svg width="1.3rem" height="1.3rem" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8.5C1 5.21475 3.31333 2 7 2C8.70883 2 9.92877 2.48125 10.8649 3.2079C11.3091 3.55266 11.6802 3.94929 11.9974 4.33639C12.311 3.95011 12.6785 3.55357 13.1186 3.20977C14.0531 2.47979 15.275 2 17 2C20.7289 2 23 5.22013 23 8.5C23 11.8412 21.3259 14.6994 19.2285 16.9297C17.1279 19.1634 14.523 20.8565 12.4472 21.8944C12.1657 22.0352 11.8343 22.0352 11.5528 21.8944C9.47698 20.8565 6.8721 19.1634 4.77151 16.9297C2.67415 14.6994 1 11.8412 1 8.5ZM7 4C4.68667 4 3 6.02986 3 8.5C3 11.1445 4.32585 13.5363 6.22849 15.5596C7.9833 17.4256 10.1612 18.9027 12 19.8754C13.8388 18.9027 16.0167 17.4256 17.7715 15.5596C19.6741 13.5363 21 11.1445 21 8.5C21 6.02448 19.3463 4 17 4C15.6874 4 14.907 4.35067 14.3497 4.78592C13.8333 5.18934 13.4736 5.68102 13.045 6.26703C12.9669 6.37374 12.8866 6.48357 12.8026 6.59656C12.6139 6.85039 12.3163 7 12 7C11.6837 7 11.3861 6.85039 11.1974 6.59656C11.1256 6.49997 11.0562 6.4055 10.9884 6.31318C10.5465 5.71179 10.1717 5.20159 9.63856 4.78779C9.07355 4.34922 8.29117 4 7 4Z" fill="#000000"/>
            </svg>`;

        this.p1Text.innerHTML = `Initiative: ${this.model.p1.stats.initiative} <br>
                    ${attackIcon} ${this.model.p1.stats.maxAttack}  ${shieldIcon} ${this.model.p1.stats.maxDefense}
                    ${heartIcon} ${this.model.p1.stats.maxHp}
        `;

        this.roundDiv.innerText = roundInfo.round? `Round: ${roundInfo.round}`: 'Press new round to start the game';
        

        this.p2Text.innerHTML = `Initiative: ${this.model.p2.stats.initiative} <br>
                    ${attackIcon} ${this.model.p2.stats.maxAttack}  ${shieldIcon} ${this.model.p1.stats.maxDefense}
                    ${heartIcon} ${this.model.p2.stats.maxHp}
        `;          
    }
}