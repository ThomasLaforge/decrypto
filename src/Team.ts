import { Player } from "./Player";
import { NB_INTERCEPTIONS_TO_WIN, NB_NOT_GOOD_DECRYPTION_TO_LOSE, Word, Code } from "./definitions";

export class Team {

    constructor(
        public name: string,
        public players: Player[],
        public interceptions = 0,
        public notGoodDecryption = 0,
        public words: Word[] = [],
    ){}

    initWords(words: Word[]){
        this.words = words
    }

    hasLost(){
        return this.notGoodDecryption === NB_NOT_GOOD_DECRYPTION_TO_LOSE
    }

    hasWon(){
        return this.interceptions === NB_INTERCEPTIONS_TO_WIN
    }

    intercept(){
        this.interceptions++
    }

    missDecryption(){
        this.notGoodDecryption++
    }

    get nbPlayers(){
        return this.players.length
    }

}