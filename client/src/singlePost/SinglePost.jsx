import './singlePost.css';
import  {useLocation} from 'react-router';
import { useContext, useEffect,useState } from 'react';
import {axiosInstance} from '../config';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [posts, setPosts] = useState([]);
    const PF = "https://ict-blogapp.herokuapp.com/images/";
    const {user} =useContext(Context);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(()=>{
        const getPost = async()=>{
            await axiosInstance.get('/posts/' + path)
            .then(res=>{
                console.log(res)
                setPosts(res.data)
                setTitle(res.data.title)
                setDesc(res.data.desc)
            })
            .catch(err=>{
                console.log(err)
            });
            
        }
        getPost()
    },[path])

    const handleDelete= async(e)=>{
        try{
            await axiosInstance.delete("/posts/"+path, {data:{username:user.username}})
            window.location.replace("/");
        }
        catch(err){
        }     
    }

    const handleUpdate = async()=>{
        try{
            await axiosInstance.put("/posts/"+path, {
                username:user.username, title, desc})
            //window.location.reload();
            setUpdateMode(false)
        }
        catch(err){
        }     
    }
    console.log(posts.username === user.username);

    return (
        <div className='singlePost'>
           <div className="singlePostWrapper">
               { posts.photo && 
              <img src={PF+posts.photo} alt="newImg1" className="singlePostImg" /> 
               }

               {updateMode ? (<input type="text" value={title} 
               className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>):( 

              <h1 className="singlePostTitle">
                  {title}
                
                { posts.username === user?.username && (
                  <div className="singlePostEdit">
                      <i className="singlePostIcon far fa-edit" onClick={()=>{setUpdateMode(true)}}></i>
                      <i className="singlePostIcon fas fa-trash" onClick={handleDelete}></i>
                      </div>
                    )}
                </h1>
            )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author : <Link to={`/?user=${posts.username}`} className="link"> <b>{posts.username}</b> </Link>
                    </span>
                    <span className="singlePostDate">{new Date(posts.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}/>):(
                <p className='singlePostDesc'>{desc}</p> )}

                {updateMode && 
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                }
                </div> 
        </div>
    );
}

export default SinglePost;