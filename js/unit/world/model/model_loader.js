var modelMeshLoader = {
  loader: new THREE.JSONLoader(),
  mesh: "",
  mixer: "",
  action: {},
  texLoader: new THREE.TextureLoader(),
  loadJson:function(scene,callback){
    var self = this;
    this.loader.load('json/kizuna/kizunaAi.json', function (geometry, mat) {
      
        mat[0] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/eye.png"), skinning: true});
        mat[1] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/bottoms.png"), skinning: true});
        mat[2] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/hair1.png"), skinning: true});
        mat[3] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/bottoms.png"), skinning: true});
        mat[4] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/tops.png"), skinning: true});
        mat[5] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/hair2.png"), skinning: true});
        mat[6] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/face.png"), skinning: true});
        mat[7] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/face.png"), skinning: true});
        mat[8] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/face.png"), skinning: true});
        mat[9] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/face.png"), skinning: true});
        mat[10] = new THREE.MeshBasicMaterial({map:self.texLoader.load("json/kizuna/eye2.png"), skinning: true});
        mat[10].transparent = true;

        self.mesh = new THREE.SkinnedMesh(geometry, mat);
        self.mesh.position.set(0, 0, 0);
        self.mesh.scale.set(120, 120, 120);
        self.mesh.rotation.y = THREE.Math.degToRad(180);
        scene.add(self.mesh);

        // action setting
        self.mixer = new THREE.AnimationMixer(self.mesh);
        self.action.stand = self.mixer.clipAction(geometry.animations[3]).setEffectiveWeight(10);
        self.action.run = self.mixer.clipAction(geometry.animations[1]).setEffectiveWeight(10);

        callback();
      }, 'json');
  }
};
