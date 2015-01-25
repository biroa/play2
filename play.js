var getObject = function(){
    var object = {
	name:'objectName',
	age: '20',
	get: function(){
	    return 'the name of the object is: ' + this.name;
	}
    };
    var extendObject = function(){
	return object;
    }
    return extendObject;
}

var objCall = getObject(); 
console.log(objCall())
