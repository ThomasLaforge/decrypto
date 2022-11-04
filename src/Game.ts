import { Team } from "./Team";
import { WordDeck, CodeDeck } from "./Deck";
import { Turn } from "./Turn";

export class Game {
    
    constructor(
        public teams: Team[],
        public words = new WordDeck(),
        public codes = new CodeDeck(),
        public history: Turn[] = [],
        public currentTurns: Turn[] = []
    ){}

    init(){
        this.teams.forEach( (t, k) => {
            t.initWords( this.words.pick(4) )
            this.currentTurns[k] = new Turn(this.codes.pick()[0])
        })
    }

    getMainPlayer(teamIndex: number){
        const team = this.teams[teamIndex]
        const playerIndex = (this.history.length / 2) % team.nbPlayers
        return this.teams[teamIndex].players[playerIndex]
    }

    giveClues(teamIndex: number, clues: string[]){
        this.currentTurns[teamIndex].clues = clues
    }

    allTeamsGaveClues(){
        return this.currentTurns.filter(t => t.cluesComplete()).length === 2
    }

    allTeamsGaveCode(){
        return this.currentTurns.filter(t => t.decryption).length === 2
    }

    resolveTurns(){
        this.currentTurns.forEach( (turn, k) => {
            let otherTeamIndex = Math.abs(k - 1)
            if(!turn.isDecryptionGood()){
                this.teams[k].missDecryption()
            }
            if(turn.isInterceptionGood()){
                this.teams[otherTeamIndex].intercept()
            }
        })
    }

    nextTurn(){
        this.history = this.history.concat(this.currentTurns)
        this.teams.forEach( (t, k) => {
            this.currentTurns[k] = new Turn(this.codes.pick()[0])
        })
    }

    isGameOver(){
        return this.teams.filter(t => t.hasLost() || t.hasWon()).length > 0
    }

}