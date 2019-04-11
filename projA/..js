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
	var nivel = this.level;
	var posX = 0;
	var posY = nivel;
	var posZ = 0


	for(var i = 1; i <= this.level; i++){
		  posY = posY - 1;
		  posX = this.level*2 -1;
		for(var j = 1; j <= ((i * 2) - 1); j++){
            posX = posX +1;
            posX = nivel*2 -1;
                        
			for(var k = 1; k <= ((i *2) - 1); k++){
				
				this.scene.pushMatrix();
				this.scene.translate(posX, posY, posZ);
				this.cube.display();
				this.scene.popMatrix();

				posZ = posZ + 1;
			}
		}
	}



}


}