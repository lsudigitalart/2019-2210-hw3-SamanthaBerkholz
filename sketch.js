function setup() {
  
    createCanvas(windowWidth,windowHeight);

  



    background(0);

    for(var i = 0; i <20000; i = i+10){
        var x = random(width);
        var y = random(height);
        var r = random(i);
        fill(random(x),random(y),random(i));
        ellipse(x,y,i/150);
        quad(x,y,x*2,y*2,x+2,y+2,x,+10,y+10);
        
    }

    



    
}

function draw() {
   
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }