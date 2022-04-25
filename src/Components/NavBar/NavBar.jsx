




const NavBar = (props) => {
    return ( 
        <div className="containerNav">
            <h2>
                Social<small className="text-muted">Feed</small>
             </h2>

            <div className="smallNav">
                <h4 className="home">Home</h4>
                <h4 className="postNav">Posts</h4>
                <h4 className="contactUs">Contact Us</h4>
                <h4 className="profile">Profile</h4>
            </div>
        </div>
     );
}
 
export default NavBar;