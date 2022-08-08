class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height);
    this.angle = angle;
    this.cannon_image = loadImage("../arremessador.png");

    // this.cannon_base = loadImage("assets/cannonBase.png");
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    if (keyIsDown(RIGHT_ARROW) && this.angle < 70) {
      this.angle += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -30) {
      this.angle -= 1;
    }

    Matter.Body.scale(this.body, 0.2, 0.2)

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    // image(this.cannon_base, 70, 20, 200, 200);
    noFill();
  }
}
