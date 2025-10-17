import { Logo_url } from "../utility/url";
 const Header =()=>{
    return (
        <div className="header">
         <img className="logo-img" src={Logo_url} alt="logo" />
         <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Resturant</li>
                <li>Logout</li>
            </ul>
         </div> 
        </div>
    );
 };
 export default Header;