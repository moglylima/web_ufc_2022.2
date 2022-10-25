import { firebaseConfig } from "../keys/firebaseConfig";
import initializeApp from "firebase/app";
import firestore from "firebase/firestore";

export default class Firebase {
  constructor() {
    initializeApp(firebaseConfig);
    this.db = firestore.getFirestore();
  }
  returnDb() {
    return this.db;
  }
}
