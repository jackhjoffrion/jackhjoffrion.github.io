var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundImage = draw.bitmap('img/factoryBackground.png');//This draws a rectangle and stores it in the variable backgroundFill
            background.addChild(backgroundImage);//Adds backgroundFill as a child to backgroundObject
            
            // Scale image to fit width
            backgroundImage.scaleX = canvasWidth / backgroundImage.image.width;
            backgroundImage.scaleY = backgroundImage.scaleX;

            // After scaling, compute its new height
            var scaledHeight = backgroundImage.image.height * backgroundImage.scaleY;

            // Position it so the BOTTOM of the image touches the ground
            backgroundImage.x = 0;
            backgroundImage.y = groundY - scaledHeight;

            background.addChild(backgroundImage);

            // TODO 2: - Add a moon and starfield\
            /* for(var i = 0; i < 500; i++){
                var circle = draw.circle(0.5, "white", "white", 1);//Creates an circle with a specific radius, border color, fill color, and alpha (opacity) and stores it in the variable circle
                circle.x = canvasWidth * Math.random();//Sets the stars' X position on the canvas
                circle.y = groundY * Math.random();//Sets the stars' Y position on the canvas
                background.addChild(circle);//Adds circle to the background container 
            }

            var moon = draw.bitmap("img/moon.png");//This draws a bitmap object using the moon image and stores it in the variable moon
            moon.x = canvas.width - 400;//Sets the moon's X position
            moon.y = groundY - 400;//Sets the moon's Y position
            moon.scaleX = 0.75;//Scales the moon's width
            moon.scaleY = 0.75;//Scales the moon's height
            background.addChild(moon);//Adds moon to the background container
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 6; ++i) {
                var buildingColors = ["white", "lightGray", "white", "gray", "lightGray", "gray"]//Makes a variable that stores an array that stores multiple building colors
                var buildingHeight =  300 * Math.random(315, 330);//Makes a variable that stores the buildings' height
                var building = draw.rect(75, buildingHeight, buildingColors[i], "darkGray", 3);//Makes a variable that stores a single rectangle
                building.x = 200 * i;//Sets the buildings' X position
                building.y = groundY - buildingHeight;//Sets the buildings' Y position
                background.addChild(building);//Adds building to the background container
                buildings.push(building);//Adds building to the buildings variable's array
            }
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//Creates a bitmap object using the tree image and stores it in the variable tree, which is outside of the render function
            tree.x = 600;//Sets the X position of the tree
            tree.y = groundY - 230;// Sets the Y position of the tree
            background.addChild(tree);//Adds tree to the background container */
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            /*tree.x = tree.x - 4;//Moves the tree to the left by substracting from its current X position

            if (tree.x < -200) {//Checks if the tree has gone off to the left and resets it to the right
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++){//A FOR loop that controls the movement of the buildings
                var building = buildings[i];//Assigns a local variable named building to the buildings array
                building.x -= 1.5;//Subtracts 1.5 from the building continuously to make it seem like it is moving
                if(building.x < -150){//Checks if building.x is less than -150
                    building.x = canvasWidth;//If it does, it sets building.x to canvasWidth
                }
            }
*/
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
