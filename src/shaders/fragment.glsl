uniform sampler2D sphereTexture;

varying vec2 vertexUV;
varying vec2 vertexNormal;

void main () {
    float intensity = 1.05 - dot(
        vertexNormal, vec3(0.0, 0.0, 1.0 ));
    vec3 atmosphere = vec3(1.0, 0.6, 1.0) *
    pow(intensity, 1.5);

    gl_FragColor =  vec4(atmosphere + 
    texture2D(sphereTexture, vertexUV).xyz, 1.0);
} 