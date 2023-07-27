import { Character } from "./character";
import { ActionType } from "./action";

export class Player {
    cards: Character[]; // cards that player have from the start

    // current cards, player may have lost influence and only 1 left
    currentCards: Character[]; // if all gone, player lose

    coins: number;
    lastAction: ActionType | null;
    stillInGame: boolean;

    constructor(cards: Character[]) {
        this.cards = cards;
        this.currentCards = cards;
        this.coins = 2;
        this.lastAction = null;
        this.stillInGame = true;
    }

    gainCoins(amount: number) {
        this.coins += amount;
    }

    payCoins(amount: number) {
        this.coins -= amount;
    }

    loseInfluence(char: Character): boolean {
        let index = this.currentCards.indexOf(char);
        if(index != -1) {
            this.currentCards.splice(index, 1);
        }
        if(this.currentCards.length == 0) {
            this.stillInGame = false;
            return false;
        }
        return true;
    }
}