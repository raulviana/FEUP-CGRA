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

		this.cords = [
		   0, 1, 
		   1, 0, 
		   1, 1,

		   0, 1, 
		   1, 0, 
		   1, 1
		]
	}

	display(){


	    this.scene.pushMatrix();
        this.scene.translate(-3.4, 0, 0);
        this.scene.rotate(this.ang2rad * 135, 0, 0, 1);
        this.triangle.material.apply();
        //if(this.checktriangle)
        this.triangle.display();
        this.scene.popMatrix();
        



        this.scene.pushMatrix();
       this.scene.translate(0, 0.7, 0);
        this.scene.rotate(this.ang2rad * -45, 0, 0, 1);
        //if(this.checkparalel) 
        this.cords = [
        130/512, 385/512, 
            255/512, 511/512,
            381/512, 385/512,  
           255/512, 511/512,
           381/512, 385/512,
            511/512, 511/512,
            
            130/512, 385/512, 
           255/512, 511/512,
            381/512, 385/512,  
            255/512, 511/512,
            381/512, 385/512,
           511/512, 511/512
           ]
           this.paralel.updateTexCoords(this.cords);
       this.paralel.material.apply();
      
        this.paralel.display();
        this.scene.popMatrix(); 
        


        
        this.scene.pushMatrix();
        this.scene.scale(1, 1, 1);
        this.scene.translate(0.7, 0, 0);
        this.scene.rotate(this.ang2rad * -45, 0, 0, 1);
        //if(this.checklittletriangle) 
        this.cords = [
            1/512, 1/512,
            126/512, 126/512, 
            1/512, 253/512,
            1/512, 1/512,
            126/512, 126/512, 
            1/512, 253/512
        ]
        this.littletriangle.updateTexCoords(this.cords);
        this.littletriangle.material.apply();
        this.littletriangle.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.scale(1, 1, 1);
        this.scene.translate(0.7, -1.4, 0);
        this.scene.rotate(this.ang2rad * 135, 0, 0, 1);
        //if(this.checklittletriangle2) 
        this.cords = [
            256/512, 256/512,
            128/512, 384/512, 
            384/512, 384/512,
            256/512, 256/512,
            128/512, 384/512, 
            384/512, 384/512
        ]
        this.littletriangle2.updateTexCoords(this.cords);
        this.littletriangle2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1, 1.05, 1);
        this.scene.translate(0, 0, 0);
        this.scene.rotate(this.ang2rad * 90, 0, 0, 1);
        //if(this.checkbigtriangle) 
        this.cords = [
            1/512, 1/512,
            256/512, 256/512, 
            511/512, 1/512,
            1/512, 1/512,
            256/512, 256/512, 
            511/512, 1/512
        ]
        this.bigtriangle.updateTexCoords(this.cords);
        this.bigtriangle.display();
        this.scene.popMatrix();

         this.scene.pushMatrix();
        this.scene.scale(1, 1.05, 1);
        this.scene.translate(1.4, 0, 0);
        this.scene.rotate(this.ang2rad * -90, 0, 0, 1);
        //if(this.checkbigtriangle2) 
        this.cords = [
            511/512, 511/512,
            256/512, 256/512, 
            511/512, 1/512,
            511/512, 511/512,
            256/512, 256/512, 
            511/512, 1/512
        ]
        this.bigtriangle2.updateTexCoords(this.cords);
        this.bigtriangle2.material.apply();
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