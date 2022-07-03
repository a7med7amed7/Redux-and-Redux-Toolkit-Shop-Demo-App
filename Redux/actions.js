const types = require("./types")
const actions = {
    orderCake: (q = 1) => {
        return {
            type: types.CAKE_ORDERED,
            payload: q
        }
    },
    restockCake: (q) => {
        return {
            type: types.CAKE_RESTOCK,
            payload: q
        }
    },
    orderIceCream: (q = 1) => {
        return {
            type: types.ICECREAM_ORDERED,
            payload: q
        }
    },
    restockIceCream: (q) => {
        return {
            type: types.ICECREAM_RESTOCK,
            payload: q
        }
    }

}


module.exports = actions;