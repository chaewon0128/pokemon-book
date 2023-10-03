export interface IPokemonData {
    [key: string]: string;
}

export interface IWrapByEvolution {
    url: string,
}

export interface IPokeminFigure {
    name: string,
    src: string,
    id: number,
    type: 'evolution' | 'information',
}
