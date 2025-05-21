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
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:pokemonName', (request,response) => {
    console.log(request.params.pokemonName)
    response.json(pokemon)
})

app.listen(PORT, () =>{
    console.log(`This server is running on port ${PORT}`);
})
