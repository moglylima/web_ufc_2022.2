import { firebaseConfig } from "../keys/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

export default class Firebase {
  constructor() {
    initializeApp(firebaseConfig);
    this.db = getFirestore();
  }
  returnDb() {
    return this.db;
  }
}
