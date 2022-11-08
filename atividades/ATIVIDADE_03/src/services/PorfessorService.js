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

class ProfessorService {
  //GET ALL PROFESSOR ONSNAPSHOT
  static getAllProfessorsOnSnapshot = (firebaseDb, callback) => {
    onSnapshot(collection(firebaseDb, "professors"), (querySnapshot) => {
      const professorList = [];
      querySnapshot.forEach((doc) => {
        const idDoc = doc.id;
        const { name, course, ira } = doc.data();
        professorList.push({ idDoc, name, course, ira });
      });
      callback(professorList);
    });
  };

  //GET ALL PROFESSOR
  static getAllProfessors = (firebaseDb, callback) => {
    getDocs(collection(firebaseDb, "Professors")).then((querySnapshot) => {
      const professorsList = [];
      querySnapshot.forEach((doc) => {
        const idDoc = doc.id;
        const { name, course, ira } = doc.data();
        professorsList.push({ idDoc, name, course, ira });
      });
      callback(professorsList);
    });
  };

  //ADD PROFESSOR
  static addProfessor = (firebaseDb, professor, callback) => {
    addDoc(collection(firebaseDb, "professors"), professor)
      .then((docRef) => {
        callback(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  //RETRIEVE PROFESSOR
  static retrieveById = (firebaseDb, id, callback) => {
    const docRef = doc(firebaseDb, "professors", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        const { name, course, ira } = doc.data();
        callback({ id, name, course, ira });
      } else {
        console.log("No such document!");
      }
    });
  };

  //UPDATE PROFESSOR BY ID
  static updateProfessorById = (firebaseDb, id, professor, callback) => {
    const docRef = doc(firebaseDb, "professors", id);
    updateDoc(docRef, professor)
      .then(() => {
        callback(professor);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  //DELETE PROFESSOR BY ID
  static deleteProfessorById = (firebaseDb, id, callback) => {
    const docRef = doc(firebaseDb, "Professors", id);
    deleteDoc(docRef)
      .then(() => {
        callback();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
}

export default ProfessorService;
