import "./topbar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../context/Context";

function TopBar() {
    const {user,dispatch} = useContext(Context);
    const PF = "https://ict-blogapp.herokuapp.com/images/"

    const handleLogout=()=>(
        dispatch({type:"LOGOUT"})
    )
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to='/'>HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to='/'>ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to='/'>CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to='/write'>WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {/* <Link className="link" to='/'>LOGOUT</Link> */}
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user? (<Link to="/settings"><img className="topImg" src={PF+user.profilePic} alt="myImage"/></Link>)
                :(<ul className="topList">
                    <li className="topListItem"> <Link className="link" to='/login'>LOGIN</Link> </li>
                    <li className="topListItem"> <Link className="link" to='/register'>REGISTER</Link> </li>
                </ul>)
               }

                {/* <ul className="topList">
                    <li className="topListItem"> <Link className="link" to='/login'>LOGIN</Link> </li>
                    <li className="topListItem"> <Link className="link" to='/register'>REGISTER</Link> </li>
                </ul>   */}

                {/* <img className="topImg" src="https://media.istockphoto.com/photos/portrait-of-young-woman-with-curly-hair-in-the-city-picture-id1218228957?k=20&m=1218228957&s=612x612&w=0&h=1ExWthh3l9yXX6IiW_c8uX1KkSo2-AXlRqPXbElvh6k=" alt="myImage"/> */}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}

export default TopBar;