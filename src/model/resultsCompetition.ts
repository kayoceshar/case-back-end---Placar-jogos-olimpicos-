export type result = {
    id:string;
    competicao: string;
    atleta: string;
    value: number;
    unidade: string;
    competition_id: string;
}

export interface ResultInputDTO {
    competicao: string;
    atleta: string;
    value: number;
    unidade: string;    
}




