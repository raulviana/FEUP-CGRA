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
       this.scaleFactor = 1.0;
       this.speedFactor = 1.0;

     
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys() {
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
if (keysPressed) console.log(text);

}
    
    update(t){
		this.bird.update(t / 500 % 1000);
		this.checkKeys();
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
        //this.textureAltimetry.bind(0);

       

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

        this.popMatrix();
       
        // ---- END Primitive drawing section

       
    }
}