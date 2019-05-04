/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
			0.5, 0.5, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			0, 1,
			1, 1,
			0, 0,
			1, 0
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

		this.materialL = new CGFappearance(this.scene);
        this.materialL.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialL.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialL.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialL.setShininess(10.0);
        this.materialL.loadTexture('textures/siege_lf.tga');
        this.materialL.setTextureWrap('REPEAT', 'REPEAT');

        this.materialR = new CGFappearance(this.scene);
        this.materialR.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialR.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialR.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialR.setShininess(10.0);
        this.materialR.loadTexture('textures/siege_rf.tga');
        this.materialR.setTextureWrap('REPEAT', 'REPEAT');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTop.setShininess(10.0);
        this.materialTop.loadTexture('textures/siege_up.tga');
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBottom.setShininess(10.0);
        this.materialBottom.loadTexture('textures/siege_dn.tga');
        this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');

        this.materialFront = new CGFappearance(this.scene);
        this.materialFront.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialFront.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialFront.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialFront.setShininess(10.0);
        this.materialFront.loadTexture('textures/siege_ft.tga');
        this.materialFront.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialBack = new CGFappearance(this.scene);
        this.materialBack.setAmbient(0.9, 0.9, 0.9, 1);
        this.materialBack.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBack.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBack.setShininess(10.0);
        this.materialBack.loadTexture('textures/siege_bk.tga');
        this.materialBack.setTextureWrap('REPEAT', 'REPEAT');
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

    	
}

