
/**
 * MyCylinder
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyCylinder extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
	    this.slices = slices;
		this.stacks = stacks;

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


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};