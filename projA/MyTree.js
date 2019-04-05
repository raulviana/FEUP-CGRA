
/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyTree extends CGFobject {
	constructor(scene,trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture) {
		super(scene);

		this.treeTop1 = new MyCone(scene, 8, 1);
		this.treeTop2 = new MyCone(scene, 8, 1);
		this.trunk = new MyCylinder(scene, 8, 1);  

		this.woodMaterial = new CGFappearance(this.scene);
    	this.woodMaterial.setDiffuse(0.8,0.8,0.8,1);
    	this.woodMaterial.setSpecular(0.2,0.2,0.2,1);
    	this.woodMaterial.setShininess(15); 

    	this.leafMaterial = new CGFappearance(this.scene);
    	this.leafMaterial.setDiffuse(0.9,0.9,0.9,1);
    	this.leafMaterial.setSpecular(0.1,0.1,0.1,1);
    	this.leafMaterial.setShininess(15);      
        
}
 
	   display(){
	       
	       this.scene.pushMatrix();
	          
	          this.scene.translate(0, 2.6, 0);
	          this.scene.scale(1.1, 1.2, 1.1);
	          this.leafMaterial.apply();
	          this.treeTop1.display();
	       this.scene.popMatrix();

	       this.scene.pushMatrix();
	          
	          this.scene.translate(0, 2, 0);
	          this.scene.scale(1.3, 1.5, 1.3);
	          this.leafMaterial.apply();
	          this.treeTop2.display();
	       this.scene.popMatrix();

	       this.scene.pushMatrix();
	          this.scene.scale(0.2, 2, 0.2);
	          this.woodMaterial.apply();
	          this.trunk.display();
	       this.scene.popMatrix();
	   }
}