/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 **/

class MyBird extends CGFobject {
	constructor(scene) {
        super(scene);

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

    display(){


 this.scene.pushMatrix();
     
        this.scene.pushMatrix();
          this.scene.scale(5, 5, 5);

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

        //Asas
          //Esq
        this.scene.pushMatrix();
          this.scene.rotate(this.ang2rad *20, 0, 1, 0);
          this.scene.translate(0.5, 2, 0);
         
        
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

 

          //Dta
        this.scene.pushMatrix();
          this.scene.translate(-1, 0, -0.2);
          this.scene.rotate(this.ang2rad *40, 0, 1, 0);
          this.scene.scale(0.35, 0.01, 0.8);
          this.materialDifuBlue.apply();
          this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(-1.35, 0, -0.8);
          this.scene.rotate(this.ang2rad * 20, 0, 1, 0);
          this.scene.scale(0.35, 0.01, 0.7);
          this.cube.display();
         this.scene.popMatrix();

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

    
        this.scene.popMatrix();
    }





}