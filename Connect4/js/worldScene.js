class WorldScene extends Phaser.Scene{
    constructor(){
        super({key: 'WorldScene'});
    }
    preload(){}


    create(){
        this.board = this.add.image(gameConfig.width / 2, gameConfig.height / 2, 'board').setScale(0.1);
        this.column01 = this.add.rectangle(gameConfig.width/2 - 270, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.column02 = this.add.rectangle(gameConfig.width/2 - 180, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.column03 = this.add.rectangle(gameConfig.width/2 - 90, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.column04 = this.add.rectangle(gameConfig.width/2, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.column05 = this.add.rectangle(gameConfig.width/2 + 90, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.column06 = this.add.rectangle(gameConfig.width/2 + 180, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.column07 = this.add.rectangle(gameConfig.width/2 + 270, gameConfig.height/2, 90, 700, 0xff66ff, 1);
        this.spot01 = this.add.circle(gameConfig.width/2 - 270, gameConfig.height/2, 80, 0x000000, 1);
        //console.log("Board height: " + this.board.height);
        //console.log("Board width: " + this.board.width);
    }

    update(){

    }
};

// -- dá resize à área de f conforme o monitor
function resize(){
    let canvas = document.querySelector("canvas");
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}
