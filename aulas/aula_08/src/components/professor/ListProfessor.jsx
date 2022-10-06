import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const ListProfessor = () => {
  const baseUrl = "http://localhost:3001/professors";
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
  });

  const generateTableBody = () => {
    return professors.map((element, index) => {
      return (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.university}</td>
          <td>{element.degree}</td>
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
          </tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
