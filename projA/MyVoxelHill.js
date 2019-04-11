/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 * @param level - Number of levels
 **/
class MyVoxelHill extends CGFobject {
	constructor(scene, level) {
		super(scene);

		this.level = level;

		this.cube = new MyUnitCube(scene);
		
	}

display(){
	
	var posY = this.level;
	var correct = 0;

	
	this.scene.pushMatrix();
	this.scene.translate(-0.5, 0, -1.5);
	
	for(var i = 1; i <= this.level; i++){
		  posY = posY - 1;
		  var posX = (this.level -3) / 2;
		  correct++;
		for(var j = 1; j <= ((i * 2) - 1); j++){
            posX = posX +1;
            var posZ = (this.level -3) / 2;
                        
			for(var k = 1; k <= ((i *2) - 1); k++){
				
				if(((k == 1) || (j == 1)) ||
				     (k == ((i*2)-1) || (j == (i*2)-1))) {
				   	this.scene.pushMatrix();
				    this.scene.translate(-correct, 0, correct);
				    this.scene.translate(posX, posY, posZ);
				    this.cube.display();
				    this.scene.popMatrix();
				   }
     			posZ = posZ - 1;
			}
		}
	}
	this.scene.popMatrix();
}


}