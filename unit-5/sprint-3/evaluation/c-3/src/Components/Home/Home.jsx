import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css"
export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios.get("http://localhost:8080/books").then((res) => {
      setData(res.data);
    });
  }

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    grid-gap : 50px;
   

  `;

  function Sort(param){
    let temp;
    if(param === "AT"){
     temp = data.sort((a, b)=>{
       return  a.title.localeCompare(b.title);
      })
    }
    if(param === "DT"){
      temp = data.sort((a, b)=>{
       return  b.title.localeCompare(a.title);
      })
    }
    if(param === "AP"){
      temp = data.sort((a, b)=>{
       return  a.price - b.price
      })
    }if(param === "DP"){
     temp =  data.sort((a, b)=>{
       return  b.price - a.price
      })
    }
    setData([...temp])
  }




  return (
    <div className="homeContainer">
      <h1 style={{ textAlign: "center" }}>Home</h1>
      <span className="sort">Sort By</span>
      <SortAndFilterButtons 
        handleSort={
          Sort
        }
      />

      <Main className="mainContainer">
        {data.map((e) => 
        <div key={e.id}>
          <Link to={`/bookDetails/${e.id}`} className='text-link'>
          <BookCard            
            id={e.id}
            imageUrl={e.imageUrl}
            title={e.title}
            price={e.price}
            section={e.section}
          >
            </BookCard>
            </Link>
          </div>
        )}
      </Main>
    </div>
  );
};
