"use strict";
class Entity {
    constructor(name) {
        this.name = name;
    }
}
const mover = {
    move() {
        console.log(`${this.name} moved`);
    },
};
const attacker = {
    attackDamage: 0,
    attack(targetEntity) {
        console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    },
};
const hasHealth = {
    health: 0,
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    },
};
class Characterr extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}
Object.assign(Characterr.prototype, mover);
Object.assign(Characterr.prototype, attacker);
Object.assign(Characterr.prototype, hasHealth);
class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}
Object.assign(Wall.prototype, hasHealth);
class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}
Object.assign(Turret.prototype, attacker);
const char = new Characterr("Shun", 15, 650);
const wall = new Wall("wall", 400);
const turret = new Turret("Turret", 3);
turret.attack(char);
char.move();
char.attack(wall);
