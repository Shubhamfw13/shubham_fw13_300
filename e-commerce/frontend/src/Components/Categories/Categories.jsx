import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px 20px;
  margin-top: 50px;
  justify-content: space-between;
  display: flex;
`;
const Men = styled.div`
  padding: 10px 20px;
  flex: 1;
`;
const Poster = styled.img`
  height: 100%;
  width: 100%;
`;
const Women = styled.div`
  padding: 10px 20px;
  flex: 1;
`;

export const Categories = () => {
  const navigate = useNavigate()  

  return (
    <Container>
      <Men>
        <Poster onClick={()=>{navigate("/mencategories")}} src="https://media.gq-magazine.co.uk/photos/5d139b4e2881ccd4040a86d5/1:1/w_1170,h_1170,c_limit/tom-hardy-legend-GQ-01May15_pr_b.jpg" />
      </Men>
      <Women>
        <Poster onClick={()=>{navigate("/womencategories")}} src="https://i2-prod.birminghammail.co.uk/incoming/article11389750.ece/ALTERNATES/s1200b/JS91109879.jpg" />
      </Women>
    </Container>
  );
};
