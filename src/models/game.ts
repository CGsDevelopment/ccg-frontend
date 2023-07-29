import { Characters, Character } from "./character";

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

    /**accepts number of players as param */
    constructor(playerNumber: number) {
        this.Deck = [];
        Characters.forEach((char) => {
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
    }

      
}