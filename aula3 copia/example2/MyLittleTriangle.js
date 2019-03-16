/**
 * MyLittleTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyLittleTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			 1, 0, 0,	//1
			 0, 1, 0,	//2
			 -1, 0, 0,	//
			 1, 0, 0,	//
			 0, 1, 0,	//
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0
		];

		this.normals = [
            0,0, 1, 
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