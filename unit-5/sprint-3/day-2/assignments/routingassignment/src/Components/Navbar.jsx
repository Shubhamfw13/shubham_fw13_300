import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home" },
  { to: "/products", title: "Products" },
  { to: "/products/:id", title: "Product Details" },
  // Fix this links array, it's an array of objects {to: "", title: ""}
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
