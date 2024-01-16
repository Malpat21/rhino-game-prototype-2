var player, rhino
var obstacle
var lifebar
var ground
var gamestate

function preload() {
rhinoImg = loadImage ("assets/rhino image.gif")
groundImg = loadImage ("assets/ground2.png") 
rock = loadImage ("assets/obstacle one.png")
rock2 = loadImage ("assets/obstacle two.png")
player = loadImage ("assets/plr.png")
}

function setup() {
    createCanvas(800,800);
    createSprite(800, 800, 50, 50)
}

 function draw() {
    background(255,255,255);  

    rhino =  createSprite(220, 410, 20,20);
    rhino.addImage(rhinoImg)
    rhino.scale = 0.2

    ground = createSprite(1, 470, 990, 20)
    ground.addImage(groundImg)
    

    drawSprites ();
}



// function keyPressed () {
//     if (keyCode === UP_ARROW) {
//         gamestate = play
//     }
// }

// function play () {

// }
