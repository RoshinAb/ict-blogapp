import { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [cats,setCats] = useState([])

    useEffect(()=>{
        const getCats = async()=>{
            await axios.get("/categories")
            .then(res=>{
                console.log(res)
                setCats(res.data)
            }).catch(err=>{
                console.log(err)
            })
        }
        getCats()
    },[])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src='https://media.istockphoto.com/photos/young-african-woman-smiling-at-sunset-picture-id969233490?k=20&m=969233490&s=612x612&w=0&h=jXLgjbu0CIWEohHgcx_ZHBhrcH3hNKcg7TVJgehndPg='/>
                <p>When one woman helps another, amazing things can happen. Professional careers leap forward. That's what Women in Technology is all about. </p>
            </div>
            <div className='sidebarItem'>
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ) )}
                    
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                {/* <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div> */}
            </div>
        </div>
    );
}

export default Sidebar;