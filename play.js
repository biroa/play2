//Callback Example


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

myarr = multiplyByTwo(1, 2, 3, addOne);
console.log(myarr);

//Immediate  Function
(function (){
    console.log('Executed');
})();

var getObject = function(){
    var object = {
	name:'objectName',
	age: '20',
	get: function(){
	    return 'the name of the object is: ' + this.name;
	}
    };
    //Anonymus functions
    var extendObject = function(){
	return object;
    }
    return extendObject;
}

var objCall = getObject(); 
console.log(objCall())
