import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ListStudent = () => {
  const baseUrl = "http://localhost:3001/students";
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        {
          setStudents(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const generateTableBody = () => {
    return students.map((element, index) => {
      return (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.course}</td>
          <td>{element.ira}</td>
        </tr>
      );
    });
  };
  return (
    <div style={{ marginTop: 20 }}>
      <h1>List Student...</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
          </tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </table>
    </div>
  );
};

export default ListStudent;
