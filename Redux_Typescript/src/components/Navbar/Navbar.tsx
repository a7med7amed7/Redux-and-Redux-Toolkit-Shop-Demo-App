import React from 'react'
import { Link } from 'react-router-dom'
import store from '../../redux/store'

type Props = {}

function Navbar({ }: Props) {
    const data = store.getState().posts.posts;
    console.log(data)
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/favourite'}>Favourite</Link>
        </div>
    )
}

export default Navbar