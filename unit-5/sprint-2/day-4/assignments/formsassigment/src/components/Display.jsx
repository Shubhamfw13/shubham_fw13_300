import axios from "axios";
import { useEffect, useState } from "react";

export const Display = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(`http://localhost:3002/employees?_limit=5&_page=${page}`)
      .then((res) => {
        setData(res.data);
      });
  };

  const handeDelete = (id) => {
    const removeData = data.filter((data) => {
      return data.id !== id;
    });
    setData(removeData);
  };

  return (
    <div>
      <table>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Salary</th>
          <th>Marital State</th>
          <th>Department</th>
          <th>Remove</th>
        </tr>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.salary}</td>
              <td>{e.marital_state}</td>
              <td>{e.department}</td>
              <td>
                <button onClick={()=>{
                    handeDelete(e.id)
                }} >Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
