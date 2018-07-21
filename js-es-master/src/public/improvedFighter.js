import {Fighter} from "./fighter";
// Create class ImprovedFighter
export class ImprovedFighter extends Fighter {
    constructor(name,power, health) {
      super(name+"-Super",power, health);
    }
    
    doubleHit(enemy, point) {
      let doublePoint=point*2; 
      this.hit(enemy, doublePoint);
    }
  }