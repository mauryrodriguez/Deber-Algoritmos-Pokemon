consola . log ( " FUNCIONES " );

función  Pokemon ( nombre )
{
    esta . nombre = nombre;
    esta . ataque = 50 ;
    esta . vida = 200 ;
    esta . atacar = función ( pokemonObjetivo )
    {
        if ( pokemonObjetivo . vida <= 0 ) {
            consola . error ( " Pokemon-MURIO " );
            alerta ( " Pokemon " + pokemonObjetivo . nombre + " ha muerto " );
        }
        else {
            PokemonObjetivo . vida - = 50 ;
            esta . vida  + = 50 ;
            esta . mostrarInfo (pokemonObjetivo)
        }
    }
    esta . mostrarInfo  =  función ( pokemonObjetivo ) {
        consola . log (pokemonObjetivo);
        consola . registro ( esto )
    }
}

var pokemon_1 = " " ;
var pokemon_2 = " " ;

función  crearPokemons () {
    pokemon_1 =  documento . getElementById ( " nombre " ). valor ;
    pokemon_2 =  documento . getElementById ( " name2 " ). valor ;
}

var pokemon1 =  nuevo  Pokemon (pokemon_1);
var pokemon2 =  nuevo  Pokemon (pokemon_2);

función  atackPokemon () {
    pokemon1 . atacar (pokemon2);
    documento . Formulario . nomPokemon1 . valor = pokemon_1;
    documento . Formulario . nomPokemon2 . valor = pokemon_2;
    documento . Formulario . VidaPokemon1 . valor = pokemon1 . Vida ;
    documento . Formulario . VidaPokemon2 . valor = pokemon2 . Vida ;    
}