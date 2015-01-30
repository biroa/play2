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
    }

};

console.log(object.name);
console.log(object.get());
console.log(object.getFakeName('nail'));
object.name = 'scissor'
console.log(object.name);
// PLAY WITH OOP


function Gadget(name){
    this.name = 'screwdriver';
};


var toy = new Gadget('camera');
console.log(toy.name);
console.log(toy.hasOwnProperty('name'));










