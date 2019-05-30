/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 * @param x - Scale of triangle in X
 * @param y - Scale of triangle in Y
 */
class MyLeaf extends CGFobject {
	constructor(scene, x, y, coords) {
		super(scene);
		this.x = x;
		this.y = y;

		this.material = new CGFappearance(this.scene);
    	this.material.setDiffuse(0,227/255, 90/255,1);
    	this.material.setSpecular(0,72/255,0,1);
    	this.material.setShininess(15);
    

		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.vertices = [
		    0, 1*this.y, 0,	//0
			0, 0, 0,	//1
		    1*this.x, 0, 0,	//2
		];

		//reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
		];

		//Facing Z positive
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1
				
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
			0, 0,
			1, 0

		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the rectangle
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

	display(){
  	this.scene.pushMatrix();
  	this.material.apply();
  	super.display();
  	this.scene.popMatrix();
  }


}
      