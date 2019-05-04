
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

		this.woodMaterial = new CGFappearance(this.scene);
    	this.woodMaterial.setDiffuse(0.8,0.8,0.8,1);
    	this.woodMaterial.setSpecular(0.2,0.2,0.2,1);
    	this.woodMaterial.setShininess(15);
    	this.woodMaterial.apply();

		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var step_angle = 2*Math.PI/this.slices;
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
	}

    
}


