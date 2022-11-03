import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { FirebaseContext } from "../../utils/FirebaseContext";

const EditStudentPage = () => {
  return (
    <FirebaseContext.Consumer>
      {(value) => <EditStudent firebase={value} />}
    </FirebaseContext.Consumer>
  );
};

const EditStudent = (props) => {
  const navigate = useNavigate();
  const { idUrl } = useParams();
  console.log("id: ", idUrl);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0.0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentUpdate = { name, course, ira };
    StudentService.updateStudentById(
      props.firebase.getFirestoreDb(),
      studentUpdate
    );
  };

  useEffect(() => {
    StudentService.getStudentById(
      props.firebase.getFirestoreDb(),
      idUrl,
      (student) => {
        setName(student.name);
        setCourse(student.course);
        setIra(student.ira);
      }
    );
  }, []);
  return (
    <div>
      <h1>Edit Student</h1>

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
          <label>University: </label>
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
          <label>IRA: </label>
          <input
            value={ira ?? ""}
            type="numeric"
            max={0}
            min={10}
            className="form-control"
            placeholder="Digite IRA"
            onChange={(event) => {
              setIra(event.target.value);
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

export default EditStudentPage;
