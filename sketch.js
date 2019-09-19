function setup() {
  
    createCanvas(windowWidth,windowHeight);

  



    background(0);

    for(var i = 0; i <2000; i = i+10){
        var x = random(width);
        var y = random(height);
        var r = random(i);
        fill(random(x),random(y),random(i));
        ellipse(x,y,i/15);
        
    }

    



    
}

function draw() {
   
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }