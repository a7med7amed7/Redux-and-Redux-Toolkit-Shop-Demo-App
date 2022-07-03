const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        order: (state, action) => {
            state.numOfCakes -= action.payload;
        },
        restock: (state, action) => {
            state.numOfCakes += action.payload;
        },
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;