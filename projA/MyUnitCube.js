/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
	
		this.quad = new MyQuad(this.scene);

		this.ang2rad = Math.PI/180;

		this.materialSide = new CGFappearance(this.scene);
        this.materialSide.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSide.setShininess(10.0);
        this.materialSide.loadTexture('textures/mineSide.png');
        this.materialSide.setTextureWrap('REPEAT', 'REPEAT');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTop.setShininess(10.0);
        this.materialTop.loadTexture('textures/mineTop.png');
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBottom.setShininess(10.0);
        this.materialBottom.loadTexture('textures/mineBottom.png');
        this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');
	}

display(){
  
        //sides
         this.scene.pushMatrix();
         this.scene.translate(0, 0, 0.5);
         this.materialSide.apply();
         this.quad.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(0.5, 0, 0);
         this.scene.rotate(90 * this.ang2rad, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(-0.5, 0, 0);
         this.scene.rotate(-90 * this.ang2rad, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(0, 0, -0.5);
         this.scene.rotate(180 * this.ang2rad, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();


       //top
         this.scene.pushMatrix();
         this.scene.translate(0, 0.5, 0);
         this.scene.rotate(-90 * this.ang2rad, 1, 0, 0);
         this.materialTop.apply();
         this.quad.display();
         this.scene.popMatrix();

       //down
         this.scene.pushMatrix();
         this.scene.translate(0, -0.5, 0);
         this.scene.rotate(90 * this.ang2rad, 1, 0, 0);
         this.materialBottom.apply();
         this.quad.display();
         this.scene.popMatrix();

}

	
	
}