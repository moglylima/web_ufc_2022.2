import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { FirebaseContext } from "../../utils/FirebaseContext";

const ListStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <ListStudent firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const ListStudent = (props) => {
  const [students, setStudents] = useState([]);

  //Buscando os dados do Firebase
  useEffect(() => {
    StudentService.getAllStudentsOnSnapshot(
      props.firebase.getFirestoreDb(),
      (students) => {
        setStudents(students);
      }
    );
  }, []);

  function deleteStudentById(id) {
    window.confirm("Are you sure you want to delete this student?")
      ? StudentService.deleteStudentById(
          props.firebase.getFirestoreDb(),
          id,
          () => {
            alert(`Student deleted successfully! -> ${id}`);
            setStudents(students.filter((student) => student.idDoc !== id));
          }
        )
      : alert("Student not deleted!");
  }

  const generateTableBody = () => {
    return students.map((element, index) => {
      return (
        <tr key={index}>
          <td>{element.idDoc}</td>
          <td>{element.name}</td>
          <td>{element.course}</td>
          <td>{element.ira}</td>
          <td>
            <Link
              to={"/editstudent/" + element.idDoc}
              style={{ margin: 5 }}
              type="button"
              className="btn btn-secondary"
            >
              Edit
            </Link>
          </td>

          <td>
            <button
              onClick={() => deleteStudentById(element.idDoc)}
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
