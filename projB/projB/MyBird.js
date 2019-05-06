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

        this.materialBody = new CGFappearance(this.scene);
        this.materialBody.setDiffuse(0.1, 0.1, 0.1, 1);
        this.materialBody.setSpecular(0.9, 0.9, 0.9, 1);
        this.materialBody.setShininess(10.0);
        
        this.ang2rad = Math.PI/180;        
	}

    display(){
        this.scene.pushMatrix();
          this.scene.scale(5, 5, 5);

        //Corpo
        this.scene.pushMatrix();
          this.scene.translate(0, 2, 0);
          this.scene.scale(0.8, 0.8, 1.2);
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

        //Cabeça
        this.scene.pushMatrix();
          this.scene.translate(0, 2.9, 0.8);
          this.scene.scale(0.3, 0.3, 0.7);
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
          this.cone.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
          this.scene.translate(0, 2.5, -0.8);
          this.scene.rotate(this.ang2rad * 40, 1, 0, 0);
          this.scene.scale(0.3, 0.01, 0.8);

          this.cube.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
          this.scene.translate(3, 2.5, 0);
          this.cube.display();
        this.scene.popMatrix();

        
        this.scene.popMatrix();
    }





}