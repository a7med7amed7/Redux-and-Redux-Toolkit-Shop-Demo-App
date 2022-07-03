import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./post.css"
import { fetchFailure, fetchSuccess } from "../../redux/slice"
import store from '../../redux/store'
type Props = {
    data: {
        title: string
        id: number
        userId: number
        body: string
    }
}

function Post({ data }: Props) {
    const [hidden, setHidden] = useState(false);
    const dispatch = useDispatch();
    const addHandler = () => {
        const posts = store.getState().posts.posts;
        const ids = store.getState().posts.ids;
        if (posts != null && !ids.includes(data.id)) {

            dispatch(fetchSuccess({ ...data }))
            setHidden(true)
        }

        console.log("Done")
    }
    // const x = store.getState().posts.posts.includes(data);
    // console.log(x)
    return (
        <>
            {hidden ? "" :
                <div className='post'>
                    <div className="userData">
                        <div className="title">{data.title}</div>
                    </div>
                    <div className="body">{data.body}</div>
                    <button onClick={addHandler}>
                        ADD            </button>
                </div>}
        </>
    )
}

export default Post