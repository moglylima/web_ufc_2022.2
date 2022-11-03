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

class StudentService {
  //GET ALL STUDENTS
  static getAllStudents = (firebaseDb, callback) => {
    getDocs(collection(firebaseDb, "students")).then((querySnapshot) => {
      const studentsList = [];
      querySnapshot.forEach((doc) => {
        const idDoc = doc.id;
        const { name, course, ira } = doc.data();
        studentsList.push({ idDoc, name, course, ira });
      });
      callback(studentsList);
    });
  };

  //GET ALL STUDENTS onSnapshot
  static getAllStudentsOnSnapshot = (firebaseDb, callback) => {
    onSnapshot(collection(firebaseDb, "students"), (querySnapshot) => {
      const studentsList = [];
      querySnapshot.forEach((doc) => {
        const idDoc = doc.id;
        const { name, course, ira } = doc.data();
        studentsList.push({ idDoc, name, course, ira });
      });
      callback(studentsList);
    });
  };

  //ADD STUDENT
  static addStudent = (firebaseDb, student, callback) => {
    addDoc(collection(firebaseDb, "students"), student).then((docRef) => {
      callback(docRef.id);
    });
  };

  //DELETE STUDENT BY ID
  static deleteStudentById = (firebaseDb, idDoc, callback) => {
    deleteDoc(doc(firebaseDb, "students", idDoc)).then(() => {
      return callback(true);
    });
  };

  //UPDATE STUDENT
  static updateStudentById = (firebaseDb, idDoc, student, callback) => {
    updateDoc(doc(firebaseDb, "students", idDoc), student).then(() => {
      callback();
    });
  };

  //GET STUDENT BY ID
  static getStudentById = (firebase, idDoc, callback) => {
    getDoc(doc(firebase, "students", idDoc)).then((doc) => {
      const { name, course, ira } = doc.data();
      callback({ idDoc, name, course, ira });
    });
  };
}

export default StudentService;
