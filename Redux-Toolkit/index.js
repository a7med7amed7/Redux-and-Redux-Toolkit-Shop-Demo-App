const store = require("./app/store")
const { cakeActions } = require("./features/cake/cakeSlice")
const { icecreamActions } = require("./features/icecream/icecreamSlice")
const { fetchWorkers } = require("./features/worker/workerSlice")

console.log("Initial state ", store.getState())

const unsubscribe = store.subscribe(() => {
    // console.log("Updated state ", store.getState())
})
// store.dispatch(cakeActions.order(2))
// store.dispatch(cakeActions.order(1))
// store.dispatch(cakeActions.order(3))
// store.dispatch(cakeActions.restock(8))
// store.dispatch(icecreamActions.order(1))
// store.dispatch(icecreamActions.order(2))
// store.dispatch(icecreamActions.order(5))
// store.dispatch(icecreamActions.restock(11))
store.dispatch(fetchWorkers())
unsubscribe();