/**
 * MyTreeBranch
 * @constructor
 * @param scene - Reference to MyScene object
 **/

 class MyTreeBranch extends CGFobject {
	constructor(scene) {
		super(scene);

		this.treeBranch = new MyCylinder(scene, 4, 1);
        this.top = new MyQuad(scene);

        this.treeBranchmaterial = new CGFappearance(this.scene);
        this.treeBranchmaterial.setAmbient(0.2, 0.7, 0.2, 1);
        this.treeBranchmaterial.setDiffuse(0.2, 0.85, 0.25, 1);
        this.treeBranchmaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.treeBranchmaterial.setShininess(10.0);

		
        this.ang2rad = Math.PI/180;

}
 
	   display(){
	     
	       this.scene.pushMatrix();
	       this.treeBranchmaterial.apply();
	       this.scene.rotate(this.ang2rad * 90, 1, 0, 0);
	       this.scene.translate(0, 1, 0);
	       this.top.display;
	       this.scene.popMatrix();


	       this.scene.pushMatrix();
	       this.treeBranchmaterial.apply();
	       this.treeBranch.display();
	       this.scene.popMatrix();
	   }
 }
	 