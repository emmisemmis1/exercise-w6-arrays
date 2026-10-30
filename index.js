const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  console.log (`I have ${pokemons.length} pokemons!`);
  };
  countThem();

const orderThem = () => {
  const orderedPokemons = [...pokemons].sort();
  console.log(orderedPokemons);
};
orderThem();

const flipThem = () => {
  const reversePokemons = [...pokemons].reverse();
  console.log(reversePokemons)
};
flipThem();

const makeThemBig = () => {
  pokemons.forEach((pokemon) => {
    console.log (pokemon.toUpperCase());
  });
};
makeThemBig();


const onlyTheBs = () => {
  const BsPokemons = pokemons.filter((pokemon) => {
    return pokemon.startsWith("B");
  });
  console.log(BsPokemons);
};
onlyTheBs();

const notTheCs = () => {
  const notCsPokemons = pokemons.filter((pokemon) => {
    return !pokemon.startsWith("C");
  });
  console.log (notCsPokemons);
};
notTheCs();

const nameAndIdThanks = () => {
  pokemons.forEach((pokemon, index) => {
  console.log (`Number ${index} and ${pokemon}`);
});

};
nameAndIdThanks();

const catchPokemon = name => {
 pokemons.push ("Butterfree");
 console.log (pokemons);
};
catchPokemon();

const didICatchIt = name => {
  if (pokemons.includes(name)) {
    console.log(`Yes! You caught ${name}!`);
  } else {
    console.log(`No, you haven't caught ${name}.`);
  }
};

didICatchIt("Pikachu");

  const addInThirdPlace = () => {

  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
};

addInThirdPlace();



// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
