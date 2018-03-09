import { Pokemon } from "./pokemon";

export class User {
    _id: number;
    username: string;
    email: string;
    password: number;
    token: string;
    pokemons: Pokemon[]
}