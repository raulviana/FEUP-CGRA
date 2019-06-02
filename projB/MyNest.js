/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 **/

 class MyNest extends CGFobject {
	constructor(scene) {
		super(scene);
        this.numBranchs = 12;
        this.branchs = [];

        for (var i = 0; i < this.numBranchs; i++){
            this.branchs.push(new MyTreeBranch(scene));
        }

        this.step = 360 / this.numBranchs;
		
        
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
	   	   
	  	   for(var i = 0; i < this.numBranchs; i++){
    	   	  
    	   	   this.scene.rotate(this.ang2rad * this.step, 0, 1, 0);
    	   	   this.scene.pushMatrix();
    	   	   this.scene.pushMatrix();
               this.scene.rotate(this.ang2rad * -70, 1, 0, 0);
               this.branchs[i].display();
			   this.scene.popMatrix();
	   	   }
	   	
	       
	   }
 }
	 