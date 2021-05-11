class InstructionsScene extends Phaser.Scene {

    constructor() {
        super( { key: 'InstructionsScene' } );
    }

    preload() {}

    create() {
        // -- adiciona imagem de fundo
        //this.background = this.add.image(gameConfig.width / 2, gameConfig.height / 2, 'backgroundImage').setScale(1.2);

        // -- adiciona texto a informar o jogador de quantos kg de lixo apanhou e reciclou
        this.instructions1 = this.add.text(gameConfig.width / 2 - 90, gameConfig.height / 2 - 300 , "Como jogar:", {
            font: "35px Arial",
            fill: "#ffff44",
            align: "center"
        });

        this.instructions2 = this.add.text(gameConfig.width / 2 - 500, gameConfig.height / 2 - 200 , "Este novo robô recicla lixo em energia limpa, ajude-o a reutilizar o máximo de resíduo possível e a limpar ao ambiente", {
            font: "20px Arial",
            fill: "#ffff44",
            align: "center"
        });

        this.instructions3 = this.add.text(gameConfig.width / 2 - 490, gameConfig.height / 2 - 150 , "Ao converter o lixo em energia, o valor da mesma é apresentada na parte inferior do ecrã, não a deixe chegar a 0!", {
            font: "20px Arial",
            fill: "#ffff44",
            align: "center"
        });

        this.instructions4 = this.add.text(gameConfig.width / 2 - 275, gameConfig.height / 2 - 100 , "Carregue no botão esquerdo do rato para salto e duplo salto", {
            font: "20px Arial",
            fill: "#ffff44",
            align: "center"
        });

        // -- adiciona os botões para jogar ou para voltar ao menu
        this.button1 = this.add.image(gameConfig.width / 2 - 150, gameConfig.height / 2 + 50, 'playButton').setScale(0.5).setInteractive({ useHandCursor: true });
        this.button2 = this.add.image(gameConfig.width / 2 + 150, gameConfig.height / 2 + 50, 'menuButton').setScale(0.5).setInteractive({ useHandCursor: true });

        // -- ao clickar no botão reencaminha para a world scene
        this.button1.once('pointerdown', function (pointer) {
            
            this.scene.start('WorldScene');

        }, this);
        
        // -- ao clickar no botão reencaminha para a menu scene
        this.button2.once('pointerdown', function (pointer) {
            
            this.scene.start('MenuScene');

        }, this);

    }
}