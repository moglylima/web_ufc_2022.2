import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProfessorService from "../../services/PorfessorService";
import { FirebaseContext } from "../../utils/FirebaseContext";

const EditProfessorPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <EditProfessor firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const EditProfessor = (props) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [salary, setSalary] = useState(0.0);
  const { idUrl } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentUpdate = { name, course, salary };
    ProfessorService.updateProfessorById(
      props.firebase.getFirestoreDb(),
      idUrl,
      studentUpdate,
      (doc) => {
        const { name, course, salary } = doc;
        alert(
          `Student updated successfully! -> ${name} - ${course} - ${salary}`
        );
        navigate("/listprofessor");
      }
    );
  };

  useEffect(() => {
    ProfessorService.retrieveById(
      props.firebase.getFirestoreDb(),
      idUrl,
      (student) => {
        setName(student.name);
        setCourse(student.course);
        setSalary(student.salary);
      }
    );
  }, [idUrl]);

  return (
    <div>
      <h1>Edit Professor</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            value={name ?? ""}
            type="text"
            className="form-control"
            placeholder="Digite nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Course: </label>
          <input
            value={course ?? ""}
            type="text"
            className="form-control"
            placeholder="Digite curso"
            onChange={(event) => {
              setCourse(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Salary: </label>
          <input
            value={salary ?? 0.0}
            type="number"
            className="form-control"
            placeholder="Digite Salary"
            onChange={(event) => {
              setSalary(event.target.value);
            }}
          />
        </div>
        <div className="form-group" style={{ marginTop: 15 }}>
          <input
            type="submit"
            value="Apply Changes"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessorPage;
