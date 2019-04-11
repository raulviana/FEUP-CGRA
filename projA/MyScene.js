/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        this.ang2rad = Math.PI/180;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        this.treeRow = new MyTreeRowPatch(this);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.house = new MyHouse(this);
        this.mountain1 = new MyVoxelHill(this, 4);
        this.mountain2 = new MyVoxelHill(this, 8);
        this.mountain3 = new MyVoxelHill(this, 8);
        this.mountain4 = new MyVoxelHill(this, 12);
        this.cubemap = new MyCubeMap(this);
        
        
        //Objects connected to MyInterface
        this.texture = true;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(200, 200, 200), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

         
            //this.cubemap.enableNormalViz();
        if(this.texture) this.enableTextures(true);
        else this.enableTextures(false);

       this.pushMatrix();
       this.translate(-30, 0, -30);
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * -20, 0, 1, 0);
       this.treeRow.display();
       this.popMatrix();

       this.pushMatrix();
       this.scale(1.3, 1.3, 1.3);
       this.rotate(this.ang2rad * 85, 0, 1, 0);
       this.house.display();
       this.popMatrix();
        
       this.pushMatrix();
       this.translate(-15, 0, 50)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * -20, 0, 1, 0);
       this.treeRow.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(-25, 0, 40)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 95, 0, 1, 0);
       this.treeRow.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(-13, 0, 45)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 92, 0, 1, 0);
       this.treeRow.display();  
       this.popMatrix();
       
       this.pushMatrix();
       this.translate(35, 0, -20)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 92, 0, 1, 0);
       this.treeGroup.display();  
       this.popMatrix();

        
       this.pushMatrix();
       this.translate(85, 0, 20)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 92, 0, 1, 0);
       this.treeGroup.display();  
       this.popMatrix();

        
       this.pushMatrix();
       this.translate(15, 0, 45)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 70, 0, 1, 0);
       this.treeGroup.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(55, 0, 55)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 55, 0, 1, 0);
       this.treeGroup.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(-40, 0, -55)
       this.rotate(this.ang2rad * 3, 0, 1, 0);
       this.scale(3, 3, 3);
       this.mountain1.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(-20, 0, -70)
       this.rotate(this.ang2rad * 20, 0, 1, 0);
       this.scale(3, 3, 3);
       this.mountain2.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(-75, 0, -5);
       this.rotate(this.ang2rad * 12, 0, 1, 0);
       this.scale(3,3, 3);
       this.mountain3.display();  
       this.popMatrix();

       this.pushMatrix();
       this.translate(-95, 0, -50)
       this.rotate(this.ang2rad * 6, 0, 1, 0);
       this.scale(3, 3, 3);
       this.mountain4.display();  
       this.popMatrix();

        
       this.cubemap.display();
     
       
  

        // ---- END Primitive drawing section
    }
}