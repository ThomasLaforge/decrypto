import { NB_INTERCEPTIONS_TO_WIN, Word, Difficulty, Code } from "./definitions";

export abstract class Deck<T> {

    constructor(
        public cards: T[],
        public discard: T[] = [] // Not implemented
    ){
        this.shuffle()
    }

    shuffle(){
        this.cards = this.cards
    }

    pick(nbCard = 1){
        return this.cards.splice(0, nbCard)
    }

}

export class WordDeck extends Deck<Word> {
    constructor(){
        super([
            {
                value: 'pomme',
                difficulty: Difficulty.Easy
            },
            {
                value: 'pirate',
                difficulty: Difficulty.Easy
            },
            {
                value: 'chaussure',
                difficulty: Difficulty.Easy
            },
            {
                value: 'crème',
                difficulty: Difficulty.Easy
            },
            {
                value: 'hiver',
                difficulty: Difficulty.Easy
            },
            {
                value: 'camion',
                difficulty: Difficulty.Easy
            },
            {
                value: 'trousse',
                difficulty: Difficulty.Easy
            },
            {
                value: 'voiture',
                difficulty: Difficulty.Easy
            },
            {
                value: 'savon',
                difficulty: Difficulty.Easy
            },
            {
                value: 'fraise',
                difficulty: Difficulty.Easy
            }
        ])
    }
}

let allCodes: string[] = []
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
        for (let k = 1; k <= 4; k++) {
            for (let l = 1; l <= 4; l++) {
                if(i !== j && i!== k && i !== l && j !== k && j !== l && k !== l){
                    allCodes.push('' + i + j + k + l)
                }
            }
        }
    }
}

export class CodeDeck extends Deck<Code> {
    constructor(){
        super(allCodes)
    }
}