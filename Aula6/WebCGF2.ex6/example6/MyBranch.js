
/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyBranch extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
	    this.slices = slices;
		this.stacks = stacks;

		
		this.material = new CGFappearance(this.scene);
    	this.material.setDiffuse(128/255, 43/255, 0, 1);
    	this.material.setSpecular(14/255, 12/255, 11/255, 1);
    	this.material.setShininess(15);

		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];


		var step_angle = 2*Math.PI/this.
		slices;
		var stack_step = 1/this.stacks;

		for(var i = 0; i <= this.slices; ++i) {

			for(var j = 0; j <= this.stacks; ++j) {

				this.vertices.push(
					Math.sin(step_angle*i), j*stack_step, Math.cos(step_angle*i)
				);

				this.texCoords.push(
					i*1/this.slices, j*1/this.stacks
				);

				this.normals.push(
					Math.sin(step_angle*i), 0, Math.cos(step_angle*i)
				);

			}

		}

		for (var i = 0; i < this.slices; ++i) {
			for(var j = 0; j < this.stacks; ++j) {
				this.indices.push(
					(i+1)*(this.stacks+1) + j, i*(this.stacks+1) + j+1, i*(this.stacks+1) + j,
					i*(this.stacks+1) + j+1, (i+1)*(this.stacks+1) + j, (i+1)*(this.stacks+1) + j+1
				);
			}
		}


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};

  display(){
  	this.scene.pushMatrix();
  	this.scene.scale(0.06, 1, 0.06);
  	this.material.apply();
  	super.display();
  	this.scene.popMatrix();
  }
}


