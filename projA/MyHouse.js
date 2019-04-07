/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 **/

class MyHouse extends CGFobject {
	constructor(scene) {
        super(scene);
        
        var cubeTexture = 'nada';
        var columnTexture = 'nada';
        var ceilingTexture = 'nada';

        this.ceiling = new MyPyramid(5, 1);
        this.cube = new MyUnitCube(this);
        this.column = new MyPrism(this, 5, 1);
    }

display(){
    this.scene.pushMatrix();
			
		this.scene.scale(0.9, 1.2, 0.9);
		    this.cube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			//this.scene.translate(3.7, 0, 0.3);
			//this.scene.rotate();
			//this.scene.scale(1.1, 0.9, 1.1);
		    this.ceiling.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(1.1, 0, -1.1);
			//this.scene.rotate();
			//this.scene.scale(1, 1.1, 1);
		    this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
			this.scene.translate(-1.1, 0, -1.1);
			//this.scene.rotate();
			//this.scene.scale(1, 1.1, 1);
		    this.column.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(1.1, 0, 1.1);
			//this.scene.rotate();
			//this.scene.scale(1.1, 1.1, 1.1);
		    this.column.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
			this.scene.translate(-1.1, 0, 1.1);
			//this.scene.rotate();
			//this.scene.scale(1, 1.1, 1);
		    this.column.display();
		this.scene.popMatrix();
}

}
