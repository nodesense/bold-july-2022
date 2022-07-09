// logger middleware

// es5

export function loggerMiddleware(store) {
    // called only once
    // with store, we can get state, dispatch
    // susbcribe from websocket
    return function (next) {
        // called only once
        // next is to forward action to middleware or reducers
        return function (action) {
            // called for every dispatch
            // forward action to next middleware and reducers
            console.log("LOGGER MIDDLEWARE calling next ", action)
            const result = next(action) // forward to next middleware or reducer
            console.log("LOGGER MIDDLEWARE called next ", action)
            return result;
        }
    }
}