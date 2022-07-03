import { createSlice, isDraft } from "@reduxjs/toolkit"

type p = {

    title: string
    id: number
    userId: number
    body: string
}[]

export const slice = createSlice({
    name: "data",
    initialState: {
        posts: p[],
        ids: [],
        pending: false,
        error: false
    },
    reducers: {
        fetchStart: (state) => {
            state.pending = true;
        },
        fetchSuccess: (state, action) => {
            state.pending = false;
            state.posts.push(action.payload)
            state.ids.push(action.payload.id)
        },
        fetchFailure: (state, action) => {
            state.pending = false;
            const i1 = state.posts.indexOf(action.payload);
            if (i1 > -1) state.posts.splice(i1, 1)
        }
    }
})

export const { fetchFailure, fetchStart, fetchSuccess } = slice.actions;
export default slice.reducer;