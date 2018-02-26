var string='';
function dwarfRollCall(dwarves) {
  for (var i=dwarves.length/2; i<dwarves.length; i++) {
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
 if (words[i].length > 4) {
   long = true
 }}
 return long;
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

function wordsWithB (words) {
  var arr = [];
  for (var i=0; i<words.length; i++) {
    if (words[i].startsWith('b') === true) {
      arr.push (words[i]);
    }}
    return arr;
  }
