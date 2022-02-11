import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?b=1&k=20&m=1268487061&s=170667a&w=0&h=3fHYwaImlqUETcjCnSV7YO2-PzCFvaX6VSQaiGfWqpc=" alt=""/>
        </div>
    );
}

export default Header;