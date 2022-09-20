// Ball Variables
let xBall = 300;
let yBall = 200;
let diameter = 15;
let radius = diameter / 2

// Speed Variables
let xSpeedBall = 6;
let ySpeedBall = 6;

// Racquet Variables
let xRacket = 5;
let yRacket = 155;
let widthRacket = 10;
let heightRacket = 90;
let hit = false;

// Opponent Variables
let xRacketOpponent = 585;
let yRacketOpponent = 155;
let ySpeedOpponent;

// Game Score
let myScore = 0;
let opponentScore = 0;

// Sounds
let racketHit;
let pointHit;
let triller;

function preload(){
  triller = loadSound("trilha.mp3");
  pointHit = loadSound("ponto.mp3");
  racketHit = loadSound("raquetada.mp3");
  }

function setup() {
  createCanvas(600, 400);
  triller.loop();
}

function draw() {
  background(0);  
  showBall();
  movimentBall();
  checkedges(); 
  showRacket(xRacket, yRacket);
  movimentRacket();
  showRacket(xRacketOpponent, yRacketOpponent);
  movimentRacketOpponent();
  checkCollisionRacketLibrary(xRacket, yRacket);
  checkCollisionRacketLibrary(xRacketOpponent, yRacketOpponent);
  gameScore();
  getScore();
  }

function showBall(){
  circle(xBall,yBall,diameter)
}

function movimentBall(){
  xBall += xSpeedBall;
  yBall += ySpeedBall;
}

function checkedges(){
  if(xBall+radius > width || xBall-radius <0){
    xSpeedBall *= -1;
  }
  
   if(yBall+radius > height || yBall-radius <0){
    ySpeedBall *= -1;
  }
}

function showRacket(x,y){
  rect(x,y, widthRacket, heightRacket);
}

function movimentRacket(){
 if(keyIsDown(UP_ARROW)){
   yRacket -=10
 }
  if(keyIsDown(DOWN_ARROW)){
   yRacket +=10
 }
}

function movimentRacketOpponent(){
  ySpeedOpponent = yBall - yRacketOpponent - heightRacket/2 -30;
  yRacketOpponent += ySpeedOpponent
}
  /* 2 players  
 
 if(keyIsDown(87)){
   //yRacketOpponent -=10
 //}
  //if(keyIsDown(83)){
   yRacketOpponent +=10
 }

}
*/

function checkCollisionRacketLibrary(x,y){
  hit = 
    collideRectCircle(x, y, widthRacket, heightRacket, xBall, yBall, radius);
  if (hit){
    xSpeedBall *= -1;    
    racketHit.play();
  }
  
}
  
function gameScore(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(myScore, 170,26);
  text("X", 300,26)
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(opponentScore,470,26)
  
}
  
function getScore(){
  if(xBall>590){
    myScore += 1;
    pointHit.play();
  }
  if(xBall<10){
    opponentScore += 1;
    pointHit.play();
  }
  
}
