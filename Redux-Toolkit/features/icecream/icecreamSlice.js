const { createSlice } = require("@reduxjs/toolkit");
const { cakeActions } = require("../cake/cakeSlice");

const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        order: (state, action) => {
            state.numOfIcecream -= action.payload;
        },
        restock: (state, action) => {
            state.numOfIcecream += action.payload;
        },
    },
    // Free icecream when the user orders cake
    // extraReducers: {
    //     ['cake/order']: (state, action) => {
    //         state.numOfIcecream -= action.payload;
    //     }
    // }

    // Recommended:

    extraReducers: builders => {
        // addCase(action,reducer)
        builders.addCase(cakeActions.order, (state, action) => {
            state.numOfIcecream -= action.payload;
        })
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;