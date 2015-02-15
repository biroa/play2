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

    var fullName = Object.getOwnPropertyDescriptor(person, "fullNAme");
    var fullNameFunction = fullName.get.bind(person);

    Object.defineProperty(person, "fullName", {
        get: function () {
            return fullNameFunction() + "," + this.position;
        },
        enumerable: true,
        configurable: true
    });

    return person;
};