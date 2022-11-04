import { Team } from "./Team"

export class Turn {

    constructor(
        public code: string,
        public clues?: string[],
        public decryption?: string,
        public interception?: string
    ){}

    cluesComplete(){
        return this.clues && this.clues.length === 4
    }

    isDecryptionGood(){
        return this.code === this.decryption
    }

    isInterceptionGood(){
        return this.interception === this.code
    }

}