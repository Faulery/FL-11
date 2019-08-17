function Hamburger (type, calories, secret) {
  this.type = type;
  this._calories = calories;
  this.amountTomato = 0;
  this.defaultCalories = calories;
  this.isBited = false;
  this.secret = secret;
  this.withCheese = false;
  this.bit = 0;

  this.executed = function () {
    console.log('Sorry, you can add this ingredient only once or before another');
};

  this.bite = function () {
    this.isBited = true;
    this.bit++;
  };

  this.addTomato = function () {
    if (!this.isBited) {
      if (this.amountTomato !== 2) {
        this.amountTomato++;
        return this._calories += 20;
      } else {
        console.log('Sorry, you can add tomato only twice');
      }
    } else {
      console.log('Sorry, you cannot add tomato');
    }
  };

  this.addCheese = function () {
    if (!this.isBited) {
      this.withCheese = true;
      this.addCheese = this.executed;
      return this._calories += 120;
    } else {
      console.log('Sorry, you cannot add cheese');
    }
  };

  this.addSecretIngredient = function () {
    if (this._calories !== this.defaultCalories && !this.isBited) {
      return this.executed();
    } else {
      this.secret = true;
      return this._calories += 100;
    }
  };

  this.info = function () {
    let secretIngredient;
    secretIngredient = this.secret ? 'with secret ingredient' : 'without secret ingredient';
    let cheesed;
    cheesed = this.withCheese ? 'with cheese' : 'without cheese';
    return `${this.type} hamburger: ${secretIngredient}, ${cheesed}, 
    with ${this.amountTomato} tomato, is bit ${this.bit} times. Total calories: ${this._calories}`;
  };

  if (secret) {
    this.addSecretIngredient();
  }

  this.getCalories = function () {
    return this._calories;
  };

  this.setCalories = function (cl) {
    return this._calories = cl;
  };

  //return {type: this.type, calories: this._calories};
}

const myHamburger = new Hamburger('classic', 600, false);

//console.log(myHamburger);

/*console.log(myHamburger.getCalories());
myHamburger.setCalories(700);
console.log(myHamburger.getCalories());*/

/*myHamburger.addCheese();
console.log(myHamburger.getCalories());
myHamburger.addCheese();*/

/*myHamburger.addTomato();
console.log(myHamburger.getCalories());
myHamburger.addTomato();
console.log(myHamburger.getCalories());
myHamburger.addTomato();*/

/*myHamburger.addSecretIngredient();
console.log(myHamburger.getCalories());
myHamburger.addSecretIngredient();*/

/*myHamburger.addTomato();
myHamburger.addSecretIngredient();*/

//myHamburger.addSecretIngredient();

/*myHamburger.addSecretIngredient();
myHamburger.addTomato();
myHamburger.addCheese();
myHamburger.bite();
myHamburger.bite();
myHamburger.bite();
myHamburger.addTomato();*/

//console.log(myHamburger.info());