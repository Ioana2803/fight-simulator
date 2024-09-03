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

        this.newRoundBtn = document.createElement('button');
        this.newRoundBtn.classList.add('new-round');
        this.newRoundBtn.innerText = 'New Round';
        this.container.append(this.newRoundBtn);
        this.newRoundBtn.addEventListener('click', () => this.model.newRound());
    }

    update(status){
        // console.log(status);
        
        this.newRoundBtn.disabled = !status.gameStatus;
    }
}