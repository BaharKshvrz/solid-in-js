"use strict";
/*
   We separate the Bird class to two different classes.
*/
class FlyingBird {
    fly() {
        console.log("I can fly");
    }
}
class SwimmingBird {
    swim() {
        console.log("I can swim");
    }
}
class DuckAnimal extends FlyingBird {
    quack() {
        console.log("I can quack");
    }
}
class PenguinAnimal extends SwimmingBird {
}
function makeFlyingBirdFly(bird) {
    bird.fly();
}
function makeSwimmingBirdSwim(bird) {
    bird.swim();
}
const duckAnimal = new DuckAnimal();
const penguinAnimal = new PenguinAnimal();
makeFlyingBirdFly(duckAnimal);
makeSwimmingBirdSwim(penguinAnimal);
