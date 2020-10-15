
var dog,dogHappy,database,foodS,foodStock,boneImage;
var feedFood,addFood;
var milkb1,milkb2,milkb3,milkb4,milkb5,milkb6,milkb7,milkb8,milkb9,milkb10,milkb11,milkb12,
    milkb13,milkb14,milkb15,milkb16,milkb17,milkb18,milkb19,milkb20;

function preload(){
   dogImage = loadImage("images/Dog.png");
   dogHappy = loadImage("images/DogHappyIMG.png");
   boneImage = loadImage("images/bone.png");
   milkB = loadImage("images/Milk.png");
 }

function setup() {
  database = firebase.database();
  createCanvas(500,500);

   // feedFood = createButton("Feed the dog");
  // feedFood.position(450,150);

  // addFood = createButton("Add Food");
  // addFood.position(600,150);

  dog = createSprite(400,300,10,10);
  dog.addImage("Dog",dogImage);
  dog.scale = 0.22;

  bone = createSprite(310,40,10,10);
  bone.addImage("bone",boneImage);
  bone.scale = 0.09;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
   
  milkb1 = createSprite(50,100,10,10);
  milkb1.addImage("Milk",milkB);
  milkb1.scale = 0.09;

  milkb2 = createSprite(50,160,10,10);
  milkb2.addImage("Milk",milkB);
  milkb2.scale = 0.09;

  milkb3 = createSprite(50,220,10,10);
  milkb3.addImage("Milk",milkB);
  milkb3.scale = 0.09;

  milkb4 = createSprite(50,280,10,10);
  milkb4.addImage("Milk",milkB);
  milkb4.scale = 0.09;

  milkb5 = createSprite(50,340,10,10);
  milkb5.addImage("Milk",milkB);
  milkb5.scale = 0.09;

  milkb6 = createSprite(50,400,10,10);
  milkb6.addImage("Milk",milkB);
  milkb6.scale = 0.09;

  milkb7 = createSprite(100,100,10,10);
  milkb7.addImage("Milk",milkB);
  milkb7.scale = 0.09;

  milkb8 = createSprite(100,160,10,10);
  milkb8.addImage("Milk",milkB);
  milkb8.scale = 0.09;

  milkb9 = createSprite(100,220,10,10);
  milkb9.addImage("Milk",milkB);
  milkb9.scale = 0.09;

  milkb10 = createSprite(100,280,10,10);
  milkb10.addImage("Milk",milkB);
  milkb10.scale = 0.09;

  milkb11 = createSprite(100,340,10,10);
  milkb11.addImage("Milk",milkB);
  milkb11.scale = 0.09;

  milkb12 = createSprite(100,400,10,10);
  milkb12.addImage("Milk",milkB);
  milkb12.scale = 0.09;

  milkb13 = createSprite(150,100,10,10);
  milkb13.addImage("Milk",milkB);
  milkb13.scale = 0.09;

  milkb14 = createSprite(150,160,10,10);
  milkb14.addImage("Milk",milkB);
  milkb14.scale = 0.09;

  milkb15 = createSprite(150,220,10,10);
  milkb15.addImage("Milk",milkB);
  milkb15.scale = 0.09;

  milkb16 = createSprite(150,280,10,10);
  milkb16.addImage("Milk",milkB);
  milkb16.scale = 0.09;

  milkb17 = createSprite(150,340,10,10);
  milkb17.addImage("Milk",milkB);
  milkb17.scale = 0.09;

  milkb18 = createSprite(150,400,10,10);
  milkb18.addImage("Milk",milkB);
  milkb18.scale = 0.09;

  milkb19 = createSprite(200,100,10,10);
  milkb19.addImage("Milk",milkB);
  milkb19.scale = 0.09;

  milkb20 = createSprite(200,160,10,10);
  milkb20.addImage("Milk",milkB);
  milkb20.scale = 0.09;

 }

function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
     dog.addImage("Dog",dogHappy);
     milkb1.visible = false;
  }
    
    

  drawSprites();
  textSize(30);
  strokeWeight(5);
  stroke("Blue");
  fill("white");
  text("FOOD STOCK       : "+foodS,80,50);
  textSize(20);
  text("NOTE: PRESS UP_ARROW TO FEED MILO MILK!",15,470);
}

function readStock(data){
    foodS = data.val(); 
}

function writeStock(x){
  
  if(x<=0){
    x = 0;
  } else{
    x = x-1;
  }

    database.ref('/').update({
    Food:x
    })
}
