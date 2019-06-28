//Polymorphism
//Gebruik het type van de parent om verschillende typen children generiek te kunnen aanspreken
//Type Assertion 
//Vertel aan Typescript welk type een object echt is
//Type Guards
//Check welk type een object echt is
class GameObject{
    public x: number
    public y: number
    public width:number
    public height:number
    public xspeed:number
    public yspeed:number
    public speedmultiplier:number
    public div:HTMLElement
    constructor(){}
    update(){}
}
class PolyCar{
    constructor(){}
    update(){}
    drive(){}
}
class Rock{
    constructor(){}
    update(){}
}
class PolyGame {
    objects:GameObject[] = []
    constructor() {        this.objects.push(new PolyCar(), new PolyCar(), new Rock(),new Rock())
        for(let o of this.objects){
            //Type assertion alleen gebruiken als je 100% zeker weet dat je object echt dat type is
            //Je kan met "as" aan de compiler vertellen hoe het type te interpreteren
            let c = o as PolyCar
            c.drive()
            o.update()

            //Type Guards
            //Typescript kan middels type guards checken van welk type een generiek object echt is
            for(let o of this.objects){
                if(o instanceof PolyCar) {
                    o.drive()}
            }
            let el: HTMLElement = document.getElementById("test")
                el.innerHTML = "Hello unsafe world"
        }
    }
}