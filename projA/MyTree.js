
/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyTree extends CGFobject {
	constructor(scene,trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture) {
		super(scene);

		this.treeTop = new MyCone(scene, 8, 1);
		this.trunk = new MyCylinder(scene, 8, 1);  

		this.woodMaterial = new CGFappearance(this.scene);
    	this.woodMaterial.setDiffuse(0.8,0.8,0.8,1);
    	this.woodMaterial.setSpecular(0.2,0.2,0.2,1);
    	this.woodMaterial.setShininess(15);
    	this.woodMaterial.loadTexture(trunkTexture);
        this.woodMaterial.setTextureWrap('REPEAT', 'REPEAT');

    	this.leafMaterial = new CGFappearance(this.scene);
    	this.leafMaterial.setDiffuse(0.9,0.9,0.9,1);
    	this.leafMaterial.setSpecular(0.1,0.1,0.1,1);
    	this.leafMaterial.setShininess(15);    
    	this.leafMaterial.loadTexture(treeTopTexture);
        this.leafMaterial.setTextureWrap('REPEAT', 'REPEAT');  
        
}
 
	   display(){
	       
	       this.scene.pushMatrix();
	          
	          this.scene.translate(0, 2.8, 0);
	          this.scene.scale(1.2, 1.7, 1.2);
	          this.leafMaterial.apply();
	          this.treeTop.display();
	       this.scene.popMatrix();

	       this.scene.pushMatrix();
	          
	          this.scene.translate(0, 2, 0);
	          this.scene.scale(1.5, 2, 1.5);
	          this.leafMaterial.apply();
	          this.treeTop.display();
	       this.scene.popMatrix();

	       this.scene.pushMatrix();
	          this.scene.scale(0.2, 2, 0.2);
	          this.woodMaterial.apply();
	          this.trunk.display();
	       this.scene.popMatrix();
	   }
}