import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ListStudent = () => {
  const baseUrl = process.env.REACT_APP_URL_STUD;
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
  }, []);

  function deleteStudentById(id) {
    axios
      .delete(baseUrl + id)
      .then((response) => {
        alert("Student deleted successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const generateTableBody = () => {
    return students.map((element, index) => {
      return (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.course}</td>
          <td>{element.ira}</td>
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
              onClick={() => deleteStudentById(element.id)}
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
      <h1>List Student...</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>IRA</th>
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

export default ListStudent;
