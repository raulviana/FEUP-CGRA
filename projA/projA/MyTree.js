
/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyTree extends CGFobject {
	constructor(scene,trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
treeTopTexture) {
		super(scene);

		this.treeTop = new MyCone(scene, treeTopRadius, treeTopHeight, treeTopTexture);
        this.trunk = new MyCylinder(scene, trunkRadius, trunkHeight, trunkTexture);


        this.trunkmaterial = new CGFappearance(this.scene);
        this.trunkmaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.trunkmaterial.setDiffuse(0.85, 0.85, 0.85, 1);
        this.trunkmaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkmaterial.setShininess(10.0);


        this.toptrunkmaterial = new CGFappearance(this.scene);
        this.toptrunkmaterial.setAmbient(0.7, 0.7, 0.7, 1);
        this.toptrunkmaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.toptrunkmaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.toptrunkmaterial.setShininess(10.0);
}
 
	   display(){
	       //this.treeTop.topmaterial.apply();
	       //this.trunk.trunkmaterial.apply();
	       this.scene.pushMatrix();
	       this.scene.translate(0, this.trunkHeight, 0);
	       this.treeTop.display();
	       this.scene.popMatrix();
	       this.trunk.display();
	   }
}