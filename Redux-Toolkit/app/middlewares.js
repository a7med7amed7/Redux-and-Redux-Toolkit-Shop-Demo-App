const { createLogger } = require("redux-logger")
const logger = createLogger();

const middlewares = {
    logger,
}

module.exports = middlewares;