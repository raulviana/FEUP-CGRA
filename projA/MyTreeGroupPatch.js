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
			this.scene.translate(6.7, 0, -0.1);
			//this.scene.rotate();
			this.scene.scale(0.9, 1.2, 0.9);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(3.7, 0, 0.3);
			//this.scene.rotate();
			this.scene.scale(1.1, 0.9, 1.1);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(0.3, 0, -0.8);
			//this.scene.rotate();
			this.scene.scale(1, 1.1, 1);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(7, 0, -4.7);
			//this.scene.rotate();
			this.scene.scale(1.1, 1.1, 1.1);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(4.1, 0, -4.1);
			//this.scene.rotate();
			this.scene.scale(0.8, 0.9, 0.8);
		    this.tree.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(0.2, 0, -4.7);
			//this.scene.rotate();
			this.scene.scale(1, 1.1, 1);
		    this.tree.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(6.6, 0, 4.4);
        //this.scene.rotate();
        this.scene.scale(1.1, 1.1, 1.1);
        this.tree.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
        this.scene.translate(4, 0, 4.1);
        //this.scene.rotate();
        this.scene.scale(0.8, 0.9, 0.8);
        this.tree.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
        this.scene.translate(0, 0, 4.1);
        //this.scene.rotate();
        this.scene.scale(1, 1.1, 1);
        this.tree.display();
    this.scene.popMatrix();
}

}
