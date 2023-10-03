export interface IPokemonData {
    [key: string]: string;
}

export interface IPokemonFigure {
    name: string,
    src: string,
    id: string,
    type: 'evolution' | 'information' | 'main',
    onMoveDetail?: (id: string) => void
}
