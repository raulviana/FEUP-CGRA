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
|   Bird   |
| W  | accelerate   |
| S  | brake  |
|  A | turn left  |
|  D |  turn right |
|  P |  dird dive (to pick up stick - not implemented) |
|  Scene |
|  R |  reset scene |
|  L | generate lightning  |

 


