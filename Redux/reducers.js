const types = require("./types")
const { produce } = require("immer")
const states = require("./states")
const { combineReducers } = require("redux")
const reducers = {
    cakeReducer: (prevStete = states.initialCakeState, action) => {
        switch (action.type) {
            case types.CAKE_ORDERED:
                // return {
                //     ...prevStete,
                //     numOfCakes: prevStete.numOfCakes - action.payload
                // }
                return produce(prevStete, draftState => {
                    draftState.numOfCakes = draftState.numOfCakes - action.payload
                })
            case types.CAKE_RESTOCK:
                return {
                    ...prevStete,
                    numOfCakes: prevStete.numOfCakes + action.payload
                }
            default:
                return prevStete;
        }
    },
    iceCreamReducer: (prevStete = states.initialIceCreamState, action) => {
        switch (action.type) {
            case types.ICECREAM_ORDERED:
                return {
                    ...prevStete,
                    numOfIceCreams: prevStete.numOfIceCreams - action.payload
                }
            case types.ICECREAM_RESTOCK:
                return {
                    ...prevStete,
                    numOfIceCreams: prevStete.numOfIceCreams + action.payload
                }
            default:
                return prevStete;
        }
    }

}

module.exports = combineReducers({
    cakeReducer: reducers.cakeReducer,
    iceCreamReducer: reducers.iceCreamReducer,
});