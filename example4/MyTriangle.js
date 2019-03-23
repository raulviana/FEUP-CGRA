/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */

 class MyTriangle extends CGFobject {
    constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 1, 0,	//0
			-1, -1, 0,	//1
			1, -1, 0,	//2
			//Duplicating vertices
			-1, 1, 0,	//
			-1, -1, 0,	//
			1, -1, 0,	//
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

		 this.texCoords = [
            1/512, 255/512,
            1/512, 512/512, 
            254/512, 512/512, 
            1/512, 255/512,
            1/512, 512/512, 
            254/512, 512/512
        ];

        
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
}