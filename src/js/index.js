/*
quando clicar no pokemon escolhido temos que esconder o carto do pokemon anteriormente que foi selecionado e mostrar o proximo cartao que foi selecionado
 intendeu fi dirapariga.

 para isso vamos precisar trabalhar com dois elementos 
 1 - listagem
 2 - cartao do pokémon

 precisamos criar duas variáveis no JS para trabalhar com os elementos da tela 


 */

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela 

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique  feito pelo usuário na listagem de pokémons 

    pokemon.addEventListener('click', () => {
        // remover a classe ativo que marca o pokémon selecionado
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual sera o novo cartao selecionado 
        const idPokemonSelecionado = pokemon.attributes.id.value
    
        const idDoCartaoParaAbrir = 'cartao-'+ idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //  remover e depois adicionar a classe ativo ao item da lista selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})


