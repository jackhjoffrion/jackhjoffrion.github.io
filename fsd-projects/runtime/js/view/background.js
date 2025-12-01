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
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');//This draws a rectangle and stores it in the variable backgroundFill
            background.addChild(backgroundFill);//Adds backgroundFill as a child to backgroundObject

            // TODO 2: - Add a moon and starfield\
            for(var i = 0; i < 500; i++){
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
            
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//Creates a bitmap object using the tree image and stores it in the variable tree, which is outside of the render function
            tree.x = 600;//Sets the X position of the tree
            tree.y = groundY - 250;// Sets the Y position of the tree
            background.addChild(tree);//Adds tree to the background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 4;//Moves the tree to the left by substracting from its current X position

            if (tree.x < -200) {//Checks if the tree has gone off to the left and resets it to the right
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            

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
