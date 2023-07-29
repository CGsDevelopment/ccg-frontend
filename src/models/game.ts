import { Characters, Character } from "./character";
import { Player } from "./player";
import { Action, Actions } from "./action";

// knuth-fisher-yates shuffle algorithm
export function shuffleDeck(deck: Character[]): Character[] {
    const shuffledDeck = [...deck];
    let currentIndex = deck.length;



    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap elements at randomIndex and currentIndex
        const temp = shuffledDeck[currentIndex];
        shuffledDeck[currentIndex] = shuffledDeck[randomIndex];
        shuffledDeck[randomIndex] = temp;
    }

    return shuffledDeck;
}

export class Game {
    Deck: Character[];
    treasury: number;
    Players: Player[];
    turn: number;
    numberOfPlayers: number;

    /**accepts number of players as param */
    constructor(numberOfPlayers: number) {
        this.Deck = [];
        Characters.forEach((char: Character) => {
            for (let i = 0; i < 3; i++) {
                this.Deck.push(char);
            }
        });
        this.treasury = 50;

        // shuffle Deck
        this.Deck = shuffleDeck(this.Deck);
        // this.Deck.map((card) => {
        //     console.log(card.name);
        // });
        // console.log(this.Deck.length, ": Deck ends...........");

        this.Players = [];
        this.numberOfPlayers = numberOfPlayers;
        for (let i = 0; i < numberOfPlayers; i++) {
            if (this.Deck.length > 2) {
                let firstCard = this.Deck.pop();
                let secondCard = this.Deck.pop();
                if (firstCard && secondCard) {
                    this.Players.push(new Player([firstCard, secondCard]));
                }
            }
        }

        this.turn = 0;
    }

    /**helper function to change turns */
    private changeTurn() {
        if (this.turn < this.numberOfPlayers) {
            this.turn += 1;
        } else {
            this.turn = 0;
        }
    }

    /**player choses an action, accepts action as param, return boolean */
    playAction(action: Action): boolean{

        return true;
    }
}