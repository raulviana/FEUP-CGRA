/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 **/

 class MyTreeBranch extends CGFobject {
	constructor(scene) {
		super(scene);

		this.treeBranch = new MyCylinder(scene, 8, 1);
        this.top = new MyCone(scene, 8, 1);

        this.treeBranchmaterial = new CGFappearance(this.scene);
        this.treeBranchmaterial.setAmbient(0.7, 0.5, 0.6, 1);
        this.treeBranchmaterial.setDiffuse(1.0, 0.9, 0.7, 1);
        this.treeBranchmaterial.setSpecular(0.3, 0.2, 0.2, 1);
        this.treeBranchmaterial.setShininess(10.0);
        this.treeBranchmaterial.loadTexture('./images/wood.jpg');
        this.treeBranchmaterial.setTextureWrap('REPEAT', 'REPEAT');

		
        this.ang2rad = Math.PI/180;

}
 
	   display(){
	   	   this.scene.pushMatrix();
	   	   this.scene.scale(0.2, 0.9, 0.2);

	       this.scene.pushMatrix();
	      
	       this.scene.translate(0, 1, 0);
	       this.scene.scale(1, 0.2, 1);
           this.treeBranchmaterial.apply();
	       this.top.display();
	       this.scene.popMatrix();

	       this.scene.pushMatrix();
	       this.scene.rotate(this.ang2rad * 180, 1, 0, 0);
	       this.scene.scale(1, 0.2, 1);
	       this.top.display();
	       this.scene.popMatrix();


           this.scene.pushMatrix();
	       this.treeBranch.display(); 
	       this.scene.popMatrix();

	       this.scene.popMatrix();
	   }
 }
	 