var controllerCoordinate = {
  meshMove: function(mesh,coordinate){
    mesh.position.x += coordinate.x;
    mesh.position.z += coordinate.z;
    mesh.rotation.y = coordinate.rotation;
  },
  meshMoveArea: function(mesh){
    var minPos = 3200;
    if (mesh.position.x < -minPos) mesh.position.x = -minPos;
    if (mesh.position.x > minPos) mesh.position.x = minPos;
    if (mesh.position.z < -minPos) mesh.position.z = -minPos;
    if (mesh.position.z > minPos) mesh.position.z = minPos;
  },
  cameraMove: function(camera,coordinate){
    camera.position.x += coordinate.x;
    camera.position.z += coordinate.z;
  },
  cameraMoveArea: function(camera){
    var minPos = 3200;
    if (camera.position.x < -minPos) camera.position.x = -minPos;
    if (camera.position.x > minPos) camera.position.x = minPos;
    if (camera.position.z < -minPos) camera.position.z = -minPos;
    if (camera.position.z > minPos) camera.position.z = minPos;
  }
}
