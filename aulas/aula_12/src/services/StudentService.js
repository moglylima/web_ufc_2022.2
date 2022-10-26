import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useCallback } from "react";

class StudentService {
  //Get all students
  static getAllStudents = (db, callback) => {
    getDocs(collection(db, "students"))
      .then((queryAllStudents) => {
        const studentsList = [];
        queryAllStudents.forEach((doc) => {
          const id = doc.id;
          const { name, course, ira } = doc.data();
          studentsList.push({ id, name, course, ira });
        });
        callback(studentsList);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  //Get  Students by id
  static getStudentById = (db, id, callback) => {
    getDoc(doc(db, "students", id))
      .then((doc) => {
        if (doc.exists()) {
          const { name, course, ira } = doc.data();
          callback({ id, name, course, ira });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };
  //Buscando estudantes usando onSnapshot
  static getAllStudentsOnSnapshot = (db, callback) => {
    onSnapshot(collection(db, "students"), (queryAllStudents) => {
      const studentsListSnapshot = [];
      queryAllStudents.forEach((doc) => {
        const id = doc.id;
        const { name, course, ira } = doc.data();
        studentsListSnapshot.push({ id, name, course, ira });
      });
      callback(studentsListSnapshot);
    });
  };

  //Adicionando estudantes
  static addStudent = (db, student, callback) => {
    const { name, course, ira } = student;
    const newStudent = { name, course, ira };

    addDoc(collection(db, "students"), newStudent)
      .then((docRef) => {
        callback(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  //Removendo estudante pelo id
  static deleteStudentById = (db, id, callback) => {
    deleteDoc(doc(db, "students", id))
      .then(() => {
        callback();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  //Editando estudante pelo id
  static editStudentById = (db, id, student, callback) => {
    const { name, course, ira } = student;
    const updateStudent = { name, course, ira };
    updateDoc(doc(db, "students", id), updateStudent)
      .then(() => {
        callback();
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };
}

export { StudentService };
