function world() {

    //grobal
    var scene = new THREE.Scene();
    var clock = new THREE.Clock();
    var camera = viewCamera.set();
    var webGLRenderer = viewRenderer.set();
    var mesh, mixer;
    var action = {};
    var logoAnim;
    var meshFlag = true;
    var twn;

    //light
    viewLight.set(scene);
    // background
    debug.statsInit();
    debug.datGuiInit();

    //mesh load
    modelMeshLoader.loadJson(scene,init);

    //init
    function init(){
      //grobal
      mesh = modelMeshLoader.mesh;
      //mesh.camera
      for(var i = 0;i < 5;i++){
        camera.lookAt(new THREE.Vector3(mesh[i].position.x, mesh[i].position.y, mesh[i].position.z));
      }
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 1000;
      animFunc1();
      animate();
    }

    // animationFrame
    function animate() {
        requestAnimationFrame(animate);
        TWEEN.update();
        render();
    }

    // render
    function render() {
        var delta = clock.getDelta();
        // logoAnimation();
        // mesh[0].rotation.x += 5;
        // debug update
        if(mesh[5] !== undefined && meshFlag == true){
          mesh[0].position.x = 400;
          mesh[1].position.x = 270;
          mesh[2].position.x = 110;
          mesh[3].position.x = 0;
          mesh[4].position.x = -100;
          mesh[5].position.x = -200;
          meshFlag = false;
        }
        console.log(mesh[0].position.x);
        debug.stats.update();
        // render set
        webGLRenderer.render(scene, camera);
    }
    var animFunc1 = function(){
      twn = new TWEEN.Tween({x : 400}).to({ x: 0 }, 1000).onUpdate(function() {
            mesh[0].position.x = this.x;
        });
        twn.start();
    };
};
window.onload = world;
