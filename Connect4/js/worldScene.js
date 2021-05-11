class WorldScene extends Phaser.Scene{
    constructor(){
        super({key: 'WorldScene'});
    }
    preload(){}


    create(){
        this.board = this.add.image(gameConfig.width / 2, gameConfig.height / 2, 'board').setScale(0.1);

        this.column01 = this.add.rectangle(gameConfig.width/2 - 270, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();
        this.column02 = this.add.rectangle(gameConfig.width/2 - 180, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();
        this.column03 = this.add.rectangle(gameConfig.width/2 - 90, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();
        this.column04 = this.add.rectangle(gameConfig.width/2, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();
        this.column05 = this.add.rectangle(gameConfig.width/2 + 90, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();
        this.column06 = this.add.rectangle(gameConfig.width/2 + 180, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();
        this.column07 = this.add.rectangle(gameConfig.width/2 + 270, gameConfig.height/2, 90, 600, 0xff66ff, 1).setInteractive();

        for(var i = 0; i < 7; i++){
           for(var j = 0; j < 6 ; j++){
            this.spot = this.add.circle(gameConfig.width/2 - 270 + (i*90), gameConfig.height/2 - 220 + (j*90), 40, 0xffffff, 1);
           }
        }

        var column01Spots = 0;
        var column02Spots = 0;
        var column03Spots = 0;
        var column04Spots = 0;
        var column05Spots = 0;
        var column06Spots = 0;
        var column07Spots = 0;


        if(column01Spots <= 5 && column02Spots <= 5 && column03Spots <= 5 && column04Spots <= 5 && column05Spots <= 5 && column06Spots <= 5 && column07Spots <= 5){
            this.column01.on('pointerdown', function (pointer) {
                if(column01Spots <= 5){
                    console.log("Column 1 clicked");
                    column01Spots++;
                    console.log("Column 1 spots:" + column01Spots);
                    this.checkSpot(column01Spots, 1);
                }else{
                    column01Spots = 6;
                    console.log(column01Spots);
                }
            }, this);
    
            this.column02.on('pointerdown', function (pointer) {
                if(column02Spots <= 5){
                    console.log("Column 2 clicked");
                    column02Spots++;
                    console.log("Column 2 spots:" + column02Spots);
                    this.checkSpot(column02Spots, 2);   
                }else{
                    column02Spots = 6;
                }
            }, this);
    
            this.column03.on('pointerdown', function (pointer) {
                if(column03Spots <= 5){
                    console.log("Column 3 clicked");
                    column03Spots++;
                    console.log("Column 3 spots:" + column03Spots);
                    this.checkSpot(column03Spots, 3);
                }else{
                    column03Spots = 6;
                }
            }, this);
    
            this.column04.on('pointerdown', function (pointer) {
                if(column04Spots <= 5){
                    console.log("Column 4 clicked");
                    column04Spots++;
                    console.log("Column 4 spots:" + column04Spots);
                    this.checkSpot(column04Spots, 4);
                }else{
                    column04Spots = 6;
                }
            }, this);
    
            this.column05.on('pointerdown', function (pointer) {
                if(column05Spots <= 5){
                    console.log("Column 5 clicked");
                    column05Spots++;
                    console.log("Column 5 spots:" + column05Spots);
                    this.checkSpot(column05Spots, 5);
                }else{
                    column05Spots = 6;
                }
            }, this);
    
            this.column06.on('pointerdown', function (pointer) {
                if(column06Spots <= 5){
                    console.log("Column 6 clicked");
                    column06Spots++;
                    console.log("Column 6 spots:" + column06Spots);
                    this.checkSpot(column06Spots, 6);
                }else{
                    column06Spots = 6;
                }
            }, this);
    
            this.column07.on('pointerdown', function (pointer) {
                if(column07Spots <= 5){
                    console.log("Column 7 clicked");
                    column07Spots++;
                    console.log("Column 7 spots:" + column07Spots);
                    this.checkSpot(column07Spots, 7);
                }else{
                    column07Spots = 6;
                }
            }, this);
        }else{
            console.log("Draw");
            this.scene.start('GameOverScene');
        }
        

    }

    update(){
        
    }

    checkSpot(columnSpot, column){
        column--;
        if(columnSpot > 6){
            console.log("Column Full");
        }else{
            spot = this.add.circle(gameConfig.width/2 - 270 + (column*90), gameConfig.height/2 + 320 - (columnSpot*90), 40, 0x000000, 1);
        }
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


