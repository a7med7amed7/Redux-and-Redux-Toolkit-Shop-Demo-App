
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/Post/Post';

type Props = {}


function Home({ }: Props) {
    const [state, setState] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPosts = async () => {
            const data: [] = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
            setState(data);
        }
        fetchPosts();
        console.log(state)
    }, [])

    return (
        <>
            <Navbar />
            <div>
                {state.map(post => <Post data={post} />)}
            </div>
        </>
    )
}

export default Home