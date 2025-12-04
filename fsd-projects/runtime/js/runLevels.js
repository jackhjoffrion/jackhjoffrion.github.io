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

    function createObstacle(x, y, damage, rotation, hitZone, image, offsetX, offsetY, scaleX, scaleY){
      var hitZoneSize = hitZone;//Sets the size of the obstacle's collision area
      var damageFromObstacle = damage;//Sets the amount of damage dealt to the player
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//Creates the objects hitzone and attaches hitZoneSize and damageFromObstacle to it
      obstacleHitZone.x = x;//Sets the obstacle's X position
      obstacleHitZone.y = y;//Sets the obstacle's Y position
      game.addGameItem(obstacleHitZone);//Adds obstacleHitZone to game.addGameItem
      var obstacleImage = draw.bitmap(image);//Draws the sawblade image as a bitmap and stores it to the variable obstacleImage
      obstacleHitZone.addChild(obstacleImage);//Adds obstacleImage to obstacleHitZone
      obstacleImage.x = offsetX;//Offsets the obstacle image's X position relative to the hitzone
      obstacleImage.y = offsetY;//Offsets the obstacle image's Y position relative to the hitzone
      obstacleImage.scaleX = scaleX;//Sets the image's X size
      obstacleImage.scaleY = scaleY;//Sets the image's Y size

      obstacleHitZone.rotationalVelocity = rotation;
    }

    function createEnemy(x, y){//Function that controls the creation of enemies
      var enemy = game.createGameItem("enemy", 25);//Creates the enemy and makes the hit zone. Then, it stores the enemy in the variable enemy
      var enemyImage = draw.rect(50, 50, "red");//Creates the image of the enemy and stores it to the enemyImage variable
      enemyImage.x = -25;//Sets the enemy image's X offset to the hit zone
      enemyImage.y = -25;//Sets the enemy image's Y offset to the hit zone
      enemy.addChild(enemyImage);//Adds enemyImage to the enemy
      enemy.x = x;//Sets the enemies X position
      enemy.y = y;//Sets the enemies Y position
      game.addGameItem(enemy);//Adds enemy to the game

      enemy.velocityX -= 3.5 //Moves the enemies X position over time 
      enemy.onPlayerCollision = function(){//Handles when the player collides with an enemy
        game.changeIntegrity(-10);//Reduces the player's health
      };

      enemy.onProjectileCollision = function(){//Handles when the player shoots an enemy
        game.increaseScore(150);//Increases the player's score when they shoot an enemy
        enemy.fadeOut();//Makes the enemy disappear on projectile collision
        //enemy.shrink();
        //enemy.flyTo(-100, -10);
      };
    }

    function createReward(x, y){//Function that controls the creation of rewards
      var reward = game.createGameItem("reward", 25);//Creates the reward and makes the hit zone. Then, it stores the reward in the variable reward
      var rewardImage = draw.rect(50, 50, "blue");//Creates the image of the reward and stores it to the rewardImage variable
      rewardImage.x = -25;//Sets the reward image's X offset to the hit zone
      rewardImage.y = -25;//Sets the reward image's Y offset to the hit zone
      reward.addChild(rewardImage);//Adds rewardImage to the reward
      reward.x = x;//Sets the reward's X position
      reward.y = y;//Sets the reward's Y position
      game.addGameItem(reward);//Adds reward to the game

      reward.velocityX -= 2.5 //Moves the reward's X position over time 
      reward.onPlayerCollision = function(){//Handles when the player collides with a reward
        game.changeIntegrity(10);//Increases the player's health
        game.increaseScore(450);//Increases the player's score
        reward.fadeOut();//Causes the reward to disappear
      };
    }

    function createLevelMarker(x, y){//Function that controls the creation of level marker
      var levelMarker = game.createGameItem("level", 25);//Creates the level marker and makes the hit zone. Then, it stores the level marker in the variable levelMarker
      var levelImage = draw.rect(50, 50, "green");//Creates the image of the level marker and stores it to the levelImage variable
      levelImage.x = -25;//Sets the level marker image's X offset to the hit zone
      levelImage.y = -25;//Sets the level marker image's Y offset to the hit zone
      levelMarker.addChild(levelImage);//Adds levelImage to the level
      levelMarker.x = x;//Sets the level marker's X position
      levelMarker.y = y;//Sets the level marker's Y position
      game.addGameItem(levelMarker);//Adds level to the game

      levelMarker.velocityX -= 2.5 //Moves the level marker's X position over time 
      levelMarker.onPlayerCollision = function(){//Handles when the player collides with a level marker
        game.changeIntegrity(15);//Increases the player's health
        game.increaseScore(250);//Increases the player's score
        startLevel();//Starts the next level
      };
    }
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];//Fetches the current level from the levelData array and stores it inside of the level variable
      var levelObjects = level.gameItems;//Retrieves the array gameItems and stores it in levelObjects
      for(var i = 0; i < levelObjects.length; i++){//A FOR loop that 
        var element = levelObjects[i];

        if(element.type === "obstacle"){
          //x, y, damage, rotation, hitZone, image, offsetX, offsetY, scaleX, scaleY
          createObstacle(element.x, element.y, element.damage, element.rotation, element.hitZone, element.image, element.offsetX, element.offsetY, element.scaleX, element.scaleY);
        }
        if(element.type === "enemy"){
          createEnemy(element.x, element.y);
        }
        if(element.type === "reward"){
          createReward(element.x, element.y);
        }
        if(element.type === "levelMarker"){
          createLevelMarker(element.x, element.y);
        }
      }

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
