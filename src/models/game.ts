import { Characters, Character } from "./character";

export class Game {
    Deck: Character[];
    treasury: number;

    constructor() {
        this.Deck = [];
        Characters.forEach((char) => {
            for (let i = 0; i < 3; i++) {
                this.Deck.push(char);
            }
        });
        this.treasury = 50;

        // shuffle Deck
    }
}