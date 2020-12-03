class Materializer {
    constructor(target) {
        this.target = target
        this.activated = false
    };
    activate() {
        this.activated = true;
    };
    materialize() {
        if (this.activated === true) {
            return this.target;
        }
    }
}

let a = new Materializer('sebas')
//console.log(a)
console.log('1')

a.activate()

console.log('2')
console.log(a.activated)
console.log('3')
console.log(a.materialize())
