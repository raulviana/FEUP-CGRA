/**
 * MyBigTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyBigTriangle extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			 0, 2, 0,	//1
			 2, 0, 0,	//2
			 //duplicting vertices
			 -2, 0, 0,	//
			 0, 2, 0,	//
			 2, 0, 0,	//
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1, 
			1, 2, 0
		];

		this.normals = [
		    0, 0, 1, 
		    0, 0, 1, 
		    0, 0, 1, 
		    0, 0, -1, 
		    0, 0, -1, 
		    0, 0, -1
		]

		this.texCords = [
            0, 1,
			1, 1,
			0, 0,
			 0, 1,
			1, 1,
			0, 0
		]
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.9, 0.9, 0.9, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/tangram-pattern.jpg');
        this.material.setTextureWrap('REPEAT', 'REPEAT');
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}