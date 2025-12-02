var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacle(x, y, damage){
      var hitZoneSize = 25;//Sets the size of the obstacle's collision area
      var damageFromObstacle = damage;//Sets the amount of damage dealt to the player
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//Creates the objects hitzone and attaches hitZoneSize and damageFromObstacle to it
      obstacleHitZone.x = x;//Sets the obstacle's X position
      obstacleHitZone.y = y;//Sets the obstacle's Y position
      game.addGameItem(obstacleHitZone);//Adds obstacleHitZone to game.addGameItem
      var obstacleImage = draw.bitmap("img/sawblade.png");//Draws the sawblade image as a bitmap and stores it to the variable obstacleImage
      obstacleHitZone.addChild(obstacleImage);//Adds obstacleImage to obstacleHitZone
      obstacleImage.x = -25;//Offsets the obstacle image's X position relative to the hitzone
      obstacleImage.y = -25;//Offsets the obstacle image's Y position relative to the hitzone

      obstacleHitZone.rotationalVelocity = 15;
    }

    createObstacle(400, groundY - 105, 25);
    createObstacle(670, groundY - 105, 25);
    createObstacle(890, groundY - 105, 25);

    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 2000;
    enemy.y = groundY - 50;
    game.addGameItem(enemy);

    enemy.velocityX -= 3 
    enemy.onPlayerCollision = function(){
      game.changeIntegrity(-10);
    };

    enemy.onProjectileCollision = function(){
      game.increaseScore(100);
      enemy.fadeOut();
      //enemy.shrink();
      //enemy.flyTo(-100, -10);
    };

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
