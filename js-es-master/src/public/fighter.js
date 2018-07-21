// Create class Fighter
export class Fighter {
    constructor(name,  power, health) {
      this.name = name;
      this.power = power;
      this.health = health;
    }
  
    setDamage(damage) {    
      this.health = this.health - damage;
      console.log("Name: " + this.name+", health: " + this.health);
    }
    
    hit(enemy, point) {
      let damage = point * this.power;
      enemy.setDamage(damage);
    }
    
    knockout() {
      return new Promise((resolve, reject) => {
        console.log('time is over');
        setTimeout(() => {
          resolve(`${this.name} lose. His health: ${this.health}`); }, 500); });
    }
    
  }
  