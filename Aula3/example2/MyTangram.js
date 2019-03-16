/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		
        this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.paralel = new MyParalelo(this.scene);
        this.littletriangle = new MyLittleTriangle(this.scene);
        this.littletriangle2 = new MyLittleTriangle(this.scene);
        this.bigtriangle = new MyBigTriangle(this.scene);
        this.bigtriangle2 = new MyBigTriangle(this.scene);

        this.normals = [
                 this.bigtriangle.normals
                   ]
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



	display(){

	    this.scene.pushMatrix();
        this.scene.translate(-3.4, 0, 0);
        this.scene.rotate(this.ang2rad * 135, 0, 0, 1);
        //if(this.checktriangle)
         this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(1, -1, 1);
        this.scene.translate(0, -0.7, 0);
        this.scene.rotate(this.ang2rad * 45, 0, 0, 1);
        //if(this.checkparalel) 
        this.paralel.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1);
        this.scene.translate(0.7, 0, 0);
        this.scene.rotate(this.ang2rad * -45, 0, 0, 1);
        //if(this.checklittletriangle) 
        this.littletriangle.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.scale(1, 1, 1);
        this.scene.translate(0.7, -1.4, 0);
        this.scene.rotate(this.ang2rad * 135, 0, 0, 1);
        //if(this.checklittletriangle2) 
        this.littletriangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1, 1.1, 1);
        this.scene.translate(0, 0, 0);
        this.scene.rotate(this.ang2rad * 90, 0, 0, 1);
        //if(this.checkbigtriangle) 
        this.bigtriangle.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.scale(1, 1.1, 1);
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(this.ang2rad * -90, 0, 0, 1);
        //if(this.checkbigtriangle2) 
        this.bigtriangle2.display();
        this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.multMatrix(this.R);
       this.scene.multMatrix(this.T);
       //if(this.checksquare)
        this.diamond.display();
       this.scene.popMatrix();

      
	}

}