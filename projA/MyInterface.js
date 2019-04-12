/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        this.gui.add(this.scene, 'texture').name("Display Textures");
        this.gui.add(this.scene, 'daylight').name("Toggle Day/Night");
        var obj = this;

        return true;
    }
}