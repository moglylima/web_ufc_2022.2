import React, { useState } from "react";
import { professorList } from "./data";

const ListProfessor = () => {
  const [professors, setPorfessor] = useState(professorList);

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
