#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;


void main() {

	
	vec4 color = texture2D(uSampler, vTextureCoord);
//	vec4 filter = texture2D(uSampler3,vec2(0.0, 0.0));

	
	gl_FragColor = color /*- filter*0.3*/;
}
