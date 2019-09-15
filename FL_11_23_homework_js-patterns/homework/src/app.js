class User {
    
  constructor(name, userTotalPrice, weekendDiscount, nightDiscount, bonus) {

    this.name = name;
    this.userTotalPrice = userTotalPrice;
    this.weekendDiscount = weekendDiscount;
    this.nightDiscount = nightDiscount;
    this.bonus = bonus;

    this.makeOrder = () => `Price after discount and including bonuses is ${this.userTotalPrice}`;
  }
}

getDiscount = user => {
    
    const now = new Date();
    const sunday = 0;
    const saturday = 6;
    const night = 23;
    const morning = 6;

    if (now.getHours() >= night || now.getHours() < morning) {
      user.userTotalPrice = (user.orderTotalPrice - user.nightDiscount);
    } else if (now.getDay() === saturday || now.getDay() === sunday) {
      user.userTotalPrice -= user.weekendDiscount;
    } else {
      return false;
    }

  };
  
  getBonus = user => {
    user.userTotalPrice -= user.bonus;
  };

  const user = new User('Yurii', 200, 20, 50, 5);