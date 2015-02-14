//Callback Example 1


function multiplyByTwo(a, b, c, callback) {
    var i, ar = [];
    for (i = 0; i < 3; i++) {
	ar[i] = callback(arguments[i] * 2);
    }
    return ar;
}

function addOne(a) {
    return a + 1;
}

//Callback Example 2

function theOne(callback){
	var text = 'This is two in one';
	callback(text);
}

function theTwo(text){
	console.log(text);
}


//CallBack Calls
myarr = multiplyByTwo(1, 2, 3, addOne);
console.log(myarr);
theOne(theTwo);

//Immediate  Function
(function (){
    console.log('Executed');
})();

// SMALL OOP

var object = {
    name:'shaw',
    age: '20',
    get: function(){
	return 'the name of the object is: ' + this.name;
    },
    getFakeName: function(param){
	return 'the name of the object is: ' + param
    },
    getMoreParameter: function(param1,param2,param3){
	return 'parameters ' + param1 +','+ param2 +','+ param3 +'!';
    }

};

var my_obj = {name: 'Dude'};

console.log(object.name);
console.log(object.get());
console.log(object.getFakeName('nail'));
// we can call a different object methode on another object with call:
console.log(object.get.call(my_obj,'shovel'));
//apply uses array
console.log(object.getMoreParameter.apply(my_obj, ['a', 'b', 'c']));
//call accept strinf
console.log(object.getMoreParameter.call(my_obj, 'a', 'b', 'c'));

object.name = 'scissor';
console.log(object.name);
























// PLAY WITH OOP


function Gadget(name){
    this.name = 'screwdriver';
}
var toy = new Gadget('camera');
console.log(toy.name);
console.log(toy.hasOwnProperty('name'));










