/* eslint-disable no-unreachable */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CreateStudent from "./components/student/CreateStudent";
import EditStudent from "./components/student/EditStudent";
import ListStudent from "./components/student/ListStudent";
import CreateProfessor from "./components/professor/CreateProfessor";
import EditProfessor from "./components/professor/EditProfessor";
import About from "./components/About";
import ListProfessor from "./components/professor/ListProfessor";

function App() {
  return (
    <div className="container">
      {/* NavBar */}

      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <Link to={"/"} class="navbar-brand">
            Crud
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <div
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Students
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to={"/createstudent"}>
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/liststudent"}>
                      List
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/editstudent"}>
                      Edit
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <div
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Professor
                </div>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to={"/createprofessor"}>
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/listprofessor"}>
                      List
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/editprofessor"}>
                      Edit
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routas */}

      <Routes>
        {/* Students */}
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/createstudent" element={<CreateStudent />} />
        <Route path="/editstudent" element={<EditStudent />} />
        <Route path="/liststudent" element={<ListStudent />} />

        {/* Professor */}
        <Route path="/createprofessor" element={<CreateProfessor />} />
        <Route path="/editprofessor" element={<EditProfessor />} />
        <Route path="/listprofessor" element={<ListProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
