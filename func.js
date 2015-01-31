(function(){
function player(name,pos){
    this.name = name;
    this.position = pos;
}

console.log("=====================");

var constructor = new player('Tibi','striker');
console.log(constructor.name);
console.log(constructor.position);
var constructor2 = new player('Laci','defender');
console.log(constructor2.name);
console.log(constructor2.position);

})();