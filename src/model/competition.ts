export type competition = {
    id: string,
    name: string,
    status?: string
}

export enum CompetitionStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED'
}

export interface CompetitionDTO {
    name: string
}


