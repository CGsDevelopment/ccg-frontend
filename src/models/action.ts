import { CharacterType } from "./character";

/** simple type for Action */
export type ActionType = 'Income' | 'Foreign Aid' | 'Coup' | 'Tax' | 'Assassinate' | 'Exchange' | 'Steal';

/*** interface to define rules of actions */
export interface Action {
    name: ActionType,
    effect: 'pay' | 'take' | 'exchange',
    coins: number | null,
    character: CharacterType | null,
    blockable: boolean,
    challengable: boolean
}

/** Income's rules
 ** gives player 1 coin
 ** non-blockable
 ** non-challengable
 */
 const Income: Action = {
    name: 'Income',
    effect: 'take',
    coins: 1,
    character: null,
    blockable: false,
    challengable: false
}

/** Foreign Aid's rules
 ** gives player 2 coins
 ** blockable by Duke
 ** non-challengable
 */
 const Foreign_Aid: Action = {
    name: 'Foreign Aid',
    effect: 'take',
    coins: 2,
    character: null,
    blockable: true,
    challengable: false
}

/** Coup's rules
 ** cost player 7 coins
 ** forces target player to lose one influence card
 ** if a player has 10 or more coins, they have to play this action
 ** non-blockable
 ** non-challengable
 */
 const Coup: Action = {
    name: 'Coup',
    effect: 'pay',
    coins: 7,
    character: null,
    blockable: false,
    challengable: false
}

/** Tax's rules
 ** gives player 3 coins
 ** non-blockable
 ** challengable -> when challenged, the player must show Duke's card
 */
 const Tax: Action = {
    name: 'Tax',
    effect: 'take',
    coins: 3,
    character: 'Duke',
    blockable: false,
    challengable: true
}

/** Assassinate's rules
 ** cost player 3 coins
 ** chosen target player lose influence
 ** blockable by target player's Contessa
 ** challengable -> when challenged, the player must show Assassin's card
 */
 const Assassinate: Action = {
    name: 'Assassinate',
    effect: 'pay',
    coins: 3,
    character: 'Assassin',
    blockable: true,
    challengable: true
}

/** Exchange's rules
 ** no coins involved
 ** exchange cards with Court Deck
 ** non-blockable
 ** challengable -> when challenged, the player must show Ambassador's card
 */
 const Exchange: Action = {
    name: 'Exchange',
    effect: 'exchange',
    coins: null,
    character: 'Ambassador',
    blockable: false,
    challengable: true
}

/** Steal's rules
 ** take 2 coins from target player
 ** blockable by target player's Ambassador or Captain
 ** challengable -> when challenged, the player must show Captain's card
 */
 const Steal: Action = {
    name: 'Steal',
    effect: 'take',
    coins: 2,
    character: 'Captain',
    blockable: true,
    challengable: true
}

// pack all actions' rules and export
export const Actions: Action[] = [Income, Foreign_Aid, Coup, Tax, Assassinate, Exchange, Steal];