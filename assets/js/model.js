export default class FightModel{
    constructor(){
        this.attack = 8;
        this.defense = 4;
        this.initiative = 6;

        this.stats();
    }

    players(){
        const playerStats = {
            attack: Math.floor(Math.random() * this.attack), //max 8
            defense: Math.floor(Math.random() * this.defense), //max 4
            initiative: Math.floor(Math.random() * this.initiative), //max 6
            hp: 20
        }

        console.log(playerStats);
    }
}