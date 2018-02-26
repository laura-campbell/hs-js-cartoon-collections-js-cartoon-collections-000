var string='';
function dwarfRollCall(dwarves) {
  for (var i=0; i<dwarves.length; i++) {
  string += `${(i+1)}. ${dwarves[i]} `;
}
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  for (var i=0; i<planeteerCalls.length; i++) {
  planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!';
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
 var long = false;
 for (var i=0; i<words.length; i++) {
 if (words[i].length > 4)
 return Boolean (boo.indexOf(true) !== -1);
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  var string;
  for (var i=0; i<foods.length; i++) { 
    string = cheese.indexOf(foods[i]);
    if (string !== -1) {
      return foods[i];
    }}
    return 'no cheese!';
  }
