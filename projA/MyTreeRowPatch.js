/**
 * MyTreeRowatch
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyTreeRowPatch extends CGFobject {
	constructor(scene) {
		super(scene);


var trunkTexture = 'nada';
var treeTopTexture = 'nada';

	this.tree = new MyTree(scene,5,5,10,18, trunkTexture,treeTopTexture);
}

	display(){
		
		this.scene.pushMatrix();
			this.scene.translate(18, 0, 0);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(15, 0, 0);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(12, 0, 0);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(9, 0, 0);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(3, 0, 0);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(0, 0, 0);
		    this.tree.display();
		this.scene.popMatrix();
	}


}	