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
        this.plane = new Plane(this, 32);
        this.bird = new MyBird(this);
        
        //shaders
        this.shaders = new CGFshader(this.gl, 
        "./shaders/bird.vert", "./shaders/bird.frag");

        this.shaders.setUniformsValues({ timeFactor: 0 });

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

        //Apply default appearance
        this.setDefaultAppearance();

       

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();
		
		// activate selected shader
		//this.setActiveShader(this.shaders);
        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.bird.display();
        this.popMatrix();
       // this.setActiveShader(this.defaultShader);
        // ---- END Primitive drawing section

       
    }
}