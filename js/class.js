var scene,
    camera,
    spotLight,
    renderer,
    stats,
    delta,
    trackballControls;

//setup module
function Scene(){
  scene = new THREE.Scene();
}
//camera
function Camera(){
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 20000);
  //camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 描画範囲);
  camera.lookAt(scene.position);
}
//renderer
function Renderer(){
  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(window.innerWidth, window.innerHeight);
}
//spotLight
function SpotLight(){
  spotLight = new THREE.DirectionalLight(0xffffff);
  scene.add(spotLight);
}

//***********class Loader***********
//obj
var objFileLoader = function(name,scale,x,y,z){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath("obj/");
  mtlLoader.load(name + ".mtl",function(materials){
    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath("obj/");
    objLoader.load(name + ".obj",function(object){
      object.scale.set(scale,scale,scale);
      object.position.x = x;
      object.position.y = y;
      object.position.z = z;
      obj = object;
      scene.add(obj);
    });
  });
}
//json
//API_jsonLoderで読み込み
//引数の
var materialss = [];
var character;
var jsonFileLoader = function(){
  // モデル読み込み
  // function tgaLoad(){
  //   var texLoader = new THREE.TGALoader();
  //   materialss = [
  //     new THREE.MeshBasicMaterial({map:texLoader.load("json/miku/face_MikuAp.tga")}),
  //     new THREE.MeshBasicMaterial({map:texLoader.load("json/miku/hair_MikuAp.tga")}),
  //     new THREE.MeshBasicMaterial({map:texLoader.load("json/miku/body00_MikuAp.tga")}),
  //     new THREE.MeshBasicMaterial({map:texLoader.load("json/miku/body01_MikuAp.tga")}),
  //     new THREE.MeshBasicMaterial({map:texLoader.load("json/miku/body02_MikuAp.tga")}),
  //     new THREE.MeshBasicMaterial({map:texLoader.load("json/miku/wing_MikuAp.tga")})
  //   ];
  //   console.log(materialss);
  // };
  function jsonLoad(){
    var loader = new THREE.JSONLoader();
    loader.load('json/kizuna/kizunaAi.json', set);
  };
  function set(geometry, materials) {
    // var texLoader = new THREE.TGALoader();
    var texLoader = new THREE.TextureLoader();
      materials[0] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/eye.png")});
      materials[1] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/bottoms.png")});
      materials[2] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/hair1.png")});
      materials[3] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/bottoms.png")});
      materials[4] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/tops.png")});
      materials[5] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/hair2.png")});
      materials[6] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/face.png")});
      materials[7] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/face.png")});
      materials[8] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/face.png")});
      materials[9] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/face.png")});
      materials[10] = new THREE.MeshBasicMaterial({map:texLoader.load("json/kizuna/eye2.png")});
      materials[10].transparent = true;

    character = new THREE.SkinnedMesh(geometry,materials);
    // 位置とサイズを調整する
    character.position.set(0, 0, 0);
    character.scale.set(100, 100, 100);
    scene.add(character);

    var mixer = new THREE.AnimationMixer(character);
    var action = mixer.clipAction(geometry.animations[0]);
    action.play();
  };
  var promise = Promise.resolve();
  promise.then(jsonLoad);
};
function jdLoad(){
  var loader = new THREE.JDLoader();
     loader.load("json/ofuro/ofuro.jd",     // your model file
                 function (data)
                 {
                    //the loader create MeshPhongMaterial array by default,
                    //if you need to use ShaderMaterial you should use data.jd_materials
                    console.log(data);
                    console.log(data.materials);
                    var materials = data.materials;     // the global material array
                    var texLoader = new THREE.TGALoader();
                    materials[0] = new THREE.MeshBasicMaterial({map:texLoader.load("json/ofuro/chbody.tga")});
                    materials[1] = new THREE.MeshBasicMaterial({map:texLoader.load("json/ofuro/chface.tga")});
                    materials[2] = new THREE.MeshBasicMaterial({map:texLoader.load("json/ofuro/bath.tga")});
                    materials[3].transparent = true;
                    var geometry = data.geometries[0];  // the first mesh
                    var skinnedMesh = new THREE.SkinnedMesh(geometry, new THREE.MultiMaterial(materials));
                    mixer = new THREE.AnimationMixer(skinnedMesh);
                    action = mixer.clipAction(geometry.animations[0]);  // the first animation clip
                    action.play();
                    var modelScale = 7;
                    skinnedMesh.position.set(0, 0, 0);
                    skinnedMesh.scale.set(modelScale, modelScale, modelScale);
                    scene.add(skinnedMesh);
                    var geometryb = data.geometries[1];  // the first mesh
                    var skinnedMeshb = new THREE.SkinnedMesh(geometryb, new THREE.MultiMaterial(materials));
                    skinnedMeshb.position.set(0, 0, 0);
                    skinnedMeshb.scale.set(modelScale, modelScale, modelScale);
                    scene.add(skinnedMeshb);
                 });
};
//***********class Textuer***********
function createMesh(geom,color){
  var mat = new THREE.MeshPhongMaterial({color: color});
  var mesh = new THREE.Mesh(geom, mat);
  return mesh;
}
function createMeshTexture(geom,imageFile){
  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load(imageFile);
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  var mesh = new THREE.Mesh(geom,mat);
  return mesh;
}
//*****************class effect*****************
