function setup() {
  createCanvas (700, 700);
     background("pink");
 
}

function draw() {
 
 stroke("purple");
 fill("red");
 
 if(mouseIsPressed){
   circle(mouseX, mouseY,12, 12 );
 }    
}