var viewCamera = {
  fov: 50,//画角。単位は度。小さいほど望遠（視野狭・遠近感小）、大きいほど広角（視野広・遠近感大）
  aspect: (window.innerWidth / window.innerHeight),//画面アスペクト比。たいてい画面幅÷画面高さで算出。
  near: 0.1,//この値より手前は描画されない。
  far: 20000,//この値より奥は描画されない。
  set: function(){
    var camera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.near, this.far);
    return camera;
  }
}
