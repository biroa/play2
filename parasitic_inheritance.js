var createPerson = function (firstName, lastName) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        sayHello: function(){
            return "Say Hello";
        }
    };


    Object.defineProperty(person, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return person;
};

var createEmployee = function (firstName, lastName, position) {
    var person = createPerson(firstName, lastName);

    person.position = position;

    var fullName = Object.getOwnPropertyDescriptor(person, "fullName");
    var sayHello = Object.getOwnPropertyDescriptor(person, "sayHello");
    var fullNameFunction = fullName.get.bind(person);
    var sayHelloFunction = sayHello.get.bind(person);

    Object.defineProperties(person, "fullName","sayHello", {
        get: function () {
            return fullNameFunction() + "," + this.position;
        },
        enumerable: true,
        configurable: true,
        getSayHello: function(){
            return sayHelloFunction() + " " + this.get();
        }
    });

    return person;
};