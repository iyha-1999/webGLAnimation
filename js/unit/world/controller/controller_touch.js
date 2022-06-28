// mousedown: "mousedown",
// mouseup: "mouseup",
// mousemove: "mousemove",
var controllerTouch = {
  coordinate:{x: 0,z: 0,rotation:0},
  mousedown: "mousedown",
  mouseup: "mouseup",
  mousemove: "mousemove",
  getPos: function(event){
    if (event.screenX == undefined) {
        event.screenX = event.touches[0].screenX;
        event.screenY = event.touches[0].screenY;
    }
  },
  origin: {x: 0, z: 0, isPressed: false},
  set: function(action){
    var self = this;
    $(window).on(this.mousedown, function (event) {
        self.getPos(event);
        self.origin.x = event.screenX;
        self.origin.z = event.screenY;
        self.origin.isPressed = true;
    });
    $(window).on(this.mouseup, function (event) {
        self.origin.isPressed = false;
        action.run.stop();
        action.stand.play();
        self.coordinate.x = 0;
        self.coordinate.z = 0;
    });
    $(window).on(this.mousemove, function (event) {
        self.getPos(event);
        if (self.origin.isPressed) {
            action.stand.stop();
            action.run.play();
            self.coordinate.x = -(self.origin.x - event.screenX) / 20;
            self.coordinate.z = -(self.origin.z - event.screenY) / 20;

            if (self.coordinate.x < -20) self.coordinate.x = -20;
            else if (self.coordinate.x > 20) self.coordinate.x = 20;

            if (self.coordinate.z < -20) self.coordinate.z = -20;
            else if (self.coordinate.z > 20) self.coordinate.z = 20;

            self.coordinate.rotation = Math.atan2(self.coordinate.x, self.coordinate.z);//- 0.4*Math.PI;
        }
    });
  }
};
