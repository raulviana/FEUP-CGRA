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
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'checktriangle').name('Show Triangle');
        this.gui.add(this.scene, 'checksquare').name('Show Square');
        this.gui.add(this.scene, 'checkparalel').name('Show Paralel');
        this.gui.add(this.scene, 'checklittletriangle').name('Show Little Triangle');
        this.gui.add(this.scene, 'checkbigtriangle').name('Show Big Triangle');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}