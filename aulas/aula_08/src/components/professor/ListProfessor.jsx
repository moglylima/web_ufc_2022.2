import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const ListProfessor = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL_SERVER_PROF || "url desgrama";

  console.log(baseUrl);
  const [professors, setPorfessor] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        {
          setPorfessor(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteProfessor() {
    axios.delete(baseUrl, { data: { id: 1 } });
  }

  const generateTableBody = () => {
    return professors.map((element, index) => {
      return (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.university}</td>
          <td>{element.degree}</td>
          <td>
            <button
              style={{ margin: 5 }}
              type="button"
              className="btn btn-secondary"
            >
              Edit
            </button>
          </td>

          <td>
            <buttont
              onClick={() => deleteProfessor(element.id)}
              style={{ margin: 5 }}
              type="button"
              className="btn btn-warning"
            >
              Delete
            </buttont>
          </td>
        </tr>
      );
    });
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h1>List Professor...</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>University</th>
            <th>Degree</th>
            <th colSpan={2} style={{ textAlign: "center" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
