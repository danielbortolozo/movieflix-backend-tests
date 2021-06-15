
export type MovieResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie  = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
    reviews: Review[];
}

export type Review = {
    id: number;
    text: string;
    user: User;
    movie: Movie;
}

export type Genre = {
    id: number;
    name: string;
}

export type User = {
    id: number;
    userName?: string;
    email?: string;
    password?: string;
    roles?: Role[];
    reviews?: Review[];
}

export type Role = {
    id: number;
    authority: string;
}

export type GenreResponse = {
    content: Genre[];
    totalPages:number;
}

export type ReviewResponse = {
    content: Review[];
    totalPages:number;
}