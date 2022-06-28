var debug = {
  stats:"",
  statsInit: function(){
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.getElementById("Stats-output").appendChild(this.stats.domElement);
  },
  datGuiInit: function(){
    var controls = new function () {
        this.showHelper = false;
    };
    var gui = new dat.GUI();
    var state = this.state;
    gui.add(controls, 'showHelper', 0, 0.5).onChange(function (state) {
        helper.visible = state;
    });
  },
  trackballControls:"",
  trackBallControlsInit: function(camera,element){
    this.trackballControls = new THREE.TrackballControls(camera,element);
    this.trackballControls.rotateSpeed = 1.0;
    this.trackballControls.zoomSpeed = 1.0;
    this.trackballControls.panSpeed = 1.0;
  }
}
