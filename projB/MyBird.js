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

        this.materialSpec = new CGFappearance(this.scene);
        this.materialSpec.setDiffuse(0.1, 0.1, 0.1, 1);
        this.materialSpec.setSpecular(0.9, 0.9, 0.9, 1);
        this.materialSpec.setShininess(10.0);

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
        
        //Rabo
        this.scene.pushMatrix();
          this.scene.translate(0, 2.5, -0.8);
          this.scene.rotate(this.ang2rad * 40, 1, 0, 0);
          this.scene.scale(0.3, 0.01, 0.8);
          this.materialDifuPink.apply();
          this.cube.display();
        this.scene.popMatrix();

        //Asas
          //Esq
        this.scene.pushMatrix();
          this.scene.translate(0.5, 2, -0.2);
         
        
        this.scene.pushMatrix();
          this.scene.translate(-0.1, 0, 0.2);
          this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
          this.scene.rotate(this.ang2rad * 80, 1, 0, 0);
          this.scene.scale(0.2, 0.5, 0.08);
          this.cylinder.display();
        this.scene.popMatrix();

   /*     this.scene.pushMatrix();
          this.scene.translate(0.48, 0.56, 0);
          this.scene.rotate(this.ang2rad * -20, 0, 1, 0);
          this.scene.rotate(this.ang2rad *20, 1, 0, 0);
          this.scene.rotate(this.ang2rad * 180, 0, 0, 1);
          this.scene.scale(0.3, 0.3, 1);
          this.cylinder.display();
         this.scene.popMatrix();

        this.scene.popMatrix();

          //Dta
        this.scene.pushMatrix();
           this.scene.translate(-0.5, 2, -0.2);
           this.scene.scale(1, 1, -1);
           this.scene.rotate(this.ang2rad * 225, 0, 1, 0);
          this.scene.rotate(this.ang2rad *90, 1, 0, 0);
          
        this.scene.pushMatrix();
          this.scene.rotate(this.ang2rad * 20, 0, 1, 0);
          this.scene.rotate(this.ang2rad * -20, 1, 0, 0);
          this.scene.scale(0.3, 0.3, 1);
          this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0.48, 0.56, 0);
          this.scene.rotate(this.ang2rad * -20, 0, 1, 0);
          this.scene.rotate(this.ang2rad *20, 1, 0, 0);
          this.scene.rotate(this.ang2rad * 180, 0, 0, 1);
          this.scene.scale(0.3, 0.3, 1);
          this.cylinder.display();
         this.scene.popMatrix();*/

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
          this.materialSpec.apply();
          this.cone.display();
        this.scene.popMatrix();

      
        
        //cubo unitario para escala
        this.scene.pushMatrix();
          this.scene.translate(3, 2.5, 0);
          this.cube.display();
        this.scene.popMatrix();


        
        this.scene.popMatrix();
    }





}