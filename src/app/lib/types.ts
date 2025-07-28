export interface IMenuItem {
    title: string,
    href: string,
}

export interface IOrderStage {
    id: number,
    icon: string,
    title: string
}

export interface IRegularInfoCard {
    id: number,
    title: string,
    description: string
}

export interface IBingoCard {
    term: string,
    definition: string,
    backgroundIcon: string
}

export interface IFAQ {
    question: string,
    answer: string,
}