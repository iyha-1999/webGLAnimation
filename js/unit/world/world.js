function world() {

    //grobal
    var scene = new THREE.Scene();
    var clock = new THREE.Clock();
    var camera = viewCamera.set();
    var webGLRenderer = viewRenderer.set();
    var mesh, mixer;
    var action = {};

    //light
    viewLight.set(scene);
    // skybox
    viewSkybox.set(scene);
    // background
    viewBackgroundObject.set(scene);
    debug.statsInit();
    debug.datGuiInit();

    //mesh load
    modelMeshLoader.loadJson(scene,init);

    //init
    function init(){
      //grobal
      mesh = modelMeshLoader.mesh;
      mixer = modelMeshLoader.mixer;
      action = modelMeshLoader.action;
      //init motion
      action.stand.play();
      //mesh.camera
      camera.lookAt(new THREE.Vector3(mesh.position.x, mesh.position.y, mesh.position.z));
      camera.position.x = 0;
      camera.position.y = 300;
      camera.position.z = 1000;
      // touch
      controllerTouch.set(action);
      // key
      controllerKey.action = action;
      controllerKey.mesh = mesh;
      controllerKey.keyUp();
      controllerKey.keydown();
      animate();
    }

    // animationFrame
    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    // render
    function render() {
        // ゲームパッドリストを取得する
        // var buttonList = {
        //   gamepad_list:"",
        //   set:function(){
        //     this.gamepad_list = navigator.getGamepads();
        //     this.Y = this.gamepad_list[1].buttons[3];
        //     this.B = this.gamepad_list[1].buttons[1];
        //     this.A = this.gamepad_list[1].buttons[0];
        //     this.X = this.gamepad_list[1].buttons[2];
        //     this.L1 = this.gamepad_list[1].buttons[4];
        //     this.L2 = this.gamepad_list[1].buttons[6];
        //     this.R1 = this.gamepad_list[1].buttons[5];
        //     this.R2 = this.gamepad_list[1].buttons[7];
        //     this.up = this.gamepad_list[1].buttons[12];
        //     this.down = this.gamepad_list[1].buttons[13];
        //     this.left = this.gamepad_list[1].buttons[14];
        //     this.right = this.gamepad_list[1].buttons[15];
        //     this.stickLeft = this.gamepad_list[1].axes[0];
        //     this.stickX = this.gamepad_list[1].axes[0];
        //     this.stickZ = this.gamepad_list[1].axes[1];
        //   },
        //   Y:"",
        //   B:"",
        //   A:"",
        //   X:"",
        //   L1:"",
        //   L2:"",
        //   R1:"",
        //   R2:"",
        //   up:"",
        //   down:"",
        //   left:"",
        //   right:"",
        //   stickLeft:"",
        //   stickX:"",//-1 左 1 右
        //   stickZ:""//-1 上　1 下
        // };
        // buttonList.set();
        // if(buttonList.stickLeft > 0){
        //   mesh.position.x += 5;
        //   action.stand.stop();
        //   action.run.play();
        // }else if(buttonList.stickX == 0){
        //   action.run.stop();
        //   action.stand.play();
        // }else if(buttonList.stickX < 0){
        //   mesh.position.x -= 5;
        //   action.stand.stop();
        //   action.run.play();
        // }

        var delta = clock.getDelta();
        // debug update
        debug.stats.update();
        // animation mixier update
        mixer.update(delta);
        // mesh coordinate move
        controllerCoordinate.meshMove(mesh,controllerTouch.coordinate);
        controllerCoordinate.meshMoveArea(mesh);
        controllerCoordinate.cameraMove(camera,controllerTouch.coordinate);
        controllerCoordinate.cameraMoveArea(camera);
        // render set
        webGLRenderer.render(scene, camera);
    }
};
window.onload = world;
