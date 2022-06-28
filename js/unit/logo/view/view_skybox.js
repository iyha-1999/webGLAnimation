var viewSkybox = {
  urls: [
    "img/skybox/posx.jpg",
    "img/skybox/negx.jpg",
    "img/skybox/posy.jpg",
    "img/skybox/negy.jpg",
    "img/skybox/posz.jpg",
    "img/skybox/negz.jpg",
  ],
  set: function(scene){
    var material = this.createMaterial();
    this.createGeometry(material,scene);
  },
  createMaterial: function(){
    var texture = new THREE.CubeTextureLoader().load(this.urls);
    texture.format = THREE.RGBFormat;
    texture.mapping = THREE.CubeReflectionMapping;
    var cubeShader = THREE.ShaderLib["cube"];
    var shadeMat = new THREE.ShaderMaterial({
      fragmentShader: cubeShader.fragmentShader,
      vertexShader: cubeShader.vertexShader,
      uniforms: cubeShader.uniforms,
      depthWrite: false,
      side: THREE.BackSide,
    });
    shadeMat.uniforms["tCube"].value = texture;
    return shadeMat;
  },
  createGeometry: function(material,scene){
    var d = 7000;
    var geometry = new THREE.BoxGeometry(d, d, d);
    cubeMesh = new THREE.Mesh(geometry, material);
    cubeMesh.rotation.x = -0.5 * Math.PI;
    cubeMesh.position.x = 0;
    cubeMesh.position.y = 0;
    cubeMesh.position.z = 0;
    scene.add(cubeMesh);
  }
};
