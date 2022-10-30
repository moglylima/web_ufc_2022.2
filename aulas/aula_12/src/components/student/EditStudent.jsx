import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_URL_STUD;

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0.0);

  const paramUrl = useParams();

  useEffect(() => {
    axios
      .get(baseUrl + paramUrl.idUrl)
      .then((response) => {
        setName(response.data.name);
        setCourse(response.data.course);
        setIra(response.data.ira);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [paramUrl.idUrl]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentUpdate = { name, course, ira };

    axios
      .put(baseUrl + paramUrl.idUrl, studentUpdate)
      .then((response) => {
        window.confirm("Set Update?");
        alert("Student updated successfully!");
        navigate("/liststudent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

export default EditStudent;
