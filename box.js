class Box
  {
    constructor()
    {
      this.x =100;
      this.y = 200
      this.w = 50;
      this.h = 50;
    }
    
    display()
    {
      rect(this.x,this.y,this.w,this.h)
    }
  
    //write function to set the width of the box
    rectswidth(v)
    {
      this.w = v;
    }

  }

  
