const { createSlice } = require("@reduxjs/toolkit")
const { createAsyncThunk } = require("@reduxjs/toolkit")
const axios = require("axios")

const initialState = {
    loading: false,
    workers: [],
    error: ''
}

const fetchWorkers = createAsyncThunk("worker/fetchWorkers", () => {
    return axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res => res.data.map(worker => worker.id));
})

const workerSlice = createSlice({
    name: "worker",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchWorkers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchWorkers.fulfilled, (state, action) => {
            state.loading = false;
            state.workers = action.payload
            state.error = '';
        })
        builder.addCase(fetchWorkers.rejected, (state, action) => {
            state.loading = false;
            state.workers = []
            state.error = action.payload;
        })
    }
})

module.exports = workerSlice;
module.exports.fetchWorkers = fetchWorkers;