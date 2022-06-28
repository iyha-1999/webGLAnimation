var viewBackgroundObject = {
  createMeshTexture: function(geometry,imageFile){
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load(imageFile);
    var mat = new THREE.MeshPhongMaterial();
    mat.map = texture;
    var backgroundMesh = new THREE.Mesh(geometry,mat);
    return backgroundMesh;
  },
  set: function(scene){
    var plane = this.createMeshTexture(new THREE.PlaneGeometry(7000,7000), "img/grass.jpg");
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);
  }
};
