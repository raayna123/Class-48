var courtImg;
var player1, player2, player3;
var ball;
var boundry1, boundry2, boundry3, boundry4, boundry5;
var ballImg, backhandImg, forehandImg, readyImg, backImg, foreImg, rImg;
var gameState = "serve";
var playerCount, form, game, player, allPlayers, players;
var fruits;
var score1 = 0;
var score2 = 0;


function preload() {
    courtImg = loadImage("images/tennisCourt.jpg");
    ballImg = loadImage("images/ball.png");
    backhandImg = loadImage("images/backhand1.png");
    forehandImg = loadImage("images/forehand1.png");
    readyImg = loadImage("images/ready1.png");
    backImg = loadImage("images/backhand2.png");
    foreImg = loadImage("images/forehand2.png");
    rImg = loadImage("images/ready2.png");
}

function setup() {

    database = firebase.database();

    createCanvas(600, 900);

    // fruitGroup = new Group();
    // game = new Game();
    // game.getState();
    // game.start();

        player1 = createSprite(250, 850, 20, 20);
        player1.addImage("ready1", rImg);
        player1.addImage("backhand1", backImg);
        player1.addImage("forehand1", foreImg);
        player1.scale = 0.2;

        player2 = createSprite(250, 80, 20, 20);
        player2.addImage("ready", readyImg);
        player2.addImage("backhand", backhandImg);
        player2.addImage("forehand", forehandImg);
        player2.scale = 0.2;

        ball = createSprite(250, 450, 20, 20);
        ball.addImage("ball", ballImg);
        ball.scale = 0.02;
    
        boundry1 = createSprite(250, 0, 500, 10);
        boundry1.visible = false;
    
        boundry2 = createSprite(0, 450, 10, 900);
        boundry2.visible = false;
    
        boundry3 = createSprite(250, 900, 500, 10);
        boundry3.visible = false;
    
        boundry4 = createSprite(500, 450, 10, 900);
        boundry4.visible = false;
    
        boundry5 = createSprite(250, 450, 500, 10);
        boundry5.visible = false;

    

   
}

function draw() {

    background(courtImg);

    if(gameState == "serve") {
        textSize(20);
        fill("white");
        text("Press Space To Start", 200, 20);   
    }

    textSize(20);
    fill("White");
    text("Player1:-" + score1, 50, 20);
    text("Player2:-" + score2, 50, 60);
        // if(playerCount == 2) {
    //     game.update(1);
    // }
    // if(gameState == 1) {
    //     game.play(); 
    // }
    // if(gameState == 2) {
    //     game.end();
    // }

    if(keyDown("space")) {
        ball.velocityY = 4;
        ball.velocityX = 4;
        gameState = "play";
    }

    if(gameState == "play") {
        if(keyDown(UP_ARROW)) {
            player1.y = player1.y - 5;
        }
        else if(keyDown(DOWN_ARROW)) {
            player1.y = player1.y + 5;
        }
        else if(keyDown(RIGHT_ARROW)) {
            player1.x = player1.x + 5;
            player1.changeImage("forehand1");
            player1.scale = 0.5;
        }
        else if(keyDown(LEFT_ARROW)) {
            player1.x = player1.x - 5;
            player1.changeImage("backhand1");
            player1.scale = 0.7;
        }
                
        if(keyDown("W")) {
            player2.y = player2.y - 5;
        }
        else if(keyDown("S")) {
            player2.y = player2.y + 5;
        }
        else if(keyDown("D")) {
            console.log("pressed d", player2);
            player2.x = player2.x + 5;
            player2.changeImage("backhand");
            
        }
        else if(keyDown("A")) {
            console.log("pressed a", player2);
            player2.x = player2.x - 5;
            player2.changeImage("forehand");
            player2.scale = 0.2;
        }

        if(ball.isTouching(player1) || ball.isTouching(player2)) {
            ball.bounceOff(player1);
            ball.bounceOff(player2);
        }
    
        // ball.bounceOff(boundry1);
        ball.bounceOff(boundry2);
        // ball.bounceOff(boundry3);
        ball.bounceOff(boundry4);
        ball.bounceOff(player1);
        ball.bounceOff(player2);
    
        if(ball.y > 900) {
            score2 += 1;
            ball.x = 250;
            ball.y = 450;
            ball.velocityX = 0;
            ball.velocityY = 0;
            gameState = "serve";
        }
    
        if(ball.y < 0) {
            score1 += 1;
            ball.x = 250;
            ball.y = 450;
            ball.velocityX = 0;
            ball.velocityY = 0;
            gameState = "serve";
        }

        if(score1 == 10 || score2 == 10) {
            gameState = "end";
        }
    }

    if(gameState == "end") {
        text("Game Over !!!!!", 200, 300);
        text("Press r To Restart The Game", 200, 350);
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    if(keyDown("r")) {
        gameState = "serve";
        score1 = 0;
        score2 = 0;
    }



   

    

    drawSprites();

}

