class Ninja {
    constructor(name,health=90,speed=3,strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} 10 health points added !!`);
    }
}