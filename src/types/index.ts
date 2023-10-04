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