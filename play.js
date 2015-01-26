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
