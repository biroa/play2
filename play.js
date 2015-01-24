var object = {
    name:'objectName',
    age: '20',
    get: function(){
	return 'the name of the object is: ' + this.name;
    }
};

var result = object.get();
console.log(result);