 // -- objeto que contém as configurações do jogo
 var gameConfig = {
    type: Phaser.AUTO,
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
            WorldScene]
}

var game = new Phaser.Game(gameConfig);
window.focus();
resize();
window.addEventListener("resize", resize, false);