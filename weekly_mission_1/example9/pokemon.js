class MyPokemon {
    constructor (pokemonName) {
        this.pokemonName = pokemonName
    }

    sayHello() {
        console.log(`Mi pokemon ${this.pokemonName} te saluda!!!`)
    }

    sayMessage(message) {
        console.log(`Mi pokemon ${this.pokemonName} dice ${message}`)
    }
}

export default MyPokemon