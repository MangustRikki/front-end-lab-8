function assign(obj, ...arg) {
    let newObj = obj;
    for (let i = 0; i < arg.length; i++) {
        let nextObj = arg[i];
        let keysArr = Object.keys(nextObj);
        for (let index = 0; index < keysArr.length; index++) {
            let nextKey = keysArr[index];
            let isCorrectProp = Object.getOwnPropertyDescriptor(nextObj, keysArr[index]);
            if (isCorrectProp !== undefined) {
                newObj[nextKey] = nextObj[nextKey];
            }
        }
    }
    return newObj;
}

function Warrior(obj) {
    this.name = obj.name;
    this._attack = obj.attack;
    this._hitpoints = obj.hitpoints;
    this._totalHitpoints = obj.hitpoints;
}

Warrior.prototype = {
    getHitpoints: function() {
        return this._hitpoints;
    },
    setHitpoints: function(newHitpoints) { this._hitpoints = newHitpoints },
    getTotalHitpoints: function() { return _totalHitpoints },
    setTotalHitpoints: function(newTotalHitpoints) { _totalHitpoints = newTotalHitpoints },
    getAttack: function() { return this._attack },
    setAttack: function(newAttack) { this._attack = newAttack },
    getIsBlock: function() { return this._isBlock },
    fight: function(rival) {
        if (this !== rival && rival.isAlive()) {
            if (this.isEnrage) {
                this.enrageCount--;
                if (this.enrageCount === 0) {
                    this.isEnrage = false;
                }

            } else if (rival.isDefence) {
                rival.isDefence = false;
            } else if (this.getIsBlock()) {
                _isBlock = false;
            } else {
                rival.setHitpoints(rival.getHitpoints() - this.getAttack());
            }
            if (!rival.isAlive()) {
                this.getPrize(rival);
            }
        }
    },
    isAlive: function() { return this.getHitpoints() > 0 }

};

function Champion() {
    Warrior.apply(this, arguments);
    this._isBlock = false;
}

Champion.prototype = Object.create(Warrior.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function() {
    if ((this.getHitpoints() + 5) <= this.getHitpoints()) {
        this.setHitpoints(this.getHitpoints() + 5)
    } else {
        this.setHitpoints(this.getHitpoints() + (this.getTotalHitpoints - this.getHitpoints()));
    }
};

Champion.prototype.defence = function() {
    _isBlock = true;
    this.setTotalHitpoints(this.getTotalHitpoints() + 1);
};

Champion.prototype.winPrize = function() {
    this.setAttack(this.getAttack() + 1);
};

function Monster() {
    Warrior.apply(this, arguments);
    let isEnrage = false,
        enrageCount;
}

Monster.prototype = Object.create(Warrior.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.enrage = () => {
    let isEnrage = true,
        enrageCount = 2;
    this.setAttack(this.getAttack() * 2);
};

Monster.prototype.fury = () => {
    if (this.getHitpoints() > 5) {
        this.setTotalHitpoints(this.getTotalHitpoints() - 5);
        this.setHitpoints(this.getHitpoints() - 5);
        this.setAttack(this.getAttack() + 2);
    } else {
        console.error("Not enough hitPoints to get fury");
    }
};

Monster.prototype.winPrize = (rival) => {
    this.setHitpoints(this.getHitpoints() + Math.floor(rival.getTotalHitpoints() * 0.25));
    this.setTotalHitpoints(this.getTotalHitpoints() + Math.floor(rival.getTotalHitpoints() * 0.1));
};

function Warrior(obj) {
    this.name = obj.name;
    this._attack = obj.attack;
    this._hitpoints = obj.hitpoints;
    this._totalHitpoints = obj.hitpoints;
}

Warrior.prototype = {
    getHitpoints: function() { return this._hitpoints },
    setHitpoints: function(newHitpoints) { this._hitpoints = newHitpoints },
    getTotalHitpoints: function() { return _totalHitpoints },
    setTotalHitpoints: function(newTotalHitpoints) { _totalHitpoints = newTotalHitpoints },
    getAttack: function() { return this._attack },
    setAttack: function(newAttack) { this._attack = newAttack },
    getIsBlock: function() { return this._isBlock },
    setIsBlock: function(bool) { this._isBlock = bool },
    fight: function(rival) {
        debugger;
        if (this !== rival && rival.isAlive()) {
            if (this.isEnrage) {
                this.enrageCount--;
                if (this.enrageCount === 0) {
                    this.isEnrage = false;
                }

            } else if (rival.isDefence) {
                rival.isDefence = false;
            } else if (this.getIsBlock()) {
                _isBlock = false;
            } else {
                rival.setHitpoints(rival.getHitpoints() - this.getAttack());
            }
            if (!rival.isAlive()) {
                this.getPrize(rival);
            }
        }
    },
    isAlive: function() { return this.getHitpoints() > 0 }

};

function Champion() {
    Warrior.apply(this, arguments);
    let _isBlock = false;
}

Champion.prototype = Object.create(Warrior.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.fight = function() {
    Warrior.prototype.fight.apply(this, arguments);
};

Champion.prototype.heal = () => {
    if ((this.getHitpoints() + 5) <= this.getHitpoints()) {
        this.setHitpoints(this.getHitpoints() + 5)
    } else {
        this.setHitpoints(this.getHitpoints() + (this.getTotalHitpoints - this.getHitpoints()));
    }
};

Champion.prototype.defence = () => {
    _isBlock = true;
    this.setTotalHitpoints(this.getTotalHitpoints() + 1);
};

Champion.prototype.winPrize = () => {
    this.setAttack(this.getAttack() + 1);
};

function Monster() {
    Warrior.apply(this, arguments);
    this.isEnrage = false;
    this.enrageCount = 0;
}

Monster.prototype = Object.create(Warrior.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.enrage = function() {
    isEnrage = true;
    enrageCount = 2;
    this.setAttack(this.getAttack() * 2);
};

Monster.prototype.fury = function() {
    if (this.getHitpoints() > 5) {
        this.setTotalHitpoints(this.getTotalHitpoints() - 5);
        this.setHitpoints(this.getHitpoints() - 5);
        this.setAttack(this.getAttack() + 2);
    } else {
        console.error("Not enough hitPoints to get fury");
    }
};

Monster.prototype.winPrize = function(rival) {
    this.setHitpoints(this.getHitpoints() + Math.floor(rival.getTotalHitpoints() * 0.25));
    this.setTotalHitpoints(this.getTotalHitpoints() + Math.floor(rival.getTotalHitpoints() * 0.1));
};

var hunter = new Champion({ name: 'Rexxar', attack: 10, hitpoints: 60 });
var beast = new Monster({ name: 'King Krush', attack: 8, hitpoints: 80 });

hunter.fight(beast);
beast.getHitpoints(); // -> 70
beast.enrage();
hunter.fight(beast);
beast.getHitpoints(); // -> 60
beast.fight(hunter);
hunter.getHitpoints(); // -> 44

hunter.fight(beast);
beast.isAlive(); // -> false
hunter.getAttack(); // -> 11
hunter.getHitpoints(); // -> 44
hunter.heal();
hunter.getHitpoints(); // -> 49