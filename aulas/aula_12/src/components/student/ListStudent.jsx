import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../../utils/FirebaseContext";
import { StudentService } from "../../services/StudentService";

export const ListStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <ListStudent firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const ListStudent = (props) => {
  const baseUrl = process.env.REACT_APP_URL_STUD;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getAllStudentsOnSnapshot(
      props.firebase.getFirestoreDb(),
      (students) => {
        setStudents(students);
      }
    );
  }, []);

  function deleteStudentById(id) {
    if (window.confirm("Delete Student?")) {
      StudentService.deleteStudentById(props.firebase.getFirestoreDb(), id);
      const studentAux = students.filter((student) => student.id !== id);
      setStudents(studentAux);
      alert("Student deleted successfully!");
    }
  }

  const generateTableBody = () => {
    return students.map((element, index) => {
      const idUrl = element.id;
      return (
        <tr key={index}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.course}</td>
          <td>{element.ira}</td>
          <td>
            <Link
              to={"/editstudent/" + idUrl}
              style={{ margin: 5 }}
              type="button"
              className="btn btn-secondary"
            >
              Edit
            </Link>
          </td>

          <td>
            <button
              onClick={() => deleteStudentById(element.id)}
              style={{ margin: 5 }}
              type="button"
              className="btn btn-warning"
            >
              Delete
            </button>
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

export default ListStudentPage;
