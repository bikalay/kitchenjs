const Food = require("../food/food");

class Knife {
    /**
     * Нарезает твердые продукты
     * @param {Food} food - продукт
     * @returns {Food}
     */
    chop(food) {
        if(food.consistence !== Food.CONSISTENCE.SOLID) {
            console.warn('Действие не возимело эффект: Вы пробовали нарезать не твердый продукт');
        } else if (food.state.indexOf(Food.STATE.CUT) > 0) {
                food.consistence = Food.CONSISTENCE.BULK;
        } else  {
            food.state.push(Food.STATE.CUT);
        }
        return food;
    }
}