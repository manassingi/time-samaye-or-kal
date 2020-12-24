var hr ,min,sec;
var ahr,amin,asec;
var clockimg
function preload(){

clockimg=loadImage("clock dials.png")

}
function setup() {
  angleMode(DEGREES)
  createCanvas(1200,1200);
  

}

function draw() {
  background("white");
  image(clockimg,50,50,300,300)
  
  
 translate(200,200)
 rotate(-90)
 push ()
 rotate(asec)
 stroke ("red")
 strokeWeight(7)
 line (0,0,100,0)
 pop ()
 push ()
 rotate(amin)
 stroke ("green")
 strokeWeight(7)
 line (0,0,70,0)
 pop ()
 push ()
rotate(ahr)
stroke ("blue")
strokeWeight(7)
line (0,0,40,0)
pop ()
  hr =hour();
  min=minute();
  sec=second();
  asec=map(sec,0,60,0,360);
  amin=map(min,0,60,0,360);
  ahr=map(hr%12,0,12,0,360);

  stroke ("red")
  strokeWeight(7)
 noFill()
  arc (0,0,300,300,0,asec); 
  noFill()
  stroke ("green")
  strokeWeight(7)
  
  arc (0,0,350,350,0,amin); 
  noFill()
  stroke ("blue")
 strokeWeight(7)
  
 arc (0,0,380,400,0,ahr); 
 
  
}