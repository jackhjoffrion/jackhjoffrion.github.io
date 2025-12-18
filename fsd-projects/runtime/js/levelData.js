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
          { type: "obstacle", x: 890, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1150, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1340, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          { type: "obstacle", x: 1675, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 2300, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 2550, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 2850, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 3130, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          { type: "obstacle", x: 3650, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          { type: "obstacle", x: 3900, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 4255, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 4500, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 4750, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 4950, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          //x, y, damage, hitZone, image, offsetX, offsetY, scale, velocityX, velocityY, pointIncrease
          { type: "enemy", x: 2000, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 2500, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 3100, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 3150, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 3300, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 4150, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 4585, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 4985, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 5150, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 5550, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 5700, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 5900, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 6250, y: groundY - 50, damage: -10, hitZone: 25, image: "img/pixelGuard.png", offsetX: -32.5, offsetY: -32.5, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 300/*, stopEnemy: false*/},
          { type: "enemy", x: 1235, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          { type: "enemy", x: 2100, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          { type: "enemy", x: 2500, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          { type: "enemy", x: 2600, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          
          { type: "reward", x: 4560, y: groundY - 95, image: "img/orb.png", offsetX: -115, offsetY: -115, scale: 1},
          { type: "levelMarker", x: 5550, y: groundY - 85},
        ],
      },
      {
        name: "Factory Maintenance Hall",
        number: 2,
        speed: -3,
        gameItems: [
          //x, y, damage, rotation, hitZone, image, offsetX, offsetY, scaleX, scaleY
          { type: "obstacle", x: 560, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 875, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1050, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1250, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1550, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1765, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          { type: "obstacle", x: 1895, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 1995, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 2350, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 2495, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          { type: "obstacle", x: 2765, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 2955, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 3295, y: groundY - 10, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 3395, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          { type: "obstacle", x: 3560, y: groundY - 5, damage: 15, rotation: 0, hitZone: 25, image: "img/wires.png", offsetX: -35, offsetY: -5, scaleX: 0.25, scaleY: 0.14},
          { type: "obstacle", x: 3765, y: groundY - 105, damage: 10, rotation: 0, hitZone: 25, image: "img/pipe.png", offsetX: -300, offsetY: -175, scaleX: 0.50, scaleY: 0.50},
          //x, y, damage, hitZone, image, offsetX, offsetY, scale, velocityX, velocityY, pointIncrease
          { type: "enemy", x: 1455, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 1945, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 2355, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 2550, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 2875, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 3240, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 3500, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 3875, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 4275, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 4495, y: groundY - 50, damage: -15, hitZone: 25, image: "img/guardBot.png", offsetX: -75, offsetY: -50, scale: 0.5, velocityX: 3.5, velocityY: 0, increaseScore: 450/*, stopEnemy: false*/},
          { type: "enemy", x: 1245, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          { type: "enemy", x: 1885, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          { type: "enemy", x: 2435, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          { type: "enemy", x: 3450, y: groundY - 65, damage: -5, hitZone: 25, image: "img/drone.png", offsetX: -45, offsetY: -20, scale: 0.15, velocityX: 4, velocityY: 0, increaseScore: 100/*, stopEnemy: true*/},
          
          { type: "reward", x: 4560, y: groundY - 95, image: "img/cube.png", offsetX: -110, offsetY: -70, scale: 0.15},
          { type: "levelMarker", x: 4500, y: groundY - 85},
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
