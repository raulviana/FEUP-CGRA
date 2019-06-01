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
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyTerrain(this, 60);
        this.bird = new MyBird(this);
        this.house = new MyHouse(this);
        this.landscape = new MyCubeMap(this);
        this.treeBranch = new MyTreeBranch(this);
        this.tree1 = new MyLSPlant(this); //LSystems
        this.tree2 = new MyLSPlant(this);
        this.lightning = new MyLightning(this);
        
        //textures and materials
        this.appearance = new CGFappearance(this);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(120);


        this.textureTerrain = new CGFtexture(this, "./images/terrain.jpg");
        this.appearance.setTexture(this.textureTerrain);
        this.appearance.setTextureWrap('REPEAT', 'REPEAT');
        this.textureMap = new CGFtexture(this, "./images/heightmap.jpg");
        this.textureAltimetry = new CGFtexture(this, "./images/altimetry.png");

        //shaders
        this.shaders = new CGFshader(this.gl, 
        "./shaders/terrain.vert", "./shaders/terrain.frag");
        this.shaders.setUniformsValues({uSampler2:1});
        this.shaders.setUniformsValues({uSampler: 1});
        

        this.setUpdatePeriod(50);
        this.v = 0.1;

        //Objects connected to MyInterface
       this.scaleFactor = 0.4;
       this.speedFactor = 1.0;

       //LSystems
       	//tree
        this.treeAngle = 30.0;
        this.treeIterations = 4;
        this.treeScaleFactor = 1;
        this.treeAxiom = "X";
        this.treeRuleF = "F";
        this.treeRuleX = "F[-X][X]F[-X]+FX";
        this.treeRuleX1 = "F[-X][X]+X";
        this.treeRuleX2 = "F[+X]-X";
        this.treeRuleX3 = "F[/X][X]F[##X]+X";
        this.treeRuleX4 = "F[#X][X]/X";
        this.treeRuleX5 = "F[/X]#X";
        this.treeRuleX6 = "F[^X][X]F[&X]^X";
        this.treeRuleX7 = "F[^X]&X";
        this.treeRuleX8 = "F[&X]^X"; 
        //lightning
        this.lightningAngle = 25.0;
        this.lightningIterations = 3;
        this.lightningScaleFactor = 0.5;
        this.lightningAxiom = "X";
        this.lightningRuleF = "FF";
        this.lightningRuleX = "FFFF[F-X][F-X]F[XF]+FX[-FX]F[X]-FX";
        this.lightningRuleX1 = "FFFF[-X][X]+X[F-X][FX]+X";
        this.lightningRuleX2 = "FFFF[+X]FX[FX]-X";
        this.lightningRuleX3 = "FFFF[+X][X]F[X]XF[+X]F[X]F[-X]FX";
        this.lightningRuleX4 = "FFFF[-XF][X]XF[X][FX]+FX";
        this.lightningRuleX5 = "FFFF[+X]X[F-X][X]FX";
        this.lightningRuleX6 = "FFFF[X][FX]F+X[FX]F[X]F[-X]FX";
        this.lightningRuleX7 = "FFFF[+X]FX[FX]F[X]F[X]-FX";
        this.lightningRuleX8 = "FFFF[-X]XF[X]F+FX";

        //ligthning position
        this.maxX = Math.floor((Math.random() * 25) -10);
        this.maxZ = Math.floor((Math.random() * 40) -20);
        this.rot = Math.floor((Math.random() * 90) -45);
        //lightning animation
        this.showLightning = false;
        this.initTime = 0;
		//lightning material
		this.material = new CGFappearance(this);
        this.material.setAmbient(1.0, 0.8, 1.0, 1.0);
        this.material.setDiffuse(1.0, 0.8, 1.0, 1.0);
        this.material.setSpecular(0.5, 0.5, 0.5, 1.0);
        this.material.setShininess(10.0);

     
        this.doGenerate = function () {
            this.tree1.generate(
                this.treeAxiom,
                {
                    "F": [this.treeRuleF],
                    "X": [this.treeRuleX, 
                          this.treeRuleX1, 
                          this.treeRuleX2,
                          this.treeRuleX3,
                          this.treeRuleX4,
                          this.treeRuleX5,
                          this.treeRuleX6,
                          this.treeRuleX7,
                          this.treeRuleX8]
                 },
                this.treeAngle,
                this.treeIterations,
                this.treeScaleFactor
            );
             this.tree2.generate(
                this.treeAxiom,
                {
                    "F": [this.treeRuleF],
                    "X": [this.treeRuleX, 
                          this.treeRuleX1, 
                          this.treeRuleX2,
                          this.treeRuleX3,
                          this.treeRuleX4,
                          this.treeRuleX5,
                          this.treeRuleX6,
                          this.treeRuleX7,
                          this.treeRuleX8]
                 },
                this.treeAngle,
                this.treeIterations,
                this.treeScaleFactor
            );

            this.lightning.generate(
                  this.lightningAxiom,
                  {
                  	"F": [this.lightningRuleF],
                  	"X": [this.lightningRuleX,
                  	      this.lightningRuleX1, 
                          this.lightningRuleX2,
                          this.lightningRuleX3,
                          this.lightningRuleX4,
                          this.lightningRuleX5,
                          this.lightningRuleX6,
                          this.lightningRuleX7,
                          this.lightningRuleX8]
                  },
                  this.lightningAngle,
                  this.lightningIterations,
                  this.lightningScaleFactor
             );
        }
        this.doGenerate();
    }


    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[1].setPosition(-15, 15, 5, 1);
        this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
        this.lights[1].enable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(-50, 25, 30), vec3.fromValues(0, 10, 5));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys(t) {
var text="Keys pressed: ";
var keysPressed=false;
// Check for key codes e.g. in ​ https://keycode.info/
if (this.gui.isKeyPressed("KeyW")) {
this.bird.accelerate(this.v);
text+=" W ";
keysPressed=true;
}
if (this.gui.isKeyPressed("KeyS")){
this.bird.accelerate(-this.v);
text+=" S ";
keysPressed=true;
}
if (this.gui.isKeyPressed("KeyA")) {
this.bird.turn(this.v);
text+=" A ";
keysPressed=true;
}
if (this.gui.isKeyPressed("KeyD")){
this.bird.turn(-this.v);
text+=" D ";
keysPressed=true;
}
if (this.gui.isKeyPressed("KeyR")){
this.bird.reset();
text+=" R ";
keysPressed=true;
}
if(this.gui.isKeyPressed("KeyL")){
this.lightning.startAnimation(t, this.lightningAxiom);
this.initTime = t;
this.showLightning = true;
text+=" L ";
keysPressed=true;
}

if (keysPressed) console.log(text);
}
    
    update(t){
		this.bird.update(t / 500 % 1000);
		this.checkKeys(t);
		if(this.showLightning == true){
		this.lightning.update(t);
		}
		if(t - this.initTime > 800 && this.showLightning == true){
			this.showLightning = false;
			this.maxX = Math.floor((Math.random() * 25) -10);
            this.maxZ = Math.floor((Math.random() * 40) -20);
            this.rot = Math.floor((Math.random() * 90) -45);
		}
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
        
        // aplly main appearance (including texture in default texture unit 0)
		this.appearance.apply();
        //Apply default appearance

        this.setDefaultAppearance();
        this.setActiveShader(this.shaders);
        this.pushMatrix();
        this.textureMap.bind(1);
        this.textureAltimetry.bind(2);

       

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.translate(0, 0, -1);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();

		this.setActiveShader(this.defaultShader); 

		this.pushMatrix();
        this.house.display();
        this.popMatrix();
        
        this.pushMatrix();
        this.bird.display();
        this.popMatrix();

        this.pushMatrix();
        this.landscape.display();
        this.popMatrix();



		//trees
		this.pushMatrix();
		this.scale(2, 1, 2);


        this.pushMatrix();
        this.translate(8, 2, -4);
        this.rotate(this.ang2rad * 25, 0, 1, 0);
        this.tree1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(6, 2, -2);
        this.rotate(this.ang2rad * 40, 0, 1, 0);
        this.tree2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(9, 2, -1);
        this.rotate(this.ang2rad * 60, 0, 1, 0);
        this.tree1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(7.5, 2, 2);
        this.rotate(this.ang2rad * 950, 0, 1, 0);
        this.tree2.display();
        this.popMatrix();
        this.popMatrix();

        //lightning
        if(this.showLightning == true){
        this.pushMatrix();
        
        this.translate(this.maxX, 20, this.maxZ);
        this.rotate(this.ang2rad * 180 , 1, 0, 0);
        this.rotate(this.ang2rad * 220, 0, 1, 0);
        this.rotate(this.ang2rad * this.rot, 0, 0, 1);
        this.material.apply();
        this.lightning.display();
        this.popMatrix();
        }

		//tree branch
        this.pushMatrix();
      //  this.scale(20, 20, 20);
        
        this.treeBranch.display();
        this.popMatrix();

        this.popMatrix();  
       
        // ---- END Primitive drawing section

       
    }
}