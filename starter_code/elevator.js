class Elevator {
  constructor(){
    this.direction = 'up';
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }
  start() {
   setInterval(() => this.update(), 1000); }
  stop() { }
  update() {
    this.log();
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() {
    if ((this.floor + 1) < this.MAXFLOOR) {
        this.floor += 1;
      } else console.log("THERE'S NO 11 FLOOR");
    }
  floorDown() {
    if (this.floor - 1 < 0) console.log("YOU'RE IN THE BASEMENT FLOOR");
  }else {
        this.floor -= 1;
      };

  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
