var controllerKey = {
  //keyContolloler
  run: "off",
  flag: true,
  kyeCode: {
    enter:13,
    top:87,
    down:83,
    left:65,
    right:68
  },
  action:{},
  mesh:"",
  keyUp: function(){
    var self = this;
    document.onkeyup = function (e){
      if(!e) e = window.event;
      self.flag = true;
      self.run = "off";
      self.action.run.stop();
      self.action.stand.play();
    }
  },
  keydown: function(){
    var self = this;
    document.onkeydown = function (e){
      if(!e) e = window.event;
      console.log(e.which);
      switch (e.which){
        case self.kyeCode.top:
          self.action.stand.stop();
          self.action.run.play();
          self.run = "top";
          self.mesh.rotation.y = THREE.Math.degToRad(180);
          self.flag = false;
          break;
        case self.kyeCode.down:
          self.action.stand.stop();
          self.action.run.play();
          self.run = "bottom";
          self.mesh.rotation.y = THREE.Math.degToRad(0);
          self.flag = false;
          break;
        case self.kyeCode.right:
          self.action.stand.stop();
          self.action.run.play();
          self.run = "right";
          self.mesh.rotation.y = THREE.Math.degToRad(90);
          self.flag = false;
          break;
        case self.kyeCode.left:
          self.action.stand.stop();
          self.action.run.play();
          self.run = "left";
          self.mesh.rotation.y = THREE.Math.degToRad(-90);
          self.flag = false;
          break;
      }
    }
  }
};

// keyController.prototype.moveRun = function(mesh,run){
//   if(mesh && run == "bottom"){
//     mesh.position.z += 10;
//     camera.position.z += 10;
//   }else if(mesh && run == "top"){
//     mesh.position.z -= 10;
//     camera.position.z -= 10;
//   }else if(mesh && run == "right"){
//     mesh.position.x += 10;
//     camera.position.x += 10;
//   }else if(mesh && run == "left"){
//     mesh.position.x -= 10;
//     camera.position.x -= 10;
//   }
// };
