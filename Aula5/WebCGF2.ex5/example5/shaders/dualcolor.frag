#ifdef GL_ES
precision highp float;
#endif

varying vec3 position;

void main() {
	if (position.y >= 0.5){
		gl_FragColor.rgb =  vec3(1.0, 1.0, 0);
		gl_FragColor.a = 1.0;
	}
	else{
		gl_FragColor.rgb = vec3(0, 0, 1.0);
		gl_FragColor.a = 1.0;
	}
}