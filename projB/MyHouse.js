/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 **/

class MyHouse extends CGFobject {
	constructor(scene) {
        super(scene);

        this.ceiling = new MyPyramid(scene, 4, 1);
        this.quad = new MyQuad(scene);
        this.column = new MyPrism(scene, 6, 1);

        this.ang2rad = Math.PI/180;

        this.marbleHouseMat = new CGFappearance(this.scene);
        this.marbleHouseMat.setDiffuse(0.1, 0.1, 0.1, 1);
        this.marbleHouseMat.setSpecular(0.9, 0.9, 0.9, 1);
        this.marbleHouseMat.setShininess(10.0);
        this.marbleHouseMat.loadTexture('./images/marble.jpg');
        this.marbleHouseMat.setTextureWrap('REPEAT', 'REPEAT');

        this.yellowHouseMat = new CGFappearance(this.scene);
        this.yellowHouseMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.yellowHouseMat.setSpecular(0.1, 0.1, 0.1, 1);
        this.yellowHouseMat.setShininess(10.0);
        this.yellowHouseMat.loadTexture('./images/yellow.jpg');
        this.yellowHouseMat.setTextureWrap('REPEAT', 'REPEAT');

        this.tileHouseMat = new CGFappearance(this.scene);
        this.tileHouseMat.setDiffuse(0.5, 0.5, 0.5, 1);
        this.tileHouseMat.setSpecular(0.8, 0.8, 0.8, 1);
        this.tileHouseMat.setShininess(10.0);
        this.tileHouseMat.loadTexture('./images/tile.jpg');
        this.tileHouseMat.setTextureWrap('REPEAT', 'REPEAT');

        this.doorMat = new CGFappearance(this.scene);
        this.doorMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.doorMat.setSpecular(0.2, 0.2, 0.2, 1);
        this.doorMat.setShininess(10.0);
        this.doorMat.loadTexture('./images/door.jpg');
        this.doorMat.setTextureWrap('REPEAT', 'REPEAT');

        this.windowHouseMat = new CGFappearance(this.scene);
        this.windowHouseMat.setDiffuse(0.2, 0.2, 0.2, 1);
        this.windowHouseMat.setSpecular(0.9, 0.9, 0.9, 1);
        this.windowHouseMat.setShininess(10.0);
        this.windowHouseMat.loadTexture('./images/window.jpg');
        this.windowHouseMat.setTextureWrap('REPEAT', 'REPEAT');
    }

display(){
	this.scene.pushMatrix()
	this.scene.translate(10, 1.8, -10);
	this.scene.rotate(this.ang2rad * -30, 0, 1, 0);
	this.scene.scale(0.9, 1.1, 0.9);

  //Walls
    this.scene.pushMatrix();
		    this.scene.translate(0, 0.5, 1);
		    this.yellowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

	 this.scene.pushMatrix();
		    this.scene.translate(0.5, 0.5, 0);
		    this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
		    this.scene.scale(2, 1, 1);
		    this.yellowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

	 this.scene.pushMatrix();
		    this.scene.translate(-0.5, 0.5, 0);		    
		    this.scene.rotate(this.ang2rad * -90, 0, 1, 0);
		    this.scene.scale(2, 1, 1);
		    this.yellowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

	 this.scene.pushMatrix();
		    this.scene.translate(0, 0.5, -1);
		    this.scene.rotate(this.ang2rad * 180, 0, 1, 0);
		    this.yellowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

  //ceiling
	this.scene.pushMatrix();
			this.scene.translate(0, 1, 0.5);
			this.scene.scale(1.2, 0.7, 2.7);
			this.scene.rotate(this.ang2rad * 45, 0, 1, 0);
			this.tileHouseMat.apply();
		    this.ceiling.display();
	this.scene.popMatrix();

//columns
	this.scene.pushMatrix();
			this.scene.translate(0.7, 0, 2);
			this.scene.scale(0.15, 1, 0.15);
			this.marbleHouseMat.apply();
		    this.column.display();
    this.scene.popMatrix();
        
    this.scene.pushMatrix();
			this.scene.translate(-0.7, 0, 2);
			this.scene.scale(0.15, 1, 0.15);
		    this.column.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
			this.scene.translate(0.7, 0, 1.2);
			this.scene.scale(0.15, 1, 0.15);
		    this.column.display();
    this.scene.popMatrix();
        
    this.scene.pushMatrix();
			this.scene.translate(-0.7, 0, 1.2);
			this.scene.scale(0.15, 1, 0.15);
	       this.column.display();
	this.scene.popMatrix();

//door
    this.scene.pushMatrix();
		    this.scene.translate(0, 0.5*0.6, 1.01);
		    this.scene.scale(0.4, 0.6, 1);
		    this.doorMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

//windows
	this.scene.pushMatrix();
		    this.scene.translate(-0.501, 0.5, -0.5);
		    this.scene.rotate(this.ang2rad * -90, 0, 1, 0);
		    this.scene.scale(0.5, 0.5, 1);
		    this.windowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		    this.scene.translate(-0.501, 0.5, 0.5);
		    this.scene.rotate(this.ang2rad * -90, 0, 1, 0);
		    this.scene.scale(0.5, 0.5, 1);
		    this.windowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();

    this.scene.pushMatrix();
		    this.scene.translate(0.501, 0.5, 0);
		    this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
		    this.scene.scale(0.8, 0.5, 1);
		    this.windowHouseMat.apply();
		    this.quad.display();
	this.scene.popMatrix();


	this.scene.popMatrix();
}

}
