//TypeScript allows us to define an abstract class using keyword abstract. 
//Abstract classes are mainly for inheritance where other classes may derive from them. 
//We cannot create an instance of an abstract class.

//An abstract class typically includes one or more abstract methods or property declarations. 
//The class which extends the abstract class must define all the abstract methods. 


abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');