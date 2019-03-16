/**
 * MyBigTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyBigTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
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

		this.tangram.normals = [
		    0, 0, 1, 
		    0, 0, 1, 
		    0, 0, 1, 
		    0, 0, -1, 
		    0, 0, -1, 
		    0, 0, -1
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}