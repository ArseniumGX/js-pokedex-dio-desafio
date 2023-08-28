const btnVoltar = document.getElementById("voltar");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const nome = document.getElementById("nome");
const numero = document.getElementById("numero");
const tipo = document.getElementById("tipo");
const imagem = document.getElementById("imagem");
const headerElement = document.querySelector("header");
const mainElement = document.querySelector("main");

const loadInfos = () => {
	pokeApi.getPokemon(id).then((pokemon) => {
		nome.innerHTML = pokemon.name;
		numero.innerHTML += pokemon.id;
		imagem.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
		tipo.innerHTML += pokemon.types.map(
			({ type }) => `<li class=${type.name}>${type.name}</li>`
		);
		headerElement.classList.add(pokemon.types[0].type.name);
		mainElement.classList.add(pokemon.types[0].type.name);
	});
};

loadInfos();

btnVoltar.addEventListener("click", () => {
	window.location.href = "/";
});
