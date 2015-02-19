var createPerson = function (firstName, lastName) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        sayHello: function(){
            return "Say Hello!";
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
    var fullNameFunction = fullName.get.bind(person);

    Object.defineProperty(person, "fullName",{
        get: function () {
            return fullNameFunction() + "," + this.position;
        },
        enumerable: true,
        configurable: true
    });

    var sayHelloFn = person.sayHello.bind(person);

     person.sayHello = function(){
        return sayHelloFn() + " My name is " + this.fullName;
    };

    /**
     * usage:
     *
     * var adamBiro = createEmployee("Adam", "Biro", "developer");
     * adamBiro.firstName;
     * adamBiro.firstName = "Ádám";
     * adamBiro.lastName;
     * adamBiro.firstName = "Bíró";
     * adamBiro.fullName;
     * adamBiro.position;
     * adamBiro.position = "Web Developer";
     * adamBiro.sayHello();
     *
     *
     */

    return person;
};

