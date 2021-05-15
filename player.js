class Player {
    constructor(){
      this.r = 50;
      this.x = w / 2;
      this.y = h- this.r;
      this.flow = 2;
      this.direction = 'still';
    }

    display(){
      image(playerImg, this.x, this.y, this.r, this.r)
    }
    move(){
      switch (this.direction){
      case 'still':
      //don't move
      break;
      case 'up':
      if (this.y > 0){
      this.y -= this.flow;
      }
      break;
      case 'down':
      if (this.y < h - this.r){
      this.y += this.flow;
      }
      break;
      case 'left':
      if (this.x > 0){
      this.x -= this.flow;
      }
      break;
      case 'right':
      if (this.x < w - this.r){
      this.x += this.flow;
      }
      break;
      default:
      break;
      }
    }
  }