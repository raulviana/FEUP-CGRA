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
			 //duplicating vertices
			 -2, 0, 0,	//
			 0, 2, 0,	//
			 2, 0, 0,	//
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0
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
            0, 0,
			0, 1,
			1, 0,
			0, 0,
			0, 1,
			1, 0
		]
		
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}