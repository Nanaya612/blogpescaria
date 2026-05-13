export interface Article {
    id: number,
    title: string,
    author: string,
    content: string,
    release_date: Array<number>,
    popular: boolean,
    slug: string
}