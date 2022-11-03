import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";

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

  //ADD STUDENT
  static addStudent = (firebaseDb, student, callback) => {
    addDoc(collection(firebaseDb, "students"), student)
      .then((docRef) => {
        callback(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  //RETRIEVE STUDENT
  static retrieveById = (firebaseDb, id, callback) => {
    const docRef = doc(firebaseDb, "students", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        const { name, course, ira } = doc.data();
        callback({ id, name, course, ira });
      } else {
        console.log("No such document!");
      }
    });
  };


}

export default StudentService;
