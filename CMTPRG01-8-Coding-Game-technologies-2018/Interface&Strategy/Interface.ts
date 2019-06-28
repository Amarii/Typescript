//Interface is a blueprint of an Class which must have public methods and class
//it makes sure for example multiple behaviours to have the same type

//Strategy
//Gedrag in eigen class
//Gedrag implementeert interface
//Gedrag weet wie zijn eigenaar is

interface Behaviour {
    car: Car
    update(): void
}

class Driving implements Behaviour {
    car: Car
    constructor(c:Car) {
        this.car = c
        //change car behavious from withing another behavior
        this.car.behaviour = new Braking(this.car) 
    }
    public update() {

    }
}

class Idle implements Behaviour {
    car: Car
    constructor(c:Car) {
        this.car = c
    }
    public update() {

    }
}

//Interface makes sure driving and idle can be of the same type
class Car {
    public behaviour: Behaviour

    constructor() {
        this.behaviour = new Driving(this)
    }
    public stop() {
        this.behaviour = new Idle(this)
    }
}

class Braking {
    car:Car
    constructor(c:Car){

    }
    update(){

    }
}