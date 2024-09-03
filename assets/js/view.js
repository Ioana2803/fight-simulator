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
        this.p1Stats.classList.add('p1-stats', 'stats');
        this.statsDiv.append(this.p1Stats);

        //creating game stats div
        this.gameStats = document.createElement('div');
        this.gameStats.classList.add('game-updates', 'stats');
        this.statsDiv.append(this.gameStats);

        //creating player 2 stats div
        this.p2Stats = document.createElement('div');
        this.p2Stats.classList.add('p2-stats', 'stats');
        this.statsDiv.append(this.p2Stats);


        // creating game div and components
        this.gameDiv = document.createElement('div');
        this.gameDiv.classList.add('game-div');
        this.container.append(this.gameDiv)

        // player 1 div
        this.p1Div = document.createElement('div');
        this.p1Div.classList.add('p1-div', 'game');
        this.gameDiv.append(this.p1Div);

        // btn div
        this.btnDiv = document.createElement('div');
        this.btnDiv.classList.add('game');
        this.gameDiv.append(this.btnDiv);
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
    }

    update(status){
        // console.log(status);
        
        this.newRoundBtn.disabled = !status.gameStatus;
    }
}