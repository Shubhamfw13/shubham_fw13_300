import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <Link to={"/"} className={"home"}><button>home</button></Link>
        <Link to={"/section/history"}><button className="history">History</button></Link>
        <Link to={"/section/mystery"}><button className="mystery">Mystery</button></Link>
        <Link to={"/section/technology"}><button className="technology">Technology</button></Link>
        <Link to={"/section/mythology"}><button className="mythology">Mythology</button></Link>
      </div>
    </>
  );
};
