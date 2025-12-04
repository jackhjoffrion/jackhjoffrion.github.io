var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 15, damage: 25, rotation: 0, image: "img/randomcrapbag1.png"},
          { type: "obstacle", x: 670, y: groundY - 15, damage: 25, rotation: 0, image: "img/randomcrapbag1.png"},
          { type: "obstacle", x: 890, y: groundY - 15, damage: 25, rotation: 0, image: "img/randomcrapbag1.png"},
          { type: "enemy", x: 2000, y: groundY - 50},
          { type: "enemy", x: 2500, y: groundY - 50},
          { type: "enemy", x: 2600, y: groundY - 50},
          { type: "enemy", x: 2750, y: groundY - 50},
          { type: "enemy", x: 2900, y: groundY - 50},
          { type: "enemy", x: 2955, y: groundY - 50},
          { type: "enemy", x: 3100, y: groundY - 50},
          { type: "enemy", x: 3150, y: groundY - 50},
          { type: "enemy", x: 3300, y: groundY - 50},
          { type: "enemy", x: 3900, y: groundY - 50},
          { type: "reward", x: 3000, y: groundY - 85},
          { type: "levelMarker", x: 4000, y: groundY - 85},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 15, damage: 25, rotation: 0, image: "img/randomcrapbag1.png"},
          { type: "obstacle", x: 600, y: groundY - 15, damage: 25, rotation: 0, image: "img/randomcrapbag1.png"},
          { type: "obstacle", x: 900, y: groundY - 15, damage: 25, rotation: 0, image: "img/randomcrapbag1.png"},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
