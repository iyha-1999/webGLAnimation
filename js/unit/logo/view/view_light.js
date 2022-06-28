var viewLight = {
  set: function(scene){
    this.spotLightSet(scene);
    this.ambientLightSet(scene);
  },
  spotLight: new THREE.DirectionalLight(0xffffff),
  spotLightSet:function(scene){
    this.spotLight.position.set(1,1,1).normalize();
    scene.add(this.spotLight);
  },
  ambientLight: new THREE.AmbientLight(0x555555),
  ambientLightSet:function(scene){
    scene.add(this.ambientLight);
  }
};
