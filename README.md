# CGRA
repository for the Computer Graphics course pratical classes exercises and projects

## Tools
JavaScript, WebGL, CGF

## Usage
To test the program you will need to setup a server.
This can be done in multiple different ways. The simpler and quicker is to use Python to host the server:
'''
python -m http.server 8080
'''
Just run it from the project directory.
Another option is to use a chrome extension *web server for chrome* if you're using this browser.

## Description

The project goal was to develop two basic scenes to apply theoretical concepts.  
Both have a terrain generated with a shader and two textures. 
The first has a mountain cottage, several trees, and three pyramids **generated programmatically**. 
The second one has the same cottage, but instead of the pyramids has a couple of trees and a bolt of lightning generated with **procedural modeling**, and a movable bird.

## Controls

Both scenes have GUI controls and the user can interact with the scene by:
Mouse movement - Move the user's POV
CTRL + Mouse Movement - Zoom in/out

In second assignment scene there's also some keyboard input controls:

|  Key | Function   |
|---|-----|
| W  | accelerate   |
| S  | brake  |
|  A | turn left  |
|  D |  turn right |
|  P |  dird dive (to pick up stick - not implemented) |
|  R |  reset scene |
|  L | generate lightning  |

 
## First assignment visuals

### Screenshots

![Screenshot 1 - nigth](https://github.com/raulviana/FEUP-CGRA/blob/master/screenshots/TG1_1.png)
![Screenshot 2 - day](https://github.com/raulviana/FEUP-CGRA/blob/master/screenshots/TG1_2.png)
![Screenshot 3 - no textures](https://github.com/raulviana/FEUP-CGRA/blob/master/screenshots/TG1_3.png)


## Second assignment visuals

### Screenshots

![Screenshot 1 - cottage and tree detail](https://github.com/raulviana/FEUP-CGRA/blob/master/screenshots/TG2_1.png)
![Screenshot 2 - general view](https://github.com/raulviana/FEUP-CGRA/blob/master/screenshots/TG2_2.png)
![Screenshot 3 - bird detail](https://github.com/raulviana/FEUP-CGRA/blob/master/screenshots/TG2_3.png)

### Video Demo
[Video Demo 1](https://youtu.be/YtD4dwaXr4k)
[Video Demo 2](https://youtu.be/pprtEyneYTg)



