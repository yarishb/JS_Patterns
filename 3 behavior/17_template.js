class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} is working on ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has salary as ${this.salary}`
    }
}


class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'on the code'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'on the code tests'
    }
}


const dev = new Developer('Bohdan', 150000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Masha', 100000)
console.log(tester.getPaid())
console.log(tester.work())