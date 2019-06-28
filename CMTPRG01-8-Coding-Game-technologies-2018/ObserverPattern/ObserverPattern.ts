//The Observer Pattern is a one to many relationship between an subject and its observers
//When subject changes, all observers are notified
//Observers can subscribe and unsubscribe to a subject

//https://en.wikipedia.org/wiki/Observer_pattern

interface Subject {
    subscribe(o:Observer):void
}
interface Observer {
    notify(): void
}

// this is the normal Game class
class observeGame {
    constructor(){
        let shop = new Shop()
        let bas = new Bas(shop)

    }
}

//Shop is the subject thats being observed
class Shop implements Subject{

    subscribe(o: Observer) {
    }
}

//bob and bass are the classes that are observing the shop
class Bob implements Observer {
    public notify() {
        console.log("Finally, Skeletor!");
    }
}

class Bas implements Observer {
    shop: Shop
    constructor(s:Subject) {
       s.subscribe(this)
    }
    public notify() {
        console.log("I don't remember ordering this!");
    }
}

