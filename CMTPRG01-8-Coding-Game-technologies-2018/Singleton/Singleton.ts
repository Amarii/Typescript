class Game {

    private static gameInstance: Game
    private constructor() {

    }
    public init() {

    }

    //Singleton
    static getInstance() {
        if (!this.gameInstance) {
            this.gameInstance = new Game()
        }
        return this.gameInstance
    }
    generateSpawnPoint(){

    }
    onSpawnPoint(){

    }

}
window.addEventListener("load", () => {
    let gameOne = Game.getInstance()
    gameOne.init()
})
