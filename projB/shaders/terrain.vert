
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;
uniform sampler2D uSampler;
uniform sampler2D uSampler3;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;

	offset=vec3(0.0, 0.0, texture2D(uSampler2, vec2(0.0,0.0)+vTextureCoord).g * 8.0);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

