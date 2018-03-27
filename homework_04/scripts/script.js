function Warrior(obj) {
    this.name = obj.name;
    this._attack = obj.attack;
    this._hitpoints = obj.hitpoints;
    let _totalHitpoints = obj.hitpoints;
}

Warrior.prototype = {
    getHitpoints: () => this._hitpoints,
    setHitpoints: (newHitpoints) => this._hitpoints = newHitpoints,
    getTotalHitpoints: () => _totalHitpoints,
    setTotalHitpoints: (newTotalHitpoints) => _totalHitpoints = newTotalHitpoints,
    getAttack: () => this._attack,
    setAttack: (newAttack) => this._attack = newAttack,
    fight: (rival) => {
        if (this !== rival && this.isAlive() && rival.isAlive()) {

        }
    },
    isAlive: () => this.getHitpoints() > 0

}

function Champion() {
    Warrior.apply(this, arguments);
    let _isBlock = false;
}

Champion.prototype = Object.create(Warrior.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = () => {
    if ((this._hitpoints + 5) <= _totalHitpoints)
        this._hitpoints += 5;
    else {
        this._hitpoints = this._hitpoints + (_totalHitpoints - this._hitpoints);
    }
}

Champion.prototype.defence = () => {
    _isBlock = true;
    this.setTotalHitpoints(this.getTotalHitpoints() + 1);
}

Champion.prototype.winPrize = () => {
    this.setAttack(this.getAttack() + 1);
}




function Monster() {
    Warrior.apply(this, arguments);
    let enrage = 0;
}

Monster.prototype = Object.create(Warrior.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.enrage = () => {
    isEnrage = 2;
    this.setAttack(this.getAttack() * 2);
}

Monster.prototype.fury = () => {
    if (this.getHitpoints() > 5) {
        this.setTotalHitpoints(this.getTotalHitpoints() - 5);
        this.setHitpoints(this.getHitpoints() - 5);
        this.setAttack(this.getAttack() + 2);
    } else {
        console.error("Not enough hitPoints to get fury");
    }
}

Monster.prototype.winPrize = (rival) => {
    this.setHitpoints(this.getHitpoints() + Math.floor(rival.getTotalHitpoints() * 0.25));
    this.setTotalHitpoints(this.getTotalHitpoints() + Math.floor(rival.getTotalHitpoints() * 0.1));
}