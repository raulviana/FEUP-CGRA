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
        this.materialL.loadTexture('./images/miramar_lf.jpg');
        this.materialL.setTextureWrap('REPEAT', 'REPEAT');

        this.materialR = new CGFappearance(this.scene);
        this.materialR.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialR.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialR.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialR.setShininess(10.0);
        this.materialR.loadTexture('./images/miramar_rt.jpg');
        this.materialR.setTextureWrap('REPEAT', 'REPEAT');

        this.materialUp = new CGFappearance(this.scene);
        this.materialUp.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialUp.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialUp.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialUp.setShininess(10.0);
        this.materialUp.loadTexture('./images/miramar_up.jpg');
        this.materialUp.setTextureWrap('REPEAT', 'REPEAT');

        this.materialFront = new CGFappearance(this.scene);
        this.materialFront.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialFront.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialFront.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialFront.setShininess(10.0);
        this.materialFront.loadTexture('./images/miramar_ft.jpg');
        this.materialFront.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBack = new CGFappearance(this.scene);
        this.materialBack.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialBack.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBack.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBack.setShininess(10.0);
        this.materialBack.loadTexture('./images/miramar_bk.jpg');
        this.materialBack.setTextureWrap('REPEAT', 'REPEAT');
	}

display(){

	this.scene.pushMatrix();
	this.scene.translate(0, -20, 0);
	this.scene.scale(60, 60, 60);
	
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

    this.scene.pushMatrix();
	     this.scene.translate(0, 0.4, 0.5);
	     this.scene.rotate(this.ang2rad * -180, 0, 1, 0);
         this.materialBack.apply();
         this.quad.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
	     this.scene.translate(0, 0.9, 0);
	     this.scene.rotate(this.ang2rad * 90, 1, 0, 0);
         this.materialUp.apply();
         this.quad.display();
    this.scene.popMatrix();


    this.scene.popMatrix();
}

	
	
}