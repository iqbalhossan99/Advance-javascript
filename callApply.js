const person = {
    firstName: "Iqbal",
    lastName: "Hossan",
    age: 22,
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tip, tax) {
        this.salary = this.salary - amount - tip - tax;
        return this.salary;

    }
}

const heroPerson = {
    firstName: "Iqbal",
    lastName: "Hossan",
    salary: 25000
}

const friendlyPerson = {
    firstName: "Iqbal",
    lastName: "Hossan",
    salary: 30000
}

//person.chargeBill(500); // If you want to call a method from obj you should use dot after obj and then call method or salary 
//console.log(person.salary);

// const heroChargeBill = person.chargeBill.bind(heroPerson);
// heroChargeBill(5000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = person.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(6000);
// console.log(friendlyPerson.salary);

// call
// person.chargeBill.call(heroPerson, 400, 100, 20); // amount, tip, tax

// console.log(heroPerson.salary);

// apply

person.chargeBill.apply(heroPerson, [1000, 100, 50]); // must use array with apply
console.log(heroPerson.salary);