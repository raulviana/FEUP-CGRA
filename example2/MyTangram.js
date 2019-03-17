/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);

		this.scene.initMaterials(); 
		
        this.diamond = new MyDiamond(this.scene);
        this.diamond.initBuffers();
        this.triangle = new MyTriangle(this.scene);
        this.paralel = new MyParalelo(this.scene);
        this.littletriangle = new MyLittleTriangle(this.scene);
        this.littletriangle2 = new MyLittleTriangle(this.scene);
        this.bigtriangle = new MyBigTriangle(this.scene);
        this.bigtriangle2 = new MyBigTriangle(this.scene);

        

       //Materials
        //red
		this.plexiRed = new CGFappearance(this.scene);
        this.plexiRed.setAmbient(179/255, 36/255, 0, 1.0);
        this.plexiRed.setDiffuse(64/255, 13/255, 0, 1.0);
        this.plexiRed.setSpecular(255/255, 51/255, 0, 1.0);
		this.plexiRed.setShininess(13.0);
  
        //green 
      	this.plexiGreen = new CGFappearance(this.scene);
        this.plexiGreen.setAmbient(0, 179/255, 0, 1.0);
        this.plexiGreen.setDiffuse(0, 51/255, 0, 1.0);
        this.plexiGreen.setSpecular(51/255, 255/255, 51/255, 1.0);
        this.plexiGreen.setShininess(13.0);

        //yellow
        this.plexiYellow = new CGFappearance(this.scene);
        this.plexiYellow.setAmbient(179/255, 179/255, 0, 1.0);
        this.plexiYellow.setDiffuse(70/255, 70/255, 0, 1.0);
        this.plexiYellow.setSpecular(255/255, 255/255, 0, 1.0);
		this.plexiYellow.setShininess(13.0);

		//blue
		this.plexiBlue = new CGFappearance(this.scene);
        this.plexiBlue.setAmbient(0, 107/255, 179/255, 1.0);
        this.plexiBlue.setDiffuse(0, 31/255, 51/255, 1.0);
        this.plexiBlue.setSpecular(0, 153/255, 255/255, 1.0);
		this.plexiBlue.setShininess(13.0);	

		//purple
		this.plexiPurple = new CGFappearance(this.scene);
        this.plexiPurple.setAmbient(138/255, 51/255, 138/255, 1.0);
        this.plexiPurple.setDiffuse(64/255, 39/255, 64/255, 1.0);
        this.plexiPurple.setSpecular(153/255, 21/255, 153/255, 1.0);
		this.plexiPurple.setShininess(13.0);

		//brown
		this.plexiBrown = new CGFappearance(this.scene);
        this.plexiBrown.setAmbient(204/255, 102/255, 0, 1.0);
        this.plexiBrown.setDiffuse(77/255, 39/255, 0, 1.0);
        this.plexiBrown.setSpecular(255/255, 53/255, 51/255, 1.0);
		this.plexiBrown.setShininess(13.0);

		//pink
		this.plexiPink = new CGFappearance(this.scene);
        this.plexiPink.setAmbient(204/255, 0, 204/255, 1.0);
        this.plexiPink.setDiffuse(77/225, 0, 77/255, 1.0);
        this.plexiPink.setSpecular(255/255, 153/255, 255/255, 1.0);
		this.plexiPink.setShininess(13.0);

		this.custom = new CGFappearance(this.scene);
		this.custom.setAmbient(...this.scene.hexToRgbA(this.scene.customMaterialValues['Ambient']));
        this.custom.setDiffuse(...this.scene.hexToRgbA(this.scene.customMaterialValues['Diffuse']));
        this.custom.setSpecular(...this.scene.hexToRgbA(this.scene.customMaterialValues['Specular']));
        this.custom.setShininess(this.scene.customMaterialValues['Shininess']);
		

        
                   
          //Diamond transformation matrixes
        this.ang2rad = Math.PI/180;
        this.R = [
		  Math.cos(this.ang2rad * -45), (-1 * Math.sin(this.ang2rad * -45)), 0, 0,
   	   	  Math.sin(this.ang2rad * -45), Math.cos(this.ang2rad * -45), 0, 0, 
		  0, 0, 1.0, 0,
		  0, 0, 0, 1.0
		]
        this.T = [
		   1.0,   0, 0, 0, 
		   0,   1.0, 0,   0, 
		   0,   0,   1.0, 0,
		   1.5,   0.5,   0,   1.0];
	}

    updateCustomMaterial() {
        this.custom.setAmbient(...this.scene.hexToRgbA(this.scene.customMaterialValues['Ambient']));
        this.custom.setDiffuse(...this.scene.hexToRgbA(this.scene.customMaterialValues['Diffuse']));
        this.custom.setSpecular(...this.scene.hexToRgbA(this.scene.customMaterialValues['Specular']));
        this.custom.setShininess(this.scene.customMaterialValues['Shininess']);
    };


    initNormalVizBuffers(){
        this.diamond.normals;
        this.triangle.normals;
        this.paralel.normals;
        this.littletriangle.normals;
        this.littletriangle2.normals;
        this.bigtriangle.normals;
        this.bigtriangle2.normals;
    }
    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.paralel.enableNormalViz();
        this.littletriangle.enableNormalViz();
        this.littletriangle2.enableNormalViz();
        this.bigtriangle.enableNormalViz();
        this.bigtriangle2.enableNormalViz();
    }
    disableNormalViz(){
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.paralel.disableNormalViz();
        this.littletriangle.disableNormalViz();
        this.littletriangle2.disableNormalViz();
        this.bigtriangle.disableNormalViz();
        this.bigtriangle2.disableNormalViz();
	}

	display(){

	    this.scene.pushMatrix();
        this.scene.translate(-3.4, 0, 0);
        this.scene.rotate(this.ang2rad * 135, 0, 0, 1);
        //if(this.checktriangle)
        this.plexiPink.apply();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(1, -1, 1);
        this.scene.translate(0, -0.7, 0);
        this.scene.rotate(this.ang2rad * 45, 0, 0, 1);
        //if(this.checkparalel) 
        this.plexiYellow.apply();
        this.paralel.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1);
        this.scene.translate(0.7, 0, 0);
        this.scene.rotate(this.ang2rad * -45, 0, 0, 1);
        //if(this.checklittletriangle) 
        this.plexiRed.apply();
        this.littletriangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1);
        this.scene.translate(0.7, -1.4, 0);
        this.scene.rotate(this.ang2rad * 135, 0, 0, 1);
        //if(this.checklittletriangle2) 
        this.plexiPurple.apply();
        this.littletriangle2.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(1, 1.1, 1);
        this.scene.translate(0, 0, 0);
        this.scene.rotate(this.ang2rad * 90, 0, 0, 1);
        //if(this.checkbigtriangle) 
        this.plexiBrown.apply();
        this.bigtriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1, 1.1, 1);
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(this.ang2rad * -90, 0, 0, 1);
        //if(this.checkbigtriangle2)
        this.plexiBlue.apply();
        this.bigtriangle2.display();
        this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.multMatrix(this.R);
       this.scene.multMatrix(this.T);
       //if(this.checksquare)
       //this.plexiGreen.apply();
       this.updateCustomMaterial();
       this.custom.apply();
       this.diamond.display();
       this.scene.popMatrix();
	}

}