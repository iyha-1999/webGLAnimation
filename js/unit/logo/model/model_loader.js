var modelMeshLoader = {
  loader: new THREE.JSONLoader(),
  mesh: "",
  texLoader: new THREE.TextureLoader(),
  loadJson:function(scene,callback){
    var self = this;
    this.loader.load('json/logo/impact.js', function (geometry, mat) {
        self.mesh = new THREE.SkinnedMesh(geometry, mat);
        self.mesh.position.set(0, 0, 0);
        self.mesh.scale.set(10, 10, 10);
        scene.add(self.mesh);
        callback();
      }, 'json');
  }
};
