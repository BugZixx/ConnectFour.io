 // -- objeto que contém as configurações do jogo
 var gameConfig = {
    type: Phaser.AUTO,
    scale:{
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        //autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 1280,
    height: 1000,
    backgroundColor: 0x6120c9,

    // -- definições para as físicas do jogo e para as cenas do jogo
    physics: {
        default: "arcade",
        debug: true
    },

    scene: [BootScene,
            MenuScene,
            InstructionsScene,
            WorldScene,
            GameOverScene]
}

var game = new Phaser.Game(gameConfig);
window.focus();
resize();
window.addEventListener("resize", resize, false);