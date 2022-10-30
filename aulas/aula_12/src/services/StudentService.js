import { collection, getDocs } from "firebase/firestore";

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
}

export default StudentService;
