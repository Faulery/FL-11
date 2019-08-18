function Pokemon() {
  this.getType = function () {
    return this.type;
  };

  this.getSpecie = function () {
    return this.species;
  };

  this.canFly = function () {
    if (this.fly) {
      return this.fly;
    } else {
      return 'Can`t to fly';
    }
  };

  this.getPokemonType = function () {
    return this.name;
  }
}

function Charmander() {
  Pokemon.call(this, Charmander);
  this.name = Charmander;
  this.type = 'Fire';
  this.species = 'Lizard Pokemon';
  this.evolve = () => new Charmeleon();
}

function Charmeleon() {
  Pokemon.call(this, Charmeleon);
  this.name = 'Charmeleon';
  this.type = 'Fire';
  this.species = 'Flame Pokemon';
  this.evolve = () => new Charizard();
}

function Charizard() {
  Pokemon.call(this, Charizard);
  this.name = 'Charizard';
  this.type = 'Fire';
  this.species = 'Flame Pokemon';
  this.evolve = () => this;
}

const charmander = new Charmander();
const charmeleon = new Charmeleon();
const charizard = new Charizard();

function Pichu() {
  Pokemon.call(this, Pichu);
  this.name = 'Pichu';
  this.type = 'Electric';
  this.specie = 'Mouse Pokemon';
  this.evolve = () => new Pikachu();
}

function Pikachu() {
  Pokemon.call(this, Pikachu);
  this.name = 'Pikachu';
  this.specie = 'Mouse Pokemon';
  this.type = 'Electric';
  this.evolve = () => new Raichu();
}

function Raichu() {
  Pokemon.call(this, Raichu);
  this.name = 'Raichu';
  this.fly = 'Fly';
  this.specie = 'Mouse Pokemon';
  this.type = 'Electric';
  this.evolve = () => this;
}

/*
console.log(charmander.getType());
console.log(charmander.getType() === charmeleon.getType());
console.log(charmeleon.getType() === charizard.getType());

console.log(charmander.evolve().constructor === Charmeleon);
console.log(charmeleon.evolve().constructor === Charizard);

console.log(charmander.getSpecie());
console.log(charmeleon.getSpecie());
console.log(charizard.getSpecie() === charmeleon.getSpecie());
console.log(charmander.canFly());
console.log(charmander.canFly() === charmeleon.canFly());
console.log(charizard.canFly());
*/

/*
const pichu = new Pichu();
console.log(pichu.getPokemonType());

const pikachu = pichu.evolve();
console.log(pikachu.getPokemonType());
console.log(pikachu.constructor === Pikachu);

const raichu = pikachu.evolve();
console.log(raichu.getPokemonType());
console.log(raichu.constructor === Raichu);

const raichu2 = raichu.evolve();
console.log(raichu2 === raichu);
*/