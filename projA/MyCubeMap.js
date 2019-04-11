/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
	
		this.quad = new MyQuad(this.scene);

		this.ang2rad = Math.PI/180;

		this.materialL = new CGFappearance(this.scene);
        this.materialL.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialL.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialL.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialL.setShininess(10.0);
        this.materialL.loadTexture('textures/box_left.jpg');
        this.materialL.setTextureWrap('REPEAT', 'REPEAT');

        this.materialR = new CGFappearance(this.scene);
        this.materialR.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialR.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialR.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialR.setShininess(10.0);
        this.materialR.loadTexture('textures/box_right.jpg');
        this.materialR.setTextureWrap('REPEAT', 'REPEAT');

        this.materialUp = new CGFappearance(this.scene);
        this.materialUp.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialUp.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialUp.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialUp.setShininess(10.0);
        this.materialUp.loadTexture('textures/box_up.jpg');
        this.materialUp.setTextureWrap('REPEAT', 'REPEAT');

      /*  this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBottom.setShininess(10.0);
        this.materialBottom.loadTexture('textures/box_down.jpg');
        this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');*/

        this.materialFront = new CGFappearance(this.scene);
        this.materialFront.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialFront.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialFront.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialFront.setShininess(10.0);
        this.materialFront.loadTexture('textures/box_front.jpg');
        this.materialFront.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBack = new CGFappearance(this.scene);
        this.materialBack.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialBack.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBack.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBack.setShininess(10.0);
        this.materialBack.loadTexture('textures/box_back.jpg');
        this.materialBack.setTextureWrap('REPEAT', 'REPEAT');
	}

display(){

	this.scene.pushMatrix();
	this.scene.scale(150, 150, 150);

	this.scene.pushMatrix();
	     this.scene.translate(0, 0.4, -0.5);
         this.materialFront.apply();
         this.quad.display();
    this.scene.popMatrix();

	this.scene.pushMatrix();
	     this.scene.translate(0.5, 0.4, 0);
	     this.scene.rotate(this.ang2rad * -90, 0, 1, 0);
         this.materialL.apply();
         this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
	     this.scene.translate(-0.5, 0.4, 0);
	     this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
         this.materialR.apply();
         this.quad.display();
    this.scene.popMatrix();

   /* this.scene.pushMatrix();
	     this.scene.translate(0, 0, 0);
	     this.scene.rotate(this.ang2rad * 90, 0, 1, 0);
	     this.scene.rotate(this.ang2rad * -90, 1, 0, 0);
         this.materialBottom.apply();
         this.quad.display();
    this.scene.popMatrix();*/

    this.scene.pushMatrix();
	     this.scene.translate(0, 0.4, 0.5);
	     this.scene.rotate(this.ang2rad * -180, 0, 1, 0);
         this.materialBack.apply();
         this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
	     this.scene.translate(0, 1, 0);
	     this.scene.rotate(this.ang2rad * 90, 1, 0, 0);
         this.materialUp.apply();
         this.quad.display();
    this.scene.popMatrix();


    this.scene.popMatrix();
}

	
	
}