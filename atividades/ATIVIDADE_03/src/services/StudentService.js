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
  //GET ALL STUDENTS ONSNAPSHOT
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

  //UPDATE STUDENT BY ID
  static updateStudentById = (firebaseDb, id, student, callback) => {
    const docRef = doc(firebaseDb, "students", id);
    updateDoc(docRef, student)
      .then(() => {
        callback(student);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  //DELETE STUDENT BY ID
  static deleteStudentById = (firebaseDb, id, callback) => {
    const docRef = doc(firebaseDb, "students", id);
    deleteDoc(docRef)
      .then(() => {
        callback();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
}

export default StudentService;
