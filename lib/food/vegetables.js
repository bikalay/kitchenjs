const Food = require('./food');

/**
 * Абстрактный класс овоща
 * @abstract
 */
class Vegetable extends Food {
    /**
     * @param {Date} expirationDate - срок годности
     * @param {string} name - название овоща
     */
    constructor(expirationDate, name) {
        super(expirationDate, Food.CONSISTENCE.SOLID);
        if (new.target === Vegetable) {
            throw new TypeError("Нельзя создавать абстрактный овощ");
        }
        this.name = name;
    }
}