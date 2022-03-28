import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./BookDetailsPage.css"

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const[book, setBook] = useState({});
  const[reviews, setReview] = useState([]);
  let {id} = useParams();
  id = +id
  console.log(id)
  useEffect(()=>{
    getData()
  }, [])

  function getData(){
    axios.get(`http://localhost:8080/books/${id}`).then((res)=>{
      setBook(res.data)
      setReview(res.data.reviews)
    })
  }

  return (
    <>
      <div className="bookContainer">
        <img className="image" src={book.imageUrl} alt="#" height={"210px"} width={"380px"} />
        <h2 className="title"><strong>Title: </strong>{book.title}</h2>
        <div className="author"><strong>Author: </strong>{book.author}</div>
        <div className="description"><strong>Description: </strong> {book.description}</div>
        <div className="price"><strong>Price:</strong> ₹{book.price}</div>
        <div className="section"><strong>Section:</strong> {book.section}</div>
        <div className="isbnNumber"><strong>Book No.</strong> {book.id}</div>
        <ul className="reviews">{}
        {reviews.map((e, index)=>
          <li key={index}>{e.review}</li>
        )}
        </ul>
      </div>
    </>
  );
};
