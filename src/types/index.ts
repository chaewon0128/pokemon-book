export interface IPokemonData {
    [key: string]: string;
}

export interface IPokemonFigure {
    name: string,
    src?: string,
    id?: string,
    type: 'information' | 'main' | 'search' | 'evolution',
    onMoveDetail?: (id: string) => void
}


export interface IUsePageNavigate {
    page: string;
    option?: boolean;
}

export interface IPokemonDetail {
    korean_name: string,
    korean_info: string,
    evolution_chain: { url: string },
    data?: {
        id: string,
        sprites: { front_default: string, other: { dream_world: { [key: string]: string } } }
    }
}