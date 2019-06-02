/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 **/

class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);

        this.maxVel = 0.5;
        this.orientation = 0;
        this.vel = 0;
        this.pos = [3, 8, 3];
        this.maxY = 8;
        this.wingRot = 0;
        this.interval = 0.1;
        this.down = false;
        this.diveAnimation = false;
           

        this.cube = new MyUnitCube(scene);
        this.cone = new MyCone(scene, 4, 1);
        this.cylinder = new MyCylinder(scene, 4, 1);

        this.materialBeak = new CGFappearance(this.scene);
        this.materialBeak.setDiffuse(0.7, 0.7, 0.7, 1);
        this.materialBeak.setSpecular(0.9, 0.9, 0.9, 1);
        this.materialBeak.setShininess(10.0);
        this.materialBeak.loadTexture('./images/beak.jpg');
    	this.materialBeak.setTextureWrap('REPEAT', 'REPEAT');

        this.materialEye = new CGFappearance(this.scene);
        this.materialEye.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialEye.setSpecular(0.9, 0.9, 0.9, 1);
        this.materialEye.setShininess(15.0);
        this.materialEye.loadTexture('./images/eye.jpg');
    	this.materialEye.setTextureWrap('REPEAT', 'REPEAT');

        this.materialDifuBlue = new CGFappearance(this.scene);
        this.materialDifuBlue.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialDifuBlue.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialDifuBlue.setShininess(10.0);
        this.materialDifuBlue.loadTexture('./images/bluefeather.jpg');
    	this.materialDifuBlue.setTextureWrap('REPEAT', 'REPEAT'); 

        this.materialDifuPink = new CGFappearance(this.scene);
        this.materialDifuPink.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialDifuPink.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialDifuPink.setShininess(10.0);
        this.materialDifuPink.loadTexture('./images/pinkfeather.jpg');
    	this.materialDifuPink.setTextureWrap('REPEAT', 'REPEAT'); 
        this.ang2rad = Math.PI/180;        
	}

	turn(v){
		this.orientation += v * 50 * this.scene.speedFactor ;
	}
	accelerate(v){
		if(this.vel <= (this.maxVel * this.scene.speedFactor) || v < 0){
		this.vel += v *0.2 * this.scene.speedFactor;
		}
	}

	dive(){
		this.diveAnimation = true;
		this.down = true;

	}
	reset(){
		this.orientation = 0;
        this.vel = 0; 
        this.pos = [3, 8, 3];
	}

	update(t){
	   this.pos[1] += this.interval * Math.sin(t) *0.6;
	   this.wingRot = (-1*Math.sin(t) * 45) *0.6;
	   //updates position in terms of velocity and orientation
	   if(this.vel != 0){
	       this.pos[0] += this.vel * Math.sin(this.ang2rad * this.orientation);
	       this.pos[2] += this.vel * Math.cos(this.ang2rad * this.orientation);
	   }
	   //dive animation
	   if(this.down && this.diveAnimation){
	   	   if(this.pos[1] > 1) this.pos[1] -= this.interval*2;
	   	   else this.down = false;
	   }
	   if(this.down == false && this.diveAnimation){
	   	   if(this.pos[1] < this.maxY) this.pos[1] += this.interval*2;
	   	   else this.diveAnimation = false;
	   }
	}

    display(){

 this.scene.pushMatrix();
     
        this.scene.pushMatrix();
        this.scene.translate(this.pos[0], this.pos[1], this.pos[2]);
        this.scene.rotate(this.ang2rad * this.orientation, 0, 1, 0);
        this.scene.scale(this.scene.scaleFactor, this.scene.scaleFactor, this.scene.scaleFactor);
      
        //Corpo
        this.scene.pushMatrix();
          this.scene.translate(0, 2, 0);
          this.scene.scale(0.8, 0.8, 1.2);
          this.materialDifuBlue.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0, 2, 0.6);
          this.scene.rotate(this.ang2rad * 90, 1, 0, 0);
          this.scene.rotate(this.ang2rad * 45, 0, 1, 0);
          this.scene.scale(0.58, 0.4, 0.58);
          this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0, 2, -0.6);
          this.scene.rotate(this.ang2rad * -90, 1, 0, 0);
          this.scene.rotate(this.ang2rad * 45, 0, 1, 0);
          this.scene.scale(0.58, 0.4, 0.58);
          this.cone.display();
        this.scene.popMatrix();
        
        //Rabo/Penacho
        this.scene.pushMatrix();
          this.scene.translate(0, 2.5, -0.8);
          this.scene.rotate(this.ang2rad * 40, 1, 0, 0);
          this.scene.scale(0.3, 0.01, 0.8);
          this.materialDifuPink.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0, 3.1, 0.6);
          this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
          this.scene.rotate(this.ang2rad * 90, 1, 0, 0);
           this.scene.rotate(this.ang2rad * 250, 0, 1, 0);
          this.scene.scale(0.3, 0.01, 0.3);
          this.materialDifuPink.apply();
          this.cube.display();
        this.scene.popMatrix();

        //Cabeça
        this.scene.pushMatrix();
          this.scene.translate(0, 2.9, 0.8);
          this.scene.scale(0.3, 0.3, 0.7);
          this.materialDifuBlue.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0, 2.3, 0.3);
          this.scene.rotate(this.ang2rad * 40, 1, 0, 0);
          this.scene.scale(0.1, 0.9, 0.1);
          this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0, 2.9, 0.45);
          this.scene.rotate(this.ang2rad * -90, 1, 0, 0);
          this.scene.rotate(this.ang2rad * 45, 0, 1, 0);
          this.scene.scale(0.2, 0.1, 0.2);
          this.cone.display();
        this.scene.popMatrix();

       this.scene.pushMatrix();
          this.scene.translate(0, 2.8, 1.1);
          this.scene.rotate(this.ang2rad * 90, 1, 0, 0);
          this.scene.rotate(this.ang2rad * 45, 0, 1, 0);
          this.scene.scale(0.07, 0.2, 0.07);
          this.materialBeak.apply();
          this.cone.display();
        this.scene.popMatrix();

        //Olhos
        this.scene.pushMatrix();
          this.scene.translate(0.15, 2.95, 1.15);
          this.scene.scale(0.04, 0.04, 0.04);
          this.materialEye.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(-0.15, 2.95, 1.15);
          this.scene.scale(0.04, 0.04, 0.04);
          this.materialEye.apply();
          this.cube.display();
        this.scene.popMatrix();

          //Asas
         

     this.scene.pushMatrix();
          this.scene.translate(0, 2, -0.2);

          //Esq

          this.scene.pushMatrix();
          this.scene.translate(0.2, 0, 0);
          this.scene.rotate(this.ang2rad * this.wingRot, 0, 0, 1);
          this.scene.translate(0.3, 0, 0);

         

        this.scene.pushMatrix();
          this.scene.translate(0, 0, 0.2);
          this.scene.rotate(this.ang2rad * (90 + 180), 0, 1, 0);
          this.scene.scale(0.35, 0.01, 0.8);
          this.materialDifuBlue.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0.65, 0, 0.1);
          this.scene.rotate(this.ang2rad * (110 + 180), 0, 1, 0);
          this.scene.scale(0.35, 0.01, 0.7);
          this.cube.display();
         this.scene.popMatrix();

          this.scene.popMatrix();

 

          //Dta
          this.scene.pushMatrix();
          this.scene.translate(-0.15, 0, 0);
          this.scene.rotate(this.ang2rad * -1 * this.wingRot, 0, 0, 1);
          


        this.scene.pushMatrix();
          this.scene.translate(-0.95, 0, 0.15);
          this.scene.rotate(this.ang2rad * 75, 0, 1, 0);
          this.scene.scale(0.35, 0.01, 0.8);
          this.materialDifuBlue.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(-0.30, 0, 0.25);
          this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
          this.scene.scale(0.35, 0.01, 0.7);
          this.cube.display();
        this.scene.popMatrix();
         
      this.scene.popMatrix();

 this.scene.popMatrix();
    }





}