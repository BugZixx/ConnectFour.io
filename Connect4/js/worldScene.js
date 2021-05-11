class WorldScene extends Phaser.Scene {
  constructor() {
    super({ key: "WorldScene" });
  }
  preload() {}

  create() {
    this.board = this.add
      .image(gameConfig.width / 2, gameConfig.height / 2, "board")
      .setScale(0.1);

    this.column01 = this.add
      .rectangle(
        gameConfig.width / 2 - 270,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column02 = this.add
      .rectangle(
        gameConfig.width / 2 - 180,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column03 = this.add
      .rectangle(
        gameConfig.width / 2 - 90,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column04 = this.add
      .rectangle(
        gameConfig.width / 2,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column05 = this.add
      .rectangle(
        gameConfig.width / 2 + 90,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column06 = this.add
      .rectangle(
        gameConfig.width / 2 + 180,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();
    this.column07 = this.add
      .rectangle(
        gameConfig.width / 2 + 270,
        gameConfig.height / 2,
        90,
        600,
        0xff66ff,
        1
      )
      .setInteractive();

    for (var i = 0; i < 7; i++) {
      for (var j = 0; j < 6; j++) {
        this.spot = this.add.circle(
          gameConfig.width / 2 - 270 + i * 90,
          gameConfig.height / 2 - 220 + j * 90,
          40,
          0xffffff,
          1
        );
      }
    }

    this.column01.on(
      "pointerdown",
      function (pointer) {
        if (column01Spots <= 5) {
          console.log("Column 1 clicked");
          column01Spots++;
          console.log("Column 1 spots:" + column01Spots);
          this.checkSpot(column01Spots, 0);
        } else {
          column01Spots = 6;
          console.log(column01Spots);
        }
      },
      this
    );

    this.column02.on(
      "pointerdown",
      function (pointer) {
        if (column02Spots <= 5) {
          console.log("Column 2 clicked");
          column02Spots++;
          console.log("Column 2 spots:" + column02Spots);
          this.checkSpot(column02Spots, 1);
        } else {
          column02Spots = 6;
        }
      },
      this
    );

    this.column03.on(
      "pointerdown",
      function (pointer) {
        if (column03Spots <= 5) {
          console.log("Column 3 clicked");
          column03Spots++;
          console.log("Column 3 spots:" + column03Spots);
          this.checkSpot(column03Spots, 2);
        } else {
          column03Spots = 6;
        }
      },
      this
    );

    this.column04.on(
      "pointerdown",
      function (pointer) {
        if (column04Spots <= 5) {
          console.log("Column 4 clicked");
          column04Spots++;
          console.log("Column 4 spots:" + column04Spots);
          this.checkSpot(column04Spots, 3);
        } else {
          column04Spots = 6;
        }
      },
      this
    );

    this.column05.on(
      "pointerdown",
      function (pointer) {
        if (column05Spots <= 5) {
          console.log("Column 5 clicked");
          column05Spots++;
          console.log("Column 5 spots:" + column05Spots);
          this.checkSpot(column05Spots, 4);
        } else {
          column05Spots = 6;
        }
      },
      this
    );

    this.column06.on(
      "pointerdown",
      function (pointer) {
        if (column06Spots <= 5) {
          console.log("Column 6 clicked");
          column06Spots++;
          console.log("Column 6 spots:" + column06Spots);
          this.checkSpot(column06Spots, 5);
        } else {
          column06Spots = 6;
        }
      },
      this
    );

    this.column07.on(
      "pointerdown",
      function (pointer) {
        if (column07Spots <= 5) {
          console.log("Column 7 clicked");
          column07Spots++;
          console.log("Column 7 spots:" + column07Spots);
          this.checkSpot(column07Spots, 6);
        } else {
          column07Spots = 6;
        }
      },
      this
    );
  }

  update() {
    if (
      column01Spots == 6 &&
      column02Spots == 6 &&
      column03Spots == 6 &&
      column04Spots == 6 &&
      column05Spots == 6 &&
      column06Spots == 6 &&
      column07Spots == 6
    ) {
      console.log("Draw");
      this.scene.start("GameOverScene");
    }

    // verifica horizontalmente
    for (var c = 0; c < 4; c++) {
      for (var r = 0; r < 6; r++) {
        if (
          tableSpots[r][c] == tableSpots[r][c + 1] &&
          tableSpots[r][c] == tableSpots[r][c + 2] &&
          tableSpots[r][c] == tableSpots[r][c + 3] &&
          tableSpots[r][c] != 0
        ) {
          console.log(
            "Player ganhou" +
              tableSpots[r][c + 1] +
              tableSpots[r][c + 2] +
              tableSpots[r][c + 3]
          );
        }
      }
    }

    // verifica verticalmente
    for (var c = 0; c < 7; c++) {
      for (var r = 0; r < 3; r++) {
        if (
          tableSpots[r][c] == tableSpots[r + 1][c] &&
          tableSpots[r][c] == tableSpots[r + 2][c] &&
          tableSpots[r][c] == tableSpots[r + 3][c] &&
          tableSpots[r][c] != 0
        ) {
          console.log(
            "Player ganhou" +
              tableSpots[r][c] +
              tableSpots[r + 1][c] +
              tableSpots[r + 2][c]
          );
        }
      }
    }

    // verifica diagonal direita pra cima
    for (var c = 0; c < 4; c++) {
      for (var r = 0; r < 3; r++) {
        if (
          tableSpots[r][c] == tableSpots[r + 1][c + 1] &&
          tableSpots[r][c] == tableSpots[r + 2][c + 2] &&
          tableSpots[r][c] == tableSpots[r + 3][c + 3] &&
          tableSpots[r][c] != 0
        ) {
          console.log("Player ganhou" + tableSpots[r][c]);
        }
      }
    }

    // verifica diagonal direita pra baixo
    for (var c = 0; c < 4; c++) {
      for (var r = 3; r < 6; r++) {
        if (
          tableSpots[r][c] == tableSpots[r - 1][c + 1] &&
          tableSpots[r][c] == tableSpots[r - 2][c + 2] &&
          tableSpots[r][c] == tableSpots[r - 3][c + 3] &&
          tableSpots[r][c] != 0
        ) {
          console.log("Player ganhou" + tableSpots[r][c]);
        }
      }
    }
  }

  checkSpot(columnSpot, column) {
    var redPlayer = Phaser.Display.Color.GetColor(255, 0, 0);
    var yellowPlayer = Phaser.Display.Color.GetColor(255, 255, 0);
    var currentColor;
    if (player % 2 == 0) {
      currentColor = redPlayer;
    } else {
      currentColor = yellowPlayer;
    }
    if (columnSpot > 6) {
      console.log("Column Full");
    } else {
      this.spot = this.add.circle(
        gameConfig.width / 2 - 270 + column * 90,
        gameConfig.height / 2 + 320 - columnSpot * 90,
        40,
        currentColor,
        1
      );
      if (player % 2 == 0) {
        tableSpots[columnSpot - 1][column] = 1;
      } else {
        tableSpots[columnSpot - 1][column] = 2;
      }
      console.log(tableSpots);
      player++;
    }
  }
}

// -- dá resize à área de f conforme o monitor
function resize() {
  let canvas = document.querySelector("canvas");
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;
  let gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
