
import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedFighter";
import {fight} from "./fight";
// create two instances
var fighter = new Fighter("Fighter", 5, 300 );
var improvedFighter = new ImprovedFighter("ImprovedFighter", 10, 350);

fight(fighter, improvedFighter, 5,10,15);