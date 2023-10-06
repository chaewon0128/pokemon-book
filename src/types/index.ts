export interface IPokemonData {
    [key: string]: string;
}

export interface IPokemonFigure {
    name: string,
    src: string,
    id: string,
    type: 'information' | 'main' | 'search' | 'evolution',
    onMoveDetail?: (id: string) => void
}


export interface IUsePageNavigate {
    page: string;
    option?: boolean;
}

export interface IEvolutionDetail {
    data?: {
        id: string;
        sprites: {
            front_default: string;
        };
    };
    korean_name?: string;
}