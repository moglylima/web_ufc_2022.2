import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProfessorService from "../../services/PorfessorService";
import { FirebaseContext } from "../../utils/FirebaseContext";

const ListProfessorPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <ListProfessor firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const ListProfessor = (props) => {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    ProfessorService.getAllProfessorsOnSnapshot(
      props.firebase.getFirestoreDb(),
      (professors) => {
        setProfessors(professors);
      }
    );
  }, []);

  function deleteProfessorById(id) {
    window.confirm("Are you sure you want to delete this professor?")
      ? ProfessorService.deleteProfessorById(
          props.firebase.getFirestoreDb(),
          id,
          () => {
            alert(`Professor deleted successfully! -> ${id}`);
            setProfessors(
              professors.filter((professor) => professor.idDoc !== id)
            );
          }
        )
      : alert("Professor not deleted!");
  }

  const generateTableBody = () => {
    return professors.map((element, index) => {
      const idUrl = element.idDoc;
      return (
        <tr key={index}>
          <td>{element.idDoc}</td>
          <td>{element.name}</td>
          <td>{element.course}</td>
          <td>{element.salary}</td>
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
            <button
              onClick={() => deleteProfessorById(idUrl)}
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
      <h1>List Professor...</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Salary</th>
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

export default ListProfessorPage;
