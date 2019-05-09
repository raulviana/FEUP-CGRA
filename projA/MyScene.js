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

        this.floorcords = [0, 0,
                      0, 15,
                      15, 0, 
                      15, 15
                      ];
        this.pitcords = [0, 0,
                      0, 1,
                      1, 0, 
                      1, 1];

       // this.floor = new MyQuad(this, this.floorcords);
        this.pitTop = new MyQuad(this, this.cords);

        this.floor = new Plane(this, 50, 0, 20, 0, 20);
        
        this.treeRow = new MyTreeRowPatch(this);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.house = new MyHouse(this);
        this.mountain1 = new MyVoxelHill(this, 4);
        this.mountain2 = new MyVoxelHill(this, 8);
        this.mountain3 = new MyVoxelHill(this, 8);
        this.mountain4 = new MyVoxelHill(this, 12);
        this.cubemap = new MyCubeMap(this);
        this.firePit = new MyCone(this, 8, 1);
        this.firePitStone = new MyPrism(this, 4, 1);
      
         
        //Objects connected to MyInterface
        this.texture = true;
        this.daylight = true;


        //Scene materials
        this.floorAppearance = new CGFappearance(this);
       // this.floor.updateTexCoords(this.floorcords);
    	this.floorAppearance.loadTexture('./textures/grass.jpg');
    	this.floorAppearance.setTextureWrap('REPEAT', 'REPEAT'); 
		this.floorAppearance.setDiffuse(0.8 , 0.8 , 0.8 , 1);
		this.floorAppearance.setSpecular(0.2 , 0.2 , 0.2 , 1);
		this.floorAppearance.setShininess(100);

		this.firePitAppearance = new CGFappearance(this);
    	this.firePitAppearance.loadTexture('./textures/lava.jpg');
    	this.firePitAppearance.setTextureWrap('REPEAT', 'REPEAT'); 
		this.firePitAppearance.setDiffuse(0.5 , 0.5 , 0.5 , 1);
		this.firePitAppearance.setSpecular(0.8 , 0.8 , 0.8 , 1);
		this.firePitAppearance.setShininess(500);

		this.fireStoneAppearance = new CGFappearance(this);
    	this.fireStoneAppearance.loadTexture('./textures/stone.jpg');
    	this.fireStoneAppearance.setTextureWrap('REPEAT', 'REPEAT'); 
		this.fireStoneAppearance.setDiffuse(0.6 , 0.6 , 0.6 , 1);
		this.fireStoneAppearance.setSpecular(0.1 , 0.1 , 0.1 , 1);
		this.fireStoneAppearance.setShininess(100);
    }

  
    
    initLights() {
        this.setGlobalAmbientLight(0.3, 0.3, 0.3, 1.0);
       
        //lua
        this.lights[0].setPosition(5, 100, 50, 1);
        this.lights[0].setDiffuse(20/255, 28/255, 31/255, 1.0);
        this.lights[0].setSpecular(20/255, 28/255, 31/255, 1.0);
        this.lights[0].disable();
        this.lights[0].setVisible(true);
        this.lights[0].setConstantAttenuation(0.3);
		this.lights[0].setLinearAttenuation(0.0);
		this.lights[0].setQuadraticAttenuation(0.0);
        this.lights[0].update();

        //sol
        this.lights[1].setPosition(5, 100, 50, 1);
        this.lights[1].setDiffuse(212/255, 244/255, 245/255, 1.0);
        this.lights[1].setSpecular(212/255, 244/255, 245/255, 1.0);
        this.lights[1].enable();
        this.lights[1].setVisible(true);
        this.lights[1].setConstantAttenuation(0.05);
		this.lights[1].setLinearAttenuation(0.0);
		this.lights[1].setQuadraticAttenuation(0.0);
        this.lights[1].update();

        //fogueira
        this.lights[2].setPosition(25, 2.8, 0, 1);
        this.lights[2].setAmbient(0.8, 0.8,0.8,1);
        this.lights[2].setDiffuse(255/255, 117/255, 26/255, 1.0)
        this.lights[2].setSpecular(255/255, 117/255, 26/255, 1.0);
        this.lights[2].disable();
        this.lights[2].setVisible(false);
        this.lights[2].setConstantAttenuation(0.0);
		this.lights[2].setLinearAttenuation(0.1);
		this.lights[2].setQuadraticAttenuation(0.0);
		this.lights[2].setSpotCutOff(360);
        this.lights[2].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(5, 10, 0));
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

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

         
        //options connected to Interface   
        if(this.texture) this.enableTextures(true);
        else this.enableTextures(false);

        if(this.daylight){
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].disable();
            this.lights[0].update();
            this.lights[1].update();
            this.lights[2].update();
        }
        else{
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].enable(); 
            this.lights[0].update();
            this.lights[1].update();
            this.lights[2].update();
        }
       

       //Objects

       this.pushMatrix();
       this.translate(25, 0, 0);
       this.scale(3, 0.8, 3);
       this.fireStoneAppearance.apply();
       this.firePitStone.display();
       this.popMatrix();
       
       this.pushMatrix();
       this.translate(25, 0.8, 0);
       this.scale(4.2, 1, 4.2);
       this.rotate(this.ang2rad * 45, 0, 1, 0);
       this.rotate(this.ang2rad * -90, 1, 0, 0);
      // this.firePitAppearance.apply();
       this.pitTop.display();
       this.popMatrix();

       this.pushMatrix();
       this.translate(25, 0.8, 0);
       this.scale(2, 2, 2);
       this.firePitAppearance.apply();
       this.firePit.display();
       this.popMatrix();

       this.pushMatrix();
       this.scale(350, 350, 350);
       this.rotate(this.ang2rad * -90, 1, 0, 0);
       this.floorAppearance.apply();
       this.floor.display();
       this.popMatrix();

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
       this.translate(35, 0, -17)
       this.scale(3, 3, 3);
       this.rotate(this.ang2rad * 92, 0, 1, 0);
       this.treeGroup.display();  
       this.popMatrix();

        
       this.pushMatrix();
       this.translate(70, 0, 20)
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
