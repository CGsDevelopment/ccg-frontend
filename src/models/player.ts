import { Character, CharacterType } from "./character";
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

    /**give player coins */
    gainCoins(amount: number) {
        this.coins += amount;
    }

    /**player pays coins */
    payCoins(amount: number) {
        this.coins -= amount;
    }

    /**check if a player has this cards
     ** for simplicity, accepts CharacterType value
     ** returns true if there is a card
     */
    checkCard (card: CharacterType): boolean {
        let found = this.currentCards.find(c => c.name === card);
        return (found !== undefined);
    }

    /**player lost a card
     ** accepts CharacterType as param
     ** also returns boolean
     ** true -> still in game
     ** false -> out of the game
     */
    loseInfluence(card: CharacterType): boolean {
        let found = this.currentCards.find(c => c.name === card);
        if(found != undefined) {
            let index = this.currentCards.indexOf(found);
            this.currentCards.splice(index, 1);
        }
        if(this.currentCards.length == 0) {
            this.stillInGame = false;
            return false;
        }
        return true;
    }
}