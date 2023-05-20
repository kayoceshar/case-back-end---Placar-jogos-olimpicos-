export type competition = {
    id: string,
    name: string,
    status?: string
}

export class Competition {
    constructor(
        private id: string,
        private name: string
    ){}
}




export enum CompetitionStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

export interface CompetitionDTO {
    name: string
}


