import "./home.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import { useEffect, useState } from "react";
import {axiosInstance} from '../../config';
import { useLocation } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation()

    useEffect(()=>{
        const fetchPosts = async()=>{
            await axiosInstance.get("/posts"+search)
            .then(res=>{
                console.log(res)
                setPosts(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchPosts()
    },[search])

    return (    
        <>
        <div className="home">
           <Header/> 
           <Posts posts={posts}/>
           {/* <Sidebar/> */}
        </div>
        </>
    );
}

export default Home;