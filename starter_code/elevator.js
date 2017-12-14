class Elevator {
  constructor(){
    this.direction = 'up';
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() { }
  stop() { }
  update() {
    this.log()
   }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
