const VALID_COLORS = ['red', 'yellow', 'blue'];

class Ducktypium {
  constructor(color) {

    if (!VALID_COLORS.includes(color)) {
      throw new TypeError("Color must be red, yellow, or blue!");
    }

    this.color = color;
    this.calibrationSequence = []
  }

  //'red' || arg === 'blue' || arg === 'yellow'

  refract(refColor){
    if (this.color==="red" && refColor === "blue" || this.color==="blue" && refColor === "red"){
      return "purple"
    } else if (this.color==="red" && refColor === "yellow" || this.color==="yellow" && refColor === "red"){
      return "orange"
    }  else if (this.color==="yellow" && refColor === "blue" || this.color==="blue" && refColor === "yellow"){
      return "green"
    }   else if (this.color===refColor){
      return this.color}
  }

  calibrate(arrayOfNumber) {
    let currentArray = arrayOfNumber.sort();

    currentArray.forEach(item => {
      let multiply = item * 3;
      this.calibrationSequence.push(multiply);
    });
  }
}

const res = new Ducktypium('red')
res.refract('blue')
res.calibrate([])

console.log(res.calibrationSequence)