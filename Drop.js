class Drop {
    constructor(x,y){
       this.rain = Bodies.circle(x,y,5,options);
       frcition: 0.1;


    }

    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
        }
        
    }
}

