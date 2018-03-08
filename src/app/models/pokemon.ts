import { Type } from "./type";

export class Pokemon {
    _id: number;
    name: string;
    slug: string;
    level: number;
    img: string;
    types: string[];
    evolutions: Pokemon[]
}