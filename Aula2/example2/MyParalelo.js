/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyParalelo extends CGFobject {
constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
			1, 1, 0,	//2
			2, 0, 0,	//3
			2, 1, 0,    //4
			3, 1, 0,    //5
			0, 0, 0,	//
			1, 0, 0,	//
			1, 1, 0,	//
			2, 0, 0,	//
			2, 1, 0,    //
			3, 1, 0     //
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 3,
			3, 4, 2,
			3, 5, 4,
			2, 1, 0,
			3, 1, 2,
			2, 4, 3, 
			4, 5, 3
		];

		this.normals = [
            0, 0, 1, 
            0, 0, 1, 
            0, 0, 1, 
            0, 0, 1, 
            0, 0, 1, 
            0, 0, 1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}