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
        name: "Manufacturing Area Site Σσς / Sigma (M.A.S.S.)",
        number: 1,
        speed: -3,
        gameItems: [
          //x, y, damage, rotation, hitZone, image, offsetX, offsetY, scaleX, scaleY
          { type: "obstacle", x: 400, y: groundY - 15, damage: 25, rotation: 0, hitZone: 25, image: "img/randomcrapbag1.png", offsetX: -26.5, offsetY: -26.5, scaleX: 0.25, scaleY: 0.25},
          { type: "obstacle", x: 670, y: groundY - 15, damage: 25, rotation: 0, hitZone: 25, image: "img/randomcrapbag1.png", offsetX: -26.5, offsetY: -26.5, scaleX: 0.25, scaleY: 0.25},
          { type: "obstacle", x: 890, y: groundY - 15, damage: 25, rotation: 0, hitZone: 25, image: "img/randomcrapbag1.png", offsetX: -26.5, offsetY: -26.5, scaleX: 0.25, scaleY: 0.25},
          //x, y, damage, hitZone, image, offsetX, offsetY, scale, velocityX, velocityY, pointIncrease
          { type: "enemy", x: 2000, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.55, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 2500, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 2600, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 2750, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 2900, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 2955, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 3100, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 3150, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 3300, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "enemy", x: 3900, y: groundY - 20, damage: -10, hitZone: 25, image: "img/randomcrapbag2.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 150},
          { type: "reward", x: 3000, y: groundY - 85},
          { type: "levelMarker", x: 4000, y: groundY - 85},
        ],
      },
      {
        name: "Factory",
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
