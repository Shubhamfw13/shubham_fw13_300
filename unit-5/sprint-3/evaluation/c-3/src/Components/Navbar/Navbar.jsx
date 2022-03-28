import { Link } from "react-router-dom";

const links = [{ to: "/", title: "Home" }, { to: "/books", title: "Books" }, { to: "/books/:id", title: "Book Details" },{
  to : "/section", title : "Section"}]
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <>
          <div style={{ display: "flex", justifyContent: 'center' }}>
            {links.map((e) => {
              return (
                <Link key={e.to} style={{ padding: '10px' }} to={e.to}>
                  {e.title}
                </Link>
              )
            })}

          </div>
        </>

        {/* Populate 5 buttons with EXACT\ same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}

      </div>
    </>
  );
};
