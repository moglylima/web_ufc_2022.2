import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListProfessor = () => {
  const baseUrl = process.env.REACT_APP_URL_PROF;
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

  function deleteProfessorById(id) {
    axios
      .delete(baseUrl + id)
      .then((response) => {
        alert("Professor deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const generateTableBody = () => {
    return professors.map((element, index) => {
      const idUrl = element.id;
      return (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.university}</td>
          <td>{element.degree}</td>
          <td>
            <Link
              style={{ margin: 5 }}
              className="btn btn-secondary"
              to={"/editprofessor/" + idUrl}
            >
              Edit
            </Link>
          </td>
          <td>
            <buttont
              onClick={() => deleteProfessorById(element.id)}
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
