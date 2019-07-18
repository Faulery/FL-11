class Fighter {
  constructor(object) {
    this.name = object.name;
    this.damage = object.damage;
    this.hp = object.hp;
    this.agility = object.agility;
    this.totalHP = object.hp;
    this.wins = 0;
    this.loss = 0;
    this.chancePercent = 100;
  }
  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  getAgility() {
    return this.agility;
  }
  getHealth() {
    return this.hp;
  }
  heal(points) {
    this.hp += points;
    if (this.hp > this.totalHP) {
      this.hp = this.totalHP;
    }
  }
  static logCombatHistory (name, wins, losses) {
    return `Name: ${name}, Wins: ${wins}, Losses: ${losses}`;
  }
  addWin (point) {
    this.wins += point;
  }
  addLoss (point) {
    this.loss += point;
  }
  attack(defender) {
    let chance = Math.floor(Math.random() * this.chancePercent + 1);
    if (chance > defender.getAgility()) {
      let damageByHit = this.getDamage();
      Fighter.dealDamage(damageByHit, defender);
      console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + defender.getName());
    } else {
      console.log(this.getName() + ' attack missed');
    }
  }
  static dealDamage(damageByHit, defender) {
    defender.hp = defender.getHealth() - damageByHit;
  }
}
const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40});
console.log(fighter1, fighter2);
let battle = (fighter1, fighter2) => {
  if (fighter1.hp <= 0) {
    console.log(fighter1.name + ' is dead and cant fight');
  } else if (fighter2.hp <= 0) {
    console.log(fighter2.name + ' is dead and cant fight');
  } else {
    while (fighter1.hp > 0 && fighter2.hp > 0) {
      fighter1.attack(fighter2);
      fighter2.attack(fighter1);
    }
    if (fighter2.hp === 0 || fighter2.hp < 0) {
      fighter1.addWin(1);
      fighter2.addLoss(1);
      console.log(fighter1.name + ' wins with ' + fighter1.hp + 'hp');
      console.log(Fighter.logCombatHistory(fighter1.name, fighter1.wins, fighter1.loss));
    } else {
      fighter1.addLoss(1);
      fighter2.addWin(1);
      console.log(fighter2.name + ' wins with ' + fighter2.hp + 'hp');
      console.log(Fighter.logCombatHistory(fighter2.name, fighter2.wins, fighter2.loss));
    }
  }
};
battle(fighter1, fighter2);