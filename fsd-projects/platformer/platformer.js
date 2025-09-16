$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Gridwd
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(175, 625, 100, 25, "black");
    createPlatform(300, 550, 130, 30, "black");
    createPlatform(480, 600, 100, 25, "black");
    createPlatform(75, 500, 65, 25, "black");
    createPlatform(122, 385, 90, 25, "black");
    createPlatform(350, 315, 85, 20, "black");
    createPlatform(685, 585, 120, 25, "black");
    createPlatform(905, 185, 600, 25, "black");
    createPlatform(905, 0, 600, 25, "black");
    createPlatform(700, 450, 60, 15, "black");
    createPlatform(515, 395, 60, 15, "black");
    createPlatform(725, 300, 60, 15, "black");
    createPlatform(955, 650, 95, 25, "black");
    createPlatform(1115, 600, 105, 25, "black");
    createPlatform(925, 500, 100, 20, "black");
    createPlatform(1150, 365, 95, 20, "black");

    // TODO 3 - Create Collectables
    createCollectable("nutsAndBolts", 200, 575);
    createCollectable("bolts", 375, 250);
    createCollectable("wrench", 1200, 125);
    createCollectable("oil", 1250, 700);
    createCollectable("screws", 1175, 325);

    // TODO 4 - Create Cannons
    createCannon("right", 500, 2250);
    createCannon("top", 650, 1500);
    createCannon("right", 165, 2925);
    createCannon("top", 1250, 5500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
