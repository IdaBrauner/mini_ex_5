function setup() {
  createCanvas(windowWidth,windowHeight);
  ball=new ball(900,200,4,-5)
  bat=new bat(700,mouseY)

}

function draw() {
  background(145,182,242);
  noStroke();
  fill(255,225,130);
  rect(0,height/2+145,width,height/2-100);
  fill('rgba(255,225,6,0.5)');
  sun(120,120);
  fill('rgba(255,225,6,0.65)');
  sun(100,100);
  fill('rgba(255,225,6,1)');
  sun(70,70);
  bat.follow();
  ball.move();
  ball.bounce();
  ball.display();

}
//A function to create the sun
function sun (w,h){
ellipse(160,80,w,h)

}

class bat {
constructor(x,y){
this.x=x;
this.y=y;

}
follow(){
rect(this.x,this.y,25,80)
if(mouseY<490 || mouseY>0){
this.y=mouseY
}
}

}
class ball {
constructor (x,y,xspeed,yspeed){
this.x=x;
this.y=y;
this.xspeed=xspeed;
this.yspeed=yspeed;
}
bounce() {

  if (this.x > width || this.x < 0) {
    this.xspeed = this.xspeed * -1;
  }
  if (this.y> height || this.y < 0 || this.y>489) {
    this.yspeed = this.yspeed * -1;
  }
}
display() {
  fill(200, 0, 200);
  ellipse(this.x, this.y, 50, 50);
}
move() {
  this.x = this.x + this.xspeed;
  this.y = this.y + this.yspeed;
}

}
