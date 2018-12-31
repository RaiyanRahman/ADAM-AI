class Boundary {
// Basically a class to make sure the AI reaches a checkpoint in the form of a
// boundary line. Top-tier class.
  constructor(topL,botR, x, y){
    this.taken = false;
    var lineWidth = 1;
    this.pos = createVector(topL.pixelPos.x-lineWidth, topL.pixelPos.y-lineWidth);
    this.w = botR.pixelPos.x - this.pos.x + lineWidth;
    this.h =  botR.pixelPos.y - this.pos.y + lineWidth;
    this.bottomRight = createVector(this.pos.x + this.w, this.pos.y + this.h);
    this.edges = [];
    this.pixelPos = createVector(x*tileSize+xoff, y*tileSize+yoff);

  }

  // Idk what this does.
  collision(ptl, pbr) {//player dimensions
    //add the x first
    if(this.taken){ return false;}
    if ((ptl.x <this.bottomRight.x && pbr.x > this.pos.x) &&( ptl.y < this.bottomRight.y && pbr.y > this.pos.y)) {
      this.taken = true;
      return true;
    }
    return false;
  }

  show(){
  if(!showedCoin && !this.taken) {
      for (var i = 0; i< this.edges.length; i++) {
        stroke(0);
        strokeWeight(4);
        switch(this.edges[i]) {
          case 4:
            line(this.pixelPos.x, this.pixelPos.y, this.pixelPos.x+tileSize,this.pixelPos.y);
            break;
          case 1:
            line(this.pixelPos.x+tileSize, this.pixelPos.y, this.pixelPos.x+tileSize, this.pixelPos.y+tileSize);
            break;
          case 2:
            line(this.pixelPos.x, this.pixelPos.y+tileSize, this.pixelPos.x+tileSize, this.pixelPos.y+tileSize);
            break;
          case 3:
            line(this.pixelPos.x, this.pixelPos.y, this.pixelPos.x, this.pixelPos.y+tileSize);
            break;
        }
      }
      showedCoin = true;
    }
  }
}
