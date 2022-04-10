import axios from "axios";
import { useEffect, useState } from "react";
import { Wrapper } from "../../components/atoms";
import './style.css';

const POKEAPI = 'https://pokeapi.co/api/v2/pokemon';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = () => {
        axios.get(POKEAPI).then((res) => {
            setPokemons(res.data.results);
        });
    }

    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <Wrapper className="pokemon-wrapper">
            <h1>Pokemon</h1>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                { pokemons.map((pokemon, index) => (
                    <tr key={index + 1}>
                    <td>{index}</td>
                    <td>{pokemon.name}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Pokemon;