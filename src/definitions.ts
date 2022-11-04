export const NB_INTERCEPTIONS_TO_WIN = 2
export const NB_NOT_GOOD_DECRYPTION_TO_LOSE = 2

export enum Difficulty {
    Easy,
    Hard
}

export interface Word {
    value: string,
    difficulty: Difficulty
}

export type Code = string