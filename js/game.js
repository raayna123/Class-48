class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(250,50, 20, 20);
    //player1.addImage("player1",player_img);
    
    player2 = createSprite(250,850, 20, 20);
    //player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                background(courtImg);
                 //image(back_img, 0, 0, 1000, 800);
                 var x =250;
                 var y1 = 50;
                 var y2;
                 var index =0;
                 drawSprites();
               for(var plr in allPlayers){
                    
                    
                     index = 1
                     x = 100-allPlayers[plr].distance;
                     y1=50
                     y2 = 50 + 800;
                     
                     players[index -1].x = x;
                     players[index-1].y = y1;
                     players[index - 1].y = y2;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y1+25);

                         text(allPlayers[plr].name ,x-25,y2+25);
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
                  }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
               
                 
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}







// class Game {

//     constructor() {

//     }

//     getState() {
//         var gameStateRef = database.ref('gameState');
//         gameStateRef.on("value", function (data) {
//             gameState = data.val();
//         })

//     }

//     update(state) {
//         database.ref('/').update({
//             gameState: state
//         });
//     }
//     async start() {
//             if (gameState === 0) {
//                 player = new Player();
//                 var playerCountRef = await database.ref('playerCount').once("value");
//                 if (playerCountRef.exists()) {
//                     playerCount = playerCountRef.val();
//                     player.getCount();
//                 }
//                 form = new Form()
//                 form.display();
//             }

//             player1 = createSprite(250, 850, 20, 20);
//             player2 = createSprite(250, 50, 20, 20);
//             players=[player1,player2];
   
//     }

//     play() {
//         form.hide();

//         Player.getPlayerInfo();

//         background(courtImg);

      
    
//         ball = createSprite(250, 450, 20, 20);
//         ball.addImage("ball", ballImg);
//         ball.scale = 0.02;
    
//         boundry1 = createSprite(250, 0, 500, 10);
//         boundry1.visible = false;
    
//         boundry2 = createSprite(0, 450, 10, 900);
//         boundry2.visible = false;
    
//         boundry3 = createSprite(250, 900, 500, 10);
//         boundry3.visible = false;
    
//         boundry4 = createSprite(500, 450, 10, 900);
//         boundry4.visible = false;
    
//         boundry5 = createSprite(250, 450, 500, 10);
//         boundry5.visible = false;

//         drawSprites();

//         var index = 0;
//         var x = 250
//        var y =50
      

//     //    for(var plr in allPlayers){
                    
           
//            index = index+1;

//             y = y + 500;

           
//           players[index-1].x = x;
//            players[index-1].y = y;
           
              
//             if(index === player.index){
                
//                 fill("black");
//                 textSize(25);
//                 text(allPlayers[plr].name ,x-25,y+25);
              
//             }
//         // }

//         if(keyDown("space")) {
//             ball.velocityY = 4;
//             ball.velocityX = 4;
//         }
    



//         if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
//             player.distance -= 10
//             player.update();
//         }
//         if (keyIsDown(LEFT_ARROW) && player.index !== null) {
//             player.distance += 10
//             player.update();
//         }




    
//         if(keyDown(UP_ARROW)) {
//             player.distance = player.distance - 3;
//         }
//         else if(keyDown(DOWN_ARROW)) {
//             player.distance = player.distance + 3;
//         }
//         else if(keyDown(RIGHT_ARROW)) {
//             player.distance = player.distance + 3;
//         }
//         else if(keyDown(LEFT_ARROW)) {
//             player.distance = player.distance - 3;
//         }
    
//         if(keyDown("W")) {
//             player2.distance = player2.distance - 3;
//         }
//         else if(keyDown("S")) {
//             player2.distance = player2.distance + 3;
//         }
//         else if(keyDown("D")) {
//             player2.distance = player2.distance + 3;
//         }
//         else if(keyDown("A")) {
//             player2.distance = player2.distance - 3;
//         }
    
//         if(player1.collide(boundry5)) {
//             player1.velocityY = 0;
//         }
    
//         if(player2.collide(boundry5)) {
//             player2.velocityY = 0;
//         }

//         ball.bounceOff(boundry1);
//         ball.bounceOff(boundry2);
//         ball.bounceOff(boundry3);
//         ball.bounceOff(boundry4);
//         ball.bounceOff(player1);
//         ball.bounceOff(player2);
//     }
// }