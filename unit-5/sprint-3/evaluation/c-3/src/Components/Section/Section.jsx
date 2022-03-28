import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {

  const { section } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios.get("http://localhost:8080/books").then((res) => {
      setData(res.data);
    });
  }

  console.log(section)

  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
    display : grid;
    grid-template-columns : repeat(3, 1fr);
    grid-gap : 50px;
    width : 80%;
    margin : auto;
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {section}
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="sectionContainer">
        {data.map((e) => {
          return (e.section === section) ?
            <BookCard
              key={e.id}
              id={e.id}
              imageUrl={e.imageUrl}
              title={e.title}
              price={e.price}
              section={e.section}
            /> : ""
        }
        )}
      </Main>
    </>
  );
};
