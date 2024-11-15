class Employee {

    constructor(name){
        this.name = name
    }

    displayInfo(){
        console.log(`Name: ${this.name}`);
    }
}


class Manager extends Employee {

    constructor(name, department){
        super(name);
        this.department = department;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Departament: ${this.department}`);
    }
}


const em = new Employee("Lex")
em.displayInfo();
const man = new Manager("lex", "eeeee");
man.displayInfo();