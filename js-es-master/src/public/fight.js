// create async function fight
export async function fight(fighter, improvedFighter, ...points) {
    for(var i=0; i<points.length;i++){
      if(fighter.health > 0){
        fighter.hit(improvedFighter, points[i]);
      }
      else{
        break;
      }
      if(improvedFighter.health > 0){
        improvedFighter.doubleHit(fighter, points[i]);
      }
       else{
        break;
      }
      i==points.length-1?i=0:i;
    }

  try {
    let loser = fighter.health < improvedFighter.health ? fighter : improvedFighter;
    let result = await loser.knockout();
    
    console.log(result);
  } catch(error) {
    console.log(error);
  }
} 