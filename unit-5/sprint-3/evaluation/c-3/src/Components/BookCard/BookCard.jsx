import { Link } from "react-router-dom";
import styled from "styled-components";
import "./BookCard.css"

export const BookCard = ( {id, imageUrl, title, price, section} ) => {
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  return <>
  <div className="bookCard">
    <img src={imageUrl} alt="Kuch nahi" className="image" />
    <h2 className="title"><strong>Title: </strong>{title}</h2>
    <p className="price"><strong>Price: </strong> ₹{price}</p>
    <p><strong>Section: </strong>{section}</p>
  </div>
  </>
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};
