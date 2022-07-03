const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit")
const cakeReducer = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/icecreamSlice");
const workerReducer = require("../features/worker/workerSlice")
const { logger } = require("./middlewares");

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        worker: workerReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;