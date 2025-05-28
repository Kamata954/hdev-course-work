const express = require("express");
const app = express();
const PORT = 8000;

const pokemon = {
    "Tinkaton" : {
        "name" : "Tinkaton",
        "primary-type" : "Fairy",
        "secondary-type" : "Steel",
        "hp" : 90,
        "signature-move" : "Gigaton Hammer"
    },
    "Azumarill" : {
        "name" : "Azumarill",
        "primary-type" : "Water",
        "secondary-type" : "Fairy",
        "hp" : 100,
        "signature-move" : "Aqua Jet"
    },
    "Unown" : {
        "name" : "Unown",
        "primary-type" : "Psychic",
        "secondary-type" : "None",
        "hp" : 1,
        "signature-move" : "Hidden Power"
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:pokemonName', (request,response) => {
    const pokemonNames = request.params.pokemonName
    pokemon[pokemonNames] ? response.json(pokemon[pokemonNames]) : response.json(pokemon["Unown"])
})

app.listen(PORT, () =>{
    console.log(`This server is running on port ${PORT}`);
})
