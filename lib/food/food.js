/**
 * Абстрактный класс еды
 * @abstract
 */
class Food {
    /**
     * Консистенция
     * @type {{VISCOUS: number, FLUID: number, SOLID: number, BULK: number}}
     */
    static CONSISTENCE = {
        /**
         * Твердый
         */
        SOLID: 0,
        /**
         * Жидкий
         */
        FLUID: 1,
        /**
         * Густой
         */
        VISCOUS: 2,
        /**
         * Сыпучий
         */
        BULK: 3,
    };

    /**
     * Состояние (целый|нарезанный|взбитый.. )
     * @type {{WHIPPED: number, CUT: number, BOILED: number, GRATED: number, WHOLE: number, FRIED: number}}
     */
    static STATE = {
        /**
         * Целый
         */
        WHOLE: 0,
        /**
         * Порезанный
         */
        CUT: 1,
        /**
         * Взбитый
         */
        WHIPPED: 2,
        /**
         * Вареный
         */
        BOILED: 3,
        /**
         * Жаренный
         */
        FRIED: 4,
        /**
         * Тертый
         */
        GRATED: 5
    };

    /**
     * @param {Date} expirationDate - срок годности
     * @param {number} consistence - консистенция ()
     */
    constructor(expirationDate, consistence) {
        if (new.target === Food) {
            throw new TypeError("Нельзя создавать абстрактный класс еда");
        }
        /**
         * Срок годности
         * @type {Date}
         */
        this.expirationDate = expirationDate;
        /**
         * Консистенция
         * @type {number}
         */
        this.consistence = consistence;
        /**
         * Состояние продукта
         * @type {Array<number>}
         */
        this.state = [];
    }
}

module.exports = Food;