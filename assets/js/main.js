import FightModel from "./model.js";
import FightView from "./view.js";
import { RoundView } from "./roundView.js";

const parent = document.querySelector('.parent');

const player1 = {
        name: 'Kiki',
        stats: {
            maxAttack: 13,
            maxDefense: 10,
            initiative: 10,
            maxHp: 20,
            hp: 0
        }
    }
const player2 = {
        name: 'Mario',
        stats: {
            maxAttack: 9,
            maxDefense: 13,
            initiative: 7,
            maxHp: 25,
            hp: 0
        }
    }
    
const model = new FightModel(player1, player2);
const view = new FightView(parent, model);
const log = document.querySelector('.middle-row');
const roundView = new RoundView(log, model);