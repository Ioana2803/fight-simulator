export default class FightModel{
    constructor(p1, p2){
        this.p1 = p1;
        this.p2 = p2;

        this.p1.stats.hp = this.p1.stats.maxHp;
        this.p2.stats.hp = this.p2.stats.maxHp;
        
        this.observers = [];
        this.roundLog = {};

        this.rounds = 0;
        this.maxRounds = 10;

        this.notifyObservers();
    }

    get gStatus(){
        return {
            gameStatus: this.checkGameOver()
        }
    }

    checkGameOver(){
        // conditions
        if(this.p1.stats.hp <= 0){
            return false;
        }

        if(this.p2.stats.hp <= 0){
            return false;
        }

        // check rounds
        if (this.rounds == this.maxRounds) {
            console.error("The rounds are over");
            
            return false;
        }

        return true;
    }

    attack(player1, player2){
        const p1Attack = Math.floor(Math.random() * player1.stats.maxAttack + 1);
        const p2Defense = Math.floor(Math.random() * player2.stats.maxDefense + 1);
        player2.stats.hp -= Math.max(p1Attack - p2Defense, 0);

        let attackData = {
            attacker: `${player1.name} attacks with ${p1Attack} and ${player2.name} defends with ${p2Defense}`,
            deffender: `${player2.name} remains with ${player2.stats.hp} hp from ${player2.stats.maxHp}`
        }

        console.log('');
        console.log(`${player1.name} attacks with ${p1Attack} and ${player2.name} defends with ${p2Defense}`);
        console.log(`${player2.name} remains with ${player2.stats.hp} hp from ${player2.stats.maxHp}`);

        return attackData;
    }

    newRound(){
        if(!this.gStatus.gameStatus){
            return;
        }

        // console.log(`===== Round ${this.rounds} =====`);
        
        // console.log("initial stats");
        // console.log(`${this.p1.name} => ${this.p1.stats.hp} hp`);
        // console.log(`${this.p2.name} => ${this.p2.stats.hp} hp`);


        // determine initiative
        const p1Initiative = Math.floor(Math.random() * this.p1.stats.initiative + 1);
        const p2Initiative = Math.floor(Math.random() * this.p2.stats.initiative + 1);
        const[firstAttacker, secondAttacker] = p1Initiative > p2Initiative ? [this.p1, this.p2] : [this.p2, this.p1];
        // console.log(`${this.p1.name} initiative ${p1Initiative}     ${this.p2.name} initiative ${p2Initiative}`);

        // collecting initiative data
        let newRoundData = {
            p1Initiative: p1Initiative,
            p2Initiative: p2Initiative
        }

        // first player attacks
        let firstAttackData = this.attack(firstAttacker, secondAttacker);

        // second player attacks
        let secondAttackData = null;
        if(this.gStatus.gameStatus){
            secondAttackData = this.attack(secondAttacker, firstAttacker);
        }

        // verify if the game is over
        if(!this.gStatus.gameStatus){
            console.error("Game over!");
        }

        //increasing the number of rounds and creating a round log
        this.roundLog = {
            newRData: newRoundData,
            firstAttack: firstAttackData.attacker,
            firstDefend: firstAttackData.deffender,
            secondAttack: secondAttackData.attacker,
            secondDefend: secondAttackData.deffender
        }
        this.rounds++;
        // console.log('Round data: ', this.roundLog);
        // console.log('');

        this.notifyObservers();
    }

    addObserver(newObserver){
        this.observers.push(newObserver);
        newObserver.update({
            stats: this.gStatus,
            round: this.rounds,
            roundLog: this.roundLog
        });
    }

    notifyObservers(){
        for (let i = 0; i < this.observers.length; i++){
            this.observers[i].update({
                    stats: this.gStatus,
                    round: this.rounds,
                    roundLog: this.roundLog
            });
        }
    }
}