import { Game } from "./Game";
import { Team } from "./Team";

const fakeTeams: Team[] = [
    new Team(
        'Les boloss',
        [
            { name: 'Thomas' },
            { name: 'Melanie' },
            { name: 'Kevin' }
        ]
    ),
    new Team(
        'Les débiles',
        [
            { name: 'Etienne' },
            { name: 'Carole' },
            { name: 'Cécile' }
        ]
    )
]

let game = new Game(fakeTeams)
game.init()

game.teams.forEach( (t, k) => {
    console.log('initial turn', { 
        team: t.name, 
        mainPlayer: game.getMainPlayer(k), 
        words: t.words
    })
})

game.teams.forEach( (t, k) => {
    game.giveClues(k, ['toto', 'tata', 'titi', 'tutu'])
})

game.teams.forEach( (t, k) => {
    game.currentTurns[k].decryption = k === 0 ? game.currentTurns[k].code : '1234'
    game.currentTurns[k].interception = k === 0 ? game.currentTurns[k].code : '1234'
})

game.resolveTurns()
game.nextTurn()

game.teams.forEach( (t, k) => {
    console.log('new turn', { 
        team: t.name, 
        mainPlayer: game.getMainPlayer(k), 
        words: t.words,
        badDecryptions: t.notGoodDecryption,
        interception: t.notGoodDecryption,
    })
})