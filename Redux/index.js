const redux = require("redux")
const types = require("./types")
const reducers = require("./reducers")
const actions = require("./actions")
const reduxLogger = require("redux-logger");
const { fetchWorkersLoading, fetchWorkersSuccess, fetchWorkersFailure } = require("./actions");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default


const fetchWorkers = () => {
    return dispatch => {
        dispatch(fetchWorkersLoading());
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log("HI")
                const workers = res.data.map(u => u.id);
                dispatch(fetchWorkersSuccess(workers))
            })
            .catch(err => {
                dispatch(fetchWorkersFailure(err.message))
            })
    }
}
const logger = reduxLogger.createLogger();
const store = redux.createStore(reducers, redux.applyMiddleware(logger));
console.log("Initial state ", store.getState())


const unsubscribe = store.subscribe(() => {
    // console.log("Updated State ", store.getState())
})


// store.dispatch(actions.orderCake())
// store.dispatch(actions.orderCake())
// store.dispatch(actions.orderCake())
// store.dispatch(actions.restckCake(5))

const bindedActions = redux.bindActionCreators(actions, store.dispatch)
bindedActions.restockCake(12);
bindedActions.orderCake();
bindedActions.orderCake();
bindedActions.orderCake();
bindedActions.restockCake(3);
bindedActions.restockIceCream(25);
bindedActions.orderIceCream();
bindedActions.orderIceCream(2);
bindedActions.orderIceCream();
unsubscribe();