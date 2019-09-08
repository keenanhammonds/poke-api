const axios = require("axios");
const PokemonsModel = require("../models/Pokemon");
const TypeModel = require("../models/Type")

//Get the pokemonUrl from the pokemon api

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
const typeUrl = "https://pokeapi.co/api/v2/type/"

//get the pokemonData

let pokemonData = [];


PokemonsModel.deleteMany()
    .then(() => {
        console.log(1)
        for(let i = 1; i < 18; i++) {
            axios
              .get(`${pokemonUrl}${i}`)
              .then(res => res.data)
              .then(pokemon => {
                  console.log(pokemon)
                  pokemonData[i] = {
                    name: pokemon.name,
                    moves: pokemon.moves.map(move => move.move.name),
                    types: pokemon.types.map(type => type.type.name),
                  }
                  console.log(pokemonData[i])
              })
              .then(() => {
                  PokemonsModel.create(pokemonData[i])
                  .then(res => console.log(res))
              })
        }
    }
)

let typeData = [];

TypeModel.deleteMany()
    .then(() => {
        for(let i = 1; i < 18; i++){
            axios
            .get(`${typeUrl}${i}`)
            .then(res => res.data)
            .then(type => {
                typeData[i] = {
                    name: type.name,          
                }
            })
        }
    })











