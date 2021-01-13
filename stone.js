class Stone extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/stone.png");
      this.r=50;
    }
  
    display() {
      super.display();
    }
  }
  