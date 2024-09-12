export class RoundView{
    constructor(middleRow, model){
        this.parent = middleRow;
        this.model = model;

        this.init();
        this.model.addObserver(this);    
    }

    init(){
        // log div
        this.updateDiv = document.createElement('div');
        this.updateDiv.classList.add('update');
        this.updateDiv.innerText = '';
        this.parent.append(this.updateDiv);
    }

    update(roundInfo){
        // console.log(roundInfo);
        
        const updateText = `Round: ${roundInfo.round}
        First attack:
        ${roundInfo.roundLog.firstAttack} 
        ${roundInfo.roundLog.firstDefend}
        
        Second attack:
        ${roundInfo.roundLog.secondAttack}
        ${roundInfo.roundLog.secondDefend}

        `;

        this.updateDiv.innerText += roundInfo.roundLog.firstAttack? updateText: '';
        this.updateDiv.scrollTop = this.updateDiv.scrollHeight;
    }
}