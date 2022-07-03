import React from 'react'
import store from '../../redux/store'

type item = {

    title: string
    id: number
    userId: number
    body: string
}

function Favourite() {
    const data = store.getState().posts.posts;
    return (
        <div>
            {data.map(item => <div className='post'>{item.title}</div>)}
        </div>
    )
}

export default Favourite