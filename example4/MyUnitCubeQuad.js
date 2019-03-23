/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 **/
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);

		this.quad = new MyQuad(this.scene);

		this.ang2rad = Math.PI/180;


	}

    
	display(){
        
        //sides
         this.scene.pushMatrix();
         this.scene.translate(0, 0, 0.5);
          
         this.quad.materialSide.apply();
        this.quad.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(0.5, 0, 0);
         this.scene.rotate(90 * this.ang2rad, 0, 1, 0);
           this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
       
         this.quad.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(-0.5, 0, 0);
         this.scene.rotate(-90 * this.ang2rad, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();

         this.scene.pushMatrix();
         this.scene.translate(0, 0, -0.5);
         this.scene.rotate(180 * this.ang2rad, 0, 1, 0);
         this.quad.display();
         this.scene.popMatrix();


       //top
         this.scene.pushMatrix();
         this.scene.translate(0, 0.5, 0);
         this.scene.rotate(-90 * this.ang2rad, 1, 0, 0);
         this.quad.materialTop.apply();
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.quad.display();
         this.scene.popMatrix();

       //down
         this.scene.pushMatrix();
         this.scene.translate(0, -0.5, 0);
         this.scene.rotate(90 * this.ang2rad, 1, 0, 0);
         this.quad.materialBottom.apply();
         this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
         this.quad.display();
         this.scene.popMatrix();

         

		
	}
	}