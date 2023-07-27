import { ActionType } from "./action";

/** simple type for Character */
export type CharacterType = 'Duke' | 'Assassin' | 'Ambassador' | 'Captain' | 'Contessa';

/*** interface to define rules of characters */
export interface Character {
    name: CharacterType,
    blocks: ActionType | null
}

/** Duke's counter action */
const Duke: Character = {
    name: 'Duke',
    blocks: 'Foreign Aid'
}

/** Assassin's counter action */
const Assassin: Character = {
    name: 'Assassin',
    blocks: null
}

/** Ambassador's counter action */
const Ambassador: Character = {
    name: 'Ambassador',
    blocks: 'Steal'
}

/** Captain's counter action */
const Captain: Character = {
    name: 'Captain',
    blocks: 'Steal'
}

/** Contessa's counter action */
const Contessa: Character = {
    name: 'Contessa',
    blocks: 'Assassinate'
}

// pack all characters' rules and export
export const Characters: Character[] = [Duke, Assassin, Ambassador, Captain, Contessa];