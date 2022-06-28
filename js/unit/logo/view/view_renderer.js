var viewRenderer = {
  webGLRenderer: new THREE.WebGLRenderer(),
  set: function(){
    this.webGLRenderer.setClearColor(new THREE.Color(0xEEEEEE));
    this.webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("WebGL-output").appendChild(this.webGLRenderer.domElement);
    return this.webGLRenderer;
  }
};
